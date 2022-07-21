import { Link, NavLink } from 'react-router-dom'
import './navigation.css'
interface NavProps {
  context: 'mainPage' | 'categoriesPage' | 'settingPage',
}

const Navigation = (props: NavProps) => {
  // const navigate = useNavigate();

  const { context } = props;
  return (
    <div>
      <nav className='flex justify-between p-5 h-100 items-center'>
        <div className='logo' />
        <div className='flex gap-10 items-center'>
          {(context === 'mainPage') ?
            <NavLink className='settings_icon' to='/setting' /> :
            (context === 'categoriesPage') ?
              <>
                <NavLink className='categoriesPage' to='/categories' >Categories</NavLink>
                <NavLink className='home' to='/' >Home</NavLink>
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