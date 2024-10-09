import Button from '../Button/Button';
import './AudioPlayer.css';
import { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

type AudioPlayerProps = {
  audioSrc: string;  // prop que recibe la URL del audio
};

export default function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handleClick() {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  }

  return (
    <>
      <div className='style-button-play'>
        <Button handleClick={handleClick}>
          {isPlaying ? <Pause fill='#fff' stroke='0' size={35}/> : 
          <Play fill='#fff' stroke='0' size={35}/>}
          {/* {isPlaying ? <img src="pause.jpg"/> : <img src="play.jpg"/>} */}
          <audio ref={audioRef} src={audioSrc}></audio>
        </Button>
      </div>
    </>
  );
}