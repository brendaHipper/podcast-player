
import AlbumItem from './AlbumItem';
import './QuickPicks.css';

const ALBUMS = [
  { imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 1', artist: 'Artist 1', songCount: '10 songs' },
  { imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 2', artist: 'Artist 2', songCount: '8 songs' },
  { imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 3', artist: 'Artist 3', songCount: '15 songs' },
  { imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 4', artist: 'Artist 4', songCount: '12 songs' },
  { imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 1', artist: 'Artist 1', songCount: '10 songs' },
  { imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 2', artist: 'Artist 2', songCount: '8 songs' },
  { imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 3', artist: 'Artist 3', songCount: '15 songs' },
  { imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 4', artist: 'Artist 4', songCount: '12 songs' },
  { imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 1', artist: 'Artist 1', songCount: '10 songs' },
  { imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 2', artist: 'Artist 2', songCount: '8 songs' },
  { imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 3', artist: 'Artist 3', songCount: '15 songs' },
  { imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 4', artist: 'Artist 4', songCount: '12 songs' },
];

export default function QuickPicks() {
  return (
    <div className="quick-picks">
      {ALBUMS.map((album, index) => (
        <AlbumItem 
          key={index}
          imgSrc={album.imgSrc}
          title={album.title}
          artist={album.artist}
          songCount={album.songCount}
        />
      ))}
    </div>
  );
}
