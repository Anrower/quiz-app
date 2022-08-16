import './galleryPage.scss';
import { useEffect } from 'react';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import { Image } from '../../components/game/GamePicture';
import { temp, filterByStyle, loadMore, initialData } from '../../handler/dataWorker';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import { pictureJsonType } from '../../model/models';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  updateFilter, updatePaginationStartValue, updatePaginationEndValue, updateCurrentCards
} from '../../store/slices/gallerySlice';
import Filter from '../../components/gallery/Filter';


const GalleryPage = () => {
  const dispatch = useDispatch();

  const paginationStartValue = useSelector<RootState, number>((state) => state.gallery.gallery.paginationStartValue);
  const paginationEndValue = useSelector<RootState, number>((state) => state.gallery.gallery.paginationEndValue);
  const currentLoadedCards = useSelector<RootState, pictureJsonType[]>((state) => state.gallery.gallery.currentLoadedCards);

  // const filtred = filterByStyle('Рококо')

  const downloadMore = () => {
    dispatch(updatePaginationStartValue())
    dispatch(updatePaginationEndValue())
    console.log('click')
    const tempData = loadMore(paginationStartValue, paginationEndValue)
    // console.log(tempData)
    dispatch(updateCurrentCards(tempData));
  }

  useEffect(() => {
  }, [currentLoadedCards])

  return (
    <div className='gallery-page'>
      <div className='wrapper'>
        {/* заменить контекст на галериПэйдж */}
        <Navigation context='categoriesPage' />
        {/* <div className='filter'>
          <Filter />
        </div> */}
        <h2 className='gallery-title'>Галерея</h2>
        <div className='layout'>
          {currentLoadedCards.map((el, index) => {
            return <div className="card" key={index}>
              <div className='img-wrapper' >
                <div className='about'>
                  <p className='picture-title'><span >{el.name}</span></p>
                  <p className='picture-artist'>
                    <span >{el.author}, </span>
                    <span >{el.year}</span></p>
                  <p className='picture-style'><span >({el?.style})</span></p>
                </div>
                <Image path={el.imageNum} alt={el.name} />
              </div>
            </div>
          })};
        </div>
        <div className='load_btn'>
          <PrimaryBtn title='Загрузить ещё' onClick={downloadMore} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GalleryPage