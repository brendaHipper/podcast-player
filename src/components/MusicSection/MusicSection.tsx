import './MusicSection.css';
import ImgUserProfile from '../../assets/yop.png'
import { ReactNode } from 'react';
import AlbumItem from '../AlbumItem/AlbumItem';
import IconButton from '../IconButton/IconButton';
import QuickPicks from '../QuickPicks/QuickPicks';
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
          <div  className='arrowPrev'>
            <IconButton as="arrowPrev" iconSize={35}/>
          </div>
          <div className='arrowNext'>
            <IconButton as="arrowNext" iconSize={35}/>
          </div>
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

  return (
    <div>
      <MusicContainer description="Brenda Hip" title='Listen Again'>
      {audio_clips.slice(0, 5).map((audio_info) => (
        <AlbumItem 
          key={`${audio_info.id}la`}
          // key={audio_info.id}
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
        {audio_clips.slice(0, 16).map(audio_info => (
        <div className='styleQuickPicks'>
            <AlbumItem 
              key={`${audio_info.id}qp`}
              // key={audio_info.id}
              imgSrc={audio_info.channel.urls.logo_image.original}
              title={audio_info.title}
              description={audio_info.description || 'Soy una Descripción válida y aquí estoy'}
              audio={audio_info.urls.high_mp3}
              width={48}
              height={48}
            />
            </div>
          ))}
        </QuickPicks>
      </MusicContainer>
      <MusicContainer title='Recommended albums'>
        {audio_clips.slice(0, 5).map(audio_info => (
          <AlbumItem 
            key={`${audio_info.id}ra`}
            // key={audio_info.id}
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
        {audio_clips.slice(0, 5).map(audio_info => (
          <AlbumItem 
            key={`${audio_info.id}st`}
            // key={audio_info.id}
            imgSrc={audio_info.channel.urls.logo_image.original}
            title={audio_info.title}
            description={audio_info.description || 'Soy una Descripción válida y aquí estoy'}
            audio={audio_info.urls.high_mp3}
            width={200}
            height={200}
            borderRadius={100}
          />
        ))}
      </MusicContainer>
    </div>
  );
}

export default MusicSection;
