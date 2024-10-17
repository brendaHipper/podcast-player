import './AlbumItem.css';
import { PlaySongContext } from '../../context/PlaySongContext';
import { useContext } from 'react';
import IconButton from '../IconButton/IconButton';

type AlbumItemProps = {
  imgSrc: string;
  title: string;
  description: string;
  audio: string;
  width?: number;
  height?: number;
  borderRadius?: number;
};

export default function AlbumItem({ imgSrc, title, description, audio, width = 180, height = 180, borderRadius = 4}: AlbumItemProps) {
  const songContext = useContext(PlaySongContext);

  const handlePlay = () => {
    if (songContext) {
      const isCurrentSong = songContext.audioSrc === audio;

      // Alterna entre play y pause
      if (isCurrentSong) {
        songContext.playPauseAudio(audio);
      } else {
        // Actualiza el contexto y reproduce la nueva canción
        songContext.changeSongInfo(imgSrc, title, description, audio);
        songContext.playPauseAudio(audio);
      }
    }
  };

  const isPlaying = songContext?.audioSrc === audio && songContext.isPlaying;

  return (
    <div className="album-song-container" style={{ width, height }}>
      <div className="album-button-play">
        <IconButton
          iconFill="#fff"
          iconSize={50}
          as={isPlaying ? 'pause' : 'play'}
          handleClick={handlePlay}
        />
      </div>
      <div className="album-image">
        <img
          src={imgSrc}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            borderRadius,
          }}
        />
      </div>
      <div className="playlist-info">
        <h4 className="song-title">{title.slice(0, 18) + '...'}</h4>
        <p className="song-description">
          {description.slice(0, 20) + '...' || 'Soy una Descripción válida y aquí estoy'}
        </p>
      </div>
    </div>
  );
}
