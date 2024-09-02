// QuickPicks.tsx
import SongItem from './SongItem';
import './QuickPicks.css';

const ALBUMS = [
  { id: 1, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L_JofsqtyNhqQ2x0W4z7nMi3KfoPLgD1cQ&s.jpg', title: 'Album 1', artist: 'Artist 1 • 10 songs' },
  { id: 2, imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 2', artist: 'Artist 2 • 8 songs' },
  { id: 3, imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 3', artist: 'Artist 3 • 15 songs' },
  { id: 4, imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 4', artist: 'Artist 4 • 12 songs' },
  { id: 5, imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 1', artist: 'Artist 1 • 10 songs' },
  { id: 6, imgSrc: 'https://i.ebayimg.com/thumbs/images/g/prEAAOSw5m9mt9Th/s-l1200.jpg', title: 'Album 2', artist: 'Artist 2 • 8 songs' },
  { id: 7, imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 3', artist: 'Artist 3 • 15 songs' },
  { id: 8, imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 4', artist: 'Artist 4 • 12 songs' },
  { id: 9, imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 1', artist: 'Artist 1 • 10 songs' },
  { id: 10, imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 2', artist: 'Artist 2 • 8 songs' },
  { id: 11, imgSrc: 'https://i.ebayimg.com/thumbs/images/g/prEAAOSw5m9mt9Th/s-l1200.jpg', title: 'Album 3', artist: 'Artist 3 • 15 songs' },
  { id: 12, imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 4', artist: 'Artist 4 • 12 songs' },
  { id: 13, imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 3', artist: 'Artist 3 • 15 songs' },
  { id: 14, imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 4', artist: 'Artist 4 • 12 songs' },
  { id: 15, imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg', title: 'Album 3', artist: 'Artist 3 • 15 songs' },
  { id: 16, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L_JofsqtyNhqQ2x0W4z7nMi3KfoPLgD1cQ&s.jpg', title: 'Album 4', artist: 'Artist 4 • 12 songs' },
];

export default function QuickPicks() {
  return (
    <div className="listen-again">
      <div className="quick-picks-container">
        {ALBUMS.map((album) => (
          <SongItem
            key={album.id}
            imgSrc={album.imgSrc}
            title={album.title}
            artist={album.artist}
          />
        ))}
      </div>
    </div>
  );
}
