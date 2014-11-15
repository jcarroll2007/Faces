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
    public class SubscribedTagsController : ApiController
    {
        private FriendAppDataModelContainer db = new FriendAppDataModelContainer();

        // GET: api/SubscribedTags
        public IQueryable<SubscribedTags> GetSubscribedTags()
        {
            return db.SubscribedTags;
        }

        // GET: api/SubscribedTags/5
        [ResponseType(typeof(SubscribedTags))]
        public IHttpActionResult GetSubscribedTags(int id)
        {
            SubscribedTags subscribedTags = db.SubscribedTags.Find(id);
            if (subscribedTags == null)
            {
                return NotFound();
            }

            return Ok(subscribedTags);
        }

        // PUT: api/SubscribedTags/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSubscribedTags(int id, SubscribedTags subscribedTags)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != subscribedTags.TagId)
            {
                return BadRequest();
            }

            db.Entry(subscribedTags).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubscribedTagsExists(id))
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

        // POST: api/SubscribedTags
        [ResponseType(typeof(SubscribedTags))]
        public IHttpActionResult PostSubscribedTags(SubscribedTags subscribedTags)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SubscribedTags.Add(subscribedTags);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = subscribedTags.TagId }, subscribedTags);
        }

        // DELETE: api/SubscribedTags/5
        [ResponseType(typeof(SubscribedTags))]
        public IHttpActionResult DeleteSubscribedTags(int id)
        {
            SubscribedTags subscribedTags = db.SubscribedTags.Find(id);
            if (subscribedTags == null)
            {
                return NotFound();
            }

            db.SubscribedTags.Remove(subscribedTags);
            db.SaveChanges();

            return Ok(subscribedTags);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SubscribedTagsExists(int id)
        {
            return db.SubscribedTags.Count(e => e.TagId == id) > 0;
        }
    }
}