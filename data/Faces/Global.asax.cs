using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using FriendAppDataModel;
using Faces.Models;

namespace Faces
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            GlobalConfiguration.Configuration.Formatters.Remove(
                GlobalConfiguration.Configuration.Formatters.XmlFormatter);
        }

        private void InitalizeAutoMapper()
        {
            Mapper.CreateMap<User, UserModel>();
            Mapper.CreateMap<UserModel, User>();
            Mapper.CreateMap<Friends, FriendModel>();
            Mapper.CreateMap<FriendModel, Friends>();
            Mapper.CreateMap<CommentModel, Comments>();
            Mapper.CreateMap<Comments, CommentModel>();
            Mapper.CreateMap<WallModel, Wall>();
            Mapper.CreateMap<Wall, WallModel>();
            
        }
    }
}
