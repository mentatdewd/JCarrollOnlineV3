using System;

namespace JCarrollOnlineV3.ViewModels
{
    public class ForumThreadEntry
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime CreatedAt { get; set; } //           :null => false
        public DateTime UpdatedAt { get; set; } //          :null => false
        public string Author { get; set; }
        public int ForumId { get; set; }
        public int Replies { get; set; }
        public int Views { get; set; }
        public DateTime LastReply { get; set; }
        public int Recs { get; set; }
    }
}
