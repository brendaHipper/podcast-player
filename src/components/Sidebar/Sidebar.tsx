import Button from '../Button/Button';
import './Sidebar.css';
import SongItem from '../SongItem/SongItem';
// import { ChevronDown } from 'lucide-react';

type SidebarProps = {
  playlists: Array<{ title: string; description: string; imageUrl: string }>;
  onNewPlaylistClick: () => void;
};

function Sidebar({ playlists, onNewPlaylistClick }: SidebarProps) {
  return (
    <div className="sidebar-container">
      <div className="menu-section">
        <Button icon="home" label="Home" />
        <Button icon="compass" label="Home" />
        <Button icon="file-music" label="Home" />
      </div>
      <div className="button-section">
        <Button icon="plus" label="New playlist" handleClick={onNewPlaylistClick} />
      </div>
      <div className="playlists-section">
        {playlists.map((playlist, id) => (
          <div className='autoplaylist' key={id}>
            <SongItem
              imgSrc={playlist.imageUrl}
              title={playlist.title}
              artist={playlist.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
