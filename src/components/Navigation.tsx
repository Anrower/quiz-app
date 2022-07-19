import { Link } from 'react-router-dom'
import './navigation.css'

interface NavProps {
  context: 'mainPage' | 'categoriesPage' | 'settingPage',
}

const Navigation = (props: NavProps) => {
  const { context } = props;
  return (
    <div>
      <nav className='flex justify-between p-5 h-100 items-center'>
        <div className='logo' />
        <div className='flex gap-2 text-lg text-slate-50'>
          {context === ('mainPage' || 'categoriesPage') ?
            <Link className='settings_icon' to='setting'></Link> :
            <Link className='close' to='/'></Link>
          }
        </div>
      </nav>
    </div>

  )
}

export default Navigation