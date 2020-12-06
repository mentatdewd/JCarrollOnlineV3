using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JCarrollOnlineV3.ViewModels
{
    public class LastForumThread
    {
        public DateTime UpdatedAt { get; set; }
        public string Title { get; set; }
        public int PostRoot { get; set; }
        public int PostNumber { get; set; }
        public ApplicationUserViewModel Author { get; set; }
        public ForaViewModel Forum { get; set; }
    }
}
