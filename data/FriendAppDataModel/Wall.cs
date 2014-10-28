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
    
    public partial class Wall
    {
        public Wall()
        {
            this.PostTags = new HashSet<WallPostTagsTable>();
            this.Comments = new HashSet<Comments>();
        }
    
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Message { get; set; }
        public string Picture { get; set; }
        public System.DateTime PostTime { get; set; }
        public int Poster { get; set; }
    
        public virtual User User { get; set; }
        public virtual ICollection<WallPostTagsTable> PostTags { get; set; }
        public virtual ICollection<Comments> Comments { get; set; }
        public virtual User PosterId { get; set; }
    }
}
