// El Componente Button paso a ser llamadoo IconButton
import { ReactNode } from 'react';
import './IconButton.css';
import { House, Compass, Plus, FileMusic, UserRound, SkipBack, SkipForward, Play, Pause,
    ThumbsUp, ThumbsDown, EllipsisVertical, Volume2, Repeat, Shuffle , ChevronDown,
    Search, CircleChevronLeft, CircleChevronRight } from 'lucide-react';

    type IconButtonProps = {
        as: keyof typeof LIST_ICONS; // acá indico que as va tener un tipo LIST_ICONS
        children?: ReactNode;
        handleClick?: () => void;
        label?: string;
        iconColor?: string;       // Prop para el color del icono (stroke)
        iconFill?: string;        // Prop para el relleno del icono (fill)
        iconSize?: number;        // Prop para el tamaño del icono
        strokeWidth?: number;     // Prop para el grosor del trazo
    };

    // Diccionario de Iconos utilizado para aplicar << Polimorfismo >>
    const LIST_ICONS = {
            home: House,
            compass: Compass,
            plus: Plus,
            'user-round': UserRound,
            'file-music': FileMusic,
            skipback: SkipBack,
            skipforward: SkipForward,
            play: Play,
            pause: Pause,
            thumbsup: ThumbsUp,
            thumbsdown: ThumbsDown,
            ellipsisvertical: EllipsisVertical,
            volume: Volume2,
            repeat: Repeat,
            shuffle: Shuffle,
            chevrondown: ChevronDown,
            search: Search,
            arrowPrev: CircleChevronLeft,
            arrowNext: CircleChevronRight
        };
    
    
    function IconButton({ children, as, label,handleClick, iconColor = 'currentColor',
        iconFill = 'none', iconSize = 24, strokeWidth = 2, ...delegated }: IconButtonProps) {
            
        const Icon = LIST_ICONS[as];

        // << Prop Delegation >> y uso de << Slots >>
        return (
            <div className='button-container' {...delegated} onClick={handleClick}>
                <Icon
                    size={iconSize}
                    color={iconColor}
                    fill={iconFill}
                    strokeWidth={strokeWidth}
                />
                <span className='button-label'>{label}</span>
                {children && <span className='button-description'>{children}</span>}
            </div>
        );
    }
    
    export default IconButton;
    