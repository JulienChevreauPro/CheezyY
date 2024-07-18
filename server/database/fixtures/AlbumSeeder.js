const AbstractSeeder = require("./AbstractSeeder");
const BandSeeder = require("./BandSeeder");

class AlbumSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "album", truncate: true, dependencies: [BandSeeder] });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeAlbum = {
        title: this.faker.music.songName(),
        picture: this.faker.image.url(),
        release_date: this.faker.date.past().getFullYear(),
        band_id: this.getRef(`band_${i}`).insertId,
        refName: `album_${i}`,
      };
      this.insert(fakeAlbum);
    }
  }
}

module.exports = AlbumSeeder;
