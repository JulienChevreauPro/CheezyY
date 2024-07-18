const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const bandsRouter = require("./bands/router");
const albumsRouter = require("./albums/router");
const instrumentsRouter = require("./instruments/router");
const membersRouter = require("./members/router");
const publicationsRouter = require("./publications/router");
const tracksRouter = require("./tracks/router");

router.use("/bands", bandsRouter);
router.use("/albums", albumsRouter);
router.use("/instruments", instrumentsRouter);
router.use("/members", membersRouter);
router.use("/publications", publicationsRouter);
router.use("/tracks", tracksRouter);

/* ************************************************************************* */

module.exports = router;
