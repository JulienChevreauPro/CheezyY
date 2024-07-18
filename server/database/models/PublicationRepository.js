const AbstractRepository = require("./AbstractRepository");

class PublicationRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "publication" as configuration
    super({ table: "publication" });
  }

  // The C of CRUD - Create operation

  async create(publication) {
    // Execute the SQL INSERT query to add a new publication to the "publication" table
    const [result] = await this.database.query(
      `insert into ${this.table} (path, band_id) values (?, ?)`,
      [publication.path, publication.bandId]
    );

    // Return the ID of the newly inserted publication
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific publication by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the publication
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all publications from the "publication" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of publications
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing publication

  async update(publication) {
    const [result] = await this.database.query(
      `update ${this.table} set path = ?, band_id = ? where id = ?`,
      [publication.path, publication.bandId, publication.id]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an publication by its ID

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = PublicationRepository;
