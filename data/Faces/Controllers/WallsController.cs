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
    public class WallsController : ApiController
    {
        private FriendAppDataModelContainer db = new FriendAppDataModelContainer();

        // GET: api/Walls
        public List<WallModel> GetWalls()
        {
            var temp = new List<WallModel>(db.Walls.ToList().Select(c => ModelFactory.ParseWallEntityToModel(c)));
            return temp;
        }

        // GET: api/Walls
        //public IQueryable<Wall> GetWalls()
        //{
        //    return db.Walls;
        //}

        // GET: api/Walls/5
        public List<WallModel> GetWalls(int id)
        {
            var temp = new List<WallModel>(db.Walls.ToList().Select(c => ModelFactory.ParseWallEntityToModel(c)).Where(c =>
                c.UserId == id));
            return temp;
        }
        //[ResponseType(typeof(Wall))]
        //public IHttpActionResult GetWall(int id)
        //{
        //    Wall wall = db.Walls.Find(id);
        //    if (wall == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(wall);
        //}

        // PUT: api/Walls/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWall(int id, Wall wall)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wall.Id)
            {
                return BadRequest();
            }

            db.Entry(wall).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WallExists(id))
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

        // POST: api/Walls
        [ResponseType(typeof(Wall))]
        public IHttpActionResult PostWall(Wall wall)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Walls.Add(wall);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = wall.Id }, wall);
        }

        // DELETE: api/Walls/5
        [ResponseType(typeof(Wall))]
        public IHttpActionResult DeleteWall(int id)
        {
            Wall wall = db.Walls.Find(id);
            if (wall == null)
            {
                return NotFound();
            }

            db.Walls.Remove(wall);
            db.SaveChanges();

            return Ok(wall);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WallExists(int id)
        {
            return db.Walls.Count(e => e.Id == id) > 0;
        }
    }
}