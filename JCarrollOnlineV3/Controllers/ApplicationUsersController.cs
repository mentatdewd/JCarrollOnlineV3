using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JCarrollOnlineV3.Data;
using JCarrollOnlineV3.ViewModels;
using JCarrollOnlineV3.Models;

namespace JCarrollOnlineV3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUsersController : ControllerBase
    {
        private readonly JCarrollOnlineV3DbContext _context;

        public ApplicationUsersController(JCarrollOnlineV3DbContext context)
        {
            _context = context;
        }

        // GET: api/ApplicationUsers
        [HttpGet]
        public async Task<ActionResult<ApplicationUser[]>> GetApplicationUsers()
        {
            return await _context.ApplicationUsers.ToArrayAsync();
        }

        // POST: api/ApplicationUsers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<bool>> PostApplicationUserFollow(string id)
        {
            ApplicationUser applicationUser = await _context.ApplicationUsers.FirstOrDefaultAsync(au => au.Id == id);
            return false;
            //_context.ApplicationUsers.Add(applicationUser);
            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateException)
            //{
            //    if (ApplicationUserViewModelExists(applicationUser.Id))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtAction("GetApplicationUserViewModel", new { id = applicationUser.Id }, applicationUser);
        }

        [HttpPost]
        public async Task<ActionResult<bool>> PostApplicationUserUnfollow(string id)
        {
            ApplicationUser applicationUser = await _context.ApplicationUsers.FirstOrDefaultAsync(au => au.Id == id);
            return false;
            //_context.ApplicationUsers.Add(applicationUser);
            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateException)
            //{
            //    if (ApplicationUserViewModelExists(applicationUser.Id))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtAction("GetApplicationUserViewModel", new { id = applicationUser.Id }, applicationUser);
        }
    }
}
