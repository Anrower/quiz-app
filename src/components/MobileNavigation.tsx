import { NavLink } from 'react-router-dom'
import './navigation.css'


const MobileNavigation = () => {


  return (
    <div className='mobile_navigation'>
      <nav className='mobile_navigation_content'>
        <div className='mobile_navigation_links'>
          <NavLink className="nav-link_mobile" to='/' >
            <div className='home-link_mobile'></div>
            <p>Домой</p>
          </NavLink>

          <NavLink className="nav-link_mobile active" to='/categories' >
            <div className='categories-link_mobile' ></div>
            <p className='active'>Категории</p>
          </NavLink>

          {/* <NavLink className="nav-link_mobile" to='/galery'>
            <div className='galery-link_mobile' ></div>
            <p>Галерея</p>
          </NavLink> */}
        </div>
      </nav>
    </div>

  )
}

export default MobileNavigation