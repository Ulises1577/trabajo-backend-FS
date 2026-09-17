const Paciente = require("../models/Paciente");

exports.crear = async (req, res) => {
  try {
    // Error intencional: no se controla email duplicado.
    const paciente = await Paciente.create(req.body);
    res.status(201).json(paciente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listar = async (_req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtener = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    if (!paciente) return res.status(404).json({ error: "Paciente no encontrado" });
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    if (!paciente) return res.status(404).json({ error: "Paciente no encontrado" });
    res.json(paciente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    // Error intencional: elimina aunque el paciente tenga turnos asociados.
    const paciente = await Paciente.findByIdAndDelete(req.params.id);
    if (!paciente) return res.status(404).json({ error: "Paciente no encontrado" });
    res.json({ mensaje: "Paciente eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
