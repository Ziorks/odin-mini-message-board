const { Router } = require("express");
const indexController = require("../controllers/indexController");

const router = Router();

router.get("/", indexController.getIndex);

router.get("/new", indexController.getNewMessage);

router.post("/new", indexController.createNewMessage);

router.get("/:id", indexController.getMessageFromId);

module.exports = router;
