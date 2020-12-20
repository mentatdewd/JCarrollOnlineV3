using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JCarrollOnlineV3.ViewModels
{
    public class ForaViewModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime CreatedAt { get; set; } // :null => false

        public DateTime UpdatedAt { get; set; } //:null => false

        public ICollection<ForumThreadSummaryViewModel> ForumThreadEntries { get; private set; }
        public ICollection<ForumModeratorsViewModel> ForumModerators { get; private set; }
    }
}
