using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JCarrollOnlineV3.Models
{
    public class ForumModerator
    {
        public int Id { get; set; }
        public string ModeratorId { get; set; }
        public int ForumId { get; set; }
        public DateTime CreatedAt { get; set; }//  :null => false
        public DateTime UpdatedAt { get; set; }//   :null => false
    }
}
