const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import band-related actions
const { browse, read, add } = require("../../../controllers/bandsActions");

// Route to get a list of bands
router.get("/", browse);

// Route to get a specific band by ID
router.get("/:id", read);

// Route to add a new band
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
