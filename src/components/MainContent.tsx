// Contenedor que envuelve todas las secciones de musica.

// import ListenAgain from './components/ListenAgain.js';
// import QuickPicks from './components/QuickPicks.js';
// Esto de arriba se va reemplazar por la siguiente linea:
import './MainContent.css';
import MusicSection from './MusicSection'; 

export default function MainContent() {
  return (
    <div className='main-container'>
        <MusicSection/>
    </div>
  );
}