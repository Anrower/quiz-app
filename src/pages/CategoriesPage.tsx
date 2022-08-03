
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from '../components/Navigation';
import CategoriesCard from '../components/ui/CategoriesCard';
import { resetRound } from '../store/slices/gameSlice';
import "./categoriesPage.css"

const CategoriesPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetRound())
  }, [dispatch])

  const categoriesArr = ['artist', 'year',]

  return (
    <div className="categories">
      < Navigation context={'categoriesPage'} />
      <div className='flex flex-col mt-32 max-w-7xl gap-20'>
        <div className='categories_cards'>
          {categoriesArr.map(jenre => {
            return (
              <CategoriesCard title={jenre} key={jenre} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage