-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 17, 2020 at 02:47 PM
-- Server version: 5.7.20-log
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pfev2`
--
CREATE DATABASE IF NOT EXISTS `pfev2` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `pfev2`;

-- --------------------------------------------------------

--
-- Table structure for table `core_store`
--

DROP TABLE IF EXISTS `core_store`;
CREATE TABLE IF NOT EXISTS `core_store` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `key` varchar(255) DEFAULT NULL,
  `value` longtext,
  `type` varchar(255) DEFAULT NULL,
  `environment` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `core_store`
--

INSERT INTO `core_store` (`id`, `key`, `value`, `type`, `environment`, `tag`) VALUES
(1, 'db_model_users-permissions_permission', '{\"type\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"controller\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"action\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"enabled\":{\"type\":\"boolean\",\"required\":true,\"configurable\":false},\"policy\":{\"type\":\"string\",\"configurable\":false},\"role\":{\"model\":\"role\",\"via\":\"permissions\",\"plugin\":\"users-permissions\",\"configurable\":false}}', 'object', NULL, NULL),
(2, 'db_model_upload_file', '{\"name\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"alternativeText\":{\"type\":\"string\",\"configurable\":false},\"caption\":{\"type\":\"string\",\"configurable\":false},\"width\":{\"type\":\"integer\",\"configurable\":false},\"height\":{\"type\":\"integer\",\"configurable\":false},\"formats\":{\"type\":\"json\",\"configurable\":false},\"hash\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"ext\":{\"type\":\"string\",\"configurable\":false},\"mime\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"size\":{\"type\":\"decimal\",\"configurable\":false,\"required\":true},\"url\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"previewUrl\":{\"type\":\"string\",\"configurable\":false},\"provider\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"provider_metadata\":{\"type\":\"json\",\"configurable\":false},\"related\":{\"collection\":\"*\",\"filter\":\"field\",\"configurable\":false},\"created_at\":{\"type\":\"currentTimestamp\"},\"updated_at\":{\"type\":\"currentTimestamp\"}}', 'object', NULL, NULL),
(3, 'db_model_strapi_webhooks', '{\"name\":{\"type\":\"string\"},\"url\":{\"type\":\"text\"},\"headers\":{\"type\":\"json\"},\"events\":{\"type\":\"json\"},\"enabled\":{\"type\":\"boolean\"}}', 'object', NULL, NULL),
(4, 'db_model_users-permissions_user', '{\"username\":{\"type\":\"string\",\"minLength\":3,\"unique\":true,\"configurable\":false,\"required\":true},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true},\"provider\":{\"type\":\"string\",\"configurable\":false},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"private\":true},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"confirmed\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"role\":{\"model\":\"role\",\"via\":\"users\",\"plugin\":\"users-permissions\",\"configurable\":false},\"created_at\":{\"type\":\"currentTimestamp\"},\"updated_at\":{\"type\":\"currentTimestamp\"}}', 'object', NULL, NULL),
(5, 'db_model_core_store', '{\"key\":{\"type\":\"string\"},\"value\":{\"type\":\"text\"},\"type\":{\"type\":\"string\"},\"environment\":{\"type\":\"string\"},\"tag\":{\"type\":\"string\"}}', 'object', NULL, NULL),
(6, 'db_model_upload_file_morph', '{\"upload_file_id\":{\"type\":\"integer\"},\"related_id\":{\"type\":\"integer\"},\"related_type\":{\"type\":\"text\"},\"field\":{\"type\":\"text\"},\"order\":{\"type\":\"integer\"}}', 'object', NULL, NULL),
(7, 'db_model_strapi_administrator', '{\"username\":{\"type\":\"string\",\"minLength\":3,\"unique\":true,\"configurable\":false,\"required\":true},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"private\":true,\"required\":true},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false}}', 'object', NULL, NULL),
(8, 'db_model_users-permissions_role', '{\"name\":{\"type\":\"string\",\"minLength\":3,\"required\":true,\"configurable\":false},\"description\":{\"type\":\"string\",\"configurable\":false},\"type\":{\"type\":\"string\",\"unique\":true,\"configurable\":false},\"permissions\":{\"collection\":\"permission\",\"via\":\"role\",\"plugin\":\"users-permissions\",\"configurable\":false,\"isVirtual\":true},\"users\":{\"collection\":\"user\",\"via\":\"role\",\"configurable\":false,\"plugin\":\"users-permissions\",\"isVirtual\":true}}', 'object', NULL, NULL),
(9, 'plugin_users-permissions_grant', '{\"github\":{\"enabled\":false,\"icon\":\"github\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/github/callback\",\"scope\":[\"user\",\"user:email\"]},\"facebook\":{\"enabled\":false,\"icon\":\"facebook-square\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/facebook/callback\",\"scope\":[\"email\"]},\"discord\":{\"enabled\":false,\"icon\":\"discord\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/discord/callback\",\"scope\":[\"identify\",\"email\"]},\"microsoft\":{\"enabled\":false,\"icon\":\"windows\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/microsoft/callback\",\"scope\":[\"user.read\"]},\"instagram\":{\"enabled\":false,\"icon\":\"instagram\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/instagram/callback\"},\"twitter\":{\"enabled\":false,\"icon\":\"twitter\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/twitter/callback\"},\"twitch\":{\"enabled\":false,\"icon\":\"twitch\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/twitch/callback\",\"scope\":[\"user:read:email\"]},\"vk\":{\"enabled\":false,\"icon\":\"vk\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/vk/callback\",\"scope\":[\"email\"]},\"google\":{\"enabled\":false,\"icon\":\"google\",\"key\":\"\",\"secret\":\"\",\"callback\":\"/auth/google/callback\",\"scope\":[\"email\"]},\"email\":{\"enabled\":true,\"icon\":\"envelope\"}}', 'object', '', ''),
(10, 'plugin_upload_settings', '{\"sizeOptimization\":true,\"responsiveDimensions\":true}', 'object', 'development', ''),
(11, 'plugin_content_manager_configuration_content_types::plugins::users-permissions.permission', '{\"uid\":\"plugins::users-permissions.permission\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"type\",\"defaultSortBy\":\"type\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"type\":{\"edit\":{\"label\":\"Type\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Type\",\"searchable\":true,\"sortable\":true}},\"controller\":{\"edit\":{\"label\":\"Controller\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Controller\",\"searchable\":true,\"sortable\":true}},\"action\":{\"edit\":{\"label\":\"Action\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Action\",\"searchable\":true,\"sortable\":true}},\"enabled\":{\"edit\":{\"label\":\"Enabled\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Enabled\",\"searchable\":true,\"sortable\":true}},\"policy\":{\"edit\":{\"label\":\"Policy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Policy\",\"searchable\":true,\"sortable\":true}},\"role\":{\"edit\":{\"label\":\"Role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"Role\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\",\"type\",\"controller\",\"action\"],\"editRelations\":[\"role\"],\"edit\":[[{\"name\":\"type\",\"size\":6},{\"name\":\"controller\",\"size\":6}],[{\"name\":\"action\",\"size\":6},{\"name\":\"enabled\",\"size\":4}],[{\"name\":\"policy\",\"size\":6}]]}}', 'object', '', ''),
(12, 'plugin_content_manager_configuration_content_types::plugins::users-permissions.role', '{\"uid\":\"plugins::users-permissions.role\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"Name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Name\",\"searchable\":true,\"sortable\":true}},\"description\":{\"edit\":{\"label\":\"Description\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Description\",\"searchable\":true,\"sortable\":true}},\"type\":{\"edit\":{\"label\":\"Type\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Type\",\"searchable\":true,\"sortable\":true}},\"permissions\":{\"edit\":{\"label\":\"Permissions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"type\"},\"list\":{\"label\":\"Permissions\",\"searchable\":false,\"sortable\":false}},\"users\":{\"edit\":{\"label\":\"Users\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"username\"},\"list\":{\"label\":\"Users\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\",\"name\",\"description\",\"type\"],\"editRelations\":[\"permissions\",\"users\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"description\",\"size\":6}],[{\"name\":\"type\",\"size\":6}]]}}', 'object', '', ''),
(13, 'plugin_content_manager_configuration_content_types::plugins::upload.file', '{\"uid\":\"plugins::upload.file\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"Name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Name\",\"searchable\":true,\"sortable\":true}},\"alternativeText\":{\"edit\":{\"label\":\"AlternativeText\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"AlternativeText\",\"searchable\":true,\"sortable\":true}},\"caption\":{\"edit\":{\"label\":\"Caption\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Caption\",\"searchable\":true,\"sortable\":true}},\"width\":{\"edit\":{\"label\":\"Width\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Width\",\"searchable\":true,\"sortable\":true}},\"height\":{\"edit\":{\"label\":\"Height\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Height\",\"searchable\":true,\"sortable\":true}},\"formats\":{\"edit\":{\"label\":\"Formats\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Formats\",\"searchable\":false,\"sortable\":false}},\"hash\":{\"edit\":{\"label\":\"Hash\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Hash\",\"searchable\":true,\"sortable\":true}},\"ext\":{\"edit\":{\"label\":\"Ext\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Ext\",\"searchable\":true,\"sortable\":true}},\"mime\":{\"edit\":{\"label\":\"Mime\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Mime\",\"searchable\":true,\"sortable\":true}},\"size\":{\"edit\":{\"label\":\"Size\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Size\",\"searchable\":true,\"sortable\":true}},\"url\":{\"edit\":{\"label\":\"Url\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Url\",\"searchable\":true,\"sortable\":true}},\"previewUrl\":{\"edit\":{\"label\":\"PreviewUrl\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"PreviewUrl\",\"searchable\":true,\"sortable\":true}},\"provider\":{\"edit\":{\"label\":\"Provider\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Provider\",\"searchable\":true,\"sortable\":true}},\"provider_metadata\":{\"edit\":{\"label\":\"Provider_metadata\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Provider_metadata\",\"searchable\":false,\"sortable\":false}},\"related\":{\"edit\":{\"label\":\"Related\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"id\"},\"list\":{\"label\":\"Related\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"alternativeText\",\"caption\"],\"editRelations\":[\"related\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"alternativeText\",\"size\":6}],[{\"name\":\"caption\",\"size\":6},{\"name\":\"width\",\"size\":4}],[{\"name\":\"height\",\"size\":4}],[{\"name\":\"formats\",\"size\":12}],[{\"name\":\"hash\",\"size\":6},{\"name\":\"ext\",\"size\":6}],[{\"name\":\"mime\",\"size\":6},{\"name\":\"size\",\"size\":4}],[{\"name\":\"url\",\"size\":6},{\"name\":\"previewUrl\",\"size\":6}],[{\"name\":\"provider\",\"size\":6}],[{\"name\":\"provider_metadata\",\"size\":12}]]}}', 'object', '', ''),
(14, 'plugin_content_manager_configuration_content_types::strapi::administrator', '{\"uid\":\"strapi::administrator\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"username\",\"defaultSortBy\":\"username\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"username\":{\"edit\":{\"label\":\"Username\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Username\",\"searchable\":true,\"sortable\":true}},\"email\":{\"edit\":{\"label\":\"Email\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Email\",\"searchable\":true,\"sortable\":true}},\"password\":{\"edit\":{\"label\":\"Password\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Password\",\"searchable\":true,\"sortable\":true}},\"resetPasswordToken\":{\"edit\":{\"label\":\"ResetPasswordToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"ResetPasswordToken\",\"searchable\":true,\"sortable\":true}},\"blocked\":{\"edit\":{\"label\":\"Blocked\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Blocked\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"username\",\"email\",\"blocked\"],\"editRelations\":[],\"edit\":[[{\"name\":\"username\",\"size\":6},{\"name\":\"email\",\"size\":6}],[{\"name\":\"password\",\"size\":6},{\"name\":\"blocked\",\"size\":4}]]}}', 'object', '', ''),
(15, 'plugin_content_manager_configuration_content_types::plugins::users-permissions.user', '{\"uid\":\"plugins::users-permissions.user\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"username\",\"defaultSortBy\":\"username\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"username\":{\"edit\":{\"label\":\"Username\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Username\",\"searchable\":true,\"sortable\":true}},\"email\":{\"edit\":{\"label\":\"Email\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Email\",\"searchable\":true,\"sortable\":true}},\"provider\":{\"edit\":{\"label\":\"Provider\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Provider\",\"searchable\":true,\"sortable\":true}},\"password\":{\"edit\":{\"label\":\"Password\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Password\",\"searchable\":true,\"sortable\":true}},\"resetPasswordToken\":{\"edit\":{\"label\":\"ResetPasswordToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"ResetPasswordToken\",\"searchable\":true,\"sortable\":true}},\"confirmed\":{\"edit\":{\"label\":\"Confirmed\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Confirmed\",\"searchable\":true,\"sortable\":true}},\"blocked\":{\"edit\":{\"label\":\"Blocked\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Blocked\",\"searchable\":true,\"sortable\":true}},\"role\":{\"edit\":{\"label\":\"Role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"Role\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"username\",\"email\",\"confirmed\"],\"editRelations\":[\"role\"],\"edit\":[[{\"name\":\"username\",\"size\":6},{\"name\":\"email\",\"size\":6}],[{\"name\":\"password\",\"size\":6},{\"name\":\"confirmed\",\"size\":4}],[{\"name\":\"blocked\",\"size\":4}]]}}', 'object', '', ''),
(16, 'plugin_users-permissions_email', '{\"reset_password\":{\"display\":\"Email.template.reset_password\",\"icon\":\"sync\",\"options\":{\"from\":{\"name\":\"Administration Panel\",\"email\":\"no-reply@strapi.io\"},\"response_email\":\"\",\"object\":\"Reset password\",\"message\":\"<p>We heard that you lost your password. Sorry about that!</p>\\n\\n<p>But don’t worry! You can use the following link to reset your password:</p>\\n\\n<p><%= URL %>?code=<%= TOKEN %></p>\\n\\n<p>Thanks.</p>\"}},\"email_confirmation\":{\"display\":\"Email.template.email_confirmation\",\"icon\":\"check-square\",\"options\":{\"from\":{\"name\":\"Administration Panel\",\"email\":\"no-reply@strapi.io\"},\"response_email\":\"\",\"object\":\"Account confirmation\",\"message\":\"<p>Thank you for registering!</p>\\n\\n<p>You have to confirm your email address. Please click on the link below.</p>\\n\\n<p><%= URL %>?confirmation=<%= CODE %></p>\\n\\n<p>Thanks.</p>\"}}}', 'object', '', ''),
(17, 'plugin_users-permissions_advanced', '{\"unique_email\":true,\"allow_register\":true,\"email_confirmation\":false,\"email_confirmation_redirection\":\"/admin/admin\",\"email_reset_password\":\"/admin/admin\",\"default_role\":\"enseignant\"}', 'object', '', ''),
(18, 'db_model_enseignants', '{\"Nom\":{\"type\":\"string\",\"required\":true,\"unique\":false},\"Prenom\":{\"type\":\"string\",\"unique\":false,\"required\":true},\"email\":{\"type\":\"email\",\"required\":true,\"unique\":true},\"groupes\":{\"collection\":\"groupe\",\"via\":\"enseignant\",\"isVirtual\":true},\"modules\":{\"collection\":\"module\",\"via\":\"enseignants\",\"dominant\":true,\"attribute\":\"module\",\"column\":\"id\",\"isVirtual\":true},\"user\":{\"plugin\":\"users-permissions\",\"model\":\"user\"},\"created_at\":{\"type\":\"currentTimestamp\"},\"updated_at\":{\"type\":\"currentTimestamp\"}}', 'object', NULL, NULL),
(19, 'plugin_content_manager_configuration_content_types::application::enseignant.enseignant', '{\"uid\":\"application::enseignant.enseignant\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"Nom\",\"defaultSortBy\":\"Nom\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"Nom\":{\"edit\":{\"label\":\"Nom\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Nom\",\"searchable\":true,\"sortable\":true}},\"Prenom\":{\"edit\":{\"label\":\"Prenom\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Prenom\",\"searchable\":true,\"sortable\":true}},\"email\":{\"edit\":{\"label\":\"Email\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Email\",\"searchable\":true,\"sortable\":true}},\"groupes\":{\"edit\":{\"label\":\"Groupes\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Groupes\",\"searchable\":false,\"sortable\":false}},\"modules\":{\"edit\":{\"label\":\"Modules\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Modules\",\"searchable\":false,\"sortable\":false}},\"user\":{\"edit\":{\"label\":\"User\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"username\"},\"list\":{\"label\":\"User\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"Nom\",\"Prenom\",\"created_at\"],\"edit\":[[{\"name\":\"Nom\",\"size\":6},{\"name\":\"Prenom\",\"size\":6}],[{\"name\":\"email\",\"size\":6}]],\"editRelations\":[\"groupes\",\"modules\",\"user\"]}}', 'object', '', ''),
(20, 'db_model_modules', '{\"Nom\":{\"type\":\"string\",\"required\":true,\"unique\":false},\"niveau\":{\"model\":\"niveau\",\"via\":\"modules\"},\"enseignants\":{\"via\":\"modules\",\"collection\":\"enseignant\",\"attribute\":\"enseignant\",\"column\":\"id\",\"isVirtual\":true},\"created_at\":{\"type\":\"currentTimestamp\"},\"updated_at\":{\"type\":\"currentTimestamp\"}}', 'object', NULL, NULL),
(21, 'plugin_content_manager_configuration_content_types::application::module.module', '{\"uid\":\"application::module.module\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"Nom\",\"defaultSortBy\":\"Nom\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"Nom\":{\"edit\":{\"label\":\"Nom\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Nom\",\"searchable\":true,\"sortable\":true}},\"niveau\":{\"edit\":{\"label\":\"Niveau\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Niveau\",\"searchable\":false,\"sortable\":false}},\"enseignants\":{\"edit\":{\"label\":\"Enseignants\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Enseignants\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"Nom\",\"created_at\",\"updated_at\"],\"edit\":[[{\"name\":\"Nom\",\"size\":6}]],\"editRelations\":[\"niveau\",\"enseignants\"]}}', 'object', '', ''),
(22, 'db_model_etudiants', '{\"Nom\":{\"type\":\"string\",\"required\":true},\"Prenom\":{\"type\":\"string\",\"required\":true},\"Matricule\":{\"type\":\"biginteger\",\"required\":true,\"unique\":true},\"BirthDate\":{\"type\":\"date\",\"required\":true},\"niveau\":{\"model\":\"niveau\",\"via\":\"etudiants\"},\"groupes\":{\"via\":\"etudiants\",\"collection\":\"groupe\",\"attribute\":\"groupe\",\"column\":\"id\",\"isVirtual\":true},\"seances\":{\"via\":\"etudiants\",\"collection\":\"seance\",\"dominant\":true,\"attribute\":\"seance\",\"column\":\"id\",\"isVirtual\":true},\"created_at\":{\"type\":\"currentTimestamp\"},\"updated_at\":{\"type\":\"currentTimestamp\"}}', 'object', NULL, NULL),
(23, 'plugin_content_manager_configuration_content_types::application::etudiant.etudiant', '{\"uid\":\"application::etudiant.etudiant\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"Nom\",\"defaultSortBy\":\"Nom\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"Nom\":{\"edit\":{\"label\":\"Nom\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Nom\",\"searchable\":true,\"sortable\":true}},\"Prenom\":{\"edit\":{\"label\":\"Prenom\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Prenom\",\"searchable\":true,\"sortable\":true}},\"Matricule\":{\"edit\":{\"label\":\"Matricule\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Matricule\",\"searchable\":true,\"sortable\":true}},\"BirthDate\":{\"edit\":{\"label\":\"BirthDate\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"BirthDate\",\"searchable\":true,\"sortable\":true}},\"niveau\":{\"edit\":{\"label\":\"Niveau\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Niveau\",\"searchable\":false,\"sortable\":false}},\"groupes\":{\"edit\":{\"label\":\"Groupes\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Groupes\",\"searchable\":false,\"sortable\":false}},\"seances\":{\"edit\":{\"label\":\"Seances\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Code\"},\"list\":{\"label\":\"Seances\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"Nom\",\"Prenom\",\"Matricule\"],\"edit\":[[{\"name\":\"Nom\",\"size\":6},{\"name\":\"Prenom\",\"size\":6}],[{\"name\":\"Matricule\",\"size\":4},{\"name\":\"BirthDate\",\"size\":4}]],\"editRelations\":[\"niveau\",\"groupes\",\"seances\"]}}', 'object', '', ''),
(24, 'db_model_enseignes', '{\"enseignant\":{\"via\":\"enseignes\",\"model\":\"enseignant\"},\"module\":{\"via\":\"enseignes\",\"model\":\"module\"},\"created_at\":{\"type\":\"currentTimestamp\"},\"updated_at\":{\"type\":\"currentTimestamp\"}}', 'object', NULL, NULL),
(26, 'db_model_seances', '{\"Code\":{\"type\":\"string\",\"required\":true,\"unique\":false,\"maxLength\":10},\"Status\":{\"type\":\"boolean\",\"required\":true},\"Date\":{\"type\":\"date\",\"required\":true},\"etudiants\":{\"collection\":\"etudiant\",\"via\":\"seances\",\"attribute\":\"etudiant\",\"column\":\"id\",\"isVirtual\":true},\"enseignant\":{\"model\":\"enseignant\"},\"module\":{\"model\":\"module\"},\"groupe\":{\"model\":\"groupe\"},\"created_at\":{\"type\":\"currentTimestamp\"},\"updated_at\":{\"type\":\"currentTimestamp\"}}', 'object', NULL, NULL),
(27, 'plugin_content_manager_configuration_content_types::application::seance.seance', '{\"uid\":\"application::seance.seance\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"Code\",\"defaultSortBy\":\"Code\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"Code\":{\"edit\":{\"label\":\"Code\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Code\",\"searchable\":true,\"sortable\":true}},\"Status\":{\"edit\":{\"label\":\"Status\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Status\",\"searchable\":true,\"sortable\":true}},\"Date\":{\"edit\":{\"label\":\"Date\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Date\",\"searchable\":true,\"sortable\":true}},\"etudiants\":{\"edit\":{\"label\":\"Etudiants\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Etudiants\",\"searchable\":false,\"sortable\":false}},\"enseignant\":{\"edit\":{\"label\":\"Enseignant\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Enseignant\",\"searchable\":false,\"sortable\":false}},\"module\":{\"edit\":{\"label\":\"Module\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Module\",\"searchable\":false,\"sortable\":false}},\"groupe\":{\"edit\":{\"label\":\"Groupe\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Groupe\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"Code\",\"Status\",\"Date\"],\"edit\":[[{\"name\":\"Code\",\"size\":6},{\"name\":\"Status\",\"size\":4}],[{\"name\":\"Date\",\"size\":4}]],\"editRelations\":[\"etudiants\",\"enseignant\",\"module\",\"groupe\"]}}', 'object', '', ''),
(28, 'db_model_presences', '{\"etudiant\":{\"model\":\"etudiant\",\"via\":\"presences\"},\"seance\":{\"via\":\"presences\",\"model\":\"seance\"},\"created_at\":{\"type\":\"currentTimestamp\"},\"updated_at\":{\"type\":\"currentTimestamp\"}}', 'object', NULL, NULL),
(30, 'db_model_studies', '{\"etudiant\":{\"model\":\"etudiant\",\"via\":\"studies\"},\"module\":{\"via\":\"studies\",\"model\":\"module\"},\"created_at\":{\"type\":\"currentTimestamp\"},\"updated_at\":{\"type\":\"currentTimestamp\"}}', 'object', NULL, NULL),
(32, 'db_model_niveaus', '{\"Nom\":{\"type\":\"string\",\"required\":true,\"unique\":true},\"modules\":{\"via\":\"niveau\",\"collection\":\"module\",\"isVirtual\":true},\"etudiants\":{\"via\":\"niveau\",\"collection\":\"etudiant\",\"isVirtual\":true},\"created_at\":{\"type\":\"currentTimestamp\"},\"updated_at\":{\"type\":\"currentTimestamp\"}}', 'object', NULL, NULL),
(33, 'db_model_niveaus__modules', '{\"niveau_id\":{\"type\":\"integer\"},\"module_id\":{\"type\":\"integer\"}}', 'object', NULL, NULL),
(34, 'db_model_niveaus__etudiants', '{\"niveau_id\":{\"type\":\"integer\"},\"etudiant_id\":{\"type\":\"integer\"}}', 'object', NULL, NULL),
(35, 'plugin_content_manager_configuration_content_types::application::niveau.niveau', '{\"uid\":\"application::niveau.niveau\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"Nom\",\"defaultSortBy\":\"Nom\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"Nom\":{\"edit\":{\"label\":\"Nom\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Nom\",\"searchable\":true,\"sortable\":true}},\"modules\":{\"edit\":{\"label\":\"Modules\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Modules\",\"searchable\":false,\"sortable\":false}},\"etudiants\":{\"edit\":{\"label\":\"Etudiants\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Etudiants\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"Nom\",\"created_at\",\"updated_at\"],\"edit\":[[{\"name\":\"Nom\",\"size\":6}]],\"editRelations\":[\"modules\",\"etudiants\"]}}', 'object', '', ''),
(36, 'db_model_groupes', '{\"Nom\":{\"type\":\"string\",\"required\":true},\"enseignant\":{\"via\":\"groupes\",\"model\":\"enseignant\"},\"etudiants\":{\"collection\":\"etudiant\",\"via\":\"groupes\",\"dominant\":true,\"attribute\":\"etudiant\",\"column\":\"id\",\"isVirtual\":true},\"module\":{\"model\":\"module\"},\"created_at\":{\"type\":\"currentTimestamp\"},\"updated_at\":{\"type\":\"currentTimestamp\"}}', 'object', NULL, NULL),
(37, 'plugin_content_manager_configuration_content_types::application::groupe.groupe', '{\"uid\":\"application::groupe.groupe\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"Nom\",\"defaultSortBy\":\"Nom\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"Id\",\"searchable\":true,\"sortable\":true}},\"Nom\":{\"edit\":{\"label\":\"Nom\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"Nom\",\"searchable\":true,\"sortable\":true}},\"enseignant\":{\"edit\":{\"label\":\"Enseignant\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Enseignant\",\"searchable\":false,\"sortable\":false}},\"etudiants\":{\"edit\":{\"label\":\"Etudiants\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Etudiants\",\"searchable\":false,\"sortable\":false}},\"module\":{\"edit\":{\"label\":\"Module\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"Nom\"},\"list\":{\"label\":\"Module\",\"searchable\":false,\"sortable\":false}},\"created_at\":{\"edit\":{\"label\":\"Created_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Created_at\",\"searchable\":true,\"sortable\":true}},\"updated_at\":{\"edit\":{\"label\":\"Updated_at\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"Updated_at\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"Nom\",\"created_at\",\"updated_at\"],\"edit\":[[{\"name\":\"Nom\",\"size\":6}]],\"editRelations\":[\"enseignant\",\"etudiants\",\"module\"]}}', 'object', '', ''),
(38, 'db_model_etudiants_groupes__groupes_etudiants', '{\"groupe_id\":{\"type\":\"integer\"},\"etudiant_id\":{\"type\":\"integer\"}}', 'object', NULL, NULL),
(39, 'db_model_enseignants_modules__modules_enseignants', '{\"enseignant_id\":{\"type\":\"integer\"},\"module_id\":{\"type\":\"integer\"}}', 'object', NULL, NULL),
(40, 'db_model_etudiants_seances__seances_etudiants', '{\"etudiant_id\":{\"type\":\"integer\"},\"seance_id\":{\"type\":\"integer\"}}', 'object', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `enseignants`
--

DROP TABLE IF EXISTS `enseignants`;
CREATE TABLE IF NOT EXISTS `enseignants` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) NOT NULL,
  `Prenom` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(255) NOT NULL,
  `user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `enseignants_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `enseignants`
--

INSERT INTO `enseignants` (`id`, `Nom`, `Prenom`, `created_at`, `updated_at`, `email`, `user`) VALUES
(20, 'Sari', 'Aymen', '2020-08-17 11:26:16', '2020-08-17 11:26:16', 'a.doryuken@gmail.com', 43);

-- --------------------------------------------------------

--
-- Table structure for table `enseignants_modules__modules_enseignants`
--

DROP TABLE IF EXISTS `enseignants_modules__modules_enseignants`;
CREATE TABLE IF NOT EXISTS `enseignants_modules__modules_enseignants` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `enseignant_id` int(11) DEFAULT NULL,
  `module_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `enseignant_id` (`enseignant_id`,`module_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `etudiants`
--

DROP TABLE IF EXISTS `etudiants`;
CREATE TABLE IF NOT EXISTS `etudiants` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) NOT NULL,
  `Prenom` varchar(255) NOT NULL,
  `Matricule` bigint(20) NOT NULL,
  `BirthDate` date NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `niveau` int(11) DEFAULT NULL,
  `groupe` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `etudiants_Matricule_unique` (`Matricule`),
  UNIQUE KEY `id` (`id`,`niveau`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `etudiants_groupes__groupes_etudiants`
--

DROP TABLE IF EXISTS `etudiants_groupes__groupes_etudiants`;
CREATE TABLE IF NOT EXISTS `etudiants_groupes__groupes_etudiants` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `groupe_id` int(11) DEFAULT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `groupe_id` (`groupe_id`,`etudiant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `etudiants_seances__seances_etudiants`
--

DROP TABLE IF EXISTS `etudiants_seances__seances_etudiants`;
CREATE TABLE IF NOT EXISTS `etudiants_seances__seances_etudiants` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `etudiant_id` int(11) DEFAULT NULL,
  `seance_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `etudiant_id` (`etudiant_id`,`seance_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `groupes`
--

DROP TABLE IF EXISTS `groupes`;
CREATE TABLE IF NOT EXISTS `groupes` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) NOT NULL,
  `enseignant` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `module` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
