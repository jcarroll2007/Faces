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
    
    public partial class ProfilePictures
    {
        public int Id { get; set; }
        public byte[] Picture { get; set; }
    
        public virtual User User { get; set; }
    }
}