using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using FriendAppDataModel;
using Faces.Models;
using System.Web.Http.Cors;

namespace Faces.Controllers
{
   //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsersController : ApiController
    {
        private FriendAppDataModelContainer db = new FriendAppDataModelContainer();

        //// GET: api/Users
        public List<UserModel> GetUsers()
        {
            //var temp = (from p
            //                in db.Users
            //            select ModelFactory.ParseUserEntityToModel(p)).ToList();

            //return temp;

            var temp = new List<UserModel>(db.Users.ToList().Select(c => ModelFactory.ParseUserEntityToModel(c)));
            return temp;
        }

        // GET: api/Users
        //public IQueryable<User> GetUsers()
        //{
        //    return db.Users;
        //}

        // GET: api/Users/5
        [ResponseType(typeof(User))]
        public UserModel GetUser(int id)
        {
            var temp = new UserModel();


            User user = db.Users.Find(id);
            if (user == null)
            {
                return null;
            }
            else
                temp = ModelFactory.ParseUserEntityToModel(user);

            return temp;
        }

        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.Id)
            {
                return BadRequest();
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Users
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            
            if (db.Users.Where(c => c.Email == user.Email).Any())
            {
                return BadRequest("Email already exist"); //Ok<string> ("Email already exist");
            }
     

            db.Users.Add(user);
            db.SaveChanges();

            var tempToken = new UserTokens();
            tempToken.User = user;
            tempToken.Token = "";
            db.UserTokens.Add(tempToken);
            db.SaveChanges();

            var tempUser = new UserModel();
            tempUser = ModelFactory.ParseUserEntityToModel(user);

            return CreatedAtRoute("DefaultApi", new { id = tempUser.Id }, tempUser);
        }

        // DELETE: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }



            db.Users.Remove(user);
            db.SaveChanges();

            return Ok(user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }
}