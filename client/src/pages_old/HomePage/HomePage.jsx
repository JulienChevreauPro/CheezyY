import React from "react";
import ReactPlayer from "react-player";
import clipSource from "../../assets/videos/Clipmini.mp4";

function HomePage() {
    const tracks = useLoaderData();
    console.log(tracks);
    
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
      <h1>HomePage</h1>
      <ReactAudioPlayer src="" controls />
    </>
  );
}

export default HomePage;
