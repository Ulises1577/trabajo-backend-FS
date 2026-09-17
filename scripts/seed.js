require("dotenv").config();
const mongoose = require("mongoose");
const Paciente = require("../src/models/Paciente");
const Turno = require("../src/models/Turno");

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Turno.deleteMany({});
  await Paciente.deleteMany({});

  const pacientes = await Paciente.insertMany([
    { nombre: "Ana López", email: "ana@test.com", telefono: "111111111" },
    { nombre: "Bruno Díaz", email: "bruno@test.com", telefono: "222222222" },
    { nombre: "Carla Ruiz", email: "carla@test.com", telefono: "333333333" },
    { nombre: "Diego Pérez", email: "diego@test.com", telefono: "444444444" },
    { nombre: "Elena Gómez", email: "elena@test.com", telefono: "555555555" },
    { nombre: "Fabio Luna", email: "fabio@test.com", telefono: "666666666" },
    { nombre: "Gabriela Soto", email: "gabi@test.com", telefono: "777777777" },
    { nombre: "Hugo Torres", email: "hugo@test.com", telefono: "888888888" },
    { nombre: "Inés Castro", email: "ines@test.com", telefono: "999999999" },
    { nombre: "Juan Silva", email: "juan@test.com", telefono: "101010101" }
  ]);

  const estados = ["pendiente", "confirmado", "cancelado"];
  const turnos = [];
  for (let i = 0; i < 20; i++) {
    turnos.push({
      pacienteId: pacientes[i % pacientes.length]._id,
      fecha: new Date(2026, 8, 20 + (i % 8)),
      hora: `${9 + (i % 8)}:00`,
      motivo: `Consulta de prueba ${i + 1}`,
      estado: estados[i % 3]
    });
  }
  await Turno.insertMany(turnos);
  console.log("Seed completado: 10 pacientes y 20 turnos");
  await mongoose.disconnect();
}

seed().catch(async e => {
  console.error(e);
  await mongoose.disconnect();
  process.exit(1);
});
