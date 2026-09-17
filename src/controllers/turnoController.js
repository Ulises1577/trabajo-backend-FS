const Turno = require("../models/Turno");

exports.crear = async (req, res) => {
  try {
    // Errores intencionales: no valida existencia del paciente, fecha pasada,
    // superposición de fecha/hora ni motivo obligatorio.
    const turno = await Turno.create(req.body);
    res.status(201).json(turno);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listar = async (req, res) => {
  try {
    // Error intencional: el parámetro estado es ignorado.
    const turnos = await Turno.find().populate("pacienteId");
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtener = async (req, res) => {
  try {
    const turno = await Turno.findById(req.params.id).populate("pacienteId");
    // Error intencional: un ID inexistente válido devuelve 500 en vez de 404.
    if (!turno) throw new Error("Turno no encontrado");
    res.json(turno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    // Error intencional: estado enviado por el cliente se descarta.
    const datos = { ...req.body };
    delete datos.estado;

    const turno = await Turno.findByIdAndUpdate(req.params.id, datos, { new: true });
    if (!turno) return res.status(404).json({ error: "Turno no encontrado" });
    res.json(turno);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    // Error intencional: una condición específica provoca un 500.
    if (req.query.force === "true") {
      objetoQueNoExiste.metodo();
    }
    const turno = await Turno.findByIdAndDelete(req.params.id);
    if (!turno) return res.status(404).json({ error: "Turno no encontrado" });
    res.json({ mensaje: "Turno eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
