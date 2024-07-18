const AbstractSeeder = require("./AbstractSeeder");
const MemberSeeder = require("./MemberSeeder");
const InstrumentSeeder = require("./InstrumentSeeder");

class MemberInstrumentSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "member_instrument",
      truncate: true,
      dependencies: [MemberSeeder, InstrumentSeeder],
    });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeMemberInstrument = {
        member_id: this.getRef(`member_${i}`).insertId,
        instrument_id: this.getRef(`instrument_${i}`).insertId,
      };
      this.insert(fakeMemberInstrument);
    }
  }
}

module.exports = MemberInstrumentSeeder;
