import { NavLink } from 'react-router-dom'
import './navigation.css'
interface NavProps {
  context: 'mainPage' | 'categoriesPage' | 'settingPage',
}

const Navigation = (props: NavProps) => {
  // const navigate = useNavigate();
  const hasWindow = typeof window !== 'undefined';
  const windowWidth = hasWindow ? window.innerWidth : 520;
  console.log(windowWidth)
  const { context } = props;

  return (
    <div>
      <nav className='flex justify-between p-5 h-100 items-center'>
        <div className='logo' />
        <div className='navigation_links flex gap-10 items-center'>
          {(windowWidth < 520) ?
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