#author- Ratan Tejaswi
#db creation
 CREATE database ept_prj;

#author - Ratan Tejaswi
#tables creation
CREATE TABLE `employee_data` (
  `EID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  `rating_2023` float NOT NULL,
  `rating_2022` float NOT NULL,
  `rating_2021` float NOT NULL,
  `Salary_2023` float DEFAULT NULL,
  `Salary_2022` float DEFAULT NULL,
  `Salary_2021` float DEFAULT NULL,
  `Comments` varchar(200) NOT NULL,
  `performance_review_date` date NOT NULL,
  `reviewer_name` varchar(45) NOT NULL,
  `project_name` varchar(45) NOT NULL,
  `project_start_date` date NOT NULL,
  `project_end_date` date NOT NULL,
  PRIMARY KEY (`EID`),
  UNIQUE KEY `EID` (`EID`)
) ENGINE=InnoDB AUTO_INCREMENT=560500 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#author - Ratan Tejaswi
CREATE TABLE `employee` (
  `EID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  PRIMARY KEY (`EID`),
  UNIQUE KEY `EID` (`EID`)
) ENGINE=InnoDB AUTO_INCREMENT=560500 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#author - Durga Sindhu
CREATE TABLE `performance_review` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `EID` int NOT NULL,
  `performance_review_date` date NOT NULL,
  `reviewer_name` varchar(45) NOT NULL,
  `rating_2023` float NOT NULL,
  `rating_2022` float NOT NULL,
  `rating_2021` float NOT NULL,
  `Comments` varchar(200) NOT NULL,
  PRIMARY KEY (`review_id`),
  KEY `EID` (`EID`),
  CONSTRAINT `performance_review_ibfk_1` FOREIGN KEY (`EID`) REFERENCES `employee` (`EID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#author - Durga Sindhu
CREATE TABLE `project` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `project_name` varchar(45) NOT NULL,
  `project_start_date` date NOT NULL,
  `project_end_date` date NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#author - Durga Sindhu
CREATE TABLE `project_employee` (
  `project_id` int NOT NULL,
  `EID` int NOT NULL,
  PRIMARY KEY (`project_id`,`EID`),
  KEY `EID` (`EID`),
  CONSTRAINT `project_employee_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`),
  CONSTRAINT `project_employee_ibfk_2` FOREIGN KEY (`EID`) REFERENCES `employee` (`EID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


#author - Ratan Tejaswi

CREATE TABLE `project_performance_review` (
  `review_id` int NOT NULL,
  `project_id` int NOT NULL,
  PRIMARY KEY (`review_id`,`project_id`),
  KEY `project_id` (`project_id`),
  CONSTRAINT `project_performance_review_ibfk_1` FOREIGN KEY (`review_id`) REFERENCES `performance_review` (`review_id`),
  CONSTRAINT `project_performance_review_ibfk_2` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#author - Ratan Tejaswi
CREATE TABLE `salary` (
  `salary_id` int NOT NULL AUTO_INCREMENT,
  `EID` int NOT NULL,
  `year` year NOT NULL,
  `salary` float NOT NULL,
  PRIMARY KEY (`salary_id`),
  KEY `EID` (`EID`),
  CONSTRAINT `salary_ibfk_1` FOREIGN KEY (`EID`) REFERENCES `employee` (`EID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#inserting values into tables

#author - Ratan Tejaswi

INSERT INTO employee_data (Name, Email, location, rating_2023, rating_2022, rating_2021, Comments, performance_review_date, reviewer_name, project_name, project_start_date, project_end_date)
VALUES ('Sindhu', 'duanim@iu.edu', 'Chicago', 4.5, 4.2, 4.8, 'Good performance', '2023-03-31', 'Prateek Sarkari', 'Project EPT', '2022-08-01', '2023-06-30'),
       ('Ratan', 'ravadap@iu.edu', 'NYC', 4.9, 4.5, 4.2, 'Excellent performance', '2023-03-31', 'Shane Toto', 'Project Wellness', '2022-02-01', '2023-07-31');

#author- Durga Sindhu
INSERT INTO employee (Name, Email, location)
VALUES ('Sindhu', 'duanim@iu.edu', 'Chicago'),
('Ratan', 'ravadap@iu.edu', 'NYC');

#author- Durga Sindhu
INSERT INTO performance_review (EID, performance_review_date, reviewer_name, rating_2023, rating_2022, rating_2021, Comments)
VALUES (560500, '2023-03-31', 'Prateek Sarkari', 4.5, 4.2, 4.8, 'Good performance'),
(560501, '2023-03-31', 'Shane Toto', 4.9, 4.5, 4.2, 'Excellent performance');

 #author- Durga Sindhu
INSERT INTO project (project_name, project_start_date, project_end_date)
VALUES ('Project EPT', '2022-08-01', '2023-06-30'),
('Project Wellness', '2022-02-01', '2023-07-31');

#author- Ratan Tejaswi
INSERT INTO project_employee (project_id, EID)
VALUES (1, 560500),
(2, 560501);

#author- Ratan Tejaswi
INSERT INTO project_performance_review (review_id, project_id)
VALUES (1, 1),
(2, 2);

#author- Ratan Tejaswi
INSERT INTO salary (EID, year, salary)
VALUES (560500, 2023, 80000),
(560501, 2023, 90000);

# Creating VIEWS
#author- Ratan Tejaswi
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `all_employee_data` AS
    SELECT 
        `e`.`EID` AS `EID`,
        `e`.`Name` AS `Name`,
        `e`.`Email` AS `Email`,
        `e`.`location` AS `location`,
        `p`.`performance_review_date` AS `performance_review_date`,
        `p`.`reviewer_name` AS `reviewer_name`,
        `p`.`rating_2023` AS `rating_2023`,
        `p`.`rating_2022` AS `rating_2022`,
        `p`.`rating_2021` AS `rating_2021`,
        `s`.`year` AS `year`,
        `s`.`salary` AS `salary`,
        `pe`.`project_id` AS `project_id`,
        `pr`.`project_name` AS `project_name`,
        `pr`.`project_start_date` AS `project_start_date`,
        `pr`.`project_end_date` AS `project_end_date`
    FROM
        ((((`employee` `e`
        LEFT JOIN `performance_review` `p` ON ((`e`.`EID` = `p`.`EID`)))
        LEFT JOIN `salary` `s` ON ((`e`.`EID` = `s`.`EID`)))
        LEFT JOIN `project_employee` `pe` ON ((`e`.`EID` = `pe`.`EID`)))
        LEFT JOIN `project` `pr` ON ((`pe`.`project_id` = `pr`.`project_id`)));
        
        
#author- Durga Sindhu
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `high_performing_employees` AS
    SELECT 
        `e`.`Name` AS `Name`,
        `p`.`performance_review_date` AS `performance_review_date`,
        `p`.`rating_2023` AS `rating_2023`,
        `p`.`rating_2022` AS `rating_2022`,
        `p`.`rating_2021` AS `rating_2021`
    FROM
        (`employee` `e`
        JOIN `performance_review` `p` ON ((`e`.`EID` = `p`.`EID`)))
    WHERE
        ((`p`.`rating_2023` >= 4));
        
#author- Durga Sindhu
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `employee_salary_data` AS
    SELECT 
        `e`.`Name` AS `Name`,
        `s`.`year` AS `year`,
        `s`.`salary` AS `salary`
    FROM
        (`employee` `e`
        LEFT JOIN `salary` `s` ON ((`e`.`EID` = `s`.`EID`)));

            

