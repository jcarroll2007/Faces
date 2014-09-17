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

namespace Faces.Controllers
{
    public class TagsController : ApiController
    {
        private FriendAppDataModelContainer db = new FriendAppDataModelContainer();

        // GET: api/Tags
        public IQueryable<Tags> GetTags()
        {
            return db.Tags;
        }

        // GET: api/Tags/5
        [ResponseType(typeof(Tags))]
        public IHttpActionResult GetTags(int id)
        {
            Tags tags = db.Tags.Find(id);
            if (tags == null)
            {
                return NotFound();
            }

            return Ok(tags);
        }

        // PUT: api/Tags/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTags(int id, Tags tags)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tags.Id)
            {
                return BadRequest();
            }

            db.Entry(tags).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TagsExists(id))
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

        // POST: api/Tags
        [ResponseType(typeof(Tags))]
        public IHttpActionResult PostTags(Tags tags)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Tags.Add(tags);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tags.Id }, tags);
        }

        // DELETE: api/Tags/5
        [ResponseType(typeof(Tags))]
        public IHttpActionResult DeleteTags(int id)
        {
            Tags tags = db.Tags.Find(id);
            if (tags == null)
            {
                return NotFound();
            }

            db.Tags.Remove(tags);
            db.SaveChanges();

            return Ok(tags);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TagsExists(int id)
        {
            return db.Tags.Count(e => e.Id == id) > 0;
        }
    }
}