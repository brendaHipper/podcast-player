import './PlaybackBar.css';
import SongItem from '../SongItem/SongItem';
import Button from '../Button/Button';

const ALBUMS = [
    { id: 1, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L_JofsqtyNhqQ2x0W4z7nMi3KfoPLgD1cQ&s.jpg', title: 'Listen Again', description: 'Alabama Shakes - The dsll dsldk • 37K views • 603 likes' },
  ];

function PlayBar() {
    return (
        <article className='play-bar-container'>
            <div className='pb-inner-container'>
                <div className='play-arrow'>
                    <Button icon="skipback" iconSize={20} iconFill="#fff"/>
                    <div className='play-button'>
                        <Button
                            icon="play"
                            iconFill="#fff"
                            strokeWidth={1}
                            iconSize={35}
                        />
                    </div>
                    <Button icon="skipforward" iconSize={20} iconFill="#fff"/>
                    <p className='time'>0:10 / 0:41</p>
                </div>
                <div className='playing-album-music'>
                    {ALBUMS.map((album) => (
                        <SongItem
                            key={album.id}
                            imgSrc={album.imgSrc}
                            title={album.title}
                            description={album.description}
                        />
                    ))}
                    <div className='icons-likes'>
                        <Button icon="thumbsdown" iconSize={20} strokeWidth={1}/>
                        <Button icon="thumbsup" iconSize={20} strokeWidth={1}/>
                        <Button icon="ellipsisvertical" iconSize={20} strokeWidth={1}/>
                    </div>
                </div>
                <div className='other-controls'>
                    <Button icon="volume" iconColor='#949494' iconSize={28} strokeWidth={1}/>
                    <Button icon="repeat" iconColor='#949494' iconSize={28} strokeWidth={1}/>
                    <Button icon="shuffle" iconColor='#949494' iconSize={28} strokeWidth={1}/>
                    <Button icon="chevrondown" iconFill="#fff" iconSize={28} strokeWidth={1}/>
                </div>
            </div>
        </article>
    );
}

export default PlayBar;