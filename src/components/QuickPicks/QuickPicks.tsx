import './QuickPicks.css';
import { ReactNode } from 'react';

type QuickPicksProps = {
  children: ReactNode;
};

// Modificación de QuickPicks para sea un Componente contenedor de AlbumItem
export default function QuickPicks({ children }: QuickPicksProps) {
  return (
    <div className="listen-again">
      <div className="quick-picks-container">
        {children}
      </div>
    </div>
  );
}
