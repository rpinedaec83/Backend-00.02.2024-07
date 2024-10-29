DELIMITER $$

CREATE PROCEDURE sp_Mascotas (
    IN p_opcion VARCHAR(10),  
    IN p_id INT,             
    IN p_nombre VARCHAR(50), 
    IN p_fechaNacimiento DATE,
    IN p_peso DECIMAL(5,3),
    IN p_temperatura DECIMAL(3,2),
    IN p_idEspecie INT,
    IN p_idRaza INT,
    IN p_idColor INT,
    IN p_idSexo INT,
    IN p_idPropietario INT,
    IN p_usr INT              
)
BEGIN
    IF p_opcion = 'insertar' THEN
        INSERT INTO tblMascota (
            nombre, fechaNacimiento, peso, temperatura, idEspecie, idRaza, idColor, idSexo, idPropietario, usrCreacion
        ) VALUES (
            p_nombre, p_fechaNacimiento, p_peso, p_temperatura, p_idEspecie, p_idRaza, p_idColor, p_idSexo, p_idPropietario, p_usr
        );

    ELSEIF p_opcion = 'actualizar' THEN
        UPDATE tblMascota
        SET 
            nombre = p_nombre,
            fechaNacimiento = p_fechaNacimiento,
            peso = p_peso,
            temperatura = p_temperatura,
            idEspecie = p_idEspecie,
            idRaza = p_idRaza,
            idColor = p_idColor,
            idSexo = p_idSexo,
            idPropietario = p_idPropietario,
            usrModificacion = p_usr,
            fechaModificacion = NOW()
        WHERE id = p_id;

    ELSEIF p_opcion = 'eliminar' THEN
        UPDATE tblMascota
        SET 
            activo = 0,
            usrModificacion = p_usr,
            fechaModificacion = NOW()
        WHERE id = p_id;

    ELSEIF p_opcion = 'buscar' THEN
        SELECT * FROM tblMascota
        WHERE (p_nombre IS NULL OR nombre LIKE CONCAT('%', p_nombre, '%'))
          AND (p_idEspecie IS NULL OR idEspecie = p_idEspecie)
          AND (p_idPropietario IS NULL OR idPropietario = p_idPropietario)
          AND activo = 1; 
    END IF;
END$$

DELIMITER ;
