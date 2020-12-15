using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JCarrollOnlineV3.Models
{
    public class ForumModerator : EntityBase
    {
        public int Id { get; set; }
        public virtual Forum Forum { get; set; }
        public virtual ApplicationUser Moderator { get; set; }
    }
}
