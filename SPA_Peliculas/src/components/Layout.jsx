import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

export const Layout = () => {
  return (
    <div className='navegacion'>
      <nav>
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/characters">Characters</Link>
      </nav>
      <Outlet />
    </div>
  )
}