CREATE TABLE IF NOT EXISTS `houses` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `price_value` FLOAT NOT NULL,
  `price_currency` VARCHAR(3) NOT NULL,
  `market_date` DATE NOT NULL,
  `size_rooms` INT NOT NULL,
  `size_living_area` INT NOT NULL,
  `link` VARCHAR(255) UNIQUE,
  `location_country` VARCHAR(50) NOT NULL,
  `location_city` VARCHAR(50) NOT NULL,
  `location_address` VARCHAR(100),
  `location_coordinates_lat` FLOAT,
  `location_coordinates_lng` FLOAT,
  `title` VARCHAR(255),
  `description` TEXT,
  `images` TEXT,
  `sold` TINYINT(1)
);