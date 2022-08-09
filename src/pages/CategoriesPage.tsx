
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import CategoriesCard from '../components/ui/CategoriesCard';
import MobileNavigation from '../components/MobileNavigation';
import { resetRound } from '../store/slices/gameSlice';
import { getTenUniqData, getTenUniqDataByStyle, getRusTitle } from '../handler/dataWorker'
import { updateAllRoundsData } from '../store/slices/gameSlice'
import "./categoriesPage.css"
import { RootState } from "../store";
import { toggleTimerActive, updateTimerCurrentSec } from '../store/slices/settingSlice';
import { updateActiveGenre } from '../store/slices/genreSlice';

const CategoriesPage = () => {
  const dispatch = useDispatch()
  const timerAnswerValue = useSelector<RootState, number>((state) => state.settings.setting.timeAnswerSec);
  const activeGenre = useSelector<RootState, string>((state) => state.genre.genre.activeGenre);

  useEffect(() => {
    dispatch(updateTimerCurrentSec(timerAnswerValue))
    dispatch(toggleTimerActive(true))
    dispatch(resetRound())
    if ((activeGenre === 'artist') || (activeGenre === 'year') || (activeGenre === '')) {
      const data = getTenUniqData();
      dispatch(updateAllRoundsData(data));
    } else {
      const title = getRusTitle(activeGenre)
      const data = getTenUniqDataByStyle(title);
      dispatch(updateAllRoundsData(data));
    }
  }, [dispatch])


  const categoriesArr = ['artist', 'year', 'romanticism', 'symbolism',
    'baroque', 'rococo', 'realism', 'impressionism']

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