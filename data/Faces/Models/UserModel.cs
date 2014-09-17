using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Faces.Models
{
   
    public class UserModel
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public byte[] ProfilePicture { get; set; }
    }
}