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
            userModelTemp.FirstName = entity.FirstName;
            userModelTemp.LastName = entity.LastName;
            userModelTemp.Password = entity.Password;
            userModelTemp.Email = entity.Email;
            userModelTemp.Phone = entity.Phone;
            userModelTemp.DateOfBirth = entity.DateOfBirth.ToShortDateString();
            userModelTemp.City = entity.City;
            userModelTemp.State = entity.State;
            userModelTemp.AccountType = entity.AccountType;
            userModelTemp.Gender = entity.Gender;
            userModelTemp.AboutMe = entity.AboutMe;
            //userModelTemp.ProfilePicture = entity.ProfilePicture;

            if(entity.UserToken != null)
            userModelTemp.Token = entity.UserToken.Token;

            foreach (var u in entity.Friends)
            {
                userModelTemp.Friends.Add(ParseFriendEntityToModel(u));
            }

            foreach (var w in entity.Post)
            {
                userModelTemp.Post.Add(ParseWallEntityToModel(w));
            }

            return userModelTemp;

        }

        public static User ParseUserModelToEntity(UserModel model)
        {
            var userEntityTemp = new User();

            userEntityTemp.Id = model.Id;
            userEntityTemp.FirstName = model.FirstName;
            userEntityTemp.LastName = model.LastName;
            userEntityTemp.Password = model.Password;
            userEntityTemp.Email = model.Email;
            userEntityTemp.Phone = model.Phone;
            userEntityTemp.DateOfBirth = Convert.ToDateTime(model.DateOfBirth);
            userEntityTemp.City = model.City;
            userEntityTemp.State = model.State;
            userEntityTemp.AccountType = model.AccountType;
            userEntityTemp.Gender = model.Gender;
            userEntityTemp.AboutMe = model.AboutMe;
            //userEntityTemp.ProfilePicture = model.ProfilePicture;

            if(model.Token != null)
            userEntityTemp.UserToken.Token = model.Token;

            foreach (var u in model.Friends)
            {
                userEntityTemp.Friends.Add(ParseFriendModelToEntiy(u));
            }

            foreach (var w in model.Post)
            {
                userEntityTemp.Post.Add(ParseWallModelToEntity(w));
            }

            return userEntityTemp;
        }

        public static FriendModel ParseFriendEntityToModel(Friends entity)
        {
            var model = new FriendModel();
            model.Status = entity.Status;
            model.ActionDate = entity.ActionDate;
            model.Id = entity.FriendId;
            model.Email = entity.Friend.Email;
            //model.ProfilePicture = entity.Friend.ProfilePicture;

            return model;
        }

        public static Friends ParseFriendModelToEntiy(FriendModel model)
        {
            var entity = new Friends();
            entity.Status = model.Status;
            entity.ActionDate = model.ActionDate;
            entity.Id = model.Id;
            entity.Friend.Email = model.Email;
            //entity.Friend.ProfilePicture = model.ProfilePicture;

            return entity;
        }

        private static WallModel ParseWallEntityToModel(Wall u)
        {
            var model = new WallModel();
            model.Id = u.Id;
            model.UserId = u.UserId;
            model.PosterId = u.PosterId;
            model.Message = u.Message;
            model.Picture = u.Picture;
            model.PostTime = u.PostTime;

            foreach (var m in u.PostTags)
            {
                WallPostTagsTable temp = new WallPostTagsTable();
                temp = m;
                model.PostTags.Add(temp.Tag);
            }

            foreach (var m in u.Comments)
            {
                model.Comments.Add(ParseCommentEntityToModel(m));
            }

            return model;
        }

        private static Wall ParseWallModelToEntity(WallModel model)
        {
            var entity = new Wall();
            entity.Id = model.Id;
            entity.UserId = model.Id;
            entity.PosterId = model.Id;
            entity.Message = model.Message;
            entity.Picture = model.Picture;
            entity.PostTime = model.PostTime;

            foreach (var m in model.PostTags)
            {
                WallPostTagsTable temp = new WallPostTagsTable();
                temp.Tag = m;
                entity.PostTags.Add(temp);
            }

            foreach (var c in model.Comments)
            {
                entity.Comments.Add(ParseCommentModelToEntity(c));
            }

            return entity;
        }

        private static CommentModel ParseCommentEntityToModel(Comments u)
        {
            var model = new CommentModel();
            model.Id = u.Id;
            model.CommentText = u.CommentText;
            model.CommentDatetime = u.CommentDatetime;
            model.UserId = u.UserId;
            model.WallId = u.WallId;

            return model;
        }

        private static Comments ParseCommentModelToEntity(CommentModel model)
        {
            var entity = new Comments();
            entity.Id = model.Id;
            entity.CommentText = model.CommentText;
            entity.CommentDatetime = model.CommentDatetime;
            entity.UserId = model.UserId;
            entity.WallId = model.WallId;

            return entity;
        }


    }
}