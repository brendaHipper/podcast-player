import './SongItem.css';

type SongItemProps = {
  imgSrc: string;
  title: string;
  artist: string;
};

export default function SongItem({ imgSrc, title, artist }: SongItemProps) {
  return (
    <div className="song-item-container">
      <img src={imgSrc} alt={title} className="song-image" />
      <div className="song-item-info">
        <h4 className="song-item-title">{title}</h4>
        <p className="song-item-artist">{artist}</p>
      </div>
    </div>
  );
}
