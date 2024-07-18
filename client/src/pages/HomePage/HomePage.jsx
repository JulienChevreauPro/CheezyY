import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";

import clipSource from "../../assets/videos/Clipmini.mp4";

function HomePage() {
  return (
    <>
      <ReactPlayer
        url={clipSource}
        controls
        playing
        muted
        loop
        width="100%"
        height="100%"
      />
      <h1>Cheezy Y</h1>
      <ReactAudioPlayer src={clipSource} controls />
    </>
  );
}

export default HomePage;
