DROP TABLE IF EXISTS tblMascotaVacuna;

CREATE TABLE tblMascotaVacuna(
    id INT PRIMARY KEY AUTO_INCREMENT,
    idMascota INT NOT NULL,
    idVacuna INT NOT NULL,
    fechaAplicacion DATE NULL,
    activo BIT NOT NULL DEFAULT 1,
    usrCreacion INT NOT NULL,
    fechaCreacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    usrModificacion INT NULL,
    fechaModificacion DATETIME NULL,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (idMascota) REFERENCES tblMascota(id),
    FOREIGN KEY (idVacuna) REFERENCES tblVacunas(id)
);

INSERT INTO tblMascotaVacuna (idMascota, idVacuna, fechaAplicacion, usrCreacion)
VALUES (1, 1, '2021-09-01', 1), (1, 2, '2021-09-01', 1);
