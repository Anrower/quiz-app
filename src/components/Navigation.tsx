import { NavLink, useNavigate } from 'react-router-dom'
import './navigation.css'
import { getPageName } from '../handler/dataWorker'
interface NavProps {
  context: 'mainPage' | 'categoriesPage' | 'settingPage',
}

const Navigation = (props: NavProps) => {
  const navigate = useNavigate();
  const hasWindow = typeof window !== 'undefined';
  const windowWidth = hasWindow ? window.innerWidth : 520;
  const { context } = props;

  return (
    <div>
      <nav className='flex justify-between p-5 h-100 items-center'>
        {context === 'categoriesPage' ?
          <div className='logo' />
          : null}
        <div onClick={() => navigate(-1)}>
          {(context === 'settingPage') ?
            <div className='nav_back-container'>
              <p className='page-name'>{getPageName(context)}</p>
            </div>
            :
            null}
        </div>
        <div className='navigation_links flex gap-10 items-center'>
          {((windowWidth < 520 && context === 'categoriesPage') ||
            (windowWidth < 520 && context === 'mainPage')) ?
            <NavLink className='settings_icon' to='/setting' />
            :
            (windowWidth < 520 && context === 'settingPage') ?
              null :
              (context === 'mainPage') ?
                <NavLink className='settings_icon' to='/setting' /> :
                (context === 'categoriesPage') ?
                  <>
                    <NavLink className='categoriesPage' to='/categories' >Категории</NavLink>
                    <NavLink className='home' to='/' >Домой</NavLink>
                    <NavLink className='settings_icon' to='/setting' />
                  </> :
                  <NavLink className='close' to='/' />
          }
        </div>
      </nav>
    </div>

  )
}

export default Navigation