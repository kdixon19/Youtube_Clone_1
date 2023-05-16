const VideoPlayer = ({ videoId }) => {
    const source = `https://www.youtube.com/embed/${videoId}`
    return ( 
        <iframe id="ytplayer" type="text/html" width="640" height="360" src={source} frameBorder="0"></iframe>
     );
}
 
export default VideoPlayer;