// Contenedor que envuelve todas las secciones de musica.

import './MainContent.css';
import MusicSection from './MusicSection'; 
import PlaylistForm from './PlaylistForm';

export default function MainContent() {
  return (
    <div className='main-container'>
        <MusicSection/>
        <PlaylistForm/>
    </div>
  );
}