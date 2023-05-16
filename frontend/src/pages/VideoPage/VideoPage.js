import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = () => {
    return ( 
        <div>
          <VideoPlayer videoId={videoId} />
          <VideoDescription title={state.title} description={state.description} />
        </div>
     );
}
 
export default VideoPage;