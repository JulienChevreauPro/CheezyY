const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import instrument-related actions
const { browse, read, add } = require("../../../controllers/instrumentsActions");

// Route to get a list of instruments
router.get("/", browse);

// Route to get a specific instrument by ID
router.get("/:id", read);

// Route to add a new instrument
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
