CREATE DATABASE IF NOT EXISTS nodeJsRestAPIsDB_partTwo_v2;
USE nodeJsRestAPIsDB_partTwo_v2;

CREATE TABLE IF NOT EXISTS `admins` (
`id` INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(50) NOT NULL,
`email` VARCHAR(50) UNIQUE,
`password` VARCHAR(255) NOT NULL,
`non_hashed_password` VARCHAR(255),
`userRole` VARCHAR(10) NOT NULL,
`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`updatedAt` TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP
);
# OBS: REMOVE NON_HASHED_PASSWORD. THIS IS TO REMEMBER THE PASSWORD.

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
`id` INT PRIMARY KEY AUTO_INCREMENT,
`customerId` int NOT NULL,
`title` VARCHAR(255) NOT NULL,
`body` TEXT NOT NULL,
`published` BOOLEAN  DEFAULT false,
`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`updatedAt` TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP,   
FOREIGN KEY (customerId) REFERENCES customers(id)
);



INSERT INTO `admins` (`name`,`email`,`password`,`non_hashed_password`,`userRole`) VALUES 
('Admin','admin@gmail.com','$2b$10$a23k69bRGNScLhllb7iwVe5V.EsdmxvsZMxbJHHm53B1gnT9MPyva',  'password','admin'),
('User','user@gmail.com','$2b$10$OP9JvjZgIB0wR1MGETPRaOeNlags5kGSAH9.IIlhRwR3ma0.mYLR.', 'password','user');

INSERT INTO `customers` (`name`,`username`,`email`,`password`) VALUES
('Quincy','Ewell42','Kristy.Kirlin54@hotmail.com','password'), 
  ('Richie', 'Josiane.Okuneva', 'Bobby65@yahoo.com','ZVSzQtsi6hww9t4'),
  ('Brad', 'Hugh.Huel', 'Javier.Aufderhar@gmail.com','E9RWbXUc8DrVbhq'),
  ('Blaise', 'Adela_Paucek7', 'Raphael_Klein59@gmail.com','7VF7mISredblDyV'),
  ('Cedrick', 'Harley_Hickle28', 'Litzy24@yahoo.com','Fu8eFL0PkjqUNug'),
  ('Chris', 'Alexandra44', 'Destin.Schultz47@hotmail.com','4t78uV6SGWsJGdC'),
  ('Dino', 'Jeanie35', 'Laura.Graham58@yahoo.com','NS1NeQnzse4dn9_'),
  ('Austen', 'Zachary61', 'Lavern.McClure@yahoo.com','zxcRGc48DFrw5s2'),
  ('Rafaela', 'Sigurd63', 'Uriel.Jacobs95@hotmail.com','gfTXEhHLog7dGTR'),
  ('Brook', 'Marie_Farrell', 'Mabelle9@gmail.com','4HWMUKFwUaYnuF5'),
  ('Markus', 'Jordan90', 'Eugenia.Emard@gmail.com','NzAJSpW75PcBssc'),
  ('Mayra', 'Harmony_Yost', 'Jayne23@yahoo.com','RDDVaJs7uahaScR'),
  ('Tianna', 'Louvenia.Brekke', 'Onie.Bosco@yahoo.com','wsZAiirciLsjpID'),
  ('Alia', 'Roxane.Feest30', 'Sandy.Bechtelar58@yahoo.com','tkD3KT2WTNx7ttZ'),
  ('Dagmar', 'Lucious.Smith10', 'Braulio53@hotmail.com','_j1aib6AG46ueIm'),
  ('Karl', 'Nora54', 'Orrin.Hackett68@hotmail.com','FGZlF0gmaPjTmBs'),
  ('Carson', 'John.Marvin84', 'Virgil44@gmail.com','Tv_YkoCEDeuIIPg'),
  ('Elbert', 'Lenny.Harvey7', 'Rolando5@gmail.com','LKhzqQANsFTI4Fx'),
  ('Alek', 'Jacky.DuBuque25', 'Carmen15@gmail.com','ayPb8Cng_zHOadp'),
  ('Eliza', 'Kianna_Conn', 'Emmitt2@hotmail.com','ImEPThCnLzhNaU6'),
  ('Ernestina', 'Mallie_Wilkinson44', 'Khalil.Bruen@hotmail.com','YiLe5OivxWK0eeO');


