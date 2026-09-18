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
}, {
  timestamps: true,
  toJSON: {
    transform: (_doc, ret) => {
      delete ret._id;
      delete ret.__v;
      delete ret.createdAt;
      delete ret.updatedAt;
      return ret;
    }
  }
});

module.exports = mongoose.model("Turno", turnoSchema);
