require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ nombre: "API Gestión de Turnos", estado: "online" });
});

app.use("/api/pacientes", require("./routes/pacientes"));
app.use("/api/turnos", require("./routes/turnos"));

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
});
