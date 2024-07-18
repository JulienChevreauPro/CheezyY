// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all instruments from the database
    const instruments = await tables.instrument.readAll();

    // Respond with the instruments in JSON format
    res.json(instruments);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific instrument from the database based on the provided ID
    const instrument = await tables.instrument.read(req.params.id);

    // If the instrument is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the instrument in JSON format
    if (instrument == null) {
      res.sendStatus(404);
    } else {
      res.json(instrument);
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
  // Extract the instrument data from the request body
  const instrument = req.body;

  try {
    // Insert the instrument into the database
    const insertId = await tables.instrument.create(instrument);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted instrument
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
