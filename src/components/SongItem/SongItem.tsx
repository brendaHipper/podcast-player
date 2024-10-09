import AudioPlayer from '../AudioPlayer/AudioPlayer';
import './SongItem.css';

type SongItemProps = {
  imgSrc: string;
  title: string;
  description: string;
  audio: string; // agrego la prop para el audio
};

export default function SongItem({ imgSrc, title, description, audio }: SongItemProps) {
  return (
    <div className="song-item-container">
      <img src={imgSrc} alt={title} className="song-image" />
      <div className="song-item-info">
        <h4 className="song-item-title">{title.slice(0,25) + "..."}</h4>
        <p className="song-item-description">{description.slice(0,28) + "..."}</p>
      </div>
      <div className='album-button-play-song'>
        <AudioPlayer audioSrc={audio}/>
      </div>
    </div>
  );
}
