const AbstractRepository = require("./AbstractRepository");

class MemberRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "member" as configuration
    super({ table: "member" });
  }

  // The C of CRUD - Create operation

  async create(member) {
    // Execute the SQL INSERT query to add a new member to the "member" table
    const [result] = await this.database.query(
      `insert into ${this.table} (nick_name, year_of_birth, influences) values (?, ?, ?)`,
      [member.nickName, member.yearOfBirth, member.influences]
    );

    // Return the ID of the newly inserted member
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific member by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the member
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all members from the "member" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of members
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing member

  async update(member) {
    const [result] = await this.database.query(
      `update ${this.table} set nick_name = ?, year_of_birth = ?, influences = ? where id = ?`,
      [member.nickName, member.yearOfBirth, member.influences, member.id]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an member by its ID

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = MemberRepository;
