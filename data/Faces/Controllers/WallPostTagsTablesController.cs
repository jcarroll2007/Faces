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
using System.Web.Http.Cors;

namespace Faces.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class WallPostTagsTablesController : ApiController
    {
        private FriendAppDataModelContainer db = new FriendAppDataModelContainer();

        // GET: api/WallPostTagsTables
        public IQueryable<WallPostTagsTable> GetWallPostTagsTables()
        {
            return db.WallPostTagsTables;
        }

        // GET: api/WallPostTagsTables/5
        [ResponseType(typeof(WallPostTagsTable))]
        public IHttpActionResult GetWallPostTagsTable(int id)
        {
            WallPostTagsTable wallPostTagsTable = db.WallPostTagsTables.Find(id);
            if (wallPostTagsTable == null)
            {
                return NotFound();
            }

            return Ok(wallPostTagsTable);
        }

        // PUT: api/WallPostTagsTables/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWallPostTagsTable(int id, WallPostTagsTable wallPostTagsTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wallPostTagsTable.Id)
            {
                return BadRequest();
            }

            db.Entry(wallPostTagsTable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WallPostTagsTableExists(id))
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

        // POST: api/WallPostTagsTables
        [ResponseType(typeof(WallPostTagsTable))]
        public IHttpActionResult PostWallPostTagsTable(WallPostTagsTable wallPostTagsTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WallPostTagsTables.Add(wallPostTagsTable);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = wallPostTagsTable.Id }, wallPostTagsTable);
        }

        // DELETE: api/WallPostTagsTables/5
        [ResponseType(typeof(WallPostTagsTable))]
        public IHttpActionResult DeleteWallPostTagsTable(int id)
        {
            WallPostTagsTable wallPostTagsTable = db.WallPostTagsTables.Find(id);
            if (wallPostTagsTable == null)
            {
                return NotFound();
            }

            db.WallPostTagsTables.Remove(wallPostTagsTable);
            db.SaveChanges();

            return Ok(wallPostTagsTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WallPostTagsTableExists(int id)
        {
            return db.WallPostTagsTables.Count(e => e.Id == id) > 0;
        }
    }
}