INSERT INTO `posts` (`customerId`,`title`,`body`) VALUES 
( 1,'title1','body of title 1'),(1, 'title2','body of title 2'),
  (1,'eaque debitis labore', 'id quia tenetur magni consequatur minus tempora voluptatem'),
  (1,'ipsa quibusdam deserunt', 'voluptate ad explicabo rerum quasi temporibus consequatur numquam'),
  (2,'nam ut libero', 'qui laboriosam cum porro nihil adipisci iusto veniam'),
  (3,'qui est itaque', 'voluptate illum tempore quae veniam amet quisquam omnis'),
  (4,'id sint quia', 'neque delectus quo repellendus nisi ducimus alias odio'),
  (4,'id modi repellat', 'corporis sed sunt reprehenderit voluptatibus at veniam distinctio'),
  (5,'praesentium aut qui', 'sunt sint inventore veritatis molestiae laborum dicta voluptatibus'),
  (5,'quia sed dolorem', 'similique modi nisi cumque sed reiciendis vel illum'),
  (6,'aliquid est accusamus', 'culpa ut autem nulla quos officia dolore quasi'),
  (7,'rerum eius omnis', 'sit vel expedita praesentium repellat est omnis est'),
  (7,'rerum laboriosam laudantium', 'qui sint necessitatibus amet explicabo rerum temporibus quae'),
  (7,'sit et neque', 'quia a non in voluptas eos voluptatum cupiditate'),
  (1,'vero tempore atque', 'sit aut et eveniet dolore et deserunt distinctio'),
  (2,'dignissimos rerum accusamus', 'consequatur cum provident temporibus quia possimus laborum nesciunt'),
  (3,'molestias omnis vel', 'molestiae non maxime deserunt perspiciatis sit illo sapiente'),
  (3,'ut quaerat odit', 'ipsam occaecati soluta distinctio quia quis reiciendis tempora'),
  (3,'voluptatem harum cum', 'voluptatem quia numquam nam aut et minima quis'),
  (12,'sit beatae sunt', 'quisquam quaerat sit inventore totam qui hic atque'),
  (12,'omnis optio rerum', 'eos ut voluptatem odio et non optio fugiat'),
  (21,'aut quas voluptas', 'eius aut ipsam aut quia quia et non'),
  (20,'sed cupiditate unde', 'pariatur iste blanditiis ad nostrum sequi aspernatur perferendis'),
  (19,'dolorem eum nihil', 'expedita quasi veniam maxime perspiciatis sint eum velit'),
  (16,'omnis ut eum', 'nihil autem incidunt quo quos aut deserunt consequatur'),
  (17,'delectus fugit enim', 'et sit magnam esse ut eos provident itaque'),
  (15,'rerum maiores hic', 'quos vel non dolor excepturi doloremque debitis deserunt'),
  (1,'a ipsum reprehenderit', 'aut rerum maxime id fuga quibusdam consectetur impedit'),
  (3,'assumenda animi sit', 'nisi sit magnam accusamus asperiores ducimus eius dignissimos'),
  (5,'eum quod quaerat', 'saepe rem sunt voluptatum ipsa ab odio ut'),
  (10,'laboriosam sit eum', 'at magnam earum aut aperiam accusantium facere minima'),
  (2,'aut eum voluptas', 'inventore minima repellendus sunt iusto modi magnam sunt');



/*
DROP TABLE customers;
DROP TABLE posts;
DROP TABLE admins;
*/
SET SQL_SAFE_UPDATES = 1;
	/*DELETE FROM admins;
    DELETE FROM posts;
    */
	SELECT * FROM admins;
    SELECT * FROM customers;
	SELECT * FROM posts;
    
    SELECT * FROM posts WHERE id =1;
    SELECT * FROM posts WHERE customerId = 1;
    
    SELECT * FROM posts where customerId = 1 AND id =1;
    
    SELECT * FROM admins WHERE email = "softhouse@gmail.com";
	