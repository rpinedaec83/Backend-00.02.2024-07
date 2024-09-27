CREATE TABLE `tblColorAudit` (
  `id` int NOT NULL ,
  `descripcion` varchar(50) NOT NULL,
  `activo` bit(1) NOT NULL,
  `usrCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL ,
  `usrModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  `accion` char(1),
  `user` varchar(100) not null
) 