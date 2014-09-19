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

            foreach (var u in entity.Friends)
            {
                userModelTemp.Friends.Add(ParseFriendEntityToModel(u));
            }

            return userModelTemp;

        }

        public static User ParseUserModelToEntity(UserModel model)
        {
            var userEntityTemp = new User();

            userEntityTemp.Username = model.Username;
            userEntityTemp.Password = model.Password;
            userEntityTemp.Id = model.Id;
            userEntityTemp.ProfilePicture = model.ProfilePicture;

            return userEntityTemp;
        }

        public static FriendModel ParseFriendEntityToModel(Friends entity)
        {
            var model = new FriendModel();
            model.Status = entity.Status;
            model.RequestTime = entity.RequestTime;
            model.CompletedRequest = entity.CompletedRequest;

            model.Id = entity.FriendId;
            model.Username = entity.Friend.Username;
            model.ProfilePicture = entity.Friend.ProfilePicture;

            return model;
        }


    }
}