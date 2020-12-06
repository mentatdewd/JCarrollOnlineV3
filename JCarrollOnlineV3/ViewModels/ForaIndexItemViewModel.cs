using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JCarrollOnlineV3.ViewModels
{
    public class ForaIndexItemViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public string Description { get; set; }

        public int ThreadCount { get; set; }

        public string LastThread { get; set; }
    }
}
