import Button from './Button';
import './Sidebar.css';

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
        {playlists.map((playlist, index) => (
          <div className='autoplaylist' key={index}>
            <img src={playlist.imageUrl} alt={playlist.title} width={48}/>
            <div className='autoplaylist-container'>
              <h3 className='autoplaylist-title'>{playlist.title}</h3>
              <p className='autoplaylist-description'>{playlist.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
