# DATABASE QUERIES

***

```sql
CREATE DATABASE IF NOT EXISTS secureNodeJsRestAPIsDB_partTwo_v2;
```

```sql
use secureNodeJsRestAPIsDB_partTwo_v2;
```

```sql
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) UNIQUE,
    `password` VARCHAR(255)  
);
```

***

```sql

CREATE TABLE IF NOT EXISTS `post` (
  `post_id` INT PRIMARY KEY AUTO_INCREMENT,
   `userId` int,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` VARCHAR(255) NOT NULL,
  `body` TEXT,
  `published` BOOLEAN  DEFAULT false,
   
   FOREIGN KEY (userId) REFERENCES users(id)
);
```

```sql

CREATE TABLE IF NOT EXISTS `profile` (
  `profile_id` INT PRIMARY KEY AUTO_INCREMENT,
    `userId` int,
    `username` VARCHAR(255) NOT NULL UNIQUE,
  `bio` TEXT,

   FOREIGN KEY (userId) REFERENCES users(id)
);
```

```sql
INSERT INTO `users` (`name`,`email`,`password`) VALUES( 'testName1','email1@email.com','password'), ('testName2','email2@email.com','password');
```

```sql
SELECT * FROM users;
```

```sql
INSERT INTO `post` (`title`,`body`,`userId`) VALUES ( 'title1','body of title 1',1),( 'title2','body of title 2',1);
```

```sql
SELECT * FROM post;
```

```sql
INSERT INTO `profile` (`userId`,`bio`,`username`) VALUES( 1,'bio text here 1','username1');
```

```sql
SELECT * FROM profile;
```

***

## END OF DATABASE QUERIES
