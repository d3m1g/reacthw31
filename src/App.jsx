import './App.css';
import Stars from "./components/Stars"
import { films } from './components/filmslist';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

function App() {
  const starsData = films.map((film, index) =>
  (
    <div className='item-film' key={index}>
      <div>
        <div className='category'>{film.category}</div>
        <img className='img-film' src={film.img} alt={film.title} />
      </div>
      <div className='info-film'>
        <div className='icons'>
          <div className='icon'>{film.isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}</div>
          <div className='icon'><ShareIcon /></div>
        </div>
        <div className='title-film'>{film.title}</div>

        <div><Stars count={film.rating} /></div>

        <div className='buttons'>
          <div className='button-buy'>Купить {film.price}</div>
          <div className='button-more'>Подробнее...</div>
        </div>
      </div>
    </div>
  )
  );

  return (
    <div className='container'>{starsData}</div>
  );
}

export default App;
