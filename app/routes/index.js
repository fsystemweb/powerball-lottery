const express = require("express");
const { checkPrize } = require("../controllers/root");
const { notFound } = require("../controllers/errors");

const router = express.Router();

// Routes
router.post("/check-prize", checkPrize);

// Fall Through Route
router.use(notFound);

module.exports = router;
