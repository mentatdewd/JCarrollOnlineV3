using System.Collections.Generic;

namespace JCarrollOnlineV3.ViewModels
{
    public class ThreadViewModel
    {
        public int Id { get; set; }
        public int? RootId { get; set; }

#nullable enable
        public ThreadViewModel? Parent { get; set; }
        public ThreadViewModel[]? Children { get; set; }
#nullable disable

        public ForumViewModel Forum { get; set; }
        public int Replies { get; set; }
        public int PostCount { get; set; }
        public ApplicationUserViewModel Author { get; set; }
        public string Content { get; set; }
        public string Title { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
        public string LastReply { get; set; }
        public int PostNumber { get; set; }
        public bool Locked { get; set; }
        public string[] ImageList { get; set; }
    }
}
