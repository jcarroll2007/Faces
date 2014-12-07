using Faces.Models;
using FriendAppDataModel;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Faces.Controllers
{
    
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProfilePictureController : ApiController
    {
        private FriendAppDataModelContainer db = new FriendAppDataModelContainer();

        public async Task<HttpResponseMessage> PostFormData()
        {
            // Check if the request contains multipart/form-data.
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }
            //    ~/App_Data/profile
    
            string root = HttpContext.Current.Server.MapPath("/services/pictures/profile");
            var provider = new MultipartFormDataStreamProvider(root);

            try
            {
                // Read the form data.
                await Request.Content.ReadAsMultipartAsync(provider);

                // This illustrates how to get the file names.
                foreach (MultipartFileData file in provider.FileData)
                {
                    string filename = file.Headers.ContentDisposition.Name;
                    if(filename.StartsWith("\"") && filename.EndsWith("\""))
                    {
                        filename = filename.Trim('"');
                    }
                    if(filename.Contains(@"/") || filename.Contains(@"\"))
                    {
                        filename = Path.GetFileName(filename);
                    }

                    var userId = Convert.ToInt32(filename);
                    filename += ".jpeg";

                    string tempUrl = "http://robertryanmorris.com/services/pictures/profile/" + filename;

                    if (File.Exists(Path.Combine(root, filename).ToString()))
                    {
                        File.Delete(Path.Combine(root, filename).ToString());
                    }

                    File.Move(file.LocalFileName, Path.Combine(root, filename));

                    var user = db.Users.Where(c => c.Id == userId).FirstOrDefault();
                    //user.ProfilePicture = Path.Combine(root, filename);
                    user.ProfilePicture = tempUrl;
                    db.SaveChanges();
                   
                    return Request.CreateResponse(HttpStatusCode.OK, tempUrl);

                    //Trace.WriteLine(file.Headers.ContentDisposition.FileName);
                    //Trace.WriteLine("Server file path: " + file.LocalFileName);
                    
                }
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (System.Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }



    }
}
