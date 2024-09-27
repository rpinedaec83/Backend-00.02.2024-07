
DELIMITER $$ 
CREATE TRIGGER trgInsertColor AFTER INSERT ON tblColor
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
(NEW.id, new.descripcion, new.activo, new.usrCreacion, new.fechaCreacion, new.usrModificacion, new.fechaModificacion, 'I', CURRENT_USER() );

END
$$
DELIMITER ;