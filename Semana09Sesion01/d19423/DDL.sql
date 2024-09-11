-- DDL Data Defenition Language
create database MiPrimeraBase;
drop database MiPrimeraBase;


use MiPrimeraBase;

create table tblUsuario( 
	id int primary key,
    username varchar(50) not null unique,
    password varchar(256) not null,
    email varchar(100) not null unique,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null
);

alter table tblUsuario ADD CONSTRAINT fkUsuario FOREIGN KEY (usrCreacion) references tblUsuario(id);
alter table tblUsuario ADD CONSTRAINT fkUsuarioMod FOREIGN KEY (usrModificacion) references tblUsuario(id);

drop table tblUsuario;

create table tblUsuario( 
	id int primary key AUTO_INCREMENT,
    username varchar(50) not null unique,
    password varchar(256) not null,
    email varchar(100) not null unique,
    activo bit not null default 1,
    usrCreacion int not null,
    fechaCreacion datetime not null DEFAULT CURRENT_TIMESTAMP ,
    usrModificacion int null,
    fechaModificacion datetime null,
    FOREIGN KEY (usrCreacion) REFERENCES tblUsuario(id),
    FOREIGN KEY (usrModificacion) REFERENCES tblUsuario(id)
);



insert into tblUsuario( username, password, email, usrCreacion, usrModificacion, fechaModificacion)
values('jperez', 'qwerty', 'jprez@x-codec.net', 1, 4,CURRENT_TIMESTAMP);

select * from tblUsuario;




