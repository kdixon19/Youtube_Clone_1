import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

import CommentList from "../../components/CommentList/CommentList";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoList from "../../components/VideoList/VideoList";
import { relatedData } from "./relatedData";

const VideoPage = () => {
  const { videoId } = useParams();
  const { state } = useLocation();
  const [relatedVideos, setRelatedVideos] = useState([relatedData]);

  useEffect(() => {
    fetchRelatedVideos(videoId);
  }, [videoId]);

  const fetchRelatedVideos = async (relatedVideoId) => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            type: "video",
            relatedToVideoId: relatedVideoId,
            key: process.env.REACT_APP_YT_API_KEY,
            part: "snippet",
          },
        }
      );
      setRelatedVideos(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="wrapper">
      <div className="videoPlayer">
        <VideoPlayer videoId={videoId} />
        <VideoDescription title={state.title} description={state.description} />
      </div>
      <div className="videoList">
        <VideoList videos={relatedVideos} />
      </div>
      <div className="commentList">
        <CommentList videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoPage;
