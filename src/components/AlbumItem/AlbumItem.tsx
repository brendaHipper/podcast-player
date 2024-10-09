import AudioPlayer from '../AudioPlayer/AudioPlayer';
import './AlbumItem.css';

type AlbumItemProps = {
  imgSrc: string;
  title: string;
  description: string | undefined;
  audio: string; // agrego la prop para el audio
  width?: number;
  height?: number;
  borderRadius?: number;
};

export default function AlbumItem({ imgSrc, title, description,audio, width=180, height=180, borderRadius=4}: AlbumItemProps) {
  return (
    <div
      className="album-song-container"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
    <div className='album-button-play'>
      <AudioPlayer audioSrc={audio}/>
    </div>
    <div className='album-image'>
      <img
        src={imgSrc}
        alt={title}
        style={{
        width: '100%',
        height: '100%',
        borderRadius: `${borderRadius}%`,
       }}
      />
    </div>
      <div className="playlist-name">
        <h4 className="song-title">{title.slice(0, 19) + "..."}</h4>
        <p className="song-description">{description.slice(0, 40) + "..."}</p>
      </div>
    </div>
  );
}
