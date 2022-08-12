import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../../components/navigation/Navigation';
import CategoriesCard from '../../components/categories/CategoriesCard';
import MobileNavigation from '../../components/navigation/MobileNavigation';
import { resetRound } from '../../store/slices/gameSlice';
import Footer from '../../components/footer/Footer';
import { getTenUniqData, getTenUniqDataByStyle, getRusTitle } from '../../handler/dataWorker'
import { updateAllRoundsData } from '../../store/slices/gameSlice'
import "./categoriesPage.css"
import { RootState } from "../../store";
import { toggleTimerActive, updateTimerCurrentSec } from '../../store/slices/settingSlice';
import { updateGenreStat } from '../../store/slices/genreSlice';

const CategoriesPage = () => {
  const dispatch = useDispatch()
  const timerAnswerValue = useSelector<RootState, number>((state) => state.settings.setting.timeAnswerSec);
  const activeGenre = useSelector<RootState, string>((state) => state.genre.genre.activeGenre);


  useEffect(() => {
    const genre = localStorage.getItem('genre');
    if (genre !== null) {
      dispatch(updateGenreStat(JSON.parse(genre)))
    }
    dispatch(updateTimerCurrentSec(timerAnswerValue))
    dispatch(toggleTimerActive(true))
    dispatch(resetRound())
    if ((activeGenre === 'pell-mell') || (activeGenre === '')) {
      const data = getTenUniqData();
      dispatch(updateAllRoundsData(data));
    } else {
      const title = getRusTitle(activeGenre)
      const data = getTenUniqDataByStyle(title);
      dispatch(updateAllRoundsData(data));
    }
  }, [dispatch, activeGenre, timerAnswerValue])


  const categoriesArr = ['pell-mell', 'romanticism', 'symbolism',
    'baroque', 'rococo', 'realism', 'impressionism', 'renaissance']

  const hasWindow = typeof window !== 'undefined';
  const windowWidth = hasWindow ? window.innerWidth : 520;

  return (
    <div className="categories">
      <div className='categories__wrapper'>
        < Navigation context={'categoriesPage'} />

        <div className='categories_title'>Категории</div>
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
      <Footer />
    </div>
  )
}

export default CategoriesPage