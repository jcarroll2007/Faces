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

namespace Faces.Controllers
{
    public class CommentsController : ApiController
    {
        private FriendAppDataModelContainer db = new FriendAppDataModelContainer();

        // GET: api/Comments
        public IQueryable<Comments> GetComments()
        {
            return db.Comments;
        }

        // GET: api/Comments/5
        [ResponseType(typeof(Comments))]
        public IHttpActionResult GetComments(int id)
        {
            Comments comments = db.Comments.Find(id);
            if (comments == null)
            {
                return NotFound();
            }

            return Ok(comments);
        }

        // PUT: api/Comments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutComments(int id, Comments comments)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != comments.Id)
            {
                return BadRequest();
            }

            db.Entry(comments).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentsExists(id))
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

        // POST: api/Comments
        [ResponseType(typeof(Comments))]
        public IHttpActionResult PostComments(Comments comments)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            comments.User = db.Users.Where(c => c.Id == comments.UserId).SingleOrDefault();

            db.Comments.Add(comments);
            db.SaveChanges();         

            var temp = new CommentModel();
            temp = ModelFactory.ParseCommentEntityToModel(comments);

            return CreatedAtRoute("DefaultApi", new { id = comments.Id }, temp);
        }

        // DELETE: api/Comments/5
        [ResponseType(typeof(Comments))]
        public IHttpActionResult DeleteComments(int id)
        {
            Comments comments = db.Comments.Find(id);
            if (comments == null)
            {
                return NotFound();
            }

            db.Comments.Remove(comments);
            db.SaveChanges();

            return Ok(comments);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CommentsExists(int id)
        {
            return db.Comments.Count(e => e.Id == id) > 0;
        }
    }
}