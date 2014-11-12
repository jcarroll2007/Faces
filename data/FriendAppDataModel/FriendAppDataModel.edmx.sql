
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 11/12/2014 09:20:52
-- Generated from EDMX file: C:\inetpub\wwwroot\PROJECTS\DIGITALINVENTORS\MySite\robertryanmorris\FacesWebApp\Faces\data\FriendAppDataModel\FriendAppDataModel.edmx
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
IF OBJECT_ID(N'[dbo].[FK_UserWall]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Walls] DROP CONSTRAINT [FK_UserWall];
GO
IF OBJECT_ID(N'[dbo].[FK_PostTags]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[WallPostTagsTables] DROP CONSTRAINT [FK_PostTags];
GO
IF OBJECT_ID(N'[dbo].[FK_WallPost]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[WallPostTagsTables] DROP CONSTRAINT [FK_WallPost];
GO
IF OBJECT_ID(N'[dbo].[FK_UserMessage]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Messages] DROP CONSTRAINT [FK_UserMessage];
GO
IF OBJECT_ID(N'[dbo].[FK_UserMessage1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Messages] DROP CONSTRAINT [FK_UserMessage1];
GO
IF OBJECT_ID(N'[dbo].[FK_UserTags]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SubscribedTags] DROP CONSTRAINT [FK_UserTags];
GO
IF OBJECT_ID(N'[dbo].[FK_SubscribedTagsTags]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SubscribedTags] DROP CONSTRAINT [FK_SubscribedTagsTags];
GO
IF OBJECT_ID(N'[dbo].[FK_UserUserTokens]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[UserTokens] DROP CONSTRAINT [FK_UserUserTokens];
GO
IF OBJECT_ID(N'[dbo].[FK_CommentsUser]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Comments] DROP CONSTRAINT [FK_CommentsUser];
GO
IF OBJECT_ID(N'[dbo].[FK_CommentsWall]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Comments] DROP CONSTRAINT [FK_CommentsWall];
GO
IF OBJECT_ID(N'[dbo].[FK_WallUser]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Walls] DROP CONSTRAINT [FK_WallUser];
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
IF OBJECT_ID(N'[dbo].[Messages]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Messages];
GO
IF OBJECT_ID(N'[dbo].[SubscribedTags]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SubscribedTags];
GO
IF OBJECT_ID(N'[dbo].[UserTokens]', 'U') IS NOT NULL
    DROP TABLE [dbo].[UserTokens];
GO
IF OBJECT_ID(N'[dbo].[Comments]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Comments];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Email] nvarchar(max)  NOT NULL,
    [Password] nvarchar(max)  NOT NULL,
    [FirstName] nvarchar(max)  NOT NULL,
    [LastName] nvarchar(max)  NOT NULL,
    [Phone] nvarchar(max)  NULL,
    [DateOfBirth] datetime  NULL,
    [City] nvarchar(max)  NULL,
    [AccountType] int  NOT NULL,
    [AboutMe] nvarchar(max)  NULL,
    [Gender] char(1)  NULL,
    [State] char(2)  NULL,
    [ProfilePicture] nvarchar(max)  NULL
);
GO

-- Creating table 'Friends'
CREATE TABLE [dbo].[Friends] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Status] int  NOT NULL,
    [UserId] int  NOT NULL,
    [FriendId] int  NOT NULL,
    [ActionDate] datetime  NOT NULL
);
GO

-- Creating table 'Walls'
CREATE TABLE [dbo].[Walls] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [UserId] int  NOT NULL,
    [Message] nvarchar(max)  NOT NULL,
    [Picture] varchar(max)  NULL,
    [PostTime] datetime  NOT NULL,
    [PosterId] int  NOT NULL
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

-- Creating table 'Messages'
CREATE TABLE [dbo].[Messages] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [TimeSent] datetime  NOT NULL,
    [MessageText] nvarchar(max)  NOT NULL,
    [FromUserId] int  NOT NULL,
    [ToUserId] int  NOT NULL
);
GO

-- Creating table 'SubscribedTags'
CREATE TABLE [dbo].[SubscribedTags] (
    [TagId] int IDENTITY(1,1) NOT NULL,
    [UserId] int  NOT NULL,
    [Tag_Id] int  NOT NULL
);
GO

-- Creating table 'UserTokens'
CREATE TABLE [dbo].[UserTokens] (
    [Id] int  NOT NULL,
    [Token] nvarchar(max)  NULL
);
GO

-- Creating table 'Comments'
CREATE TABLE [dbo].[Comments] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [CommentText] nvarchar(1000)  NOT NULL,
    [CommentDatetime] datetime  NOT NULL,
    [UserId] int  NOT NULL,
    [WallId] int  NOT NULL
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

-- Creating primary key on [Id] in table 'Messages'
ALTER TABLE [dbo].[Messages]
ADD CONSTRAINT [PK_Messages]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [TagId] in table 'SubscribedTags'
ALTER TABLE [dbo].[SubscribedTags]
ADD CONSTRAINT [PK_SubscribedTags]
    PRIMARY KEY CLUSTERED ([TagId] ASC);
GO

-- Creating primary key on [Id] in table 'UserTokens'
ALTER TABLE [dbo].[UserTokens]
ADD CONSTRAINT [PK_UserTokens]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Comments'
ALTER TABLE [dbo].[Comments]
ADD CONSTRAINT [PK_Comments]
    PRIMARY KEY CLUSTERED ([Id] ASC);
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

-- Creating foreign key on [FromUserId] in table 'Messages'
ALTER TABLE [dbo].[Messages]
ADD CONSTRAINT [FK_UserMessage]
    FOREIGN KEY ([FromUserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserMessage'
CREATE INDEX [IX_FK_UserMessage]
ON [dbo].[Messages]
    ([FromUserId]);
GO

-- Creating foreign key on [ToUserId] in table 'Messages'
ALTER TABLE [dbo].[Messages]
ADD CONSTRAINT [FK_UserMessage1]
    FOREIGN KEY ([ToUserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserMessage1'
CREATE INDEX [IX_FK_UserMessage1]
ON [dbo].[Messages]
    ([ToUserId]);
GO

-- Creating foreign key on [UserId] in table 'SubscribedTags'
ALTER TABLE [dbo].[SubscribedTags]
ADD CONSTRAINT [FK_UserTags]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserTags'
CREATE INDEX [IX_FK_UserTags]
ON [dbo].[SubscribedTags]
    ([UserId]);
GO

-- Creating foreign key on [Tag_Id] in table 'SubscribedTags'
ALTER TABLE [dbo].[SubscribedTags]
ADD CONSTRAINT [FK_SubscribedTagsTags]
    FOREIGN KEY ([Tag_Id])
    REFERENCES [dbo].[Tags]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SubscribedTagsTags'
CREATE INDEX [IX_FK_SubscribedTagsTags]
ON [dbo].[SubscribedTags]
    ([Tag_Id]);
GO

-- Creating foreign key on [Id] in table 'UserTokens'
ALTER TABLE [dbo].[UserTokens]
ADD CONSTRAINT [FK_UserUserTokens]
    FOREIGN KEY ([Id])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [UserId] in table 'Comments'
ALTER TABLE [dbo].[Comments]
ADD CONSTRAINT [FK_CommentsUser]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CommentsUser'
CREATE INDEX [IX_FK_CommentsUser]
ON [dbo].[Comments]
    ([UserId]);
GO

-- Creating foreign key on [WallId] in table 'Comments'
ALTER TABLE [dbo].[Comments]
ADD CONSTRAINT [FK_CommentsWall]
    FOREIGN KEY ([WallId])
    REFERENCES [dbo].[Walls]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CommentsWall'
CREATE INDEX [IX_FK_CommentsWall]
ON [dbo].[Comments]
    ([WallId]);
GO

-- Creating foreign key on [PosterId] in table 'Walls'
ALTER TABLE [dbo].[Walls]
ADD CONSTRAINT [FK_WallUser]
    FOREIGN KEY ([PosterId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_WallUser'
CREATE INDEX [IX_FK_WallUser]
ON [dbo].[Walls]
    ([PosterId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------