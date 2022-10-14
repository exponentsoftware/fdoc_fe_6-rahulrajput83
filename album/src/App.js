import './App.css';
import Albums from './components/Albums';

const albums = [
  {
    id: 1,
    artist: 'A.R. Rahman',
    album_title: 'Rockstar',
    album_cover: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Rockstar_%28soundtrack%29.jpg',
  },
  {
    id: 2,
    artist: 'A.R. Rahman',
    album_title: 'Highway',
    album_cover: 'https://m.media-amazon.com/images/M/MV5BMjE5NjkyNTczM15BMl5BanBnXkFtZTgwNDg4MzE5MDE@._V1_.jpg',
  },
  {
    id: 3,
    artist: 'A.R. Rahman',
    album_title: 'Jodha Akbar (Original)',
    album_cover: 'https://m.media-amazon.com/images/M/MV5BMTI1ODQ2MDIxMl5BMl5BanBnXkFtZTcwNTc3Mzk1MQ@@._V1_.jpg',
  },
  {
    id: 4,
    artist: 'A.R. Rahman',
    album_title: 'Raanjhanaa (Original)',
    album_cover: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2013/05/Dhanush-and-Sonam-Kapoor-in-Raanjhanaa-Movie-Poster-2.jpg',
  },
  {
    id: 5,
    artist: 'A.R. Rahman',
    album_title: 'Ghajini',
    album_cover: 'https://m.media-amazon.com/images/M/MV5BMjU4N2ZlYTktNTFlNy00OGZmLWEwZWQtZDllMjk1MzhiZDEzXkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_.jpg',
  },
  {
    id: 6,
    artist: 'A.R. Rahman',
    album_title: 'Rang De Basanti',
    album_cover: 'https://upload.wikimedia.org/wikipedia/en/0/08/Rang_De_Basanti_poster.jpg',
  },
]

function App() {

  return (
    <Albums albums={albums} />
  );
}

export default App;
