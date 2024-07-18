const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import album-related actions
const { browse, read, add } = require("../../../controllers/albumsActions");

// Route to get a list of albums
router.get("/", browse);

// Route to get a specific album by ID
router.get("/:id", read);

// Route to add a new album
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
