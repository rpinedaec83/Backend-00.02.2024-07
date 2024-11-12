# Usar la imagen oficial de Node.js
FROM node:16

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Iniciar la aplicación
CMD ["node", "index.js"]
