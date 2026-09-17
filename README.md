# API de Gestión de Turnos

Backend REST desarrollado con Node.js, Express, JavaScript, MongoDB y Mongoose.

## Entidades
- Pacientes
- Turnos

Un paciente puede tener múltiples turnos.

## Instalación y Ejecución

Puedes ejecutar el proyecto de dos formas:

### Opción A: Sin Docker (Nativo - Windows / Linux / macOS)

1. **Requisitos previos**:
   - Tener instalado [Node.js](https://nodejs.org/) (v18 o superior).
   - Tener MongoDB en ejecución: ya sea [MongoDB Community Server](https://www.mongodb.com/try/download/community) local en el puerto `27017` o una base en la nube ([MongoDB Atlas](https://www.mongodb.com/atlas)).

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   - Copiar el archivo de plantilla a `.env`:
     - En Windows (PowerShell/CMD): `copy .env.ejemplo .env`
     - En Linux / macOS: `cp .env.ejemplo .env`
   - Si usas MongoDB local, el valor por defecto en `.env` (`mongodb://127.0.0.1:27017/gestion_turnos`) funcionará directamente. Si usas Atlas, reemplaza la URI con la tuya.

4. **Poblar la base de datos con datos de prueba**:
   ```bash
   npm run seed
   ```

5. **Iniciar el servidor en desarrollo**:
   ```bash
   npm run dev
   # o en modo producción:
   npm start
   ```

---

### Opción B: Con Docker y Docker Compose (Opcional)

No requiere instalar Node.js ni MongoDB en el sistema operativo:

1. **Iniciar contenedores (API + MongoDB)**:
   ```bash
   npm run docker:up
   # o: docker compose up -d
   ```

2. **Cargar datos iniciales (seed)**:
   ```bash
   npm run docker:seed
   ```

3. **Ver logs en tiempo real**:
   ```bash
   npm run docker:logs
   ```

4. **Detener contenedores**:
   ```bash
   npm run docker:down
   ```


## API

### Pacientes
- `POST /api/pacientes`
- `GET /api/pacientes`
- `GET /api/pacientes/:id`
- `PUT /api/pacientes/:id`
- `DELETE /api/pacientes/:id`

Ejemplo de alta:

```json
{
  "nombre": "María Pérez",
  "email": "maria@example.com",
  "telefono": "123456789"
}
```

### Turnos
- `POST /api/turnos`
- `GET /api/turnos`
- `GET /api/turnos/:id`
- `PUT /api/turnos/:id`
- `DELETE /api/turnos/:id`

Ejemplo de alta:

```json
{
  "pacienteId": "ID_DE_MONGODB",
  "fecha": "2026-10-10",
  "hora": "10:30",
  "motivo": "Consulta general",
  "estado": "pendiente"
}
```

Las respuestas se exponen únicamente como JSON.

## Testing

El proyecto fue preparado para ejercicios de testing funcional. El objetivo es analizar el comportamiento real de los endpoints frente a distintos datos y casos límite.
