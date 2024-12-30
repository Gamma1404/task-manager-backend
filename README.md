# Task Manager

Este proyecto es una aplicación de gestión de tareas que permite a los usuarios agregar, editar, eliminar y filtrar tareas. La aplicación consta de un frontend en React y un backend en Node.js con Express.

## Enlace a la aplicación desplegada

- [Frontend (Vercel)](https://task-manager-frontend-nmumkeupt-gammas-projects-3dacc382.vercel.app)
- [Backend (Render)](https://task-manager-backend-wz27.onrender.com)
- [Documentación de la API](https://task-manager-backend-wz27.onrender.com/documentation)

## Repositorios

- [Repositorio Backend](https://github.com/Gamma1404/task-manager-backend)
- [Repositorio Frontend](https://github.com/Gamma1404/task-manager-frontend)

## Pasos para instalar y ejecutar el proyecto localmente

### 1. Clonar el repositorio

Clona el repositorio a tu máquina local:
```bash
git clone <url_del_repositorio>
```
### 2. Configuración del Backend

### 2.1. Instalar dependencias del backend
Dirígete al directorio del backend y ejecuta el siguiente comando para instalar las dependencias:

```bash
cd backend
npm install
```

### 2.2. Configurar las variables de entorno
Crea un archivo .env en la raíz del directorio del backend y agrega las siguientes variables de entorno:

env
Copiar código
PORT=3000
MONGO_URL=mongodb+srv://<tu_usuario>:<tu_contraseña>@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority
PORT: El puerto en el que se ejecutará el servidor backend (por defecto es 3000).
MONGO_URL: La URL de conexión a la base de datos MongoDB (reemplaza con tu propia URL de MongoDB Atlas).

### 2.3. Ejecutar el backend
Ejecuta el servidor backend con:

```bash
npm start
```

### 3. Configuración del Frontend

### 3.1. Instalar dependencias del frontend
Dirígete al directorio del frontend y ejecuta el siguiente comando para instalar las dependencias:

``` bash
cd frontend
npm install
```

### 3.2. Configurar las variables de entorno
Crea un archivo .env en la raíz del directorio del frontend y agrega la siguiente variable de entorno:

env
Copiar código
VITE_BACKEND_URL=http://localhost:3000/api
VITE_BACKEND_URL: La URL base del backend. Si el backend está corriendo localmente en el puerto 3000, esta será la URL.

### 3.3. Ejecutar el frontend
Para iniciar el frontend, ejecuta el siguiente comando:

``` bash
npm run dev
Esto abrirá la aplicación frontend en tu navegador en http://localhost:5173.
```

### Detalles de configuración
Variables de entorno:
Backend:
PORT: El puerto en el que el servidor backend escucha las solicitudes (por defecto 3000).
MONGO_URL: URL de conexión a la base de datos MongoDB (requiere una cuenta de MongoDB Atlas).
Frontend:
VITE_BACKEND_URL: URL base del backend para realizar las solicitudes desde el frontend (por defecto http://localhost:3000/api para el entorno local).
Documentación de la API
La documentación completa de la API REST se puede consultar en el siguiente enlace:

### Documentación de la API
### Contribuciones
Si deseas contribuir a este proyecto, por favor crea un fork del repositorio y envía un pull request con tus mejoras o correcciones.