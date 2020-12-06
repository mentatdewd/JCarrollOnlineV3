using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JCarrollOnlineV3.ViewModels
{
    public class ApplicationUserViewModel
    {
        public string Id { get; set; }

        public string Email { get; set; }

        public string UserName { get; set; }

        public bool MicroPostEmailNotifications { get; set; }

        public bool MicroPostSMSNotifications { get; set; }
    }
}
