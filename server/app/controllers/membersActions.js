// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all members from the database
    const members = await tables.member.readAll();

    // Respond with the members in JSON format
    res.json(members);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific member from the database based on the provided ID
    const member = await tables.member.read(req.params.id);

    // If the member is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the member in JSON format
    if (member == null) {
      res.sendStatus(404);
    } else {
      res.json(member);
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
  // Extract the member data from the request body
  const member = req.body;

  try {
    // Insert the member into the database
    const insertId = await tables.member.create(member);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted member
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
