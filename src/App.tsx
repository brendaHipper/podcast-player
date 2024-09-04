import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import PlaylistForm from './components/PlaylistForm';
import './App.css';

type Playlist = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function App() {
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const handleNewPlaylistClick = () => {
    setIsCreatingPlaylist(true);
  };

  const handleAddPlaylist = (playlist: Playlist) => {
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
    </div>
  );
}
