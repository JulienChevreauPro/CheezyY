const AbstractRepository = require("./AbstractRepository");

class InstrumentRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "instrument" as configuration
    super({ table: "instrument" });
  }

  // The C of CRUD - Create operation

  async create(instrument) {
    // Execute the SQL INSERT query to add a new instrument to the "instrument" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [instrument.name]
    );

    // Return the ID of the newly inserted instrument
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific instrument by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the instrument
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all instruments from the "instrument" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of instruments
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing instrument

  async update(instrument) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [instrument.name, instrument.id]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an instrument by its ID

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = InstrumentRepository;
