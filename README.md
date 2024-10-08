
![Header](https://github.com/user-attachments/assets/ec350257-116d-411f-bbc9-87893d657572)

CloudMesa, a open source cloud alternative.

![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)


## 📋 Tabla de Contenidos

- [📄 Descripción](#-descripción)
- [🛠️ Tecnologías](#️-tecnologías)
- [💾 Base de datos](#-base-de-datos)
- [🔧 Instalación](#-instalación)
- [🚀 Uso](#-uso)
- [📚 Documentación](#-documentación)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)
- [✉️ Contacto](#️-contacto)
  
## 📄 Descripción

CloudMesa es un gestor cloud open source, permite a sus usuarios subir ficheros, compartir sus archivos con otros usuarios otorgandoles permisos especificos o por un tiempo limitado, personalizar sus carpetas con descripciones con MD a traves de un readme.md. La autentificacion a CloudMesa esta securizada a traves de JSON Web Tokens (JWT).

## 🛠️ Tecnologías

- **Backend:** NestJS
- **Frontend:** Angular
- **Base de Datos:** MongoDB
- **Contenedorización:** Docker
- **Otros:** TypeScript, Docker Compose, etc.


## 💾 Base de datos
La base de datos esta compuesta por Usuarios, Archivos y permisos.
![napkin-selection (1)](https://github.com/user-attachments/assets/8205d4e4-af99-46a6-a84e-fd73e8c36a66)

### Estructura

![asdsaddsaads](https://github.com/user-attachments/assets/85fb0063-fc97-4188-bfaf-63fc01be88ea)



### Relaciones
![napkin-selection (3)](https://github.com/user-attachments/assets/b48a33e3-e74b-426d-9f6c-e9dcfe6b5a31)



## 🔧 Instalación

### Prerrequisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Angular CLI](https://angular.io/cli)

### Pasos

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/sgm1018/CloudMesa_FrontEnd.git 
   cd CloudMesa_FrontEnd

2.  **Instalar dependencias del backend**

    `npm i`

3.  **Instalar dependencias del frontend**

    `cd ../frontend
    npm install`

4.  **Configurar variables de entorno**

    Crea un archivo `.env` en el directorio `backend` con las siguientes variables:

    env

    `DATABASE_URL=mongodb://localhost:27017/tu-db
    PORT=3000`

5.  **Iniciar los contenedores de Docker**

    Desde la raíz del proyecto:

    `docker-compose up -d`

🚀 Uso
------

### Backend

1.  **Iniciar el servidor NestJS**

    `cd backend
    npm run start:dev`

2.  El servidor estará disponible en `http://localhost:3000`.

3.  Swagger estara disponible en `http://localhost:3000/swagger`.

### Frontend

1.  **Iniciar la aplicación Angular**

    `cd frontend
    ng serve`

2.  Abre tu navegador en `http://localhost:4200`.

📚 Documentación
----------------

Para más detalles sobre la arquitectura y las funcionalidades, consulta la documentación.

[PROXIMAMENTE]

🤝 Contribuciones
-----------------



📄 Licencia
-----------

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo LICENSE para más información.

✉️ Contacto
-----------

-   **Autor:** Sergio González Martínez
-   **Correo electrónico:** sergiogm.works@gmail.com
-   **LinkedIn:** https://es.linkedin.com/in/sergiogm1999
-   **GitHub:** https://github.com/sgm1018
