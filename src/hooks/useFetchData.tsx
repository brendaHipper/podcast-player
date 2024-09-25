import { useEffect, useState } from 'react';

type AudioClip = {
  id: number;
  title: string;
  description: string;
  channel: {
    id: number;
    urls: {
      logo_image: {
        original: string;
      };
    };
  };
  urls: {
    high_mp3: string; 
  };
};

export default function useFetchData(url: string) {
  const[data, setData] = useState<AudioClip[]>([]);
  const[isLoading, setIsLoading] = useState(false);
  const[error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.body.audio_clips); // donde accede
      })
      .catch(() => {
        setError('Hubo un error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}