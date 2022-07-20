import { Link, useNavigate } from 'react-router-dom'
import './navigation.css'

interface NavProps {
  context: 'mainPage' | 'categoriesPage' | 'settingPage',
}

const Navigation = (props: NavProps) => {
  const navigate = useNavigate();

  const { context } = props;
  return (
    <div>
      <nav className='flex justify-between p-5 h-100 items-center'>
        <div className='logo' />
        <div className='flex gap-10 items-center'>
          {(context === 'mainPage') ?
            <Link className='settings_icon' to='setting' /> :
            (context === 'categoriesPage') ?
              <>
                <Link className='categoriesPage' to='' >Categories</Link>
                {navigate('/categoriesPage')}
                <Link className='home' to='/' >Home</Link>
                {navigate('/')}
                <Link className='settings_icon' to='' />
                {navigate('/setting')}
              </> :
              <Link className='close' to='/' />
          }
        </div>
      </nav>
    </div>

  )
}

export default Navigation