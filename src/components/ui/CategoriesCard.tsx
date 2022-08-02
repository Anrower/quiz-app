import './categoriesCard.css'
import { useDispatch, useSelector } from "react-redux";
import { updateActiveGenre } from '../../store/slices/genreSlice';
import { NavLink } from 'react-router-dom';
import artist from '../../images/pictures/artist.jpg'
import year from '../../images/pictures/108.jpg'
import { RootState } from "../../store";

interface Iprops {
  title: string,
  onClick?: () => void,
}

const getImg = (value: string) => {
  switch (value) {
    case 'artist':
      return artist
    case 'year':
      return year
    default:
      return artist
  }
}

export default function CategoriesCard(props: Iprops) {

  const genreStat = useSelector<RootState, object>((state) => state.genre.genre.genreStat);

  type ObjectKey = keyof typeof genreStat;

  const dispatch = useDispatch();
  const { title } = props
  const img = getImg(title);

  return (
    //
    <NavLink to='game' onClick={() => dispatch(updateActiveGenre(title))} >
      <div className='card' >
        <div className='card_header'>
          <h3>{title}</h3>
          <p className='card_stats'>
            <span>{0 || genreStat[title as ObjectKey]}</span>/<span>10</span>
          </p>
        </div>
        <img className='card_image' src={img} alt={title} />
      </div>
    </ NavLink>
  );
}