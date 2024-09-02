import './Button.css';
import { House } from 'lucide-react';

function Button() {
    return (
        <div className='button-generic'>
            <House className='icon-house'/>
            <button className='button-class'>Props</button>
        </div>
    );
  }
  
  export default Button;