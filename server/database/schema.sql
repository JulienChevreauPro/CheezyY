CREATE TABLE band (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL,
  picture VARCHAR(255),
  biography TEXT,
  style VARCHAR(255),
  start YEAR,
  end YEAR
);

CREATE TABLE album (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(80),
  picture VARCHAR(255),
  release_date YEAR,
  band_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_album_band 
    FOREIGN KEY (band_id) 
    REFERENCES band(id)
);

CREATE TABLE track (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(80),
  path VARCHAR(255),
  lyrics TEXT,
  duration TIME NOT NULL,
  album_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_track_album
    FOREIGN KEY (album_id)
    REFERENCES album(id)
);

CREATE TABLE publication (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  path VARCHAR(255),
  band_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_release_band
    FOREIGN KEY (band_id)
    REFERENCES band(id)
);

CREATE TABLE member (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nick_name VARCHAR(80),
  year_of_birth YEAR,
  influences TEXT
);

CREATE TABLE band_member (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  band_id INT UNSIGNED NOT NULL,
  member_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_band_member_band
    FOREIGN KEY (band_id)
    REFERENCES band(id),
    CONSTRAINT fk_band_member_member
    FOREIGN KEY (member_id)
    REFERENCES member(id)
);

CREATE TABLE instrument (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80)
);

CREATE TABLE member_instrument (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  member_id INT UNSIGNED NOT NULL,
  instrument_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_member_instrument_member
    FOREIGN KEY (member_id)
    REFERENCES member(id),
    CONSTRAINT fk_member_instrument_instrument
    FOREIGN KEY (instrument_id)
    REFERENCES instrument(id)
);