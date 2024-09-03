import React, { useState } from 'react';
import Input from './Input';
import './PlaylistForm.css';

const PlaylistForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleAddPlaylist = () => {
        console.log("Playlist agregada:", { title, description, imageUrl });
    };

    return (
        <form className="playlist-form-container" onSubmit={(e) => e.preventDefault()}>
            <h2>Crea tu playlist</h2>
            <Input 
                label="Título" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <Input 
                label="Descripción" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <Input 
                label="Imagen (URL)" 
                type="url" 
                value={imageUrl} 
                onChange={(e) => setImageUrl(e.target.value)} 
            />
            <button 
                type="submit" 
                onClick={handleAddPlaylist}
                disabled={!title || !description || !imageUrl} 
            >
                Agregar playlist
            </button>
        </form>
    );
};

export default PlaylistForm;
