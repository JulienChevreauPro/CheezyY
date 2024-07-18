const AbstractSeeder = require("./AbstractSeeder");
const AlbumSeeder = require("./AlbumSeeder");

class TrackSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "track", truncate: true, dependencies: [AlbumSeeder] });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeTrack = {
        title: this.faker.music.songName(),
        path: this.faker.system.filePath(),
        lyrics: this.faker.lorem.paragraph(),
        duration: this.faker.date
          .recent()
          .toISOString()
          .split("T")[1]
          .split(".")[0],
        album_id: this.getRef(`album_${i}`).insertId,
        refName: `track_${i}`,
      };
      this.insert(fakeTrack);
    }
  }
}

module.exports = TrackSeeder;
