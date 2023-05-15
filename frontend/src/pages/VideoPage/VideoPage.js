import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = () => {
    return ( 
        <div>
          <VideoPlayer videoId={videoId} />
          <VideoInfo title={state.title} description={state.description} />
        </div>
     );
}
 
export default VideoPage;