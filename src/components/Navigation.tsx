import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav className='flex justify-between px-5 h-[50px] items-center'>
        <p className='text-lgtext-slate-50'>
          Logo
        </p>
        <div className='flex gap-2 h-50px text-lg text-slate-50'>
          {/* <Link to="auth">Auth</Link> */}
          <Link className='' to="setting">Setting</Link>
        </div>
      </nav>
    </div>

  )
}

export default Navigation