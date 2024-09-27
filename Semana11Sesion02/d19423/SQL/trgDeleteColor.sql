
DELIMITER $$ 
CREATE TRIGGER trgDeleteColor AFTER DELETE ON tblColor
FOR EACH ROW
BEGIN
INSERT INTO `tblColorAudit`
(`id`,
`descripcion`,
`activo`,
`usrCreacion`,
`fechaCreacion`,
`usrModificacion`,
`fechaModificacion`,
`accion`,
`user`)
VALUES
(OLD.id, OLD.descripcion, OLD.activo, OLD.usrCreacion, OLD.fechaCreacion, OLD.usrModificacion, OLD.fechaModificacion, 'D', CURRENT_USER() );

END
$$
DELIMITER ;