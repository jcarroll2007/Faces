using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Faces.Models
{
    public class CommentModel
    {
        public int Id { get; set; }
        public string CommentText { get; set; }
        public System.DateTime CommentDatetime { get; set; }
        public int UserId { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public int WallId { get; set; }
    }
}