const AbstractSeeder = require("./AbstractSeeder");

class MemberSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "member", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeMember = {
        nick_name: this.faker.person.firstName(),
        year_of_birth: this.faker.date.past().getFullYear(),
        influences: this.faker.lorem.paragraph(),
        refName: `member_${i}`,
      };
      this.insert(fakeMember);
    }
  }
}

module.exports = MemberSeeder;
