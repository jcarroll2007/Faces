﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Faces.Models
{
   
    public class UserModel
    {

        public UserModel()
        {
            Friends = new List<FriendModel>();
        }

        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ProfilePicture { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Phone { get; set; }
        public System.DateTime DateOfBirth { get; set; }
        public string City { get; set; }
        public int AccountType { get; set; }
        public string AboutMe { get; set; }
        public string Gender { get; set; }
        public string State { get; set; }
        public List<FriendModel> Friends { get; set; }
    }
}