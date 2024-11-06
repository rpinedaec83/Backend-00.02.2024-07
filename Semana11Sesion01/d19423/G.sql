DROP PROCEDURE SP_Mascota_Vacuna;
DELIMITER $$
CREATE PROCEDURE SP_Mascota_Vacuna(
	IN p_opcion VARCHAR(10),
    IN p_id INT,
    IN p_idMascota INT,
    IN p_idVacuna INT,
    IN p_FechaAplicacion DATE,
    IN p_usr INT
    )
    BEGIN
    IF p_opcion = 'insertar' THEN
		INSERT INTO tblMascotaVacuna(
			idMascota, idVacuna, FechaAplicacion, usrCreacion
            ) VALUES(
            p_idMascota, p_idVacuna, p_FechaAplicacion, p_usr
            );
	
    ELSEIF p_opcion = 'actualizar' THEN
		UPDATE tblMascotaVacuna
        SET 
			idMascota = p_idMascota,
            idVacuna = 	p_idVacuna,
            fechaAplicacion = p_FechaAplicacion,
            usrModificacion = p_usr,
            fechaModificacion = NOW()
		WHERE id = p_id;
        
	ELSEIF p_opcion = 'elimiar' THEN
		
    
    
    
    
    
    DELIMITER$$