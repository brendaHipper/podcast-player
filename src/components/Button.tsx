import { ReactNode } from 'react';
import './Button.css';
import { House, Compass, Plus, FileMusic, UserRound } from 'lucide-react';

type ButtonProps = {
    icon?: 'home' | 'compass' | 'plus' | 'file-music' | 'user-round';  // Tipos específicos para los íconos
    label: string;
    onClick?: () => void;  // Agregar la propiedad onClick
    children?: ReactNode;
};

function Button({ icon = 'home', label, onClick, children }: ButtonProps) {
    const iconComponents = {
        home: House,
        compass: Compass,
        plus: Plus,
        'user-round': UserRound,
        'file-music': FileMusic,
    };

    // Utiliza un valor predeterminado ('home') si 'icon' no está definido
    const IconComponent = iconComponents[icon];

    return (
        <div className='button-container' onClick={onClick}>
            {IconComponent && <IconComponent className='icon' />}
            <span className='button-label'>{label}</span>
            {children && <span className='button-description'>{children}</span>}
        </div>
    );
}

export default Button;
