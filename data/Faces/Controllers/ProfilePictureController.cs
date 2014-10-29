using FriendAppDataModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Faces.Controllers
{
    public class ProfilePictureController : ApiController
    {
        private FriendAppDataModelContainer db = new FriendAppDataModelContainer();

        [HttpPost]
        public IHttpActionResult Upload(HttpPostedFileBase file)
        {
            var filename = Path.GetFileName(file.FileName);
            var path = Path.Combine("", filename);
            file.SaveAs(path);

            return Ok(path);
        }
    }
}
