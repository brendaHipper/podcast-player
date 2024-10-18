import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import PlaylistForm from './components/PlaylistForm/PlaylistForm';
import PlaybackBar from './components/PlaybackBar/PlaybackBar';
// importo el Provider del Context
import { PlaySongProvider } from './context/PlaySongContext';

type Playlist = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function App() {
  // Lógica para crear una PlayList
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  function handleNewPlaylistClick() {
    setIsCreatingPlaylist(true);
  };

  function handleAddPlaylist(playlist: Playlist) {
    setPlaylists([...playlists, playlist]);
    setIsCreatingPlaylist(false);
  };
  
  return (
    <PlaySongProvider>
      <div className='podcast'>
        <Header />
        <Sidebar playlists={playlists} onNewPlaylistClick={handleNewPlaylistClick} />
        <div className='main-content'>
          {isCreatingPlaylist ? (
            <PlaylistForm addPlaylist={handleAddPlaylist} />
          ) : (
            <MainContent />
          )}
          <PlaybackBar/>
        </div>
      </div>
    </PlaySongProvider>
  );
}
