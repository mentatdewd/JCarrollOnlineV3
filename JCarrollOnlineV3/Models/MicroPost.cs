using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JCarrollOnlineV3.Models
{
    public class MicroPost
    {
        public int Id { get; set; }

        [DataType(DataType.MultilineText)]
        [StringLength(140)]
        public string Content { get; set; }

        [Required]
        public string AuthorId { get; set; }

        [DataType(DataType.DateTime)]
        [Required]
        public DateTime CreatedAt { get; set; } // :null => false

        [DataType(DataType.DateTime)]
        [Required]
        public DateTime UpdatedAt { get; set; } // :null => false
    }
}
