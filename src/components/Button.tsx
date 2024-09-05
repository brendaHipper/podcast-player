import { ReactNode } from 'react';
import './Button.css';
import { House, Compass, Plus, FileMusic, UserRound } from 'lucide-react';

type ButtonProps = {
    icon?: 'home' | 'compass' | 'plus' | 'file-music' | 'user-round';
    label: string;
    handleClick?: () => void;  // Agregar handleClick
    children?: ReactNode;
};

function Button({ icon = 'home', label, handleClick, children }: ButtonProps) {
    const iconComponents = {
        home: House,
        compass: Compass,
        plus: Plus,
        'user-round': UserRound,
        'file-music': FileMusic,
    };

    const IconComponent = iconComponents[icon];

    return (
        <div className='button-container' onClick={handleClick}>
            {IconComponent && <IconComponent className='icon' />}
            <span className='button-label'>{label}</span>
            {children && <span className='button-description'>{children}</span>}
        </div>
    );
}

export default Button;
