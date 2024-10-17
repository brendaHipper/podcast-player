import IconButton from '../IconButton/IconButton';
import './Sidebar.css';
import AlbumItem from '../AlbumItem/AlbumItem';

type SidebarProps = {
  playlists: Array<{ title: string; description: string; imageUrl: string; audio: string }>;
  onNewPlaylistClick: () => void;
};

// Sidebar instancia los IconButton como Slots
function Sidebar({ playlists, onNewPlaylistClick }: SidebarProps) {
  return (
    <div className="sidebar-container">
      <div className="menu-section">
        <IconButton as="home" label="Home" iconColor='#fff' iconSize={24}/>
        <IconButton as="compass" label="Home" iconColor='#fff' iconSize={24}/>
        <IconButton as="file-music" label="Home" iconColor='#fff' iconSize={24}/>
      </div>
      <div className="button-section">
        <IconButton as="plus" label="New playlist" handleClick={onNewPlaylistClick}/>
      </div>
      <div className="playlists-section">
        {playlists.map((playlist, id) => (
          <div className='autoplaylist' key={id}>
            <AlbumItem 
                key={id}
                imgSrc={playlist.imageUrl}
                title={playlist.title}
                description={playlist.description || 'Soy una Descripción válida y aquí estoy'}
                audio={playlist.audio}
                width={48}
                height={48}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
