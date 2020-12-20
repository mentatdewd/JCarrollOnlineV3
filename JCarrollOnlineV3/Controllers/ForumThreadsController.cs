using JCarrollOnlineV3.Data;
using JCarrollOnlineV3.Models;
using JCarrollOnlineV3.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Omu.ValueInjecter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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
        [HttpGet("{rootId}/{parentId?}")]
        public async Task<ActionResult<ThreadEntryViewModel[]>> GetThread(int rootId, int? parentId)
        {
            List<ThreadEntryViewModel> forumThreadEntries = new List<ThreadEntryViewModel>();

            ThreadEntry[] currentThread = await _context.ForumThreadEntrys.Where(cf => cf.Root.Id == rootId).Include(te => te.Author).Include(f => f.Forum).ToArrayAsync();

            // Create the view model
            foreach (ThreadEntry threadEntry in currentThread)
            {
                ThreadEntryViewModel forumThreadEntry = new ThreadEntryViewModel();

                forumThreadEntry.InjectFrom(threadEntry);
                forumThreadEntry.ForumTitle = threadEntry.Forum.Title;
                forumThreadEntry.Author = threadEntry.Author.UserName;


                forumThreadEntry.Replies = currentThread.Where(forumThreadEntry => forumThreadEntry.Root.Id == threadEntry.Id && forumThreadEntry.Parent != null).Count();
                forumThreadEntry.LastReply = currentThread.Where(m => m.Root.Id == threadEntry.Id).OrderBy(m => m.UpdatedAt.ToFileTime()).FirstOrDefault().UpdatedAt;
                if(forumThreadEntry.Children == null)
                {
                    forumThreadEntry.Children = new List<ThreadEntryViewModel>().ToArray();
                }

                forumThreadEntries.Add(forumThreadEntry);
            }

            return forumThreadEntries.ToArray();
        }

        // PUT: api/ForumThread/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutThreadEntry(int id, Models.ThreadEntry threadEntry)
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
        public async Task<ActionResult<ViewModels.ThreadEntryViewModel>> PostThreadEntry([FromBody] ViewModels.ThreadEntryViewModel threadEntryViewModel)
        {
            ThreadEntry threadEntry = new ThreadEntry();

            if (ModelState.IsValid)
            {

                int parentId;
                int rootId;

                if (int.TryParse(threadEntryViewModel.RootId, out rootId))
                {
                    threadEntry.Root = await _context.ForumThreadEntrys.FirstOrDefaultAsync(fte => fte.Id == rootId);
                }

                if (int.TryParse(threadEntryViewModel.ParentThreadId, out parentId))
                {
                    threadEntry.Parent = await _context.ForumThreadEntrys.FirstOrDefaultAsync(fte => fte.Id == parentId);
                }

                string currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                ApplicationUser currentUser = await _context.Users.FirstOrDefaultAsync(x => x.Id == currentUserId).ConfigureAwait(false);

                threadEntry.Author = currentUser;

                threadEntry.InjectFrom(threadEntryViewModel);

                threadEntry.CreatedAt = DateTime.Now;
                threadEntry.UpdatedAt = DateTime.Now;

                threadEntry.PostNumber = threadEntryViewModel.ParentThreadId != null
                    ? await _context.ForumThreadEntrys.Where(m => m.Root.Id == rootId).CountAsync().ConfigureAwait(false) + 1
                    : 1;

                _context.ForumThreadEntrys.Add(threadEntry);

                try
                {
                    await _context.SaveChangesAsync().ConfigureAwait(false);
                }
                catch (DbUpdateException exception)
                {
                    Console.WriteLine($"SaveChangesAsync threw an exception Message: {exception.Message}");
                }

                if (threadEntry.Parent == null && threadEntry.Root != null)
                {
                    threadEntry.UpdatedAt = threadEntry.CreatedAt;

                    threadEntry.Root.Id = threadEntry.Id;
                    await _context.SaveChangesAsync().ConfigureAwait(false);
                }
            }

            return threadEntryViewModel;
        }

        // DELETE: api/ForumThread/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Models.ThreadEntry>> DeleteThreadEntry(int id)
        {
            Models.ThreadEntry threadEntry = await _context.ForumThreadEntrys.FindAsync(id);
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
