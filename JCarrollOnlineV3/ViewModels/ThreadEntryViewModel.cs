using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JCarrollOnlineV3.ViewModels
{
    public class ThreadEntryViewModel
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string ForumId { get; set; }
        public string ParentThreadId { get; set; }
    }
}
