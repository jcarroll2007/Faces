using FriendAppDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Faces.Models
{
    public class WallModel
    {
        public WallModel()
        {
            Comments = new List<CommentModel>();
            PostTags = new List<Tags>();
        }
    
        public int Id { get; set; }
        public int UserId { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public string Message { get; set; }
        public string Picture { get; set; }
        public System.DateTime PostTime { get; set; }
        public int PosterId { get; set; }
        public string PosterFirstName { get; set; }
        public string PosterLastName { get; set; }

        public List<CommentModel> Comments { get; set; }
        public List<Tags> PostTags { get; set; }
    }
}