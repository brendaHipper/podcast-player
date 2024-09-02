import './MusicSection.css';
// import UserProfile from './UserProfile';
import ImgUserProfile from '../assets/yop.png';
import { ReactNode } from 'react';
import AlbumItem from './AlbumItem';
import { CircleChevronLeft } from 'lucide-react';
import { CircleChevronRight } from 'lucide-react';
import QuickPicks from './QuickPicks';

type PropsSectionMusic = {
  description?: string;
  title: string;
  children: ReactNode;
};

const albums = [
  {
    id: '1',
    imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg',
    title: 'Playlist Name 1',
    artist: 'Artist Name 1 • 68 songs',
  },
  {
    id: '2',
    imgSrc: 'https://i0.wp.com/www.scienceofnoise.net/wp-content/uploads/2022/03/RHCP_Unlimited-Love.jpg',
    title: 'Playlist Name 2',
    artist: 'Artist Name 2 • 77 songs',
  },
  {
    id: '3',
    imgSrc: 'https://i.pinimg.com/236x/2e/ec/fe/2eecfe7fdf1246c49951730c6f91af35.jpg',
    title: 'Playlist Name 3',
    artist: 'Artist Name 3 • 40 songs',
  },
  {
    id: '4',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L_JofsqtyNhqQ2x0W4z7nMi3KfoPLgD1cQ&s',
    title: 'Playlist Name 3',
    artist: 'Artist Name 4 • 80 songs',
  },
  {
    id: '5',
    imgSrc: 'https://akamai.sscdn.co/uploadfile/letras/albuns/9/2/2/d/501661465817218.jpg',
    title: 'Playlist Name 3',
    artist: 'Artist Name 5 • 72 songs',
  },
  // {
  //   id: '6',
  //   imgSrc: 'https://i.ebayimg.com/thumbs/images/g/prEAAOSw5m9mt9Th/s-l1200.jpg',
  //   title: 'Playlist Name 3',
  //   artist: 'Artist Name 5 • 83 songs',
  // },
];

function MusicContainer({ description, title, children }: PropsSectionMusic) {
  return (
    <div className='music-container'>
      <div className='category-container'>
        <div className='category-title'>
          <div className="user-profile-icon">
              <img src={ImgUserProfile} alt="user" />
          </div>
          <div className='description-container'>
            <p className="tag-des">{description}</p>
            <h1 className="tag-title">{title}</h1>
          </div>
        </div>
        <div className='arrows'>
          <CircleChevronLeft className='arrowPrev' size={35}/>
          <CircleChevronRight className='arrowNext' size={35}/>
        </div>
      </div>
      <div className="albums-container">
        {children}
      </div>
    </div>
  );
}

function MusicSection() {
  return (
    <div>
      <MusicContainer description="Brenda Hip" title='Listen Again'>
        {albums.map((album) => (
          <AlbumItem 
            key={album.id}
            imgSrc={album.imgSrc}
            title={album.title}
            artist={album.artist}
            width={300}
            height={180}
          />
        ))}
      </MusicContainer>
      <MusicContainer description="START RADIO FROM A SONG" title='Quick Picks'>
        <QuickPicks/>
      </MusicContainer>
      <MusicContainer title='Recommended albums'>
        {albums.map((album) => (
          <AlbumItem 
            key={album.id}
            imgSrc={album.imgSrc}
            title={album.title}
            artist={album.artist}
            width={200}
            height={200}
          />
        ))}
      </MusicContainer>
      <MusicContainer description="SIMILAR TO" title='Akon'>
        {albums.map((album) => (
          <AlbumItem 
            key={album.id}
            imgSrc={album.imgSrc}
            title={album.title}
            artist={album.artist}
            width={200}
            height={200}
            borderRadius={50}
          />
        ))}
      </MusicContainer>
    </div>
  );
}

export default MusicSection;
