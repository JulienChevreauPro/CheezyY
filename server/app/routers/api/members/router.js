const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import member-related actions
const { browse, read, add } = require("../../../controllers/membersActions");

// Route to get a list of members
router.get("/", browse);

// Route to get a specific member by ID
router.get("/:id", read);

// Route to add a new member
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
