import { NavLink } from 'react-router-dom'
import './navigation.css'

interface NavProps {
  context?: 'categoriesPage' | 'settingPage',
};

const MobileNavigation = (props: NavProps) => {

  const { context } = props;

  return (
    <div className='mobile_navigation'>
      <nav className='mobile_navigation_content'>
        <div className='mobile_navigation_links'>
          {(context === 'settingPage') ?
            <>
              <NavLink className="nav-link_mobile" to='/' >
                <div className='home-link_mobile'></div>
                <p>Домой</p>
              </NavLink>

              <NavLink className="nav-link_mobile active" to='/setting' >
                <div className='setting-link_mobile_active' ></div>
                <p className='active'>Настройки</p>
              </NavLink>

              <NavLink className="nav-link_mobile" to='/categories' >
                <div className='categories-link_mobile' ></div>
                <p>Категории</p>
              </NavLink>
            </> :
            <>
              <NavLink className="nav-link_mobile" to='/' >
                <div className='home-link_mobile'></div>
                <p>Домой</p>
              </NavLink>

              <NavLink className="nav-link_mobile active" to='/categories' >
                <div className='categories-link_mobile_active' ></div>
                <p className='active'>Категории</p>
              </NavLink>

              {/* <NavLink className="nav-link_mobile" to='/galery'>
                <div className='galery-link_mobile' ></div>
                <p>Галерея</p>
              </NavLink> */}
            </>
          }
        </div>
      </nav>
    </div>

  )
}

export default MobileNavigation