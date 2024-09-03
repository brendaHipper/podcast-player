// import './App.css'
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Chip from './components/Chip.js';
import MainContent from './components/MainContent.js';

export default function AlbumList() {
  return (
    <div className='podcast'>
      <Header />
      <Sidebar/>
      <Chip/>
      <MainContent />
    </div>
  );
}


