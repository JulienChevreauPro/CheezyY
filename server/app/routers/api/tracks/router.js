const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import tracks-related actions
const { browse, read, add } = require("../../../controllers/tracksActions");

// Route to get a list of trackss
router.get("/", browse);

// Route to get a specific tracks by ID
router.get("/:id", read);

// Route to add a new tracks
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
