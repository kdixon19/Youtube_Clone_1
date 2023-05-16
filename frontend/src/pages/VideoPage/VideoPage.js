//General Imports
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import {KEY} from "../../localKey"

// Component Imports
import CommentList from "../../components/CommentList/CommentList";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoList from "../../components/VideoList/VideoList";

// Utility Imports
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
            key: KEY,
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
    <div>
      <div>
        <VideoPlayer videoId={videoId} />
        <VideoDescription title={state.title} description={state.description} />
      </div>
      <div>
        <VideoList videos={relatedVideos} />
      </div>
      <div>
        <CommentList videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoPage;
