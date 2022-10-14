import { useState } from 'react';
import './App.css';
import Album from './components/Album';

function App() {
  const [albums, setAlbums] = useState({
    id: '',
    artist: 'A.R. Rahman',
    album_title: 'Rockstar',
    album_cover: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Rockstar_%28soundtrack%29.jpg',
    songs: ''
  })


  return (
    <Album albums={albums} />
  );
}

export default App;
