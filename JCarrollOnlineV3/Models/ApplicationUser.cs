using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace JCarrollOnlineV3.Models
{
    public class ApplicationUser : IdentityUser
    {
        public bool MicroPostEmailNotifications { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Naming", "CA1704:IdentifiersShouldBeSpelledCorrectly", MessageId = "Sms")]
        public bool MicroPostSmsNotifications { get; set; }

        public virtual ICollection<BlogItem> BlogItems { get; set; }

        // Navigation Property
        public virtual ICollection<ThreadEntry> ForumThreadEntries { get; } = new List<ThreadEntry>();
        public virtual ICollection<ForumModerator> ForumsModerated { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        public virtual ICollection<MicroPost> MicroPosts { get; private set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        public virtual ICollection<FollowersFollowing> FollowingUsers { get; private set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        public virtual ICollection<FollowersFollowing> FollowUsers { get; private set; }
    }
}
