DROP TABLE IF EXISTS tblUsuario;

CREATE TABLE tblUsuario( 
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(256) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    activo BIT NOT NULL DEFAULT 1,
    usrCreacion INT NOT NULL,
    fechaCreacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    usrModificacion INT NULL,
    fechaModificacion DATETIME NULL,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);

INSERT INTO tblUsuario (username, password, email, usrCreacion)
VALUES ('rpineda', 'qwerty', 'rpineda@x-codec.net', 1);