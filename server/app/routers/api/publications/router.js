const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import publication-related actions
const { browse, read, add } = require("../../../controllers/publicationsActions");

// Route to get a list of publications
router.get("/", browse);

// Route to get a specific publication by ID
router.get("/:id", read);

// Route to add a new publication
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
