import './AlbumItem.css';

type AlbumItemProps = {
  imgSrc: string;
  title: string;
  artist: string;
  width?: number;
  height?: number;
  borderRadius?: number;
};

export default function AlbumItem({ imgSrc, title, artist, width=180, height=180, borderRadius=4}: AlbumItemProps) {
  return (
    <div
      className="album-song"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <img
        src={imgSrc}
        alt={title}
        className="album-image"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: `${borderRadius}%`,
        }}
      />
      <div className="playlist-name">
        <h4 className="song-title">{title}</h4>
        <p className="artist-name">{artist}</p>
      </div>
    </div>
  );
}
