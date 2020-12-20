using System;

namespace JCarrollOnlineV3.ViewModels
{
    public class ThreadEntryViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string RootId { get; set; }
        public string Content { get; set; }
        public string ForumTitle { get; set; }
        public string ParentThreadId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public string Author { get; set; }
        public int Replies { get; set; }
        public int Views { get; set; }
        public DateTime LastReply { get; set; }
        public int Recs { get; set; }
        public ThreadEntryViewModel[] Children { get; set; }
    }
}
