
import Navigation from '../components/Navigation';
import CategoriesCard from '../components/ui/CategoriesCard';


const CategoriesPage = () => {

  const categoriesArr = ['artist', 'year',]

  return (
    <div className="categories">
      < Navigation context={'categoriesPage'} />
      <div className='flex flex-col mt-32 ml-28 max-w-7xl gap-20'>
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