CREATE TABLE IF NOT EXISTS `modules` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `niveau` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`,`niveau`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `niveaus`
--

DROP TABLE IF EXISTS `niveaus`;
CREATE TABLE IF NOT EXISTS `niveaus` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `niveaus_Nom_unique` (`Nom`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `niveaus__etudiants`
--

DROP TABLE IF EXISTS `niveaus__etudiants`;
CREATE TABLE IF NOT EXISTS `niveaus__etudiants` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `niveau_id` int(11) DEFAULT NULL,
  `etudiant_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `niveaus__modules`
--

DROP TABLE IF EXISTS `niveaus__modules`;
CREATE TABLE IF NOT EXISTS `niveaus__modules` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `niveau_id` int(11) DEFAULT NULL,
  `module_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `seances`
--

DROP TABLE IF EXISTS `seances`;
CREATE TABLE IF NOT EXISTS `seances` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Code` varchar(255) NOT NULL,
  `Status` tinyint(1) NOT NULL,
  `Date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `enseignant` int(11) NOT NULL,
  `module` int(11) NOT NULL,
  `groupe` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `strapi_administrator`
--

DROP TABLE IF EXISTS `strapi_administrator`;
CREATE TABLE IF NOT EXISTS `strapi_administrator` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `strapi_administrator_username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `strapi_administrator`
--

