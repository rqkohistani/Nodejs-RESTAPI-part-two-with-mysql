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
    `name` VARCHAR(50),
    `email` VARCHAR(50) UNIQUE,
    `password` VARCHAR(255)
);
```

```sql
INSERT INTO `users` (`name`,`email`,`password`) VALUES( 'testName','email1@email.com','password'), ('testName2','email2@email.com','password');
```

```sql
SELECT * FROM users;
```

***

## END OF DATABASE QUERIES

```sql
SELECT * FROM table_name;
```

```sql

## CREATE database

```sql
CREATE DATABASE database_name;
```

## CREATE table

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
```

## ALTER table

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

## DROP table

```sql
DROP TABLE table_name;
```

## INSERT INTO table

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

## UPDATE table

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

## DELETE FROM table

```sql
DELETE FROM table_name
WHERE condition;
```

## SELECT columns

```sql
SELECT column1, column2, ...
FROM table_name;
```

## SELECT DISTINCT

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

## WHERE

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

## ORDER BY

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

## INSERT INTO SELECT

```sql
INSERT INTO table_name1 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table_name2
WHERE condition;
```

## SELECT TOP

```sql
SELECT TOP number|percent column_name(s)
FROM table_name
WHERE condition;
```

## SELECT INTO

```sql
SELECT column_name(s)
INTO new_table_name
FROM old_table_name
WHERE condition;
```

## SELECT INTO

```sql
SELECT column_name(s)
INTO new_table_name
FROM old_table_name
WHERE condition;
```

## CREATE INDEX

```sql
CREATE INDEX index_name
ON table_name (column1, column2, ...);
```

## DROP INDEX

```sql
DROP INDEX index_name ON table_name;
```

## JOIN

```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```

## LEFT JOIN

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
```

## RIGHT JOIN

```sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
```

***
