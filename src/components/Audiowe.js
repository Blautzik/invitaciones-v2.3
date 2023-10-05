'use client'
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
  MediaTextDisplay,
} from 'media-chrome/dist/react';

import { FaPlayCircle } from 'react-icons/fa';


export const Audiowe = ({music}) => {
  return (
    <> 
    
    <MediaController className='h-0' audio>
      <audio
        src={music}
        slot="media"
        crossorigin
        autoPlay='true'
      />
      <MediaControlBar className='h-8 w-24'>
        <MediaPlayButton className='h-8 w-10 bg-violeta rounded-full'>
        </MediaPlayButton>
        <MediaVolumeRange className='rounded-full h-8'></MediaVolumeRange>
      </MediaControlBar>
    </MediaController>
    </>
  );
};

export default Audiowe