INSERT INTO `strapi_administrator` (`id`, `username`, `email`, `password`, `resetPasswordToken`, `blocked`) VALUES
(1, 'admin', 'a.doryuken@gmail.com', '$2a$10$wtZev46hWRa4zx.mnkL5Re5q4PjCe0x8tIsU/SDryZ6QE4BXupSXm', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `strapi_webhooks`
--

DROP TABLE IF EXISTS `strapi_webhooks`;
CREATE TABLE IF NOT EXISTS `strapi_webhooks` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `url` longtext,
  `headers` longtext,
  `events` longtext,
  `enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `upload_file`
--

DROP TABLE IF EXISTS `upload_file`;
CREATE TABLE IF NOT EXISTS `upload_file` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `alternativeText` varchar(255) DEFAULT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `formats` longtext,
  `hash` varchar(255) NOT NULL,
  `ext` varchar(255) DEFAULT NULL,
  `mime` varchar(255) NOT NULL,
  `size` decimal(10,2) NOT NULL,
  `url` varchar(255) NOT NULL,
  `previewUrl` varchar(255) DEFAULT NULL,
  `provider` varchar(255) NOT NULL,
  `provider_metadata` longtext,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `upload_file_morph`
--

DROP TABLE IF EXISTS `upload_file_morph`;
CREATE TABLE IF NOT EXISTS `upload_file_morph` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `upload_file_id` int(11) DEFAULT NULL,
  `related_id` int(11) DEFAULT NULL,
  `related_type` longtext,
  `field` longtext,
  `order` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users-permissions_permission`
--

DROP TABLE IF EXISTS `users-permissions_permission`;
CREATE TABLE IF NOT EXISTS `users-permissions_permission` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `controller` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `policy` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=398 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users-permissions_permission`
--

INSERT INTO `users-permissions_permission` (`id`, `type`, `controller`, `action`, `enabled`, `policy`, `role`) VALUES
(1, 'content-manager', 'components', 'findcomponent', 0, '', 1),
(2, 'content-manager', 'components', 'findcomponent', 0, '', 2),
(3, 'content-manager', 'components', 'listcomponents', 0, '', 1),
(4, 'content-manager', 'components', 'listcomponents', 0, '', 2),
(5, 'content-manager', 'contentmanager', 'count', 0, '', 1),
(6, 'content-manager', 'components', 'updatecomponent', 0, '', 2),
(7, 'content-manager', 'contentmanager', 'count', 0, '', 2),
(8, 'content-manager', 'contentmanager', 'checkuidavailability', 0, '', 2),
(9, 'content-manager', 'components', 'updatecomponent', 0, '', 1),
(10, 'content-manager', 'contentmanager', 'checkuidavailability', 0, '', 1),
(11, 'content-manager', 'contentmanager', 'create', 0, '', 1),
(12, 'content-manager', 'contentmanager', 'create', 0, '', 2),
(13, 'content-manager', 'contentmanager', 'delete', 0, '', 1),
(14, 'content-manager', 'contentmanager', 'delete', 0, '', 2),
(15, 'content-manager', 'contentmanager', 'deletemany', 0, '', 1),
(16, 'content-manager', 'contentmanager', 'deletemany', 0, '', 2),
(17, 'content-manager', 'contentmanager', 'findone', 0, '', 2),
(18, 'content-manager', 'contentmanager', 'find', 0, '', 1),
(19, 'content-manager', 'contentmanager', 'find', 0, '', 2),
(20, 'content-manager', 'contentmanager', 'findone', 0, '', 1),
(21, 'content-manager', 'contentmanager', 'generateuid', 0, '', 1),
(22, 'content-manager', 'contentmanager', 'generateuid', 0, '', 2),
(23, 'content-manager', 'contentmanager', 'update', 0, '', 1),
(24, 'content-manager', 'contentmanager', 'update', 0, '', 2),
(25, 'content-manager', 'contenttypes', 'findcontenttype', 0, '', 1),
(26, 'content-manager', 'contenttypes', 'findcontenttype', 0, '', 2),
(27, 'content-manager', 'contenttypes', 'listcontenttypes', 0, '', 1),
(28, 'content-manager', 'contenttypes', 'listcontenttypes', 0, '', 2),
(29, 'content-manager', 'contenttypes', 'updatecontenttype', 0, '', 1),
(30, 'content-manager', 'contenttypes', 'updatecontenttype', 0, '', 2),
(31, 'content-type-builder', 'builder', 'getreservednames', 0, '', 1),
(32, 'content-type-builder', 'builder', 'getreservednames', 0, '', 2),
(33, 'content-type-builder', 'componentcategories', 'deletecategory', 0, '', 1),
(34, 'content-type-builder', 'componentcategories', 'deletecategory', 0, '', 2),
(35, 'content-type-builder', 'componentcategories', 'editcategory', 0, '', 1),
(36, 'content-type-builder', 'componentcategories', 'editcategory', 0, '', 2),
(37, 'content-type-builder', 'components', 'createcomponent', 0, '', 1),
(38, 'content-type-builder', 'components', 'createcomponent', 0, '', 2),
(39, 'content-type-builder', 'components', 'deletecomponent', 0, '', 1),
(40, 'content-type-builder', 'components', 'deletecomponent', 0, '', 2),
(41, 'content-type-builder', 'components', 'getcomponent', 0, '', 1),
(42, 'content-type-builder', 'components', 'getcomponent', 0, '', 2),
(43, 'content-type-builder', 'components', 'getcomponents', 0, '', 1),
(44, 'content-type-builder', 'components', 'getcomponents', 0, '', 2),
(45, 'content-type-builder', 'components', 'updatecomponent', 0, '', 1),
(46, 'content-type-builder', 'components', 'updatecomponent', 0, '', 2),
(47, 'content-type-builder', 'connections', 'getconnections', 0, '', 1),
(48, 'content-type-builder', 'connections', 'getconnections', 0, '', 2),
(49, 'content-type-builder', 'contenttypes', 'createcontenttype', 0, '', 1),
(50, 'content-type-builder', 'contenttypes', 'createcontenttype', 0, '', 2),
(51, 'content-type-builder', 'contenttypes', 'deletecontenttype', 0, '', 1),
(52, 'content-type-builder', 'contenttypes', 'deletecontenttype', 0, '', 2),
(53, 'content-type-builder', 'contenttypes', 'getcontenttype', 0, '', 1),
(54, 'content-type-builder', 'contenttypes', 'getcontenttype', 0, '', 2),
(55, 'content-type-builder', 'contenttypes', 'getcontenttypes', 0, '', 1),
(56, 'content-type-builder', 'contenttypes', 'getcontenttypes', 0, '', 2),
(57, 'content-type-builder', 'contenttypes', 'updatecontenttype', 0, '', 1),
(58, 'content-type-builder', 'contenttypes', 'updatecontenttype', 0, '', 2),
(59, 'email', 'email', 'send', 0, '', 1),
(60, 'email', 'email', 'send', 0, '', 2),
(61, 'upload', 'proxy', 'uploadproxy', 0, '', 1),
(62, 'upload', 'proxy', 'uploadproxy', 0, '', 2),
(63, 'upload', 'upload', 'count', 0, '', 1),
(64, 'upload', 'upload', 'count', 0, '', 2),
(65, 'upload', 'upload', 'destroy', 0, '', 1),
(66, 'upload', 'upload', 'destroy', 0, '', 2),
(67, 'upload', 'upload', 'find', 0, '', 1),
(68, 'upload', 'upload', 'find', 0, '', 2),
(69, 'upload', 'upload', 'findone', 0, '', 1),
(70, 'upload', 'upload', 'findone', 0, '', 2),
(71, 'upload', 'upload', 'getsettings', 0, '', 1),
(72, 'upload', 'upload', 'getsettings', 0, '', 2),
(73, 'upload', 'upload', 'search', 0, '', 1),
(74, 'upload', 'upload', 'search', 0, '', 2),
(75, 'upload', 'upload', 'updatesettings', 0, '', 1),
(76, 'upload', 'upload', 'updatesettings', 0, '', 2),
(77, 'upload', 'upload', 'upload', 0, '', 1),
(78, 'upload', 'upload', 'upload', 0, '', 2),
(79, 'users-permissions', 'auth', 'callback', 1, '', 1),
(80, 'users-permissions', 'auth', 'callback', 1, '', 2),
(81, 'users-permissions', 'auth', 'connect', 1, '', 1),
(82, 'users-permissions', 'auth', 'connect', 1, '', 2),
(83, 'users-permissions', 'auth', 'emailconfirmation', 1, '', 1),
(84, 'users-permissions', 'auth', 'emailconfirmation', 1, '', 2),
(85, 'users-permissions', 'auth', 'forgotpassword', 1, '', 1),
(96, 'users-permissions', 'auth', 'forgotpassword', 1, '', 2),
(97, 'users-permissions', 'auth', 'register', 1, '', 1),
(98, 'users-permissions', 'auth', 'register', 1, '', 2),
(99, 'users-permissions', 'auth', 'resetpassword', 1, '', 1),
(100, 'users-permissions', 'auth', 'sendemailconfirmation', 1, '', 1),
(101, 'users-permissions', 'auth', 'resetpassword', 1, '', 2),
(102, 'users-permissions', 'auth', 'sendemailconfirmation', 1, '', 2),
(103, 'users-permissions', 'user', 'count', 1, '', 1),
(104, 'users-permissions', 'user', 'count', 1, '', 2),
(105, 'users-permissions', 'user', 'create', 1, '', 1),
(106, 'users-permissions', 'user', 'create', 1, '', 2),
(107, 'users-permissions', 'user', 'destroy', 1, '', 1),
(108, 'users-permissions', 'user', 'destroy', 1, '', 2),
(109, 'users-permissions', 'user', 'destroyall', 1, '', 1),
(110, 'users-permissions', 'user', 'destroyall', 1, '', 2),
(111, 'users-permissions', 'user', 'find', 1, '', 1),
(112, 'users-permissions', 'user', 'find', 1, '', 2),
(113, 'users-permissions', 'user', 'findone', 1, '', 1),
(114, 'users-permissions', 'user', 'findone', 1, '', 2),
(115, 'users-permissions', 'user', 'me', 1, '', 1),
(116, 'users-permissions', 'user', 'me', 1, '', 2),
(117, 'users-permissions', 'user', 'update', 1, '', 1),
(118, 'users-permissions', 'user', 'update', 1, '', 2),
(119, 'users-permissions', 'userspermissions', 'createrole', 0, '', 1),
(120, 'users-permissions', 'userspermissions', 'createrole', 1, '', 2),
(121, 'users-permissions', 'userspermissions', 'deleteprovider', 0, '', 1),
(122, 'users-permissions', 'userspermissions', 'deleteprovider', 1, '', 2),
(123, 'users-permissions', 'userspermissions', 'deleterole', 0, '', 1),
(124, 'users-permissions', 'userspermissions', 'deleterole', 1, '', 2),
(125, 'users-permissions', 'userspermissions', 'getadvancedsettings', 0, '', 1),
(126, 'users-permissions', 'userspermissions', 'getadvancedsettings', 1, '', 2),
(127, 'users-permissions', 'userspermissions', 'getemailtemplate', 0, '', 1),
(128, 'users-permissions', 'userspermissions', 'getemailtemplate', 1, '', 2),
(129, 'users-permissions', 'userspermissions', 'getpermissions', 0, '', 1),
(130, 'users-permissions', 'userspermissions', 'getpermissions', 1, '', 2),
(131, 'users-permissions', 'userspermissions', 'getpolicies', 0, '', 1),
(132, 'users-permissions', 'userspermissions', 'getpolicies', 1, '', 2),
(133, 'users-permissions', 'userspermissions', 'getproviders', 0, '', 1),
(134, 'users-permissions', 'userspermissions', 'getproviders', 1, '', 2),
(135, 'users-permissions', 'userspermissions', 'getrole', 0, '', 1),
(136, 'users-permissions', 'userspermissions', 'getrole', 1, '', 2),
(137, 'users-permissions', 'userspermissions', 'getroles', 0, '', 1),
(138, 'users-permissions', 'userspermissions', 'getroles', 1, '', 2),
(139, 'users-permissions', 'userspermissions', 'getroutes', 0, '', 1),
(149, 'users-permissions', 'userspermissions', 'getroutes', 1, '', 2),
(150, 'users-permissions', 'userspermissions', 'index', 0, '', 1),
(151, 'users-permissions', 'userspermissions', 'index', 1, '', 2),
(152, 'users-permissions', 'userspermissions', 'init', 1, '', 1),
(153, 'users-permissions', 'userspermissions', 'init', 1, '', 2),
(154, 'users-permissions', 'userspermissions', 'searchusers', 0, '', 1),
(155, 'users-permissions', 'userspermissions', 'searchusers', 1, '', 2),
(156, 'users-permissions', 'userspermissions', 'updateadvancedsettings', 0, '', 1),
(157, 'users-permissions', 'userspermissions', 'updateadvancedsettings', 1, '', 2),
(158, 'users-permissions', 'userspermissions', 'updateemailtemplate', 0, '', 1),
(159, 'users-permissions', 'userspermissions', 'updateemailtemplate', 1, '', 2),
(160, 'users-permissions', 'userspermissions', 'updateproviders', 0, '', 1),
(161, 'users-permissions', 'userspermissions', 'updateproviders', 1, '', 2),
(162, 'users-permissions', 'userspermissions', 'updaterole', 0, '', 1),
(163, 'users-permissions', 'userspermissions', 'updaterole', 1, '', 2),
(164, 'application', 'enseignant', 'count', 1, '', 1),
(165, 'application', 'enseignant', 'count', 1, '', 2),
(166, 'application', 'enseignant', 'create', 1, '', 1),
(167, 'application', 'enseignant', 'create', 1, '', 2),
(168, 'application', 'enseignant', 'delete', 1, '', 1),
(169, 'application', 'enseignant', 'delete', 1, '', 2),
(170, 'application', 'enseignant', 'find', 1, '', 1),
(171, 'application', 'enseignant', 'find', 1, '', 2),
(172, 'application', 'enseignant', 'findone', 1, '', 1),
(173, 'application', 'enseignant', 'findone', 1, '', 2),
(174, 'application', 'enseignant', 'update', 1, '', 1),
(175, 'application', 'enseignant', 'update', 1, '', 2),
(176, 'application', 'module', 'count', 1, '', 1),
(177, 'application', 'module', 'count', 1, '', 2),
(178, 'application', 'module', 'create', 1, '', 1),
(179, 'application', 'module', 'create', 1, '', 2),
(180, 'application', 'module', 'delete', 1, '', 1),
(181, 'application', 'module', 'delete', 1, '', 2),
(182, 'application', 'module', 'find', 1, '', 1),
(183, 'application', 'module', 'find', 1, '', 2),
(184, 'application', 'module', 'findone', 1, '', 1),
(185, 'application', 'module', 'findone', 1, '', 2),
(186, 'application', 'module', 'update', 1, '', 1),
(187, 'application', 'module', 'update', 1, '', 2),
(188, 'application', 'etudiant', 'count', 1, '', 1),
(189, 'application', 'etudiant', 'count', 1, '', 2),
(190, 'application', 'etudiant', 'create', 1, '', 1),
(191, 'application', 'etudiant', 'create', 1, '', 2),
(192, 'application', 'etudiant', 'delete', 1, '', 1),
(193, 'application', 'etudiant', 'delete', 1, '', 2),
(194, 'application', 'etudiant', 'find', 1, '', 1),
(195, 'application', 'etudiant', 'find', 1, '', 2),
(196, 'application', 'etudiant', 'findone', 1, '', 1),
(197, 'application', 'etudiant', 'findone', 1, '', 2),
(198, 'application', 'etudiant', 'update', 1, '', 1),
(199, 'application', 'etudiant', 'update', 1, '', 2),
(212, 'application', 'seance', 'count', 1, '', 1),
(213, 'application', 'seance', 'count', 1, '', 2),
(214, 'application', 'seance', 'create', 1, '', 1),
(215, 'application', 'seance', 'create', 1, '', 2),
(216, 'application', 'seance', 'delete', 1, '', 1),
(217, 'application', 'seance', 'delete', 1, '', 2),
(218, 'application', 'seance', 'find', 1, '', 1),
(219, 'application', 'seance', 'find', 1, '', 2),
(220, 'application', 'seance', 'findone', 1, '', 1),
(221, 'application', 'seance', 'findone', 1, '', 2),
(222, 'application', 'seance', 'update', 1, '', 1),
(223, 'application', 'seance', 'update', 1, '', 2),
(248, 'application', 'enseignant', 'find', 1, '', 3),
(249, 'application', 'enseignant', 'findone', 1, '', 3),
(250, 'application', 'enseignant', 'count', 1, '', 3),
(251, 'application', 'enseignant', 'create', 1, '', 3),
(252, 'application', 'enseignant', 'update', 1, '', 3),
(253, 'application', 'enseignant', 'delete', 1, '', 3),
(260, 'application', 'etudiant', 'find', 1, '', 3),
(261, 'application', 'etudiant', 'findone', 1, '', 3),
(262, 'application', 'etudiant', 'count', 1, '', 3),
(263, 'application', 'etudiant', 'create', 1, '', 3),
(264, 'application', 'etudiant', 'update', 1, '', 3),
(265, 'application', 'etudiant', 'delete', 1, '', 3),
(266, 'application', 'module', 'find', 1, '', 3),
(267, 'application', 'module', 'findone', 1, '', 3),
(268, 'application', 'module', 'count', 1, '', 3),
(269, 'application', 'module', 'create', 1, '', 3),
(270, 'application', 'module', 'update', 1, '', 3),
(271, 'application', 'module', 'delete', 1, '', 3),
(278, 'application', 'seance', 'find', 1, '', 3),
(279, 'application', 'seance', 'findone', 1, '', 3),
(280, 'application', 'seance', 'count', 1, '', 3),
(281, 'application', 'seance', 'create', 1, '', 3),
(282, 'application', 'seance', 'update', 1, '', 3),
(283, 'application', 'seance', 'delete', 1, '', 3),
(290, 'content-type-builder', 'builder', 'getreservednames', 0, '', 3),
(291, 'content-type-builder', 'componentcategories', 'editcategory', 0, '', 3),
(292, 'content-type-builder', 'componentcategories', 'deletecategory', 0, '', 3),
(293, 'content-type-builder', 'components', 'getcomponents', 0, '', 3),
(294, 'content-type-builder', 'components', 'getcomponent', 0, '', 3),
(295, 'content-type-builder', 'components', 'createcomponent', 0, '', 3),
(296, 'content-type-builder', 'components', 'updatecomponent', 0, '', 3),
(297, 'content-type-builder', 'components', 'deletecomponent', 0, '', 3),
(298, 'content-type-builder', 'connections', 'getconnections', 0, '', 3),
(299, 'content-type-builder', 'contenttypes', 'getcontenttypes', 0, '', 3),
(300, 'content-type-builder', 'contenttypes', 'getcontenttype', 0, '', 3),
(301, 'content-type-builder', 'contenttypes', 'createcontenttype', 0, '', 3),
(302, 'content-type-builder', 'contenttypes', 'updatecontenttype', 0, '', 3),
(303, 'content-type-builder', 'contenttypes', 'deletecontenttype', 0, '', 3),
(304, 'content-manager', 'components', 'listcomponents', 0, '', 3),
(305, 'content-manager', 'components', 'findcomponent', 0, '', 3),
(306, 'content-manager', 'components', 'updatecomponent', 0, '', 3),
(307, 'content-manager', 'contentmanager', 'checkuidavailability', 0, '', 3),
(308, 'content-manager', 'contentmanager', 'update', 0, '', 3),
(309, 'content-manager', 'contentmanager', 'deletemany', 0, '', 3),
(310, 'content-manager', 'contentmanager', 'delete', 0, '', 3),
(311, 'content-manager', 'contentmanager', 'findone', 0, '', 3),
(312, 'content-manager', 'contentmanager', 'count', 0, '', 3),
(313, 'content-manager', 'contentmanager', 'find', 0, '', 3),
(314, 'content-manager', 'contentmanager', 'generateuid', 0, '', 3),
(315, 'content-manager', 'contentmanager', 'create', 0, '', 3),
(316, 'content-manager', 'contenttypes', 'listcontenttypes', 0, '', 3),
(317, 'content-manager', 'contenttypes', 'findcontenttype', 0, '', 3),
(318, 'content-manager', 'contenttypes', 'updatecontenttype', 0, '', 3),
(319, 'users-permissions', 'auth', 'callback', 0, '', 3),
(320, 'users-permissions', 'auth', 'resetpassword', 1, 'isauthenticated', 3),
(321, 'users-permissions', 'auth', 'connect', 0, '', 3),
(322, 'users-permissions', 'auth', 'forgotpassword', 0, '', 3),
(323, 'users-permissions', 'auth', 'register', 1, '', 3),
(324, 'users-permissions', 'auth', 'emailconfirmation', 0, '', 3),
(325, 'users-permissions', 'auth', 'sendemailconfirmation', 0, '', 3),
(326, 'users-permissions', 'user', 'find', 1, '', 3),
(327, 'users-permissions', 'user', 'me', 1, '', 3),
(328, 'users-permissions', 'user', 'count', 1, '', 3),
(329, 'users-permissions', 'user', 'findone', 1, '', 3),
(330, 'users-permissions', 'user', 'create', 1, '', 3),
(331, 'users-permissions', 'user', 'update', 1, '', 3),
(332, 'users-permissions', 'user', 'destroy', 1, '', 3),
(333, 'users-permissions', 'user', 'destroyall', 1, '', 3),
(334, 'users-permissions', 'userspermissions', 'getemailtemplate', 0, '', 3),
(335, 'users-permissions', 'userspermissions', 'searchusers', 0, '', 3),
(336, 'users-permissions', 'userspermissions', 'getroutes', 0, '', 3),
(337, 'users-permissions', 'userspermissions', 'deleterole', 0, '', 3),
(338, 'users-permissions', 'userspermissions', 'getpolicies', 0, '', 3),
(339, 'users-permissions', 'userspermissions', 'getroles', 0, '', 3),
(340, 'users-permissions', 'userspermissions', 'getrole', 0, '', 3),
(341, 'users-permissions', 'userspermissions', 'getproviders', 0, '', 3),
(342, 'users-permissions', 'userspermissions', 'updateemailtemplate', 0, '', 3),
(343, 'users-permissions', 'userspermissions', 'updateadvancedsettings', 0, '', 3),
(344, 'users-permissions', 'userspermissions', 'getpermissions', 0, '', 3),
(345, 'users-permissions', 'userspermissions', 'init', 0, '', 3),
(346, 'users-permissions', 'userspermissions', 'index', 0, '', 3),
(347, 'users-permissions', 'userspermissions', 'createrole', 0, '', 3),
(348, 'users-permissions', 'userspermissions', 'updateproviders', 0, '', 3),
(349, 'users-permissions', 'userspermissions', 'getadvancedsettings', 0, '', 3),
(350, 'users-permissions', 'userspermissions', 'deleteprovider', 0, '', 3),
(351, 'users-permissions', 'userspermissions', 'updaterole', 0, '', 3),
(352, 'email', 'email', 'send', 0, '', 3),
(353, 'upload', 'proxy', 'uploadproxy', 0, '', 3),
(354, 'upload', 'upload', 'upload', 0, '', 3),
(355, 'upload', 'upload', 'getsettings', 0, '', 3),
(356, 'upload', 'upload', 'updatesettings', 0, '', 3),
(357, 'upload', 'upload', 'find', 0, '', 3),
(358, 'upload', 'upload', 'findone', 0, '', 3),
(359, 'upload', 'upload', 'count', 0, '', 3),
(360, 'upload', 'upload', 'destroy', 0, '', 3),
(361, 'upload', 'upload', 'search', 0, '', 3),
(362, 'application', 'niveau', 'count', 1, '', 1),
(363, 'application', 'niveau', 'count', 1, '', 2),
(364, 'application', 'niveau', 'count', 1, '', 3),
(365, 'application', 'niveau', 'create', 1, '', 1),
(366, 'application', 'niveau', 'create', 1, '', 2),
(367, 'application', 'niveau', 'create', 1, '', 3),
(368, 'application', 'niveau', 'delete', 1, '', 1),
(369, 'application', 'niveau', 'delete', 1, '', 2),
(370, 'application', 'niveau', 'delete', 1, '', 3),
(371, 'application', 'niveau', 'find', 1, '', 1),
(372, 'application', 'niveau', 'find', 1, '', 2),
(373, 'application', 'niveau', 'find', 1, '', 3),
(374, 'application', 'niveau', 'findone', 1, '', 1),
(375, 'application', 'niveau', 'findone', 1, '', 2),
(376, 'application', 'niveau', 'findone', 1, '', 3),
(377, 'application', 'niveau', 'update', 1, '', 1),
(378, 'application', 'niveau', 'update', 1, '', 2),
(379, 'application', 'niveau', 'update', 1, '', 3),
(380, 'application', 'groupe', 'count', 1, '', 1),
(381, 'application', 'groupe', 'count', 1, '', 2),
(382, 'application', 'groupe', 'count', 1, '', 3),
(383, 'application', 'groupe', 'create', 1, '', 1),
(384, 'application', 'groupe', 'create', 1, '', 2),
(385, 'application', 'groupe', 'create', 1, '', 3),
(386, 'application', 'groupe', 'delete', 1, '', 1),
(387, 'application', 'groupe', 'delete', 1, '', 2),
(388, 'application', 'groupe', 'delete', 1, '', 3),
(389, 'application', 'groupe', 'find', 1, '', 1),
(390, 'application', 'groupe', 'find', 1, '', 2),
(391, 'application', 'groupe', 'find', 1, '', 3),
(392, 'application', 'groupe', 'findone', 1, '', 1),
(393, 'application', 'groupe', 'findone', 1, '', 2),
(394, 'application', 'groupe', 'findone', 1, '', 3),
(395, 'application', 'groupe', 'update', 1, '', 1),
(396, 'application', 'groupe', 'update', 1, '', 2),
(397, 'application', 'groupe', 'update', 1, '', 3);

-- --------------------------------------------------------

--
-- Table structure for table `users-permissions_role`
--

DROP TABLE IF EXISTS `users-permissions_role`;
CREATE TABLE IF NOT EXISTS `users-permissions_role` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users-permissions_role_type_unique` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users-permissions_role`
--

INSERT INTO `users-permissions_role` (`id`, `name`, `description`, `type`) VALUES
(1, 'Admin', '', 'authenticated'),
(2, 'Public', 'Default role given to unauthenticated user.', 'public'),
(3, 'Enseignant', '', 'enseignant');

-- --------------------------------------------------------

--
-- Table structure for table `users-permissions_user`
--

DROP TABLE IF EXISTS `users-permissions_user`;
CREATE TABLE IF NOT EXISTS `users-permissions_user` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `confirmed` tinyint(1) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users-permissions_user_username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users-permissions_user`
--

INSERT INTO `users-permissions_user` (`id`, `username`, `email`, `provider`, `password`, `resetPasswordToken`, `confirmed`, `blocked`, `role`, `created_at`, `updated_at`) VALUES
(42, 'admin', 'arcademode@hotmail.fr', 'local', '$2a$10$EBFHMecYPFeRXqr6FfwMje29pAUfrO0S..o0cWVII4DLoY5tYJ3MG', NULL, 0, 0, 1, '2020-08-17 11:17:08', '2020-08-17 11:17:08'),
(43, 'Doryuken', 'a.doryuken@gmail.com', 'local', '$2a$10$RGDlnZaUKFzuvTFC6enqzun4ZqVUcNaZxh5BD6pPl3hOew84lT7Oa', NULL, NULL, NULL, 3, '2020-08-17 11:26:16', '2020-08-17 11:26:16');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
