# Planificacion de Trabajo y Division de Tareas - Backend Node.js + Express + MongoDB

## 1. Informacion General del Proyecto
- **Stack:** Node.js, Express.js, MongoDB (Mongoose)
- **Modalidad:** API REST en JSON
- **Integrantes:** 4 desarrolladores
- **Uso de herramientas de IA:** Permitido (Cursor, Antigravity, ChatGPT, Claude, Copilot)
- **Estrategia de Trabajo Simultaneo:** Desarrollo modular con Ramas en GitHub y Modularizacion Backend para evitar conflictos (merge conflicts).

---

## 2. Arquitectura del Repositorio y Convencion de Trabajo

### Estrategia de Ramas (Git Flow Simplificado)
- `main`: Branch de produccion / entrega final. Solo se actualiza mediante Pull Requests verificadas.
- `develop`: Branch de integracion continua.
- Ramas de trabajo individual por integrante:
  - `feat/base-config` (Dev 1)
  - `feat/entity-users` (Dev 2)
  - `feat/entity-bookings` (Dev 3)
  - `feat/seed-docs-bugs` (Dev 4)

### Estructura del Proyecto
```
project-root/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── user.controller.js
│   │   └── booking.controller.js
│   ├── models/
│   │   ├── User.js
│   │   └── Booking.js
│   ├── routes/
│   │   ├── user.routes.js
│   │   └── booking.routes.js
│   ├── utils/
│   │   └── errors.js
│   ├── app.js
│   └── server.js
├── seed.js
├── .env.example
├── ENV.md
├── README.md
├── ERRORS.md
├── package.json
└── .gitignore
```

---

## 3. Division de Tareas por Integrante (Trabajo Simultaneo)

### Dev 1: Infraestructura Base, Configuracion y Middleware Central
**Objetivo:** Establecer la estructura del servidor, conexion a la base de datos y middlewares iniciales.

**Tareas Especificas:**
1. Inicializar el proyecto con `npm init -y` e instalar dependencias (`express`, `mongoose`, `dotenv`, `cors`).
2. Configurar el archivo `src/config/db.js` para la conexion con MongoDB.
3. Crear `src/app.js` configurando Express, parseo de JSON (`express.json()`) y middlewares base.
4. Crear `src/server.js` para el arranque del servidor escuchando en el puerto definido.
5. Definir la gestion global de errores en Express (`middleware de errores`).
6. Generar el archivo `.env.example` y documentar las variables de entorno en `ENV.md`.

---

### Dev 2: Entidad 1 - Usuarios (Model, Routes, Controller)
**Objetivo:** Desarrollar el CRUD completo para la primera entidad (`User`).

**Tareas Especificas:**
1. Crear el esquema Mongoose `src/models/User.js` con sus validaciones (nombre, email, rol, estado).
2. Crear `src/controllers/user.controller.js` con las funciones:
   - `createUser`: Registro / Creacion de usuario.
   - `getUsers`: Listado con filtros simples.
   - `getUserById`: Busqueda por ID.
   - `updateUser`: Modificacion de datos.
   - `deleteUser`: Eliminacion o desactivacion logica.
3. Crear `src/routes/user.routes.js` asociando las rutas HTTP a las funciones del controlador.
4. Validar las respuestas HTTP en formato JSON estandarizado.

---

### Dev 3: Entidad 2 - Reservas / Turnos (Model, Routes, Controller)
**Objetivo:** Desarrollar el CRUD completo para la segunda entidad (`Booking`), vinculada a la Entidad 1.

**Tareas Especificas:**
1. Crear el esquema Mongoose `src/models/Booking.js` con referencias (`mongoose.Schema.Types.ObjectId`) hacia `User`.
2. Crear `src/controllers/booking.controller.js` con las funciones:
   - `createBooking`: Creacion de reserva asociada a un usuario.
   - `getBookings`: Listado con populate del usuario asociado.
   - `getBookingById`: Consulta puntual por ID.
   - `updateBooking`: Modificacion de fecha, estado o servicio.
   - `deleteBooking`: Cancelacion / Eliminacion.
3. Crear `src/routes/booking.routes.js` asociando endpoints REST.
4. Validar la integridad referencial (que el usuario exista antes de crear la reserva).

---

### Dev 4: Script Seed, Documentacion API y Gestion de Errores Ocultos
**Objetivo:** Garantizar el poblamiento de datos, la documentacion completa y el requerimiento de los 10 errores encriptados.

**Tareas Especificas:**
1. Desarrollar `seed.js`:
   - Script independiente que limpia la base de datos.
   - Inserta un set de datos de prueba en la Entidad 1 y Entidad 2.
   - Cierra la conexion a la base de datos al finalizar.
2. Redactar `README.md`:
   - Instrucciones de instalacion y ejecucion.
   - Documentacion de cada endpoint (Metodo, URL, Body, Respuestas HTTP y Codigos de error).
3. Implementar y Documentar los 10 Errores Ocultos:
   - Seleccionar e introducir 10 errores estrategicos en el codigo.
   - Crear `ERRORS.md` con la explicacion del error y su descripcion encriptada en Base64.

---

## 4. Instrucciones para la Implementacion de los 10 Errores y su Encriptacion

Para dar cumplimiento a la consigna de incluir 10 errores documentados y encriptados, se utilizara la codificacion en Base64 para ocultar la solucion en el archivo `ERRORS.md`.

### Estructura de Registro en `ERRORS.md`
Cada error debe registrarse bajo el siguiente esquema:

```markdown
### Error 01
- Ubicacion: src/server.js
- Pista de la falla: "El servidor no inicia al ejecutar npm start"
- Explicacion Encriptada (Base64):
  `Tm8gc2UgaW1wb3J0byBlbCBtb2R1bG8gJ2RvdGVudicgcG9yIGxvIHRhbnRvIG5vIGxlZSBsYXMgdmFyaWFibGVzIGRlIGVudG9ybm8u`
```

### Instruccion para Encriptar y Desencriptar con Node.js o IA

**Para encriptar una explicacion a Base64:**
```bash
node -e "console.log(Buffer.from('No se importo el modulo dotenv').toString('base64'))"
```

**Para desencriptar:**
```bash
node -e "console.log(Buffer.from('Tm8gc2UgaW1wb3J0byBlbCBtb2R1bG8gJ2RvdGVudic=', 'base64').toString('utf8'))"
```

---

## 5. Cronograma de Trabajo (Bloque de 1 Hora)

- **Minutos 00 - 10:** Configura Dev 1 la base del proyecto y sube a GitHub. Los demas clonan el repo y crean sus ramas.
- **Minutos 10 - 40:**
  - Dev 2 crea Model/Controller/Routes de Usuarios.
  - Dev 3 crea Model/Controller/Routes de Reservas.
  - Dev 1 apoya la conexion de rutas y controladores en `src/app.js`.
  - Dev 4 crea el script `seed.js`.
- **Minutos 40 - 55:**
  - Integracion de ramas en `develop` via Pull Requests.
  - Dev 4 prueba el seed y redacta la documentacion `README.md` y `ENV.md`.
  - Insercion de los 10 errores deliberados y registro en `ERRORS.md`.
- **Minutos 55 - 60:** Revision final del repositorio público y confirmacion del entregable.
