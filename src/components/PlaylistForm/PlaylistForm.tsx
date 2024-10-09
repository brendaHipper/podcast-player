import './PlaylistForm.css'
import AlbumItem from '../AlbumItem/AlbumItem';
import { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../Input/Input';

type PlaylistFormProps = {
  addPlaylist: (playlist: 
    { 
      title: string; 
      description: string; 
      imageUrl: string }) => void;
};

function PlaylistForm({ addPlaylist }: PlaylistFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addPlaylist({ title, description, imageUrl });
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name === 'title') setTitle(value);
    if (name === 'description') setDescription(value);
    if (name === 'imageUrl') setImageUrl(value);
  };

  return (
    <div className='main-container'>
      <div className="playlist-form-container">
        <form onSubmit={handleSubmit}>
        <h2>Creá tu playlist</h2>
          <Input label="Titulo" name="title" value={title} onChange={handleInputChange} />
          <Input label="Descripción" name="description" value={description} onChange={handleInputChange} />
          <Input label="Imagen (url)" name="imageUrl" value={imageUrl} onChange={handleInputChange} />
          <button type="submit" disabled={!title || !description || !imageUrl}>
            Agregar Playlist
          </button>
        </form>
      <div className="playlist-preview">
        <AlbumItem 
              imgSrc={imageUrl}
              title={title}
              description={description}
              width={200}
              height={200}
          />
      </div>
    </div>
    </div>
  );
}

export default PlaylistForm;
