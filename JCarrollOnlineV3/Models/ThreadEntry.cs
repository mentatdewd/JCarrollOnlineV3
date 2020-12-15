using System;
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

        public int? ParentId { get; set; }

        public int? RootId { get; set; }

        [Required]
        public virtual Forum Forum { get; set; }

        [Required]
        public virtual ApplicationUser Author { get; set; }
    }
}
