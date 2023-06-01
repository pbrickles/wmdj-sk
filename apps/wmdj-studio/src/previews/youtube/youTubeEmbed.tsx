import React from "react";
// import YouTube from "react-youtube";
import { getYouTubeId } from "../../helpers/getYouTubeId";

const YouTubePreview: React.FC<{
  value: {
    url: string;
    height: number;
    width: number;
  }
}> = ({ value }) => {
  const { url, height, width } = value;
  if (!url) {
    return <p>Missing URL for Instagram post</p>;
  }
  const opts = {
    height: height || "390",
    width: width || "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const onReady = e => {
    e.target.pauseVideo();
  };

  return (<></>
    // <YouTube videoId={getYouTubeId(url)} opts={opts} onReady={e => onReady(e)} />
  );
};

export default YouTubePreview;
