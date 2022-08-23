CREATE DATABASE IF NOT EXISTS secureNodeJsRestAPIsDB_partTwo_v2;
use secureNodeJsRestAPIsDB_partTwo_v2;

CREATE TABLE IF NOT EXISTS `users` (
`id` INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(50) NOT NULL,
`email` VARCHAR(50) UNIQUE,
`password` VARCHAR(255),
`userRole` VARCHAR(10) NOT NULL,
`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`updatedAt` TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `customers` (
`id` INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(50) NOT NULL,
`username` VARCHAR(50) NOT NULL UNIQUE,
`email` VARCHAR(50) UNIQUE,
`password` VARCHAR(255)  ,
`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`updatedAt` TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `posts` (
`post_id` INT PRIMARY KEY AUTO_INCREMENT,
`customerId` int,
`title` VARCHAR(255) NOT NULL,
`body` TEXT,
`published` BOOLEAN  DEFAULT false,
`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`updatedAt` TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP,   
FOREIGN KEY (customerId) REFERENCES customers(id)
);



INSERT INTO `users` (`name`,`email`,`password`,`userRole`) VALUES('name2','email2@gmail.com','password', 'user');

INSERT INTO `customers` (`name`,`username`,`email`,`password`) VALUES( 'testName1','username1','email1@email.com','password'), ('testName2','username2','email2@email.com','password');
SELECT * FROM customers;

INSERT INTO `posts` (`customerId`,`title`,`body`) VALUES ( 1,'title1','body of title 1'),(1, 'title2','body of title 2');
SELECT * FROM posts;

/*
DROP TABLE customer;
DROP TABLE post;
DROP TABLE profile;
*/


	SELECT * FROM users;
    SELECT * FROM customers;
	SELECT * FROM post;
	