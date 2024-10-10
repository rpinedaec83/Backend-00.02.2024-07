DROP TABLE IF EXISTS tblUbigeo;

CREATE TABLE tblUbigeo(
    ubigeo VARCHAR(6) PRIMARY KEY,
    departamento VARCHAR(50) NOT NULL,
    provincia VARCHAR(50) NOT NULL,
    distrito VARCHAR(50) NOT NULL,
    activo BIT NOT NULL DEFAULT 1,
    usrCreacion INT NOT NULL,
    fechaCreacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    usrModificacion INT NULL,
    fechaModificacion DATETIME NULL,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);

INSERT INTO tblUbigeo (ubigeo, departamento, provincia, distrito, usrCreacion)
VALUES ('130115', 'LAMBAYEQUE', 'CHICLAYO', 'LA VICTORIA', 1),
       ('140133', 'LIMA', 'LIMA', 'JESUS MARIA', 1);
