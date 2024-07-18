const AbstractSeeder = require("./AbstractSeeder");
const BandSeeder = require("./BandSeeder");
const MemberSeeder = require("./MemberSeeder");

class BandMemberSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "band_member",
      truncate: true,
      dependencies: [BandSeeder, MemberSeeder],
    });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeBandMember = {
        band_id: this.getRef(`band_${i}`).insertId,
        member_id: this.getRef(`member_${i}`).insertId,
      };
      this.insert(fakeBandMember);
    }
  }
}

module.exports = BandMemberSeeder;
