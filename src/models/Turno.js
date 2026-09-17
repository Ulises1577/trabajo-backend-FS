const mongoose = require("mongoose");

const turnoSchema = new mongoose.Schema({
  pacienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paciente",
    required: true
  },
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  motivo: { type: String },
  estado: {
    type: String,
    enum: ["pendiente", "confirmado", "cancelado"],
    default: "pendiente"
  }
}, { timestamps: true });

module.exports = mongoose.model("Turno", turnoSchema);
