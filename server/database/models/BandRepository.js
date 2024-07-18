const AbstractRepository = require("./AbstractRepository");

class BandRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "band" as configuration
    super({ table: "band" });
  }

  // The C of CRUD - Create operation

  async create(band) {
    // Execute the SQL INSERT query to add a new band to the "band" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, picture, biography, style, start, end) values (?, ?, ?, ?, ?, ?)`,
      [
        band.name,
        band.picture,
        band.biography,
        band.style,
        band.start,
        band.end,
      ]
    );

    // Return the ID of the newly inserted band
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific band by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the band
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all bands from the "band" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of bands
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing band

  async update(band) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ?, picture = ?, biography = ?, style = ?, start = ?, end = ? where id = ?`,
      [
        band.name,
        band.picture,
        band.biography,
        band.style,
        band.start,
        band.end,
        band.id,
      ]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an band by its ID

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = BandRepository;
