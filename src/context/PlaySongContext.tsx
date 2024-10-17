import { createContext, ReactNode, useState, useRef } from 'react';

type PlaySongContextProps = {
  imgSrc: string;
  title: string;
  description: string;
  audioSrc: string;
  isPlaying: boolean;
  playPauseAudio: (source: string) => void;
  changeSongInfo: (img: string, title: string, description: string, audio: string) => void;
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
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const playPauseAudio = (source: string) => {
    if (!audioRef.current) return;

    // Verifica si el audio a reproducir es el actual
    if (audioSrc === source) {
      // Si el audio actual, se esta reproduciendo, se pausa
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Si esta pausado, se reproduce
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Error al reproducir el audio:', error);
          });
      }
    } else {
      // Cambia el audio si es un nuevo podcast y se reproduce
      audioRef.current.pause();
      audioRef.current.src = source;
      audioRef.current
        .play()
        .then(() => {
          setAudioSrc(source);
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('Error al reproducir el audio:', error);
        });
    }
  };

  const changeSongInfo = (img: string, title: string, description: string, audio: string) => {
    // Cambia la información de la canción y detiene el audio actual
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    setImgSrc(img);
    setTitle(title);
    setDescription(description);
    setAudioSrc(audio);
  };

  return (
    <PlaySongContext.Provider
      value={{
        imgSrc,
        title,
        description,
        audioSrc,
        isPlaying,
        playPauseAudio,
        changeSongInfo,
      }}
    >
      {children}
    </PlaySongContext.Provider>
  );
}
