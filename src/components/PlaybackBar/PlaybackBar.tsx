import './PlaybackBar.css';
import { PlaySongContext } from '../../context/PlaySongContext';
import { useContext } from 'react';
import IconButton from '../IconButton/IconButton';

export default function PlaybackBar() {
  const songContext = useContext(PlaySongContext);

  if (!songContext) {
    return null;
  }

  const { imgSrc, title, description, isPlaying, playPauseAudio, audioSrc, duration, updateCurrentTime,
    isPlaybackBarVisible, setPlaybackBarVisible } = songContext;

  const handlePlayPause = () => {
    // Al hacer clic en el botón de play/pause, alterna el estado del audio actual
    playPauseAudio(audioSrc);
  };

  const handleDurationOfTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    updateCurrentTime(newTime); // Actualiza el tiempo en el contexto
  };

  if (!isPlaybackBarVisible) return null;

  // Oculta la Barra del Bar
  const handleCloseBar = () => {
    setPlaybackBarVisible(false);
  };

  return (
    <article className="play-bar-container">
      <div className="slider-playbar">
        <input 
          className="slider-playbar" 
          type="range" 
          min="0" 
          max={duration.toString()} 
          onChange={handleDurationOfTime}  // Actualiza el tiempo
        />
      </div>
      <div className="pb-inner-container">
        <div className="play-arrow">
          <IconButton as="skipback" iconSize={20} iconFill="#fff" />
          <div className="play-button">
            <IconButton
              iconFill="#fff"
              iconSize={40}
              as={isPlaying ? 'pause' : 'play'}
              handleClick={handlePlayPause}
            />
          </div>
          <IconButton as="skipforward" iconSize={20} iconFill="#fff" />
          <p className="time">0:10 / 0:41</p>
        </div>
        <div className="playing-album-music">
          <div className="album-info">
            <img src={imgSrc} alt={title} width={48} height={48} />
            <div>
              <h4>{title.slice(0, 35) + '...'}</h4>
              <p>{description ? description.slice(0, 40) + '...' : 'Soy una Descripción válida y aquí estoy'}</p>
            </div>
          </div>
          <div className="icons-likes">
            <IconButton as="thumbsdown" iconSize={20} strokeWidth={1} />
            <IconButton as="thumbsup" iconSize={20} strokeWidth={1} />
            <IconButton as="ellipsisvertical" iconSize={20} strokeWidth={1} />
          </div>
        </div>
        <div className="other-controls">
          <IconButton as="volume" iconColor="#949494" iconSize={25} strokeWidth={1} />
          <IconButton as="repeat" iconColor="#949494" iconSize={25} strokeWidth={1} />
          <IconButton as="shuffle" iconColor="#949494" iconSize={25} strokeWidth={1} />
          <IconButton as="chevrondown" iconFill="#fff" iconSize={25} />
          {/* Botón para cerrar la barra de reproducción */}
          <IconButton as="close" iconFill="#fff" iconSize={25} handleClick={handleCloseBar} />
        </div>
      </div>
    </article>
  );
}
