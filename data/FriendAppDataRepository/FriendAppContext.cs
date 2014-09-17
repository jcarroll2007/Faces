//using System;
//using System.Collections.Generic;
//using System.Data.Entity;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace FriendAppDataModel
//{
//    class FriendAppContext : DbContext
//    {
//                public FriendAppContext()
//            : base("name=FriendAppDataModelContainer")
//        {

//        }
    
//        protected override void OnModelCreating(DbModelBuilder modelBuilder)
//        {
//            throw new UnintentionalCodeFirstException();
//        }
    
//        public virtual DbSet<User> Users { get; set; }
//        public virtual DbSet<Friends> Friends { get; set; }
//        public virtual DbSet<Wall> Walls { get; set; }
//        public virtual DbSet<Tags> Tags { get; set; }
//        public virtual DbSet<WallPostTagsTable> WallPostTagsTables { get; set; }
//    }

//    }



