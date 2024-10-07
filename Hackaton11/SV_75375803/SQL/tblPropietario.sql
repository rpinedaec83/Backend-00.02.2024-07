DROP TABLE IF EXISTS tblPropietario;

CREATE TABLE tblPropietario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(25) NULL,
    ubigeo VARCHAR(6) NOT NULL,
    direccion VARCHAR(256) NULL,
    idNacionalidad INT NOT NULL,
    activo BIT NOT NULL DEFAULT 1,
    usrCreacion INT NOT NULL,
    fechaCreacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    usrModificacion INT NULL,
    fechaModificacion DATETIME NULL,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (ubigeo) REFERENCES tblUbigeo(ubigeo),
    FOREIGN KEY (idNacionalidad) REFERENCES tblNacionalidad(id)
);

INSERT INTO tblPropietario (nombres, apellidos, email, telefono, ubigeo, direccion, idNacionalidad, usrCreacion)
VALUES ('Roberto David', 'Pineda Lopez', 'rpineda@x-codec.net', '916730940', '130115', 'La Victoria de Chiclayo', 1, 1);
