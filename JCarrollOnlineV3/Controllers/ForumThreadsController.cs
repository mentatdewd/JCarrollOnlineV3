using JCarrollOnlineV3.Data;
using JCarrollOnlineV3.Models;
using JCarrollOnlineV3.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using Omu.ValueInjecter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace JCarrollOnlineV3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForumThreadsController : ControllerBase
    {
        private readonly JCarrollOnlineV3DbContext _context;

        public ForumThreadsController(JCarrollOnlineV3DbContext context)
        {
            _context = context;
        }

        // GET: api/ForumThread/5
        [HttpGet("{forumId}")]
        public async Task<ActionResult<ForumThreadEntriesViewModel>> GetThreadEntry(int forumId)
        {
            Forum currentForum = await _context.Fora.Include(a => a.ForumThreadEntries).ThenInclude(te => te.Author).FirstOrDefaultAsync(f => f.Id == forumId);
            List<ForumThreadEntry> forumThreadEntries = new List<ForumThreadEntry>();

            // Create the view model
            foreach (ThreadEntry threadEntry in currentForum.ForumThreadEntries)
            {
                ForumThreadEntry forumThreadEntry = new ForumThreadEntry();

                forumThreadEntry.InjectFrom(threadEntry);

                forumThreadEntry.Author = threadEntry.Author.UserName;

                forumThreadEntry.Replies = currentForum.ForumThreadEntries.Where(forumThreadEntry => forumThreadEntry.RootId == threadEntry.Id && forumThreadEntry.ParentId != null).Count();
                forumThreadEntry.LastReply = currentForum.ForumThreadEntries.Where(m => m.RootId == threadEntry.Id).OrderBy(m => m.UpdatedAt.ToFileTime()).FirstOrDefault().UpdatedAt;
                forumThreadEntries.Add(forumThreadEntry);
            }

            ForumThreadEntriesViewModel forumThreadEntriesViewModel = new ForumThreadEntriesViewModel();

            forumThreadEntriesViewModel.ForumTitle = currentForum.Title;
            forumThreadEntriesViewModel.ForumThreadEntries = forumThreadEntries.ToArray();

            return forumThreadEntriesViewModel;
        }

        // PUT: api/ForumThread/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutThreadEntry(int id, ThreadEntry threadEntry)
        {
            if (id != threadEntry.Id)
            {
                return BadRequest();
            }

            _context.Entry(threadEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreadEntryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ForumThread
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ThreadEntryViewModel>> PostThreadEntry([FromBody] ThreadEntryViewModel threadEntryViewModel)
        {
            ThreadEntry threadEntry = new ThreadEntry();

            if (ModelState.IsValid)
            {

                int rootId;
                int forumId;
                
                if(int.TryParse(threadEntryViewModel.ParentThreadId, out rootId))
                {
                    threadEntry.RootId = rootId;
                }

                if (int.TryParse(threadEntryViewModel.ForumId, out forumId))
                {
                    threadEntry.Forum = await _context.Fora.FirstOrDefaultAsync(f => f.Id == forumId);
                }

                threadEntry.InjectFrom(threadEntryViewModel);

                threadEntry.CreatedAt = DateTime.Now;
                threadEntry.UpdatedAt = DateTime.Now;

                string currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                ApplicationUser currentUser = await _context.Users.FirstOrDefaultAsync(x => x.Id == currentUserId).ConfigureAwait(false);

                threadEntry.Author = currentUser;
                if (threadEntryViewModel != null)
                {
                    threadEntry.Forum = _context.Fora.Find(Int32.Parse(threadEntryViewModel.ForumId));
                }
                threadEntry.PostNumber = threadEntryViewModel.ParentThreadId != null
                    ? await _context.ForumThreadEntrys.Where(m => m.RootId == threadEntry.RootId).CountAsync().ConfigureAwait(false) + 1
                    : 1;

                _context.ForumThreadEntrys.Add(threadEntry);

                try
                {
                    await _context.SaveChangesAsync().ConfigureAwait(false);
                }
                catch(DbUpdateException exception)
                {
                    Console.WriteLine($"SaveChangesAsync threw an exception Message: {exception.Message}");
                }

                if (threadEntry.ParentId == null)
                {
                    threadEntry.UpdatedAt = threadEntry.CreatedAt;
                    threadEntry.RootId = threadEntry.Id;
                    await _context.SaveChangesAsync().ConfigureAwait(false);
                }
            }

            return threadEntryViewModel;
        }

        // DELETE: api/ForumThread/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ThreadEntry>> DeleteThreadEntry(int id)
        {
            ThreadEntry threadEntry = await _context.ForumThreadEntrys.FindAsync(id);
            if (threadEntry == null)
            {
                return NotFound();
            }

            _context.ForumThreadEntrys.Remove(threadEntry);
            await _context.SaveChangesAsync();

            return threadEntry;
        }

        private bool ThreadEntryExists(int id)
        {
            return _context.ForumThreadEntrys.Any(e => e.Id == id);
        }
    }
}
