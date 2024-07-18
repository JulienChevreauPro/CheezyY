const AbstractSeeder = require("./AbstractSeeder");

class BandSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "band", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeBand = {
        name: this.faker.music.genre(),
        picture: this.faker.image.url(),
        biography: this.faker.lorem.paragraph(),
        style: this.faker.music.genre(),
        start: this.faker.date.past().getFullYear(),
        end: this.faker.date.future().getFullYear(),
        refName: `band_${i}`,
      };
      this.insert(fakeBand);
    }
  }
}

module.exports = BandSeeder;
