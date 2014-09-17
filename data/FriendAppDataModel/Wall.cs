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
        }
    
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Message { get; set; }
        public byte[] Picture { get; set; }
        public System.DateTime PostTime { get; set; }
    
        public virtual User User { get; set; }
        public virtual ICollection<WallPostTagsTable> PostTags { get; set; }
    }
}
