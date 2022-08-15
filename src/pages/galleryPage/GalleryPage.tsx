import './galleryPage.scss';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import { Image } from '../../components/game/GamePicture';
import { temp } from '../../handler/dataWorker';

const GalleryPage = () => {
  return (
    <div className='gallery-page'>
      <div className='wrapper'>
        {/* заменить контекст на галериПэйдж */}
        <Navigation context='categoriesPage' />
        <div className='layout'>
          {temp.map(el =>
            <div className="card" key={el.imageNum}>
              <div className='img-wrapper' >
                <Image path={el.imageNum} alt={el.name} addClass={'gallery_image'} />
              </div>
              <div className='about'>
                <p className='tall_string'> <span >{el.author}</span></p>
                <p className='tall_string'> <span >{el.name}</span></p>
                <p> <span>{el?.style}</span></p>
                <p> <span>{el.year}</span></p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GalleryPage