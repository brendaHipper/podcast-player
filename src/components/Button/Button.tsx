import { ReactNode } from 'react';
import './Button.css';
import { House, Compass, Plus, FileMusic, UserRound, SkipBack, SkipForward, Play, 
    ThumbsUp, ThumbsDown, EllipsisVertical, Volume2, Repeat, Shuffle , ChevronDown } from 'lucide-react';

    type ButtonProps = {
        icon?: 'home' | 'compass' | 'plus' | 'file-music' | 'user-round'| 'skipback'| 'skipforward'| 'play'| 'thumbsup'| 'thumbsdown'| 'ellipsisvertical'| 'volume'| 'repeat'| 'shuffle'| 'chevrondown';
        label?: string;
        handleClick?: () => void;
        children?: ReactNode;
        iconColor?: string;       // Prop para el color del icono (stroke)
        iconFill?: string;        // Prop para el relleno del icono (fill)
        iconSize?: number;        // Prop para el tamaño del icono
        strokeWidth?: number;     // Prop para el grosor del trazo
    };
    
    function Button({ icon = 'home', label, handleClick, children, iconColor = '#fff', iconFill = 'none', iconSize = 24, strokeWidth = 2 }: ButtonProps) {
        const iconComponents = {
            home: House,
            compass: Compass,
            plus: Plus,
            'user-round': UserRound,
            'file-music': FileMusic,
            skipback: SkipBack,
            skipforward: SkipForward,
            play: Play,
            thumbsup: ThumbsUp,
            thumbsdown: ThumbsDown,
            ellipsisvertical: EllipsisVertical,
            volume: Volume2,
            repeat: Repeat,
            shuffle: Shuffle,
            chevrondown: ChevronDown,
        };
    
        const IconComponent = iconComponents[icon];
    
        return (
            <div className='button-container' onClick={handleClick}>
                {IconComponent && (
                    <IconComponent 
                        stroke={iconColor} 
                        fill={iconFill} 
                        width={iconSize} 
                        height={iconSize} 
                        strokeWidth={strokeWidth} 
                    />
                )}
                <span className='button-label'>{label}</span>
                {children && <span className='button-description'>{children}</span>}
            </div>
        );
    }
    
    export default Button;
    