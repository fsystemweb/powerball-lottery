const express = require("express");
const { root, checkPrize } = require("../controllers/root");
const { notFound } = require("../controllers/notfound");

const router = express.Router();

// Routes
router.get("/", root);
router.post("/check-prize", checkPrize);

// Fall Through Route
router.use(notFound);

module.exports = router;
