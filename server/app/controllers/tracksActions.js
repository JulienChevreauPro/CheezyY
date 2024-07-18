// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all tracks from the database
    const tracks = await tables.track.readAll();

    // Respond with the tracks in JSON format
    res.json(tracks);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific track from the database based on the provided ID
    const track = await tables.track.read(req.params.id);

    // If the track is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the track in JSON format
    if (track == null) {
      res.sendStatus(404);
    } else {
      res.json(track);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the track data from the request body
  const track = req.body;

  try {
    // Insert the track into the database
    const insertId = await tables.track.create(track);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted track
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
