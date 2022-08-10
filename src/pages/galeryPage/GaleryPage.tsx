import './galeryPage.scss'
import Navigation from '../../components/navigation/Navigation'

const GaleryPage = () => {
  return (
    <div className='galery-page'>
      {/* заменить контекст на галериПэйдж */}
      <Navigation context='categoriesPage' />
      <div className='galery-page__grid'></div>
    </div>
  )
}

export default GaleryPage