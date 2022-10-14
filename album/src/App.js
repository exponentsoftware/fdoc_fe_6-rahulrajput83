import { useState } from 'react';
import './App.css';
import Album from './components/Album';

function App() {
  const [data, setData] = useState({
    image: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Rockstar_%28soundtrack%29.jpg',
    album: 'Rockstar',
    artist: 'A.R. Rahman',
  })
  return (
    <Album data={data} />
  );
}

export default App;
