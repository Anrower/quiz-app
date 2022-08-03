
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from '../components/Navigation';
import CategoriesCard from '../components/ui/CategoriesCard';
import MobileNavigation from '../components/MobileNavigation';
import { resetRound } from '../store/slices/gameSlice';
import "./categoriesPage.css"

const CategoriesPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetRound())
  }, [dispatch])

  const categoriesArr = ['artist', 'year',]

  const hasWindow = typeof window !== 'undefined';
  const windowWidth = hasWindow ? window.innerWidth : 520;

  return (
    <div className="categories">
      < Navigation context={'categoriesPage'} />
      <div className='categories_content flex flex-col mt-32 max-w-7xl gap-20'>
        <div className='categories_cards'>
          {categoriesArr.map(jenre => {
            return (
              <CategoriesCard title={jenre} key={jenre} />
            )
          })}
        </div>
      </div>
      {windowWidth <= 519 ? <MobileNavigation /> : null}
    </div>
  )
}

export default CategoriesPage