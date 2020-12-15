using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JCarrollOnlineV3.Models
{
    public class MicroPost : EntityBase
    {
        public int Id { get; set; }

        [DataType(DataType.MultilineText)]
        [StringLength(140)]
        public string Content { get; set; }

        [Required]
        public virtual ApplicationUser Author { get; set; }
    }
}
