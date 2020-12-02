using IdentityServer4.EntityFramework.Options;
using JCarrollOnlineV3.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;

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

            //    Database.SetInitializer(new MigrateDatabaseToLatestVersion<JCarrollOnlineV2DbContext, Configuration>());

            //    modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            //    base.OnModelCreating(modelBuilder);
            //modelBuilder.ConfigurePersistedGrantContext(_operationalStoreOptions.Value);
            //modelBuilder.Entity<ApplicationUser>()
            //    .HasMany(m => m.MicroPosts)
            //    .WithOne(m => m.Author);

            modelBuilder.Entity<FollowersFollowing>()
                .HasKey(k => new { k.FollowerId, k.FollowingId });

            modelBuilder.Entity<ApplicationUser>()
                .HasMany(e => e.FollowingUsers)
                .WithOne()
                .HasForeignKey(e => e.FollowingId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<ApplicationUser>()
                .HasMany(e => e.FollowUsers)
                .WithOne()
                .HasForeignKey(fk => fk.FollowerId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<ApplicationUser>()
                .HasMany(hm => hm.MicroPosts)
                .WithOne()
                .HasForeignKey(fk => fk.AuthorId);

            modelBuilder.Entity<ApplicationUser>()
                .HasMany(hm => hm.BlogItems)
                .WithOne(wo => wo.Author);

            modelBuilder.Entity<BlogItem>()
                .HasMany(hm => hm.BlogItemComments);

            modelBuilder.Entity<BlogItemComment>();

            modelBuilder.Entity<ApplicationUser>()
                .HasMany<ThreadEntry>()
                .WithOne(m => m.Author);

            modelBuilder.Entity<ApplicationUser>()
                .HasMany(hm => hm.ForumsModerated)
                .WithOne()
                .HasForeignKey(fk => fk.ModeratorId);

            modelBuilder.Entity<Forum>()
                .HasMany(hm => hm.ForumThreadEntries)
                .WithOne(wo => wo.Forum);

            modelBuilder.Entity<ForumModerator>();

            modelBuilder.Entity<ThreadEntry>()
                .HasOne(k => k.Author)
                .WithMany(m => m.ForumThreadEntries);

            //modelBuilder.Entity<NLog>();

            base.OnModelCreating(modelBuilder);
        }

        //public DbSet<ApplicationUser> ApplicationUser { get; set; }
        public DbSet<Forum> Fora { get; set; }
        public DbSet<ForumModerator> ForumModerators { get; set; }
        public DbSet<ThreadEntry> ForumThreadEntrys { get; set; }
        //public DbSet<Micropost> MicroPosts { get; set; }
        public DbSet<BlogItem> BlogItems { get; set; }
        public DbSet<BlogItemComment> BlogItemComments { get; set; }
        //public DbSet<FollowersFollowing> FollwersFollowing { get; set; }
        //public DbSet<Entities.NLog> NLog { get; set; }    }
    }
}
