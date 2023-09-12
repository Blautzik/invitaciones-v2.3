'use client'
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
    // Set up event handlers
    const onReady = (event) => {


    };
  
    const opts = {
        width: window.innerWidth,
        height: window.innerWidth * 0.56,
        playerVars: {
          autoplay: 1,
        },
      };



    const onError = (error) => {
      console.error('YouTube Player Error:', error);
    };
  
    return (
        <div className='max-w-screen '>

      <YouTube
        videoId={videoId}
        onReady={onReady}
        onError={onError}
        className=' w-full'
        opts={opts}
        />
        </div>
    );
  };
  
  export default YouTubePlayer;