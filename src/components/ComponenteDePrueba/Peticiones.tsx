import useFetchData from "../../hooks/useFetchData";

const API_URL = 'https://api.audioboom.com/audio_clips';

export default function Peticiones() {
    const {data: audio_clips, isLoading, error} = useFetchData(API_URL);
  
    if (isLoading) {
      return <p>Cargando ando....</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    return (
      <div>
        <h1>Peticiones</h1>
        <ul>
          {audio_clips.map((audio_info) => (
            <li key={audio_info.id}>
              <p><strong>Título:</strong> {audio_info.title}</p>
              <p><strong>Descripción:</strong> {audio_info.description}</p>
              <img width={300} src={audio_info.channel.urls.logo_image.original} alt="Logo del canal" />
              {/* <p><strong>Audio MP3:</strong> <a href={audio_info.urls.high_mp3}>{audio_info.urls.high_mp3}</a></p> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }