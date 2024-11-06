USE curierdb;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    oauth_provider VARCHAR(50),
    oauth_id VARCHAR(100),
    rol ENUM('cliente', 'admin'),
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE paquetes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descripcion TEXT,
    peso DECIMAL(5,2),
    usuario_id INT,
    estado ENUM('en tránsito', 'entregado', 'pendiente') DEFAULT 'pendiente',
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE mensajes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    paquete_id INT,
    mensaje TEXT,
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (paquete_id) REFERENCES paquetes(id)
);

CREATE TABLE ubicaciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    paquete_id INT,
    latitud DECIMAL(9,6),
    longitud DECIMAL(9,6),
    direccion VARCHAR(255),
    registrado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (paquete_id) REFERENCES paquetes(id)
);
