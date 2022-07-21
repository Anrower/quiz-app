import './categoriesCard.css'
import { useDispatch } from "react-redux";
import { updateActiveGenre } from '../../store/slices/genreSlice';
import { NavLink } from 'react-router-dom';
import portrait from '../../images/pictures/4.jpg'
import landscape from '../../images/pictures/49.jpg'
import artist from '../../images/pictures/artist.jpg'
import nude from '../../images/pictures/107.jpg'
import surrealism from '../../images/pictures/108.jpg'


interface Iprops {
  title: string,
  onClick?: () => void,
}

const getImg = (value: string) => {
  switch (value) {
    case 'Portrait':
      return portrait
    case 'Nude':
      return nude
    case 'Surrealism':
      return surrealism
    case 'Landscape':
      return landscape
    case 'Artist':
      return artist
    default:
      return artist
  }
}

export default function CategoriesCard(props: Iprops) {
  const dispatch = useDispatch();
  const { title } = props
  return (
    //
    <NavLink to='game' onClick={() => dispatch(updateActiveGenre(title))} >
      <div className='card' >
        <div className='card_header'>
          <h3>{title}</h3>
          <p className='card_stats'>
            <span>0</span>/<span>10</span>
          </p>
        </div>
        <img className='card_image' src={getImg(title)} alt={title} />
      </div>
    </ NavLink>
  );
}