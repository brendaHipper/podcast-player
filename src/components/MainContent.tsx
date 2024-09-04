// Contenedor que envuelve todas las secciones de musica. Y contenedor de Filters
import './MainContent.css';
import Chip from './Chip';
import MusicSection from './MusicSection';

export default function MainContent() {
  return (
    <div className='main-container'>
      <Chip />
      <MusicSection />
    </div>
  );
}
