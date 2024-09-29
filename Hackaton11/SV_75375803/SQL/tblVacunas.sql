DROP TABLE IF EXISTS tblVacunas;

CREATE TABLE tblVacunas(
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

INSERT INTO tblVacunas (descripcion, usrCreacion)
VALUES ('TripleFelina', 1), ('Anti Rabia', 1);
