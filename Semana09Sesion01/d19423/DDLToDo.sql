

DROP TABLE IF EXISTS tblVacunas;
create table tblVacunas( 
	id int primary key AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblVacunas( descripcion, usrCreacion)
values('TripleFelina', 1);


DROP TABLE IF EXISTS tblEspecie;
create table tblEspecie( 
	id int primary key AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblEspecie( descripcion, usrCreacion)
values('Gatos', 1),
('Perros',1);


DROP TABLE IF EXISTS tblRaza;
create table tblRaza( 
	id int primary key AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblRaza( descripcion, usrCreacion)
values('Mestizo', 1);


DROP TABLE IF EXISTS tblColor;
create table tblColor( 
	id int primary key AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblColor( descripcion, usrCreacion)
values('Blanco', 1),
('Negro', 1);


DROP TABLE IF EXISTS tblSexo;
create table tblSexo( 
	id int primary key AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblSexo( descripcion, usrCreacion)
values('Hembra', 1),
('Macho', 1);



DROP TABLE IF EXISTS tblNacionalidad;
create table tblNacionalidad( 
	id int primary key AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblNacionalidad( descripcion, usrCreacion)
values('Peruano', 1),
('Ecuatorino', 1);


DROP TABLE IF EXISTS tblUbigeo;
create table tblUbigeo( 
	ubigeo varchar(6) primary key,
    departamento varchar(50) not null,
    provincia varchar(50) not null,
    distrito varchar(50) not null,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);
insert into tblUbigeo( ubigeo,departamento,provincia, distrito,usrCreacion)
values('130115','LAMBAYEQUE','CHICLAYO','LA VICTORIA', 1),
('140133','LIMA','LIMA','JESUS MARIA', 1);




-- DROP TABLE IF EXISTS tblUsuario;
-- create table tblUsuario( 
-- 	id int primary key AUTO_INCREMENT,
--     username varchar(50) not null unique,
--     password varchar(256) not null,
--     email varchar(100) not null unique,
--     activo bit not null default 1,
--     usrCreacion int not null,
--     fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
--     usrModificacion int null,
--     fechaModificacion datetime null,
--     FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
--     FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
-- );
-- insert into tblUsuario( username, password, email, usrCreacion)
-- values('rpineda', 'qwerty', 'rpineda@x-codec.net', 1);
