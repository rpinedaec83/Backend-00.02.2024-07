DROP TABLE IF EXISTS tblMascota;

CREATE TABLE tblMascota(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    fechaNacimiento DATE NULL,
    peso DECIMAL(5,3) NULL DEFAULT 0,
    temperatura DECIMAL(3,2) NULL DEFAULT 0,
    idEspecie INT NOT NULL,
    idRaza INT NOT NULL,
    idColor INT NOT NULL,
    idSexo INT NOT NULL,
    idPropietario INT NOT NULL,
    activo BIT NOT NULL DEFAULT 1,
    usrCreacion INT NOT NULL,
    fechaCreacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    usrModificacion INT NULL,
    fechaModificacion DATETIME NULL,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (idEspecie) REFERENCES tblEspecie(id),
    FOREIGN KEY (idRaza) REFERENCES tblRaza(id),
    FOREIGN KEY (idColor) REFERENCES tblColor(id),
    FOREIGN KEY (idSexo) REFERENCES tblSexo(id),
    FOREIGN KEY (idPropietario) REFERENCES tblPropietario(id)
);

INSERT INTO tblMascota (nombre, fechaNacimiento, idEspecie, idRaza, idColor, idSexo, idPropietario, usrCreacion, peso)
VALUES ('Pancho', '2022-06-01', 1, 1, 1, 1, 1, 1, 99.99);
