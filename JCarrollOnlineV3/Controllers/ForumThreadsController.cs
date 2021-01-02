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
        [HttpGet("{threadId}")]
        public async Task<ActionResult<ThreadViewModel[]>> GetThread(int threadId)
        {
            List<ThreadViewModel> forumThreadEntries = new List<ThreadViewModel>();

            List<ThreadEntry> threadEntries = new List<ThreadEntry>();
            threadEntries.Add(await _context.ForumThreadEntrys.Where(te => te.Id == threadId).Include(te => te.Author).Include(te => te.Children).Include(te => te.Forum).FirstOrDefaultAsync());

            // Create the view model
            foreach (ThreadEntry threadEntry in threadEntries)
            {
                ThreadViewModel threadViewModel = new ThreadViewModel();

                threadViewModel.InjectFrom(threadEntry);
                threadViewModel.Author = new ApplicationUserViewModel();
                threadViewModel.Author.InjectFrom(threadEntry.Author);

                threadViewModel.CreatedAt = threadEntry.CreatedAt.ToString();
                threadViewModel.UpdatedAt = threadEntry.UpdatedAt.ToString();

                threadViewModel.Forum = new ForumViewModel();
                threadViewModel.Forum.InjectFrom(threadEntry.Forum);

                threadViewModel.Replies = threadEntries.Where(forumThreadEntry => forumThreadEntry.Root != null && forumThreadEntry.Root.Id == threadEntry.Id && forumThreadEntry.Parent != null).Count();
                IOrderedEnumerable<ThreadEntry> children = threadEntries.Where(m => m.Root != null && m.Id == threadEntry.Id).OrderBy(m => m.UpdatedAt.ToFileTime());

                if (threadEntry.Children?.Count() > 0)
                {
                    threadViewModel.LastReply = threadEntry.Children.FirstOrDefault().UpdatedAt.ToString();
                    List<ThreadViewModel> childViewModels = new List<ThreadViewModel>();

                    foreach (ThreadEntry child in threadEntry.Children)
                    {
                        ThreadViewModel childViewModel = new ThreadViewModel();

                        childViewModel.InjectFrom(child);
                        childViewModels.Add(childViewModel);
                    }

                    threadViewModel.Children = childViewModels.ToArray();
                }
                else
                {
                    threadViewModel.LastReply = DateTime.Now.ToString();
                    threadViewModel.Children = new ThreadViewModel[] { };
                }

                forumThreadEntries.Add(threadViewModel);
            }

            return forumThreadEntries.ToArray();
        }

        // GET: api/ForumThread/5
        //[HttpGet("{threadId}")]
        //public async Task<ActionResult<ThreadViewModel>> GetThread(int threadId)
        //{
        //    ThreadEntry currentThread;
        //    currentThread = await _context.ForumThreadEntrys.Where(cf => cf.Id == threadId).Include(te => te.Author).Include(f => f.Forum).Include(ch => ch.Children).FirstOrDefaultAsync();

        //    // Create the view model
        //    ThreadViewModel threadViewModel = new ThreadViewModel();

        //    threadViewModel.InjectFrom(currentThread);
        //    threadViewModel.Author = new ApplicationUserViewModel();
        //    threadViewModel.Author.InjectFrom(currentThread.Author);

        //    threadViewModel.Replies = await _context.ForumThreadEntrys.Where(forumThreadEntry => forumThreadEntry.Parent != null && forumThreadEntry.Parent.Id == currentThread.Id && forumThreadEntry.Parent != null).CountAsync();

        //    if (currentThread.Children.Count() > 0)
        //    {
        //        threadViewModel.LastReply = currentThread.Children.FirstOrDefault().UpdatedAt.ToString();
        //        foreach(ThreadEntry child in currentThread.Children)
        //        {
        //            ThreadViewModel childViewModel = new ThreadViewModel();

        //            childViewModel.InjectFrom(child);
        //            threadViewModel.Children.Add(childViewModel);
        //        }
        //    }
        //    else
        //    {
        //        threadViewModel.LastReply = DateTime.Now.ToString();
        //    }

        //    return threadViewModel;
        //}

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
        public async Task<ActionResult<int>> PostThreadCreate(CreateThreadViewModel createThreadEntryViewModel)
        {
            ThreadEntry threadEntry = new ThreadEntry();

            if (ModelState.IsValid)
            {
                string currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                ApplicationUser currentUser = await _context.Users.FirstOrDefaultAsync(x => x.Id == currentUserId).ConfigureAwait(false);

                threadEntry.Author = currentUser;

                threadEntry.InjectFrom(createThreadEntryViewModel);

                threadEntry.CreatedAt = DateTime.Now;
                threadEntry.UpdatedAt = DateTime.Now;
                threadEntry.Locked = false;

                if (createThreadEntryViewModel.ForumId == -1)
                {
                    threadEntry.PostNumber = 1;
                }
                else
                {
                    threadEntry.Forum = await _context.Fora.FirstOrDefaultAsync(forum => forum.Id == createThreadEntryViewModel.ForumId);
                    threadEntry.Parent = await _context.ForumThreadEntrys.Include(te => te.Root).Include(te => te.Children).FirstOrDefaultAsync(thread => thread.Id == createThreadEntryViewModel.parentId);
                    threadEntry.Root = threadEntry.Parent.Root;             
                }

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

            return threadEntry.PostNumber;
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
