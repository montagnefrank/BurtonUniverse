/*
Navicat MariaDB Data Transfer

Source Server         : Burtoncloud Local
Source Server Version : 100023
Source Host           : burtoncloud.burt:3306
Source Database       : universe

Target Server Type    : MariaDB
Target Server Version : 100023
File Encoding         : 65001

Date: 2018-12-03 15:26:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for btu_menu
-- ----------------------------
DROP TABLE IF EXISTS `btu_menu`;
CREATE TABLE `btu_menu` (
  `iditem` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `parent` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `group` varchar(255) DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  `peso` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`iditem`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of btu_menu
-- ----------------------------
INSERT INTO `btu_menu` VALUES ('1', 'Universe', '1', '0', 'none', 'staff,public', 'universe', 'none', 'heading', '100');
INSERT INTO `btu_menu` VALUES ('2', 'Inicio', '1', '0', 'pe pe-home', 'staff,public', 'universe', '/', 'parent', '99');

-- ----------------------------
-- Table structure for btu_notyburt
-- ----------------------------
DROP TABLE IF EXISTS `btu_notyburt`;
CREATE TABLE `btu_notyburt` (
  `idnot` int(255) NOT NULL AUTO_INCREMENT,
  `timestamp` varchar(255) DEFAULT NULL,
  `msg` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idnot`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of btu_notyburt
-- ----------------------------
INSERT INTO `btu_notyburt` VALUES ('1', '2018-09-10 05:39:21', '<strong>Felicitaciones</strong> tu cuenta ha sido creada con &eacute;xito', 'new', '4', 'pe pe-check');
INSERT INTO `btu_notyburt` VALUES ('2', '2018-09-10 06:16:03', '<strong>Felicitaciones</strong> tu cuenta ha sido creada con &eacute;xito', 'read', '5', 'pe pe-check');
INSERT INTO `btu_notyburt` VALUES ('3', '2018-09-10 06:16:03', '<strong>Recuerda</strong> debes completar los datos de tu cuenta para continuar', 'read', '5', 'pe pe-magic-wand');
INSERT INTO `btu_notyburt` VALUES ('4', '2018-09-10 06:24:47', '<strong>Felicitaciones</strong> tu cuenta ha sido creada con &eacute;xito', 'read', '6', 'pe pe-check');
INSERT INTO `btu_notyburt` VALUES ('5', '2018-09-10 06:24:47', '<strong>Recuerda</strong> debes completar los datos de tu cuenta para continuar', 'read', '6', 'pe pe-magic-wand');

-- ----------------------------
-- Table structure for btu_querylog
-- ----------------------------
DROP TABLE IF EXISTS `btu_querylog`;
CREATE TABLE `btu_querylog` (
  `idlog` int(11) NOT NULL AUTO_INCREMENT,
  `datetime` varchar(255) DEFAULT NULL,
  `query` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idlog`)
) ENGINE=InnoDB AUTO_INCREMENT=430 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of btu_querylog
-- ----------------------------
INSERT INTO `btu_querylog` VALUES ('1', '2018-09-10 03:15:53', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('2', '2018-09-10 03:18:29', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('3', '2018-09-10 03:33:18', 'SELECT * FROM btu_usuario WHERE username = \'undefined\'');
INSERT INTO `btu_querylog` VALUES ('4', '2018-09-10 03:33:22', 'SELECT * FROM btu_usuario WHERE username = \'undefined\'');
INSERT INTO `btu_querylog` VALUES ('5', '2018-09-10 03:33:27', 'SELECT * FROM btu_usuario WHERE username = \'undefined\'');
INSERT INTO `btu_querylog` VALUES ('6', '2018-09-10 03:57:06', 'SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('7', '2018-09-10 03:57:19', 'SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('8', '2018-09-10 04:00:04', 'SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('9', '2018-09-10 04:01:53', 'SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('10', '2018-09-10 04:04:18', 'SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('11', '2018-09-10 04:04:19', 'INSERT INTO `btu_usuario` (`idusuario`, `username`, `password`, `fullname`, `group`, `avatar`, `theme`, `panel`, `email`, `phone`, `address`, `lastlogin`, `membersice`, `empresa`)   VALUES  (\'undefined\',\'undefined\',\'undefined\',\'neus\',\'default\',\'default\',\'');
INSERT INTO `btu_querylog` VALUES ('12', '2018-09-10 04:04:19', 'SELECT * FROM btu_usuario WHERE username = \'undefined\'');
INSERT INTO `btu_querylog` VALUES ('13', '2018-09-10 04:05:10', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('14', '2018-09-10 04:05:26', 'SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('15', '2018-09-10 04:10:28', 'SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('16', '2018-09-10 04:10:36', 'SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('17', '2018-09-10 04:11:15', 'SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('18', '2018-09-10 04:12:21', 'SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('19', '2018-09-10 04:12:29', 'SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('20', '2018-09-10 04:13:33', ' /* PRE REGISTRO */ SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('21', '2018-09-10 04:14:56', ' /* PRE REGISTRO */ SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('22', '2018-09-10 04:16:01', ' /* PRE REGISTRO */ SELECT username FROM btu_usuario WHERE username = \'root\';');
INSERT INTO `btu_querylog` VALUES ('23', '2018-09-10 04:16:54', ' /* PRE REGISTRO */ SELECT username FROM btu_usuario WHERE username = \'undefined\';');
INSERT INTO `btu_querylog` VALUES ('24', '2018-09-10 04:19:29', ' /* PRE REGISTRO */ SELECT username FROM btu_usuario WHERE username = \'\';');
INSERT INTO `btu_querylog` VALUES ('25', '2018-09-10 04:24:20', ' /* PRE REGISTRO */ SELECT username FROM btu_usuario WHERE username = \'frank\';');
INSERT INTO `btu_querylog` VALUES ('26', '2018-09-10 04:26:06', ' /* PRE REGISTRO */ SELECT username FROM btu_usuario WHERE username = \'frank\';');
INSERT INTO `btu_querylog` VALUES ('27', '2018-09-10 04:26:06', 'INSERT INTO `btu_usuario` (`username`, `password`, `fullname`, `group`, `avatar`, `theme`, `panel`, `email`, `phone`, `address`, `lastlogin`, `membersice`, `empresa`, `status`)   VALUES  (\'frank\',\'frankfrank\',\'frank@burtonservers.com\',\'neus\',\'default\',\'de');
INSERT INTO `btu_querylog` VALUES ('28', '2018-09-10 04:26:06', ' /* POST REGISTRO */ SELECT * FROM btu_usuario WHERE username = \'frank\'');
INSERT INTO `btu_querylog` VALUES ('29', '2018-09-10 04:31:26', 'SELECT * FROM btu_usuario WHERE username = \'frank\'');
INSERT INTO `btu_querylog` VALUES ('30', '2018-09-10 04:31:34', 'SELECT * FROM btu_usuario WHERE username = \'frank\'');
INSERT INTO `btu_querylog` VALUES ('31', '2018-09-10 04:34:11', 'SELECT * FROM btu_usuario WHERE username = \'frank\'');
INSERT INTO `btu_querylog` VALUES ('32', '2018-09-10 04:38:48', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('33', '2018-09-10 04:39:49', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('34', '2018-09-10 04:40:18', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('35', '2018-09-10 04:41:58', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('36', '2018-09-10 04:42:14', 'SELECT * FROM btu_usuario WHERE username = \'frank\'');
INSERT INTO `btu_querylog` VALUES ('37', '2018-09-10 04:42:24', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('38', '2018-09-10 04:43:57', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('39', '2018-09-10 04:44:39', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('40', '2018-09-10 04:45:15', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('41', '2018-09-10 04:46:26', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('42', '2018-09-10 04:46:44', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('43', '2018-09-10 04:48:37', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('44', '2018-09-10 04:49:33', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('45', '2018-09-10 04:50:32', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('46', '2018-09-10 04:50:39', 'SELECT * FROM btu_usuario WHERE username = \'frank\'');
INSERT INTO `btu_querylog` VALUES ('47', '2018-09-10 04:51:02', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('48', '2018-09-10 04:51:53', ' /* PRE REGISTRO */ SELECT username FROM btu_usuario WHERE username = \'jesus\';');
INSERT INTO `btu_querylog` VALUES ('49', '2018-09-10 04:51:53', 'INSERT INTO `btu_usuario` (`username`, `password`, `email`, `group`, `avatar`, `theme`, `panel`, `fullname`, `phone`, `address`, `lastlogin`, `membersice`, `empresa`, `status`)   VALUES  (\'jesus\',\'jesusjesus\',\'bayman@burtonservers.com\',\'neus\',\'default\',\'d');
INSERT INTO `btu_querylog` VALUES ('50', '2018-09-10 04:51:53', ' /* POST REGISTRO */ SELECT * FROM btu_usuario WHERE username = \'jesus\'');
INSERT INTO `btu_querylog` VALUES ('51', '2018-09-10 04:52:16', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('52', '2018-09-10 04:52:29', 'SELECT * FROM btu_usuario WHERE username = \'jesus\'');
INSERT INTO `btu_querylog` VALUES ('53', '2018-09-10 04:53:13', 'SELECT * FROM btu_usuario WHERE username = \'frank\'');
INSERT INTO `btu_querylog` VALUES ('54', '2018-09-10 05:04:48', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('55', '2018-09-10 05:05:10', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('56', '2018-09-10 05:05:20', 'SELECT * FROM btu_usuario WHERE username = \'frank\'');
INSERT INTO `btu_querylog` VALUES ('57', '2018-09-10 05:39:21', ' /* PRE REGISTRO */ SELECT username FROM btu_usuario WHERE username = \'jose\';');
INSERT INTO `btu_querylog` VALUES ('58', '2018-09-10 05:39:21', 'INSERT INTO `btu_usuario` (`username`, `password`, `email`, `group`, `avatar`, `theme`, `panel`, `fullname`, `phone`, `address`, `lastlogin`, `membersice`, `empresa`, `status`)   VALUES  (\'jose\',\'josejose\',\'frank@burtonservers.com\',\'neus\',\'default\',\'defau');
INSERT INTO `btu_querylog` VALUES ('59', '2018-09-10 05:39:21', ' /* POST REGISTRO */ SELECT * FROM btu_usuario WHERE username = \'jose\'');
INSERT INTO `btu_querylog` VALUES ('60', '2018-09-10 05:55:25', 'SELECT * FROM btu_usuario WHERE username = \'jose\'');
INSERT INTO `btu_querylog` VALUES ('61', '2018-09-10 06:00:45', 'SELECT * FROM btu_usuario WHERE username = \'jose\'');
INSERT INTO `btu_querylog` VALUES ('62', '2018-09-10 06:04:26', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('63', '2018-09-10 06:08:36', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('64', '2018-09-10 06:08:45', 'SELECT * FROM btu_usuario WHERE username = \'jose\'');
INSERT INTO `btu_querylog` VALUES ('65', '2018-09-10 06:16:03', ' /* PRE REGISTRO */ SELECT username FROM btu_usuario WHERE username = \'andres\';');
INSERT INTO `btu_querylog` VALUES ('66', '2018-09-10 06:16:03', 'INSERT INTO `btu_usuario` (`username`, `password`, `email`, `group`, `avatar`, `theme`, `panel`, `fullname`, `phone`, `address`, `lastlogin`, `membersice`, `empresa`, `status`)   VALUES  (\'andres\',\'andresandres\',\'frank@burtonservers.com\',\'neus\',\'default\',');
INSERT INTO `btu_querylog` VALUES ('67', '2018-09-10 06:16:03', ' /* POST REGISTRO */ SELECT * FROM btu_usuario WHERE username = \'andres\'');
INSERT INTO `btu_querylog` VALUES ('68', '2018-09-10 06:20:50', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' GROUP BY `status`');
INSERT INTO `btu_querylog` VALUES ('69', '2018-09-10 06:20:50', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' GROUP BY `status`');
INSERT INTO `btu_querylog` VALUES ('70', '2018-09-10 06:20:50', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'5\'');
INSERT INTO `btu_querylog` VALUES ('71', '2018-09-10 06:21:59', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('72', '2018-09-10 06:21:59', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('73', '2018-09-10 06:21:59', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'5\'');
INSERT INTO `btu_querylog` VALUES ('74', '2018-09-10 06:22:29', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('75', '2018-09-10 06:22:29', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('76', '2018-09-10 06:22:29', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'5\'');
INSERT INTO `btu_querylog` VALUES ('77', '2018-09-10 06:23:35', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('78', '2018-09-10 06:23:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('79', '2018-09-10 06:23:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('80', '2018-09-10 06:23:47', 'SELECT * FROM btu_usuario WHERE username = \'jose\'');
INSERT INTO `btu_querylog` VALUES ('81', '2018-09-10 06:23:47', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'4\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('82', '2018-09-10 06:23:47', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'4\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('83', '2018-09-10 06:23:47', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'4\'');
INSERT INTO `btu_querylog` VALUES ('84', '2018-09-10 06:23:58', 'SELECT * FROM btu_usuario WHERE username = \'andres\'');
INSERT INTO `btu_querylog` VALUES ('85', '2018-09-10 06:23:58', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('86', '2018-09-10 06:23:58', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('87', '2018-09-10 06:23:58', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'5\'');
INSERT INTO `btu_querylog` VALUES ('88', '2018-09-10 06:24:07', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('89', '2018-09-10 06:24:07', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('90', '2018-09-10 06:24:07', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'5\'');
INSERT INTO `btu_querylog` VALUES ('91', '2018-09-10 06:24:10', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('92', '2018-09-10 06:24:10', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('93', '2018-09-10 06:24:10', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'5\'');
INSERT INTO `btu_querylog` VALUES ('94', '2018-09-10 06:24:19', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('95', '2018-09-10 06:24:19', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('96', '2018-09-10 06:24:21', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('97', '2018-09-10 06:24:21', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('98', '2018-09-10 06:24:46', ' /* PRE REGISTRO */ SELECT username FROM btu_usuario WHERE username = \'andrea\';');
INSERT INTO `btu_querylog` VALUES ('99', '2018-09-10 06:24:46', 'INSERT INTO `btu_usuario` (`username`, `password`, `email`, `group`, `avatar`, `theme`, `panel`, `fullname`, `phone`, `address`, `lastlogin`, `membersice`, `empresa`, `status`)   VALUES  (\'andrea\',\'andrea\',\'frank@burtonservers.com\',\'neus\',\'default\',\'defau');
INSERT INTO `btu_querylog` VALUES ('100', '2018-09-10 06:24:47', ' /* POST REGISTRO */ SELECT * FROM btu_usuario WHERE username = \'andrea\'');
INSERT INTO `btu_querylog` VALUES ('101', '2018-09-10 06:24:47', 'INSERT INTO `btu_notyburt` (`timestamp`, `msg`, `status`, `user`, `type`) VALUES (\'2018-09-10 06:24:47\',\'<strong>Felicitaciones</strong> tu cuenta ha sido creada con &eacute;xito\',\'new\',\'6\',\'pe pe-check\')');
INSERT INTO `btu_querylog` VALUES ('102', '2018-09-10 06:24:47', 'INSERT INTO `btu_notyburt` (`timestamp`, `msg`, `status`, `user`, `type`) VALUES (\'2018-09-10 06:24:47\',\'<strong>Recuerda</strong> debes completar los datos de tu cuenta para continuar\',\'new\',\'6\',\'pe pe-magic-wand\')');
INSERT INTO `btu_querylog` VALUES ('103', '2018-09-10 06:24:47', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('104', '2018-09-10 06:24:47', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('105', '2018-09-10 06:24:47', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'6\'');
INSERT INTO `btu_querylog` VALUES ('106', '2018-09-10 06:26:14', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('107', '2018-09-10 06:26:14', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('108', '2018-09-10 06:26:14', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'6\'');
INSERT INTO `btu_querylog` VALUES ('109', '2018-09-10 06:26:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('110', '2018-09-10 06:26:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('111', '2018-09-10 06:26:35', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'6\'');
INSERT INTO `btu_querylog` VALUES ('112', '2018-09-10 06:26:52', 'SELECT * FROM btu_usuario WHERE username = \'frank\'');
INSERT INTO `btu_querylog` VALUES ('113', '2018-09-10 06:26:52', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'2\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('114', '2018-09-10 06:26:53', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'2\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('115', '2018-09-10 06:27:46', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'2\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('116', '2018-09-10 06:27:46', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'2\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('117', '2018-09-10 06:27:56', 'SELECT * FROM btu_usuario WHERE username = \'frank\'');
INSERT INTO `btu_querylog` VALUES ('118', '2018-09-10 06:27:56', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'2\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('119', '2018-09-10 06:27:56', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'2\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('120', '2018-09-10 06:28:26', 'SELECT * FROM btu_usuario WHERE username = \'frank\'');
INSERT INTO `btu_querylog` VALUES ('121', '2018-09-10 06:28:26', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'2\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('122', '2018-09-10 06:28:26', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'2\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('123', '2018-09-10 06:29:30', 'SELECT * FROM btu_usuario WHERE username = \'andrea\'');
INSERT INTO `btu_querylog` VALUES ('124', '2018-09-10 06:29:30', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('125', '2018-09-10 06:29:30', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('126', '2018-09-10 06:29:30', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'6\'');
INSERT INTO `btu_querylog` VALUES ('127', '2018-09-10 06:31:50', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('128', '2018-09-10 06:31:50', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('129', '2018-09-10 06:31:50', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'6\'');
INSERT INTO `btu_querylog` VALUES ('130', '2018-09-10 06:36:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('131', '2018-09-10 06:36:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('132', '2018-09-10 06:36:35', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'6\'');
INSERT INTO `btu_querylog` VALUES ('133', '2018-09-10 06:36:39', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('134', '2018-09-10 06:36:39', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('135', '2018-09-10 06:36:39', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'6\'');
INSERT INTO `btu_querylog` VALUES ('136', '2018-09-10 06:39:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('137', '2018-09-10 06:39:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('138', '2018-09-10 06:39:35', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'6\'');
INSERT INTO `btu_querylog` VALUES ('139', '2018-09-10 06:40:11', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('140', '2018-09-10 06:40:11', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('141', '2018-09-10 06:40:11', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'6\'');
INSERT INTO `btu_querylog` VALUES ('142', '2018-09-10 06:40:23', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('143', '2018-09-10 06:40:23', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('144', '2018-09-10 06:40:23', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'6\'');
INSERT INTO `btu_querylog` VALUES ('145', '2018-09-10 06:40:43', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('146', '2018-09-10 06:40:43', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('147', '2018-09-10 06:40:43', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'6\'');
INSERT INTO `btu_querylog` VALUES ('148', '2018-09-10 06:41:02', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('149', '2018-09-10 06:41:02', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'6\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('150', '2018-09-10 06:41:02', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'6\'');
INSERT INTO `btu_querylog` VALUES ('151', '2018-09-10 17:13:36', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('152', '2018-09-10 17:13:36', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('153', '2018-09-10 17:37:24', 'SELECT * FROM btu_usuario WHERE username = \'frank\'');
INSERT INTO `btu_querylog` VALUES ('154', '2018-09-10 17:37:24', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'2\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('155', '2018-09-10 17:37:24', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'2\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('156', '2018-09-10 17:37:42', 'SELECT * FROM btu_usuario WHERE username = \'andres\'');
INSERT INTO `btu_querylog` VALUES ('157', '2018-09-10 17:37:42', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('158', '2018-09-10 17:37:42', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('159', '2018-09-10 17:37:42', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'5\'');
INSERT INTO `btu_querylog` VALUES ('160', '2018-09-10 17:37:52', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('161', '2018-09-10 17:37:52', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('162', '2018-09-10 17:37:52', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'5\'');
INSERT INTO `btu_querylog` VALUES ('163', '2018-09-10 20:35:36', 'SELECT * FROM btu_usuario WHERE username = \'andres\'');
INSERT INTO `btu_querylog` VALUES ('164', '2018-09-10 20:35:36', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('165', '2018-09-10 20:35:36', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('166', '2018-09-10 20:35:36', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'5\'');
INSERT INTO `btu_querylog` VALUES ('167', '2018-09-10 20:35:59', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('168', '2018-09-10 20:35:59', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('169', '2018-09-10 20:35:59', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('170', '2018-09-10 20:40:34', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('171', '2018-09-10 20:40:34', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('172', '2018-09-10 20:40:36', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('173', '2018-09-10 20:40:36', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('174', '2018-09-10 22:13:43', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('175', '2018-09-10 22:13:43', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('176', '2018-09-10 22:13:46', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('177', '2018-09-10 22:13:46', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('178', '2018-09-10 22:13:46', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('179', '2018-09-10 22:13:48', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('180', '2018-09-10 22:13:48', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('181', '2018-09-10 22:29:57', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('182', '2018-09-10 22:29:57', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('183', '2018-09-10 22:29:57', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('184', '2018-09-10 23:12:52', 'SELECT * FROM btu_usuario WHERE username = \'asdawdawd\'');
INSERT INTO `btu_querylog` VALUES ('185', '2018-09-10 23:13:39', 'SELECT * FROM btu_usuario WHERE username = \'asdawdawd\'');
INSERT INTO `btu_querylog` VALUES ('186', '2018-09-10 23:14:47', 'SELECT * FROM btu_usuario WHERE username = \'rootawdawd\'');
INSERT INTO `btu_querylog` VALUES ('187', '2018-09-10 23:14:52', 'SELECT * FROM btu_usuario WHERE username = \'rootawdawd\'');
INSERT INTO `btu_querylog` VALUES ('188', '2018-09-10 23:14:58', 'SELECT * FROM btu_usuario WHERE username = \'rootawdawd\'');
INSERT INTO `btu_querylog` VALUES ('189', '2018-09-10 23:24:03', 'SELECT * FROM btu_usuario WHERE username = \'roo\'');
INSERT INTO `btu_querylog` VALUES ('190', '2018-09-10 23:24:13', 'SELECT * FROM btu_usuario WHERE username = \'asdawdasdaw\'');
INSERT INTO `btu_querylog` VALUES ('191', '2018-09-10 23:24:15', 'SELECT * FROM btu_usuario WHERE username = \'asdawdasdaw\'');
INSERT INTO `btu_querylog` VALUES ('192', '2018-09-10 23:24:31', 'SELECT * FROM btu_usuario WHERE username = \'asdawdasdaw\'');
INSERT INTO `btu_querylog` VALUES ('193', '2018-09-11 01:52:49', 'SELECT * FROM btu_usuario WHERE username = \'rootsss\'');
INSERT INTO `btu_querylog` VALUES ('194', '2018-09-11 01:53:00', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('195', '2018-09-11 01:53:00', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('196', '2018-09-11 01:53:00', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('197', '2018-09-11 01:53:09', 'SELECT * FROM btu_usuario WHERE username = \'andres\'');
INSERT INTO `btu_querylog` VALUES ('198', '2018-09-11 01:53:09', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('199', '2018-09-11 01:53:09', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('200', '2018-09-11 01:53:09', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'5\'');
INSERT INTO `btu_querylog` VALUES ('201', '2018-09-13 19:52:57', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('202', '2018-09-13 19:52:57', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('203', '2018-09-13 19:52:58', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('204', '2018-09-13 19:52:58', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('205', '2018-09-13 19:53:35', 'SELECT * FROM btu_usuario WHERE username = \'andres\'');
INSERT INTO `btu_querylog` VALUES ('206', '2018-09-13 19:53:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('207', '2018-09-13 19:53:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('208', '2018-09-13 19:53:35', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'5\'');
INSERT INTO `btu_querylog` VALUES ('209', '2018-09-13 20:35:33', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('210', '2018-09-13 20:35:33', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'5\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('211', '2018-09-13 20:35:33', 'UPDATE btu_notyburt SET status = \'read\' WHERE user = \'5\'');
INSERT INTO `btu_querylog` VALUES ('212', '2018-09-13 20:59:54', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('213', '2018-09-13 21:03:04', 'SELECT * FROM btu_usuario WHERE username = \'andres\'');
INSERT INTO `btu_querylog` VALUES ('214', '2018-09-13 21:05:21', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('215', '2018-09-13 21:05:21', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('216', '2018-09-13 21:05:21', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('217', '2018-09-13 21:07:26', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('218', '2018-09-13 21:07:26', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('219', '2018-09-13 21:07:47', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('220', '2018-09-13 21:07:47', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('221', '2018-09-13 21:07:47', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('222', '2018-09-13 21:32:54', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('223', '2018-09-13 21:32:54', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('224', '2018-09-13 21:33:07', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('225', '2018-09-13 21:33:07', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('226', '2018-09-13 21:34:59', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('227', '2018-09-13 21:34:59', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('228', '2018-09-13 21:35:14', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('229', '2018-09-13 21:35:14', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('230', '2018-09-13 21:36:01', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('231', '2018-09-13 21:36:01', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('232', '2018-09-13 21:36:28', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('233', '2018-09-13 21:36:28', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('234', '2018-09-13 22:25:03', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('235', '2018-09-13 22:25:03', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('236', '2018-09-13 22:25:10', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('237', '2018-09-13 22:25:10', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('238', '2018-09-13 22:25:10', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('239', '2018-09-13 22:25:13', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('240', '2018-09-13 22:25:13', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('241', '2018-09-13 22:25:16', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('242', '2018-09-13 22:25:16', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('243', '2018-09-13 22:25:18', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('244', '2018-09-13 22:25:18', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('245', '2018-09-13 22:27:45', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('246', '2018-09-13 22:27:45', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('247', '2018-09-13 22:27:51', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('248', '2018-09-13 22:27:51', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('249', '2018-09-13 22:30:36', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('250', '2018-09-13 22:30:36', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('251', '2018-09-13 22:30:56', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('252', '2018-09-13 22:30:56', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('253', '2018-09-13 22:32:06', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('254', '2018-09-13 22:32:06', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('255', '2018-09-13 22:32:27', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('256', '2018-09-13 22:32:27', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('257', '2018-09-13 22:33:02', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('258', '2018-09-13 22:33:02', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('259', '2018-09-13 22:33:29', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('260', '2018-09-13 22:33:29', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('261', '2018-09-13 22:33:41', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('262', '2018-09-13 22:33:41', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('263', '2018-09-13 22:33:43', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('264', '2018-09-13 22:33:43', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('265', '2018-09-13 22:33:43', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('266', '2018-09-13 22:33:43', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('267', '2018-09-13 22:33:45', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('268', '2018-09-13 22:33:45', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('269', '2018-09-13 22:35:46', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('270', '2018-09-13 22:35:46', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('271', '2018-09-13 22:36:26', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('272', '2018-09-13 22:36:26', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('273', '2018-09-13 22:36:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('274', '2018-09-13 22:36:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('275', '2018-09-13 22:37:34', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('276', '2018-09-13 22:37:34', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('277', '2018-09-13 22:38:03', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('278', '2018-09-13 22:38:03', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('279', '2018-09-13 22:38:07', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('280', '2018-09-13 22:38:07', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('281', '2018-09-13 22:38:13', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('282', '2018-09-13 22:38:13', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('283', '2018-09-13 22:38:17', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('284', '2018-09-13 22:38:17', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('285', '2018-09-13 22:40:17', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('286', '2018-09-13 22:40:17', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('287', '2018-09-13 22:40:19', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('288', '2018-09-13 22:40:19', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('289', '2018-09-13 22:40:19', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('290', '2018-09-13 22:40:19', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('291', '2018-09-13 22:40:22', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('292', '2018-09-13 22:40:22', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('293', '2018-09-13 22:41:15', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('294', '2018-09-13 22:41:15', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('295', '2018-09-13 22:41:20', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('296', '2018-09-13 22:41:20', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('297', '2018-09-13 22:41:47', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('298', '2018-09-13 22:41:47', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('299', '2018-09-13 22:41:53', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('300', '2018-09-13 22:41:53', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('301', '2018-09-13 22:42:09', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('302', '2018-09-13 22:42:09', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('303', '2018-09-13 22:42:12', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('304', '2018-09-13 22:42:12', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('305', '2018-09-13 22:42:29', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('306', '2018-09-13 22:42:29', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('307', '2018-09-13 22:42:39', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('308', '2018-09-13 22:42:39', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('309', '2018-09-13 22:43:00', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('310', '2018-09-13 22:43:00', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('311', '2018-09-13 22:43:06', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('312', '2018-09-13 22:43:06', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('313', '2018-09-13 22:43:09', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('314', '2018-09-13 22:43:09', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('315', '2018-09-13 22:43:18', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('316', '2018-09-13 22:43:18', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('317', '2018-09-13 22:44:10', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('318', '2018-09-13 22:44:10', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('319', '2018-09-13 22:44:16', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('320', '2018-09-13 22:44:16', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('321', '2018-09-13 22:44:33', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('322', '2018-09-13 22:44:33', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('323', '2018-09-13 22:44:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('324', '2018-09-13 22:44:35', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('325', '2018-09-13 22:44:38', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('326', '2018-09-13 22:44:38', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('327', '2018-09-13 22:45:47', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('328', '2018-09-13 22:45:47', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('329', '2018-09-13 22:45:49', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('330', '2018-09-13 22:45:49', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('331', '2018-09-13 22:45:52', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('332', '2018-09-13 22:45:52', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('333', '2018-09-13 22:45:56', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('334', '2018-09-13 22:45:56', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('335', '2018-09-13 22:45:57', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('336', '2018-09-13 22:45:57', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('337', '2018-09-13 22:46:00', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('338', '2018-09-13 22:46:00', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('339', '2018-09-13 22:47:21', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('340', '2018-09-13 22:47:21', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('341', '2018-09-13 22:47:22', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('342', '2018-09-13 22:47:22', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('343', '2018-09-13 22:47:24', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('344', '2018-09-13 22:47:24', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('345', '2018-09-13 22:47:25', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('346', '2018-09-13 22:47:25', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('347', '2018-09-13 22:47:28', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('348', '2018-09-13 22:47:28', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('349', '2018-09-13 22:47:31', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('350', '2018-09-13 22:47:31', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('351', '2018-09-13 22:53:25', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('352', '2018-09-13 22:53:25', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('353', '2018-09-13 22:53:41', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('354', '2018-09-13 22:53:41', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('355', '2018-09-13 22:53:41', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('356', '2018-09-13 22:56:27', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('357', '2018-09-13 22:56:27', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('358', '2018-09-13 22:57:59', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('359', '2018-09-13 22:57:59', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('360', '2018-09-13 22:58:46', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('361', '2018-09-13 22:58:46', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('362', '2018-09-13 23:07:10', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('363', '2018-09-13 23:07:10', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('364', '2018-09-13 23:11:37', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('365', '2018-09-13 23:11:37', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('366', '2018-09-13 23:12:13', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('367', '2018-09-13 23:12:13', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('368', '2018-09-13 23:13:20', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('369', '2018-09-13 23:13:20', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('370', '2018-09-13 23:13:59', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('371', '2018-09-13 23:13:59', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('372', '2018-09-13 23:14:32', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('373', '2018-09-13 23:14:32', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('374', '2018-09-13 23:14:53', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('375', '2018-09-13 23:14:53', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('376', '2018-09-13 23:22:26', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('377', '2018-09-13 23:22:26', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('378', '2018-09-13 23:23:43', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('379', '2018-09-13 23:23:43', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('380', '2018-09-13 23:24:59', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('381', '2018-09-13 23:24:59', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('382', '2018-09-13 23:26:23', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('383', '2018-09-13 23:26:23', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('384', '2018-09-13 23:26:46', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('385', '2018-09-13 23:26:46', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('386', '2018-09-13 23:31:14', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('387', '2018-09-13 23:31:14', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('388', '2018-09-13 23:31:51', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('389', '2018-09-13 23:31:51', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('390', '2018-09-13 23:32:05', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('391', '2018-09-13 23:32:05', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('392', '2018-09-13 23:32:27', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('393', '2018-09-13 23:32:27', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('394', '2018-09-13 23:32:41', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('395', '2018-09-13 23:32:41', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('396', '2018-09-13 23:32:51', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('397', '2018-09-13 23:32:51', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('398', '2018-09-13 23:33:01', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('399', '2018-09-13 23:33:01', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('400', '2018-09-13 23:34:38', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('401', '2018-09-13 23:34:38', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('402', '2018-09-13 23:35:07', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('403', '2018-09-13 23:35:07', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('404', '2018-09-13 23:35:19', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('405', '2018-09-13 23:35:19', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('406', '2018-09-13 23:36:50', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('407', '2018-09-13 23:36:50', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('408', '2018-09-13 23:36:58', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('409', '2018-09-13 23:36:58', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('410', '2018-09-16 23:04:09', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('411', '2018-09-16 23:04:09', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('412', '2018-10-01 14:39:44', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('413', '2018-10-01 14:39:44', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('414', '2018-10-01 14:39:48', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('415', '2018-10-01 14:39:48', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('416', '2018-10-01 14:39:48', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('417', '2018-10-01 14:39:53', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('418', '2018-10-01 14:39:53', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('419', '2018-10-01 14:39:58', 'SELECT * FROM btu_usuario WHERE username = \'root\'');
INSERT INTO `btu_querylog` VALUES ('420', '2018-10-01 14:39:58', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('421', '2018-10-01 14:39:58', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('422', '2018-10-01 14:40:04', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('423', '2018-10-01 14:40:04', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'1\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('424', '2018-10-01 15:39:39', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('425', '2018-10-01 15:39:39', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('426', '2018-10-01 15:43:20', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('427', '2018-10-01 15:43:20', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('428', '2018-10-11 16:52:49', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' AND status = \'new\' ORDER BY `status`');
INSERT INTO `btu_querylog` VALUES ('429', '2018-10-11 16:52:49', 'SELECT * FROM `btu_notyburt` WHERE `user` = \'\' ORDER BY `status`');

-- ----------------------------
-- Table structure for btu_usuario
-- ----------------------------
DROP TABLE IF EXISTS `btu_usuario`;
CREATE TABLE `btu_usuario` (
  `idusuario` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `group` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `theme` varchar(255) DEFAULT NULL,
  `panel` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `lastlogin` varchar(255) DEFAULT NULL,
  `membersice` varchar(255) DEFAULT NULL,
  `empresa` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idusuario`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of btu_usuario
-- ----------------------------
INSERT INTO `btu_usuario` VALUES ('1', 'root', 'M0nt2gn3!', 'Bayman Burton', 'admin', 'male10', 'default', 'config', 'burton@burtonservers.com', '+593979046196', 'Burton House', '2018-10-01 14:39:58', '2018-09-10 04:26:06', 'staff', 'full');
INSERT INTO `btu_usuario` VALUES ('2', 'frank', 'frankfrank', 'Nuevo Usuario', 'neus', 'default', 'default', 'newuser', 'frank@burtonservers.com', 'neus', 'neus', 'neus', '2018-09-10 04:26:06', 'neus', 'new');
INSERT INTO `btu_usuario` VALUES ('3', 'jesus', 'jesusjesus', 'Nuevo Usuario', 'neus', 'default', 'default', 'newuser', 'bayman@burtonservers.com', 'neus', 'neus', 'neus', '2018-09-10 04:51:53', 'neus', 'new');
INSERT INTO `btu_usuario` VALUES ('4', 'jose', 'josejose', 'Nuevo Usuario', 'neus', 'default', 'default', 'newuser', 'frank@burtonservers.com', 'neus', 'neus', 'neus', '2018-09-10 05:39:21', 'neus', 'new');
INSERT INTO `btu_usuario` VALUES ('5', 'andres', 'andresandres', 'Nuevo Usuario', 'neus', 'default', 'default', 'newuser', 'frank@burtonservers.com', 'neus', 'neus', 'neus', '2018-09-10 06:16:03', 'neus', 'new');
INSERT INTO `btu_usuario` VALUES ('6', 'andrea', 'andrea', 'Nuevo Usuario', 'neus', 'default', 'default', 'newuser', 'frank@burtonservers.com', 'neus', 'neus', 'neus', '2018-09-10 06:24:46', 'neus', 'new');
