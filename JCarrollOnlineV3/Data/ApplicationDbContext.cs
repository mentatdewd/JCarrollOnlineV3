using IdentityServer4.EntityFramework.Options;
using JCarrollOnlineV3.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using JCarrollOnlineV3.ViewModels;

namespace JCarrollOnlineV3.Data
{
    public class JCarrollOnlineV3DbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        private IOptions<OperationalStoreOptions> _operationalStoreOptions;

        public JCarrollOnlineV3DbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
            _operationalStoreOptions = operationalStoreOptions;
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null)
            {
                throw new ArgumentNullException(nameof(modelBuilder));
            }

            modelBuilder.Entity<ApplicationUser>()
                .HasMany(au => au.FollowingUsers)
                .WithOne()
                .HasForeignKey(fk => fk.FollowingId);

            modelBuilder.Entity<ApplicationUser>()
                .HasMany(au => au.FollowUsers)
                .WithOne()
                .HasForeignKey(fk => fk.FollowerId);

            modelBuilder.Entity<Forum>()
                .HasData(new Forum
                {
                    Id = 1,
                    Title = "Test forum",
                    Description = "Test forum description",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = DateTime.Now
                }, new Forum
                {
                    Id = 2,
                    Title = "Test forum 2",
                    Description = "Test forum 2 description",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = DateTime.Now
                }) ;

            modelBuilder.Entity<Models.ThreadEntry>()
                .HasOne<Models.ThreadEntry>(te => te.Root)
                .WithMany(children => children.Children);
             
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Forum> Fora { get; set; }
        public DbSet<ForumModerator> ForumModerators { get; set; }
        public DbSet<Models.ThreadEntry> ForumThreadEntrys { get; set; }
        //public DbSet<Micropost> MicroPosts { get; set; }
        public DbSet<BlogItem> BlogItems { get; set; }
        public DbSet<BlogItemComment> BlogItemComments { get; set; }
        public DbSet<JCarrollOnlineV3.Models.MicroPost> MicroPost { get; set; }
        //public DbSet<FollowersFollowing> FollwersFollowing { get; set; }
        //public DbSet<Entities.NLog> NLog { get; set; }    }
    }
}
