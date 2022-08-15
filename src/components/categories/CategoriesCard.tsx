import './categoriesCard.css';
import { useDispatch, useSelector } from "react-redux";
import { updateActiveGenre } from '../../store/slices/genreSlice';
import { NavLink } from 'react-router-dom';
import { RootState } from "../../store";
import { updateAllRoundsData } from '../../store/slices/gameSlice';
import { getTenUniqData, getTenUniqDataByStyle, getRusTitle } from '../../handler/dataWorker';

import pellMell from '../../images/pictures/artist.jpg';
import year from '../../images/pictures/108.jpg';
import realism from '../../images/pictures/0.jpg';
import impressionism from '../../images/pictures/1.jpg';
import symbolism from '../../images/pictures/88.jpg';
import romanticism from '../../images/pictures/13.jpg';
import baroque from '../../images/pictures/8.jpg';
import rococo from '../../images/pictures/16.jpg';
import renaissance from '../../images/pictures/26.jpg';

const getImg = (value: string) => {
  switch (value) {
    case 'pellMell':
      return pellMell
    case 'year':
      return year
    case 'realism':
      return realism
    case 'impressionism':
      return impressionism
    case 'symbolism':
      return symbolism
    case 'romanticism':
      return romanticism
    case 'baroque':
      return baroque
    case 'rococo':
      return rococo
    case 'renaissance':
      return renaissance
    default:
      return pellMell
  }
};

interface Iprops {
  title: string,
  onClick?: () => void,
};

export default function CategoriesCard(props: Iprops) {

  const genreStat = useSelector<RootState, object>((state) => state.genre.genre.genreStat);

  type ObjectKey = keyof typeof genreStat;

  const dispatch = useDispatch();
  const { title } = props
  const img = getImg(title);
  const genreStats = genreStat[title as ObjectKey]

  const createGame = (title: string) => {

    dispatch(updateActiveGenre(title));
    const localActiveGenre = JSON.stringify(title);
    localStorage.setItem('activeGenre', localActiveGenre);
    title = getRusTitle(title);

    if (title === 'Вперемешку') {
      const data = getTenUniqData();
      dispatch(updateAllRoundsData(data));
      const localData = JSON.stringify(data);
      localStorage.setItem('data', localData);
    } else {
      const data = getTenUniqDataByStyle(title);
      dispatch(updateAllRoundsData(data));
      const localData = JSON.stringify(data);
      localStorage.setItem('data', localData);
    }

  }

  return (
    <NavLink to='game'>
      <div className='card' onClick={() => createGame(title)}>
        <div className='card_header'>
          <h3>{getRusTitle(title)}</h3>
          <p className='card_stats'>
            <span>{genreStats}</span>/<span>10</span>
          </p>
        </div>
        <img className='card_image' style={genreStats === 0 ? { filter: 'grayscale(100%)' } : {}} src={img} alt={title} />
        {
          genreStats > 0 ?
            <div className='card_btn'>
              <span className='card_btn_again_img'></span>
              <span className='card_btn_again_tetx'>Сыграть снова?</span>
            </div>
            : null
        }

      </div>
    </ NavLink>
  );
}