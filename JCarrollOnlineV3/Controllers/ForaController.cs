using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JCarrollOnlineV3.Data;
using JCarrollOnlineV3.Models;
using JCarrollOnlineV3.ViewModels;
using Omu.ValueInjecter;
using JCarrollOnlineV3.Controllers.Helpers;

namespace JCarrollOnlineV3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForaController : ControllerBase
    {
        private readonly JCarrollOnlineV3DbContext _context;

        public ForaController(JCarrollOnlineV3DbContext context)
        {
            _context = context;
        }

        // GET: api/Fora
        [HttpGet]
        public async Task<ActionResult<ForaViewModel[]>> GetFora()
        {
            List<ForaViewModel> foraIndexItemViewModels = new List<ForaViewModel>();
            List<Forum> fora = null;

            try
            {
                fora = await _context.Fora.ToListAsync();
            }
            catch(Exception exception)
            {
                Console.WriteLine($"Reading fora tabe threw an exception {exception.Message}");
            }

            foreach (Forum forum in fora)
            {
                ForaViewModel foraIndexItemViewModel = new ForaViewModel();

                foraIndexItemViewModel.InjectFrom(forum);
                foraIndexItemViewModel.ThreadCount = await ControllerHelpers.GetThreadCountAsync(forum, _context).ConfigureAwait(false);
                foraIndexItemViewModel.LastThread = "Empty";
                if (foraIndexItemViewModel.ThreadCount > 0)
                {
                    LastForumThread LastThread = await ControllerHelpers.GetLatestThreadDataAsync(forum, _context).ConfigureAwait(false);
                    foraIndexItemViewModel.LastThread = LastThread.Forum.Title + ": " + LastThread.Title + "By - " + LastThread.Author.UserName;
                }

                foraIndexItemViewModels.Add(foraIndexItemViewModel);
            }

            return foraIndexItemViewModels.ToArray();
        }

        [HttpGet("{forumId}")]
        public async Task<ActionResult<ThreadViewModel[]>> GetForum(int forumId)
        {
            List<ThreadViewModel> forumThreadEntries = new List<ThreadViewModel>();

            Forum currentForum = await _context.Fora.Include(i => i.ForumThreadEntries).ThenInclude(i => i.Author).FirstOrDefaultAsync(cf => cf.Id == forumId);

            // Create the view model
            foreach (ThreadEntry threadEntry in currentForum.ForumThreadEntries)
            {
                ThreadViewModel forumThreadEntryViewModel = new ThreadViewModel();

                forumThreadEntryViewModel.InjectFrom(threadEntry);

                forumThreadEntryViewModel.Author = new ApplicationUserViewModel();
                forumThreadEntryViewModel.Author.InjectFrom(threadEntry);

                forumThreadEntryViewModel.Replies = currentForum.ForumThreadEntries.Where(forumThreadEntry => forumThreadEntry.Root?.Id == threadEntry.Id && forumThreadEntry.Parent != null).Count();
                IOrderedEnumerable<ThreadEntry> interim = currentForum.ForumThreadEntries.Where(m => m.Root?.Id == threadEntry.Id).OrderBy(m => m.UpdatedAt.ToFileTime());
                if (interim.Count() > 0)
                {
                    forumThreadEntryViewModel.LastReply = interim.FirstOrDefault().UpdatedAt.ToString();
                }
                else
                {
                    forumThreadEntryViewModel.LastReply = DateTime.Now.ToString();
                }    

                forumThreadEntries.Add(forumThreadEntryViewModel);
            }

            return forumThreadEntries.ToArray();
        }

        //// GET: api/Fora/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<ForumThreadEntryIndexViewModel[]>> GetForum(int id)
        //{
        //    List<ForumThreadEntryIndexViewModel> forumThreadEntryViewModels = new List<ForumThreadEntryIndexViewModel>();

        //    // Retrieve forum data
        //    Forum currentForum = await _context.Fora
        //        .Include(forum => forum.ForumThreadEntries
        //        .Select(forumThreadEntry => forumThreadEntry.Author))
        //        .FirstAsync(forum => forum.Id == id).ConfigureAwait(false);

        //    //threadEntryIndexViewModel.Forum = new ForaViewModel();
        //    //threadEntryIndexViewModel.Forum.InjectFrom(currentForum);

        //    // Create the view model

        //    foreach (ThreadEntry forumThread in currentForum.ForumThreadEntries.Where(forumThreadEntry => forumThreadEntry.ParentId == null))
        //    {
        //        ForumThreadEntryIndexViewModel forumThreadEntryViewModel = new ForumThreadEntryIndexViewModel();

        //        forumThreadEntryViewModel.InjectFrom(forumThread);
        //        forumThreadEntryViewModel.Forum.InjectFrom(currentForum);
        //        forumThreadEntryViewModel.Author.InjectFrom(forumThread.Author);

        //        forumThreadEntryViewModel.Replies = currentForum.ForumThreadEntries.Where(forumThreadEntry => forumThreadEntry.RootId == forumThread.Id && forumThreadEntry.ParentId != null).Count();
        //        forumThreadEntryViewModel.LastReply = currentForum.ForumThreadEntries.Where(m => m.RootId == forumThread.Id).OrderBy(m => m.UpdatedAt.ToFileTime()).FirstOrDefault().UpdatedAt;
        //        //forumThreadEntryViewModel.ThreadEntryIndex.Add(threadEntryIndexItemViewModel);
        //        forumThreadEntryViewModels.Add(forumThreadEntryViewModel);
        //    }

        //    return forumThreadEntryViewModels.ToArray();
        //}

        // PUT: api/Fora/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutForum(int id, Forum forum)
        {
            if (id != forum.Id)
            {
                return BadRequest();
            }

            _context.Entry(forum).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ForumExists(id))
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

        // POST: api/Fora
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ForumViewModel>> PostForum(ForumViewModel forumViewModel)
        {
            // Check for duplicate forum names here
            Forum forum = new Forum();

            forum.InjectFrom(forumViewModel);
            forum.CreatedAt = DateTime.Now;
            forum.UpdatedAt = DateTime.Now;

            _context.Fora.Add(forum);
            await _context.SaveChangesAsync();

            return forumViewModel;
        }

        // DELETE: api/Fora/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Forum>> DeleteForum(int id)
        {
            Forum forum = await _context.Fora.FindAsync(id);
            if (forum == null)
            {
                return NotFound();
            }

            _context.Fora.Remove(forum);
            await _context.SaveChangesAsync();

            return forum;
        }

        private bool ForumExists(int id)
        {
            return _context.Fora.Any(e => e.Id == id);
        }
    }
}
