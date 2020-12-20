namespace JCarrollOnlineV3.ViewModels
{
    public class ForumThreadViewModel
    {
        public int Id { get; set; }
        public int? RootId { get; set; }

#nullable enable
        public ForumThreadViewModel? Parent { get; set; }
        public ForumThreadViewModel? Children { get; set; }
#nullable disable

        public ForumViewModel Forum { get; set; }
        public int PostCount { get; set; }
        public ApplicationUserViewModel Author { get; set; }
        public string Content { get; set; }
        public string Title { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
        public int PostNumber { get; set; }
        public bool Locked { get; set; }
        public string[] ImageList { get; set; }
    }
}
