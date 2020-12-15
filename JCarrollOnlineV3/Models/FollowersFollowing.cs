using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JCarrollOnlineV3.Models
{
    public class FollowersFollowing : EntityBase
    {
        public int Id { get; set; }
        public string FollowingId { get; set; }
        public string FollowerId { get; set; }
    }
}
