
import './AlbumItem.css';

type AlbumItemProps = {
  imgSrc: string;
  title: string;
  artist: string;
  songCount: string;
};

export default function AlbumItem({ imgSrc, title, artist, songCount }: AlbumItemProps) {
  return (
    <div className="album-item">
      <img src={imgSrc} alt={title} className="album-image" />
      <div className="album-details">
        <p className="album-title">{title}</p>
        <p className="album-artist">{artist}</p>
        <p className="album-song-count">{songCount}</p>
      </div>
    </div>
  );
  
}
