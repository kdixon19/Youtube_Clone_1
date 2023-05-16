import React from "react";
import useVideoPush from "../../hooks/useVideoPush";

const VideoList = ({ videos }) => {
  const { handleVideoPush } = useVideoPush();

  return (
    <div>
      {videos.map((video) => {
          if (video.snippet) {
            return (
              <div key={video.id.videoId}>
                <img key={video.id.videoId} src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} onClick={() => handleVideoPush(video)}/>
                <p>{video.snippet.title}</p>
              </div>
            );
          } else {
            return null;
          }
        })
        }: (
        <div>Loading your video...</div>
      )
    </div>
  );
};

export default VideoList;
