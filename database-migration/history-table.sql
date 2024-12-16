#
# TABLE STRUCTURE FOR: history
#

DROP TABLE IF EXISTS `history`;

CREATE TABLE `history` (
  `id` varchar(255) NOT NULL,
  `crop_name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `month` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

