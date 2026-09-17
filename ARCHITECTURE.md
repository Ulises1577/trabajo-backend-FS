# Arquitectura

La aplicación utiliza una arquitectura REST sencilla separada por responsabilidades.

Cliente
  |
  v
Express Routes
  |
  v
Controllers
  |
  v
Mongoose Models
  |
  v
MongoDB

## Componentes

- `src/app.js`: inicialización del servidor y rutas.
- `src/config/database.js`: conexión con MongoDB.
- `src/models`: definición de las entidades.
- `src/controllers`: lógica HTTP y acceso a datos.
- `src/routes`: definición de endpoints.
- `scripts/seed.js`: datos iniciales para testing.

## Modelo

Paciente (1) -------- (N) Turno

`Turno.pacienteId` almacena una referencia al `_id` de Paciente.
