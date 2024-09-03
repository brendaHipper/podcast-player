import './Sidebar.css';
import Button from './Button';
// import PlaylistForm from './PlaylistForm';

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="menu-section">
        <Button icon="home" label="Home" />
        <Button icon="compass" label="Home" />
        <Button icon="file-music" label="Home" />
      </div>
      <div className="button-section">
        <Button icon="plus" label="New playlist" />
      </div>
      <div className="playlists-section">
        <div className='autoplaylist'>
          <h3>Your Likes</h3>
          <p>Autoplaylist</p>
        </div>
        <div className='autoplaylist'>
          <h3>Your Likes</h3>
          <p>Autoplaylist</p>
        </div>
        <div className='autoplaylist'>
          <h3>Your Likes</h3>
          <p>Autoplaylist</p>
        </div>
        <div className='autoplaylist'>
          <h3>Your Likes</h3>
          <p>Autoplaylist</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
