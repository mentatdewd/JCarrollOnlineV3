﻿using System;
using System.ComponentModel.DataAnnotations;

namespace JCarrollOnlineV3.Models
{
    public class BlogItemComment
    {
        [Key]
        public int Id { get; set; }
        public string Author { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Content { get; set; }
        public int BlogItemId { get; set; }
        public virtual BlogItem BlogItem { get; set; }
    }
}
