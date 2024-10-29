use world;

drop procedure SP_CRUD_COLOR;


delimiter // 
CREATE PROCEDURE SP_CRUD_COLOR(
	IN OPCION INT
	,IN pDescripcion VARCHAR(50)
	,IN pActivo bool
	,IN pId INT
	,IN pUsuario INT )

BEGIN
	IF OPCION = 1 then
	BEGIN
		INSERT INTO tblColor (
			descripcion
			,usrCreacion
			)
		VALUES (
			pDescripcion
			,pUsuario
			);
	END;

	ELSEIF OPCION = 2 then

	BEGIN
		SELECT *
		FROM tblColor
		WHERE activo = 1;
	END;

	ELSEIF OPCION = 3 then

	BEGIN
		SELECT *
		FROM tblColor
		WHERE id = pId;
	END;

	elseif Opcion = 4 then

	BEGIN
		UPDATE tblColor
		SET descripcion = pDescripcion
			,activo = ifnull(pActivo, activo)
			,usrModificacion = pUsuario
			,fechaModificacion = CURRENT_TIMESTAMP
		WHERE id = pId;
	END;

	elseif Opcion = 5 then

	BEGIN
		UPDATE tblColor
		SET activo = 0
			,usrModificacion = pUsuario
			,fechaModificacion = CURRENT_TIMESTAMP
		WHERE id = pId;
	END;
	END IF;
END 
// 
delimiter ;
