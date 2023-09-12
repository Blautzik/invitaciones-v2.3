import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
  } from 'media-chrome/dist/react';
 import music from '../../public/music.mp3'
  

  export const Audiowe = () => {
    return (
      <MediaController>
        <audio
          slot="media"
          src={music}
          preload="auto"
          muted
          crossOrigin=""
        />
        <MediaControlBar>
          <MediaPlayButton></MediaPlayButton>
          <MediaMuteButton></MediaMuteButton>
          <MediaVolumeRange></MediaVolumeRange>
        </MediaControlBar>
      </MediaController>
    );
  };

export default Audiowe