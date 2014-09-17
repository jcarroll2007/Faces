using FriendAppDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Faces.Models
{
    public static class ModelFactory
    {
        public static UserModel ParseUserEntityToModel(User entity)
        {
            UserModel userModelTemp = new UserModel();

            userModelTemp.Id = entity.Id;
            userModelTemp.Username = entity.Username;
            userModelTemp.Password = entity.Password;
            
            userModelTemp.ProfilePicture = entity.ProfilePicture;

            return userModelTemp;

        }

        //public static User ParseUserModelToEntity(UserModel model)
        //{
        //    var userEntityTemp = new User();

        //    userEntityTemp.Username = model.Username;
        //    userEntityTemp.Password = model.Password;
        //    userEntityTemp.Id = model.Id;
        //    userEntityTemp.ProfilePicture = model.ProfilePicture;

        //    return userEntityTemp;
        //}


    }
}