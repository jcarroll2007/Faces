//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FriendAppDataModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class User
    {
        public User()
        {
            this.Friends = new HashSet<Friends>();
            this.FriendRequest = new HashSet<Friends>();
            this.Tags = new HashSet<Tags>();
            this.Post = new HashSet<Wall>();
        }
    
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public byte[] ProfilePicture { get; set; }
    
        public virtual ICollection<Friends> Friends { get; set; }
        public virtual ICollection<Friends> FriendRequest { get; set; }
        public virtual ICollection<Tags> Tags { get; set; }
        public virtual ICollection<Wall> Post { get; set; }
    }
}
