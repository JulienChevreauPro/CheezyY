const AbstractSeeder = require("./AbstractSeeder");
const BandSeeder = require("./BandSeeder");

class PublicationSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "publication", truncate: true, dependencies: [BandSeeder] });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakePublication = {
        path: this.faker.system.filePath(),
        band_id: this.getRef(`band_${i}`).insertId,
        refName: `publication_${i}`,
      };
      this.insert(fakePublication);
    }
  }
}

module.exports = PublicationSeeder;
