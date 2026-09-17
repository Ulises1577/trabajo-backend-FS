const router = require("express").Router();
const c = require("../controllers/turnoController");

router.post("/", c.crear);
router.get("/", c.listar);
router.get("/:id", c.obtener);
router.put("/:id", c.actualizar);
router.delete("/:id", c.eliminar);

module.exports = router;
