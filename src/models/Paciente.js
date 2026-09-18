const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
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

module.exports = mongoose.model("Paciente", pacienteSchema);
