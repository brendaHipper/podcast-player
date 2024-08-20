import './App.css'
import Header from './components/Header.js';
import ListenAgain from './components/ListenAgain.js';
import QuickPicks from './components/QuickPicks.js';



export default function AlbumList() {
  return (
    <div className='podcast'>
      <Header />
      <ListenAgain />
      <QuickPicks />
    </div>
  );
}


