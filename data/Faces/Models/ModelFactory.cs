﻿using FriendAppDataModel;
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
            userModelTemp.DateOfBirth = entity.DateOfBirth;
            userModelTemp.City = entity.City;
            userModelTemp.State = entity.State;
            userModelTemp.AccountType = entity.AccountType;
            userModelTemp.Gender = entity.Gender;
            userModelTemp.AboutMe = entity.AboutMe;
            
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

            userEntityTemp.Id = model.Id;
            userEntityTemp.FirstName = model.FirstName;
            userEntityTemp.LastName = model.LastName;
            userEntityTemp.Password = model.Password;
            userEntityTemp.Email = model.Email;
            userEntityTemp.Phone = model.Phone;
            userEntityTemp.DateOfBirth = model.DateOfBirth;
            userEntityTemp.City = model.City;
            userEntityTemp.State = model.State;
            userEntityTemp.AccountType = model.AccountType;
            userEntityTemp.Gender = model.Gender;
            userEntityTemp.AboutMe = model.AboutMe;

            userEntityTemp.ProfilePicture = model.ProfilePicture;

            foreach (var u in model.Friends)
            {
                userEntityTemp.Friends.Add(ParseFriendModelToEntiy(u));
            }

            return userEntityTemp;
        }

        public static FriendModel ParseFriendEntityToModel(Friends entity)
        {
            var model = new FriendModel();
            model.Status = entity.Status;
            model.RequestTime = entity.RequestTime;
            model.CompletedRequest = entity.CompletedRequest;

            model.Id = entity.FriendId;
            model.Email = entity.Friend.Email;
            model.ProfilePicture = entity.Friend.ProfilePicture;

            return model;
        }

        public static Friends ParseFriendModelToEntiy(FriendModel model)
        {
            var entity = new Friends();
            entity.Status = model.Status;
            entity.RequestTime = model.RequestTime;
            entity.CompletedRequest = model.CompletedRequest;

            entity.Id = model.Id;
            entity.Friend.Email = model.Email;
            entity.Friend.ProfilePicture = model.ProfilePicture;

            return entity;
        }


    }
}