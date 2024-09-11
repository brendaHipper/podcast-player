
import { Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar = () => (
  <div className="search-bar">
    <Search className="search-icon" size={23} />
    <input type="text" placeholder=" Search..." />
  </div>
);

export default SearchBar;
