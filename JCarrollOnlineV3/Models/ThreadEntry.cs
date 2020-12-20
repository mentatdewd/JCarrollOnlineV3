using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace JCarrollOnlineV3.Models

{
    public class ThreadEntry : EntityBase
    {
        [Key]
        public int Id { get; set; }

        [StringLength(255)]
        public string Title { get; set; }

        [DataType(DataType.MultilineText)]
        public string Content { get; set; }

        public bool Locked { get; set; }

        [Required]
        public int PostNumber { get; set; }

        [Required]
        public virtual Forum Forum { get; set; }

        [Required]
        public virtual ApplicationUser Author { get; set; }

        public virtual ThreadEntry Root { get; set; }

#nullable enable
        public virtual ThreadEntry? Parent { get; set; }
#nullable disable

        public virtual ICollection<ThreadEntry> Children { get; set; }
    }
}
