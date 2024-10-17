// Reutilizo mi componente IconButton aquí
import IconButton from '../IconButton/IconButton';
import './SearchBar.css';

const SearchBar = () => (
  <div className="search-bar">
    <div className="search-icon">
      <IconButton as="search" iconColor='#fff' iconSize={23}/>
    </div>
    <input type="text" placeholder="    Search..." />
  </div>
);

export default SearchBar;
