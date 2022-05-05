create database food_order;
use food_order;
CREATE TABLE IF NOT EXISTS `sign_up` (
 `Name` varchar(50) NOT NULL,
 `phone` varchar(10) NOT NULL,
 `email` varchar(20) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(15) NOT NULL,
  `zip` varchar(100) NOT NULL,
PRIMARY KEY (`phone`)
);

CREATE TABLE IF NOT EXISTS `order_now` (
 `Name` varchar(50) NOT NULL,
 `Address` varchar(50) NOT NULL,
 `phone` varchar(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS `book_now` (
 `Name` varchar(50) NOT NULL,
 `phone` varchar(10) NOT NULL,
  `email` varchar(20) NOT NULL,
  `date` date,
  `time` time,
  `noa` numeric
);


