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
using System.Security.Claims;
using Omu.ValueInjecter;

namespace JCarrollOnlineV3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MicroPostsController : ControllerBase
    {
        private readonly JCarrollOnlineV3DbContext _context;

        public MicroPostsController(JCarrollOnlineV3DbContext context)
        {
            _context = context;
        }

        // GET: api/MicroPosts
        [HttpGet]
        public async Task<ActionResult<MicroPostsViewModel>> GetMicroPosts()
        {
            ApplicationUser user = null;
            try
            {
                user = await _context.Users.Include("FollowingUsers").Include("MicroPosts").SingleAsync(u => u.Id == User.FindFirstValue(ClaimTypes.NameIdentifier));
            }
            catch (Exception exception)
            {
                Console.WriteLine($"GetMicroPost exception: {exception.Message}");
            }

            MicroPostsViewModel microPostsViewModel = new MicroPostsViewModel();

            IQueryable<MicroPost> microposts;

            foreach (FollowersFollowing followingUser in user.FollowingUsers)
            {
                // Need to find a way to make this async
                microposts = _context.MicroPost.Where(w => w.Author.Id == followingUser.FollowerId).Include(i => i.Author);

                foreach (MicroPost microPost in microposts)
                {
                    MicroPostViewModel microPostViewModel = new MicroPostViewModel();

                    microPostViewModel.InjectFrom(microPost);
                    microPostViewModel.Author = microPost.Author.ScreenName;
                    microPostViewModel.Email = microPost.Author.Email;
                    microPostsViewModel.MicroPosts.Add(microPostViewModel);
                }
            }

            foreach (MicroPost microPost in user.MicroPosts)
            {
                MicroPostViewModel microPostViewModel = new MicroPostViewModel();

                microPostViewModel.InjectFrom(microPost);
                microPostViewModel.Author = microPost.Author.ScreenName;
                microPostViewModel.Email = microPost.Author.Email;
                microPostsViewModel.MicroPosts.Add(microPostViewModel);
            }


            return microPostsViewModel;
        }

        // GET: api/MicroPosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MicroPost>> GetMicroPost(int id)
        {
            MicroPost microPost = await _context.MicroPost.FindAsync(id);

            if (microPost == null)
            {
                return NotFound();
            }

            return microPost;
        }

        // PUT: api/MicroPosts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMicroPost(int id, MicroPost microPost)
        {
            if (id != microPost.Id)
            {
                return BadRequest();
            }

            _context.Entry(microPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MicroPostExists(id))
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

        // POST: api/MicroPosts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<MicroPostViewModel>> PostMicroPost([FromBody] MicroPostViewModel microPostViewModel)
        {
            MicroPost micropost = new MicroPost();
            string currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            ApplicationUser currentUser = await _context.Users.FirstOrDefaultAsync(x => x.Id == currentUserId).ConfigureAwait(false);

            micropost.Content = microPostViewModel.Content;
            micropost.Author = currentUser;
            micropost.CreatedAt = DateTime.Now;
            micropost.UpdatedAt = DateTime.Now;

            _context.MicroPost.Add(micropost);
            await _context.SaveChangesAsync();

            return microPostViewModel;
        }


        // DELETE: api/MicroPosts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MicroPost>> DeleteMicroPost(int id)
        {
            MicroPost microPost = await _context.MicroPost.FindAsync(id);
            if (microPost == null)
            {
                return NotFound();
            }

            _context.MicroPost.Remove(microPost);
            await _context.SaveChangesAsync();

            return microPost;
        }

        private bool MicroPostExists(int id)
        {
            return _context.MicroPost.Any(e => e.Id == id);
        }
    }
}
