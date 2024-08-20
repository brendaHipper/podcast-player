
import AlbumItem from './AlbumItem.tsx';
import './ListenAgain.css';

const albums = [
  {
    imgSrc: 'https://www.rockaxis.com/img/newsList/3752458.jpg',
    title: 'Playlist Name 1',
    artist: 'Artist Name 1',
    songCount: '68 songs'
  },
  {
    imgSrc: 'https://i0.wp.com/www.scienceofnoise.net/wp-content/uploads/2022/03/RHCP_Unlimited-Love.jpg',
    title: 'Playlist Name 2',
    artist: 'Artist Name 2',
    songCount: '58 songs'
  },
  {
    imgSrc: 'https://i.pinimg.com/236x/2e/ec/fe/2eecfe7fdf1246c49951730c6f91af35.jpg',
    title: 'Playlist Name 3',
    artist: 'Artist Name 3',
    songCount: '72 songs'
  },
  {
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L_JofsqtyNhqQ2x0W4z7nMi3KfoPLgD1cQ&s',
    title: 'Playlist Name 3',
    artist: 'Artist Name 3',
    songCount: '72 songs'
  },
  {
    imgSrc: 'https://akamai.sscdn.co/uploadfile/letras/albuns/9/2/2/d/501661465817218.jpg',
    title: 'Playlist Name 3',
    artist: 'Artist Name 3',
    songCount: '72 songs'
  },
  {
    imgSrc: 'https://i.ebayimg.com/thumbs/images/g/prEAAOSw5m9mt9Th/s-l1200.jpg',
    title: 'Playlist Name 3',
    artist: 'Artist Name 3',
    songCount: '72 songs'
  },
  {
    imgSrc: 'https://d22fxaf9t8d39k.cloudfront.net/d149e1f9f955fdd2316b1f6e7faa95c119b3b139564dd498d196dc9519af0093135138.jpg',
    title: 'Playlist Name 3',
    artist: 'Artist Name 3',
    songCount: '72 songs'
  },
];

const ListenAgain = () => {
  return (
    <section className="listen-again">
      <h2 className="section-title">Listen Again</h2>
      <div className="albums-container">
        {albums.map((album, index) => (
          <AlbumItem 
            key={index}
            imgSrc={album.imgSrc}
            title={album.title}
            artist={album.artist}
            songCount={album.songCount}
          />
        ))}
      </div>
    </section>
  );
};

export default ListenAgain;
