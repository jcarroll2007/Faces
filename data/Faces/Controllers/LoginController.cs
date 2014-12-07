using Faces.Models;
using FriendAppDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Faces.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {
        private FriendAppDataModelContainer db = new FriendAppDataModelContainer();

        public IHttpActionResult Login(LoginModel model)
        {
            var temp = new UserModel();
            User user = db.Users.FirstOrDefault(c => c.Email == model.uname && c.Password == model.pass);

            if (user == null)
            {
                return BadRequest("Invalid Credentials");
            }
            else
            {
                var token = new TokenModel(user);
                token.CreateToken();
                temp = ModelFactory.ParseUserEntityToModel(user);
            }
                
            return Ok(temp);
        }
       
    }
}
