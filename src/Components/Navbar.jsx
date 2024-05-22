import { Link } from 'react-router-dom'
import './Navbar.scss'
import { RiMenuFill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <h1>
                tasty
            </h1>

            <ul>
                <li>Home</li>
                <li><Link to='/add' style={{color: '#fff', textDecoration: 'none'}}>Add</Link></li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Special</li>
                <li className='menu' style={{display: 'none'}}><RiMenuFill /> Menu</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar