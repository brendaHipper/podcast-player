import IconYouTubeMusic from '../assets/youtube-music-hd-logo.png'; 
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import ImgUserProfile from '../assets/yop.png';
import './Header.css'

const Header = () => (
    <header>
      <img className='iconYoutube' src={IconYouTubeMusic} alt="music" />
    <div className="search-bar-container">
      <SearchBar />
    </div>
    <div className="user-profile">
      <div className="user-profile-icon">
        <UserProfile />
      </div>
      <img src={ImgUserProfile} alt="user" />
    </div>
    </header>
  );
  
  export default Header;