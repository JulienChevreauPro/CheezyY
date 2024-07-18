const AbstractSeeder = require("./AbstractSeeder");

class InstrumentSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "instrument", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeInstrument = {
        name: this.faker.helpers.arrayElement([
          "guitar",
          "drums",
          "bass",
          "piano",
          "voice",
        ]),
        refName: `instrument_${i}`,
      };
      this.insert(fakeInstrument);
    }
  }
}

module.exports = InstrumentSeeder;
