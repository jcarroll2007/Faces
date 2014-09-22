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
            this.Post = new HashSet<Wall>();
            this.SentMessages = new HashSet<Message>();
            this.receivedMessages = new HashSet<Message>();
            this.SubscribedTags = new HashSet<SubscribedTags>();
        }
    
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ProfilePicture { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public System.DateTime DateOfBirth { get; set; }
        public string City { get; set; }
        public int AccountType { get; set; }
        public string AboutMe { get; set; }
        public string Gender { get; set; }
        public string State { get; set; }
    
        public virtual ICollection<Friends> Friends { get; set; }
        public virtual ICollection<Friends> FriendRequest { get; set; }
        public virtual ICollection<Wall> Post { get; set; }
        public virtual ICollection<Message> SentMessages { get; set; }
        public virtual ICollection<Message> receivedMessages { get; set; }
        public virtual ICollection<SubscribedTags> SubscribedTags { get; set; }
    }
}
