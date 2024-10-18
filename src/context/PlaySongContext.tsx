import { createContext, ReactNode, useState, useRef } from 'react';

type PlaySongContextProps = {
  imgSrc: string;
  title: string;
  description: string;
  audioSrc: string;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playPauseAudio: (source: string) => void;
  changeSongInfo: (img: string, title: string, description: string, audio: string) => void;
  updateCurrentTime: (time: number) => void; // Prop para actualizar el tiempo actual del audio
  isPlaybackBarVisible: boolean; // Prop para la visibilidad de la barra
  setPlaybackBarVisible: (isVisible: boolean) => void; // funcion que controla la visibilidad de la barra
};

export const PlaySongContext = createContext<PlaySongContextProps | undefined>(undefined);

type PlaySongProviderProps = {
  children: ReactNode;
};

// Exporto el Provider con toda la Lógica para reproducir un audio
export function PlaySongProvider({ children }: PlaySongProviderProps) {
  const [imgSrc, setImgSrc] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [audioSrc, setAudioSrc] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);  // Estado para la posición actual del audio
  const [duration, setDuration] = useState(0);        // Estado para la duración del audio
  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const [isPlaybackBarVisible, setPlaybackBarVisible] = useState(false); // Setear la visibilidad del Bar de reproducción

  const playPauseAudio = (source: string) => {
    if (!audioRef.current) return;
  
    // Verifica si el audio a reproducir es el actual, alternando entre play/pause
    if (audioSrc === source) {
      if (isPlaying) {
        // Verifico que si el audio actual se esta reproduciendo, para pausarse
        if (!audioRef.current.paused) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        // Si esta pausado, se reproduce
        if (audioRef.current.paused) {
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
              setDuration(audioRef.current.duration);
            })
            .catch((error) => {
              console.error('Error al reproducir el audio:', error);
            });
        }
      }
    } else {
      // Cambia el audio si es un nuevo podcast y reproduce el nuevo
      audioRef.current.pause();
      audioRef.current.src = source;
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then(() => {
          setAudioSrc(source);
          setIsPlaying(true);
          setDuration(audioRef.current.duration);
        })
        .catch((error) => {
          console.error('Error al reproducir el audio:', error);
        });
    }
  };
  
  // Cambia la información de la canción y detiene el audio actual
  const changeSongInfo = (img: string, title: string, description: string, audio: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    setImgSrc(img);
    setTitle(title);
    setDescription(description);
    setAudioSrc(audio);
    setPlaybackBarVisible(true);  // Mostrar PlaybackBar
  };

  // Actualiza la posición actual del audio y la duración cuando cambie
  const updateCurrentTime = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Actualiza el tiempo actual mientras el audio se reproduce
  audioRef.current.ontimeupdate = () => setCurrentTime(audioRef.current.currentTime);

  // Valores que va tomar Provider
  return (
    <PlaySongContext.Provider
      value={{
        imgSrc,
        title,
        description,
        audioSrc,
        isPlaying,
        currentTime,
        duration,
        playPauseAudio,
        changeSongInfo,
        updateCurrentTime,  // Actualización del tiempo
        isPlaybackBarVisible, // Visibilidad de la barra
        setPlaybackBarVisible  // Setea para mostrar/ocultar la barra
      }}
    >
      {children}
    </PlaySongContext.Provider>
  );
}
