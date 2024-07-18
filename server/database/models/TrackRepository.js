const AbstractRepository = require("./AbstractRepository");

class TrackRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "track" as configuration
    super({ table: "track" });
  }

  // The C of CRUD - Create operation

  async create(track) {
    // Execute the SQL INSERT query to add a new track to the "track" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, path, lyrics, duration, album_id) values (?, ?, ?, ?, ?)`,
      [track.title, track.path, track.lyrics, track.duration, track.albumId]
    );

    // Return the ID of the newly inserted track
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific track by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the track
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all tracks from the "track" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of tracks
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing track

  async update(track) {
    const [result] = await this.database.query(
      `update ${this.table} set title = ?, path = ?, lyrics = ?, duration = ?, album_id = ? where id = ?`,
      [
        track.title,
        track.path,
        track.lyrics,
        track.duration,
        track.albumId,
        track.id,
      ]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an track by its ID

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = TrackRepository;
