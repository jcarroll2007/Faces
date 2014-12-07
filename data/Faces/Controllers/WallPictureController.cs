using Faces.Models;
using FriendAppDataModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Faces.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class WallPictureController : ApiController
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
            string root = HttpContext.Current.Server.MapPath("~/App_Data/");
            //string root = HttpContext.Current.Server.MapPath("/services/pictures/wall");
            var provider = new MultipartFormDataStreamProvider(root);

            try
            {
                // Read the form data.
                await Request.Content.ReadAsMultipartAsync(provider);

                // This illustrates how to get the file names.
                foreach (MultipartFileData file in provider.FileData)
                {
                    string filename = file.Headers.ContentDisposition.Name;
                    if (filename.StartsWith("\"") && filename.EndsWith("\""))
                    {
                        filename = filename.Trim('"');
                    }
                    if (filename.Contains(@"/") || filename.Contains(@"\"))
                    {
                        filename = Path.GetFileName(filename);
                    }

                    string[] idholder = filename.Split(':');

                    var newWall = new Wall();
                    newWall.UserId = Convert.ToInt32(idholder[0]);
                    newWall.PosterId = Convert.ToInt32(idholder[1]);
                    newWall.PostTime = DateTime.Now;
                    newWall.Message = "";
                    db.Walls.Add(newWall);           
                    db.SaveChanges();

                    filename = newWall.Id + ".jpeg";

                    string tempUrl = "http://robertryanmorris.com/services/pictures/wall/" + filename;

                    if (File.Exists(Path.Combine(root, filename).ToString()))
                    {
                        File.Delete(Path.Combine(root, filename).ToString());
                    }

                    File.Move(file.LocalFileName, Path.Combine(root, filename));

                    newWall.Picture = tempUrl;

                    
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
