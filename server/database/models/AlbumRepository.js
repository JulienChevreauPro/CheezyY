const AbstractRepository = require("./AbstractRepository");

class AlbumRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "album" as configuration
    super({ table: "album" });
  }

  // The C of CRUD - Create operation

  async create(album) {
    // Execute the SQL INSERT query to add a new album to the "album" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, picture, release_date, band_id) values (?, ?, ?, ?)`,
      [album.title, album.picture, album.releaseDate, album.bandId]
    );

    // Return the ID of the newly inserted album
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific album by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the album
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all albums from the "album" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of albums
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing album

  async update(album) {
    const [result] = await this.database.query(
      `update ${this.table} set title = ?, picture = ?, release_date = ?, band_id = ? where id = ?`,
      [album.title, album.picture, album.releaseDate, album.bandId, album.id]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an album by its ID

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = AlbumRepository;
