import './MusicSection.css';
import ImgUserProfile from '../../assets/yop.png'
import { ReactNode } from 'react';
import AlbumItem from '../AlbumItem/AlbumItem';
import { CircleChevronLeft } from 'lucide-react';
import { CircleChevronRight } from 'lucide-react';
import QuickPicks from '../QuickPicks/QuickPicks';
import SongItem from '../SongItem/SongItem';
// Importo la Custom Hooks de Fetch de Datos y seteo en una constante la url de la API a utilizar
import useFetchData from "../../hooks/useFetchData";
const API_URL = 'https://api.audioboom.com/audio_clips'; // URL de la API

type PropsSectionMusic = {
  description?: string;
  title: string;
  children: ReactNode;
};

function MusicContainer({ description, title, children }: PropsSectionMusic) {
  return (
    <div className='music-container'>
      <div className='category-container'>
        <div className='category-title'>
          <div className="user-profile-icon">
              <img src={ImgUserProfile} alt="user" />
          </div>
          <div className='description-container'>
            <p className="tag-des">{description}</p>
            <h1 className="tag-title">{title}</h1>
          </div>
        </div>
        <div className='arrows'>
          <CircleChevronLeft className='arrowPrev' size={35}/>
          <CircleChevronRight className='arrowNext' size={35}/>
        </div>
      </div>
      <div className="albums-container">
        {children}
      </div>
    </div>
  );
}

// Componente a exportar
function MusicSection() {
  // uso de la Custom Hooks para el Fetch de Datos
  const { data: audio_clips, isLoading, error } = useFetchData(API_URL);

  if (isLoading) {
    return <p>Cargando ando....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Id de los canales a filtrar
  const channelId = [5078295,5682860,5030055,5064687,5008649,4590638];

  const filterAudios = audio_clips.filter(audio_info => 
    channelId.includes(audio_info.channel.id) &&
     audio_info.title && audio_info.channel.urls?.logo_image?.original
  );

  return (
    <div>
      <MusicContainer description="Brenda Hip" title='Listen Again'>
        {filterAudios.slice(0, 5).map(audio_info => (
          <AlbumItem 
            key={audio_info.channel.id}
            imgSrc={audio_info.channel.urls.logo_image.original}
            title={audio_info.title}
            description={audio_info.description || 'Soy una Descripción válida y aquí estoy'}
            audio={audio_info.urls.high_mp3}
            width={300}
            height={180}
          />
        ))}
      </MusicContainer>
      <MusicContainer description="START RADIO FROM A SONG" title='Quick Picks'>
        <QuickPicks>
        {filterAudios.slice(0, 5).map(audio_info => (
          <SongItem
              imgSrc={audio_info.channel.urls.logo_image.original}
              title={audio_info.title}
              description={audio_info.description || 'Soy una Descripción válida y aquí estoy'}
              audio={audio_info.urls.high_mp3}
          />
        ))}
        </QuickPicks>
      </MusicContainer>
      <MusicContainer title='Recommended albums'>
        {filterAudios.slice(0, 5).map(audio_info => (
          <AlbumItem 
            key={audio_info.id}
            imgSrc={audio_info.channel.urls.logo_image.original}
            title={audio_info.title}
            description={audio_info.description || 'Soy una Descripción válida y aquí estoy'}
            audio={audio_info.urls.high_mp3}
            width={200}
            height={200}
          />
        ))}
      </MusicContainer>
      <MusicContainer description="SIMILAR TO" title='Akon'>
        {filterAudios.slice(0, 5).map(audio_info => (
          <AlbumItem 
            key={audio_info.id}
            imgSrc={audio_info.channel.urls.logo_image.original}
            title={audio_info.title}
            description={audio_info.description || 'Soy una Descripción válida y aquí estoy'}
            audio={audio_info.urls.high_mp3}
            width={200}
            height={200}
            borderRadius={50}
          />
        ))}
      </MusicContainer>
    </div>
  );
}

export default MusicSection;
