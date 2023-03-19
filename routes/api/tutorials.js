const express = require("express");
const router = express.Router();
const tutorialsCtrl = require("../../controllers/api/tutorials");

router.post("/new", tutorialsCtrl.createTutorial);
router.delete("/:id", tutorialsCtrl.deleteTutorial);
router.patch("/:id", tutorialsCtrl.updateTutorial);
router.get("/all", tutorialsCtrl.indexTutorial);
router.get("/:userId", tutorialsCtrl.indexMyTutorials);

module.exports = router;