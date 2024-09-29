DROP TABLE IF EXISTS tblNacionalidad;

CREATE TABLE tblNacionalidad(
    id INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(50) NOT NULL,
    activo BIT NOT NULL DEFAULT 1,
    usrCreacion INT NOT NULL,
    fechaCreacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    usrModificacion INT NULL,
    fechaModificacion DATETIME NULL,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);

INSERT INTO tblNacionalidad (descripcion, usrCreacion)
VALUES ('Peruano', 1), ('Ecuatoriano', 1);
