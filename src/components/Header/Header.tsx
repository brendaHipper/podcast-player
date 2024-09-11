import IconYouTubeMusic from '../../assets/youtube-music-1.svg'; 
import SearchBar from '../SearchBar/SearchBar';
import ImgUserProfile from '../../assets/yop.png';
import '../Header/Header.css';
import { AlignJustify, Cast } from 'lucide-react';

const Header = () => (
    <header>
    <div className="top-bar-container">
      <AlignJustify className='menu' size={35}/>
      <img className='iconYoutube' src={IconYouTubeMusic} alt="music" />
      <SearchBar />
      <Cast className='icon-Cast'size={35}/>
        <div className="user-profile-icon">
            <img src={ImgUserProfile} alt="user" />
        </div>
    </div>
    </header>
  );
  
  export default Header;