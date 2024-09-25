import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import PlaylistForm from './components/PlaylistForm/PlaylistForm';
import PlaybackBar from './components/PlaybackBar/PlaybackBar';
import './App.css';

type Playlist = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function App() {
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
    <div className='podcast'>
      <Header />
      <Sidebar playlists={playlists} onNewPlaylistClick={handleNewPlaylistClick} />
      <div className='main-content'>
        {isCreatingPlaylist ? (
          <PlaylistForm addPlaylist={handleAddPlaylist} />
        ) : (
          <MainContent />
        )}
      </div>
      <PlaybackBar/>
    </div>
  );
}
