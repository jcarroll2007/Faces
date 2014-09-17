
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 09/17/2014 15:28:45
-- Generated from EDMX file: C:\Users\scoobydoo\Documents\Visual Studio 2013\Projects\Faces\FriendAppDataModel\FriendAppDataModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [FriendAppDB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_UserFriends]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Friends] DROP CONSTRAINT [FK_UserFriends];
GO
IF OBJECT_ID(N'[dbo].[FK_UserFriends1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Friends] DROP CONSTRAINT [FK_UserFriends1];
GO
IF OBJECT_ID(N'[dbo].[FK_UserTags_User]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[UserTags] DROP CONSTRAINT [FK_UserTags_User];
GO
IF OBJECT_ID(N'[dbo].[FK_UserTags_Tags]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[UserTags] DROP CONSTRAINT [FK_UserTags_Tags];
GO
IF OBJECT_ID(N'[dbo].[FK_UserWall]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Walls] DROP CONSTRAINT [FK_UserWall];
GO
IF OBJECT_ID(N'[dbo].[FK_PostTags]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[WallPostTagsTables] DROP CONSTRAINT [FK_PostTags];
GO
IF OBJECT_ID(N'[dbo].[FK_WallPost]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[WallPostTagsTables] DROP CONSTRAINT [FK_WallPost];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Users];
GO
IF OBJECT_ID(N'[dbo].[Friends]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Friends];
GO
IF OBJECT_ID(N'[dbo].[Walls]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Walls];
GO
IF OBJECT_ID(N'[dbo].[Tags]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Tags];
GO
IF OBJECT_ID(N'[dbo].[WallPostTagsTables]', 'U') IS NOT NULL
    DROP TABLE [dbo].[WallPostTagsTables];
GO
IF OBJECT_ID(N'[dbo].[UserTags]', 'U') IS NOT NULL
    DROP TABLE [dbo].[UserTags];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Username] nvarchar(max)  NOT NULL,
    [Password] nvarchar(max)  NOT NULL,
    [ProfilePicture] varbinary(max)  NULL
);
GO

-- Creating table 'Friends'
CREATE TABLE [dbo].[Friends] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Status] int  NOT NULL,
    [UserId] int  NOT NULL,
    [FriendId] int  NOT NULL,
    [RequestTime] datetime  NOT NULL,
    [CompletedRequest] datetime  NOT NULL
);
GO

-- Creating table 'Walls'
CREATE TABLE [dbo].[Walls] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [UserId] int  NOT NULL,
    [Message] nvarchar(max)  NOT NULL,
    [Picture] varbinary(max)  NOT NULL,
    [PostTime] datetime  NOT NULL
);
GO

-- Creating table 'Tags'
CREATE TABLE [dbo].[Tags] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Description] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'WallPostTagsTables'
CREATE TABLE [dbo].[WallPostTagsTables] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [WallId] int  NOT NULL,
    [TagsId] int  NOT NULL
);
GO

-- Creating table 'UserTags'
CREATE TABLE [dbo].[UserTags] (
    [Users_Id] int  NOT NULL,
    [Tags_Id] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Friends'
ALTER TABLE [dbo].[Friends]
ADD CONSTRAINT [PK_Friends]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Walls'
ALTER TABLE [dbo].[Walls]
ADD CONSTRAINT [PK_Walls]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Tags'
ALTER TABLE [dbo].[Tags]
ADD CONSTRAINT [PK_Tags]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'WallPostTagsTables'
ALTER TABLE [dbo].[WallPostTagsTables]
ADD CONSTRAINT [PK_WallPostTagsTables]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Users_Id], [Tags_Id] in table 'UserTags'
ALTER TABLE [dbo].[UserTags]
ADD CONSTRAINT [PK_UserTags]
    PRIMARY KEY CLUSTERED ([Users_Id], [Tags_Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [UserId] in table 'Friends'
ALTER TABLE [dbo].[Friends]
ADD CONSTRAINT [FK_UserFriends]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserFriends'
CREATE INDEX [IX_FK_UserFriends]
ON [dbo].[Friends]
    ([UserId]);
GO

-- Creating foreign key on [FriendId] in table 'Friends'
ALTER TABLE [dbo].[Friends]
ADD CONSTRAINT [FK_UserFriends1]
    FOREIGN KEY ([FriendId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserFriends1'
CREATE INDEX [IX_FK_UserFriends1]
ON [dbo].[Friends]
    ([FriendId]);
GO

-- Creating foreign key on [Users_Id] in table 'UserTags'
ALTER TABLE [dbo].[UserTags]
ADD CONSTRAINT [FK_UserTags_User]
    FOREIGN KEY ([Users_Id])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Tags_Id] in table 'UserTags'
ALTER TABLE [dbo].[UserTags]
ADD CONSTRAINT [FK_UserTags_Tags]
    FOREIGN KEY ([Tags_Id])
    REFERENCES [dbo].[Tags]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserTags_Tags'
CREATE INDEX [IX_FK_UserTags_Tags]
ON [dbo].[UserTags]
    ([Tags_Id]);
GO

-- Creating foreign key on [UserId] in table 'Walls'
ALTER TABLE [dbo].[Walls]
ADD CONSTRAINT [FK_UserWall]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserWall'
CREATE INDEX [IX_FK_UserWall]
ON [dbo].[Walls]
    ([UserId]);
GO

-- Creating foreign key on [WallId] in table 'WallPostTagsTables'
ALTER TABLE [dbo].[WallPostTagsTables]
ADD CONSTRAINT [FK_PostTags]
    FOREIGN KEY ([WallId])
    REFERENCES [dbo].[Walls]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PostTags'
CREATE INDEX [IX_FK_PostTags]
ON [dbo].[WallPostTagsTables]
    ([WallId]);
GO

-- Creating foreign key on [TagsId] in table 'WallPostTagsTables'
ALTER TABLE [dbo].[WallPostTagsTables]
ADD CONSTRAINT [FK_WallPost]
    FOREIGN KEY ([TagsId])
    REFERENCES [dbo].[Tags]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_WallPost'
CREATE INDEX [IX_FK_WallPost]
ON [dbo].[WallPostTagsTables]
    ([TagsId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------