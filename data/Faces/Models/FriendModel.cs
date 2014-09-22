using FriendAppDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Faces.Models
{
    public class FriendModel : UserModel
    {
        
        public FriendStatus Status { get; set; }
        public System.DateTime ActionDate { get; set; }

    }
}