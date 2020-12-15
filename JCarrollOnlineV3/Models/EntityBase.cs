using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace JCarrollOnlineV3.Models
{
    public class EntityBase
    {
        [Required]
        public DateTime CreatedAt { get; set; }
        [Required]
        public DateTime UpdatedAt { get; set; }
        public bool Deleted { get; set; }
        public EntityBase()
        {
            Deleted = false;
        }
        public virtual int IdentityID()
        {
            return 0;
        }
        public virtual object[] IdentityID(bool dummy = true)
        {
            return new List<object>().ToArray();
        }
    }
}
