import * as React from "react"
import { Link } from "gatsby"
import '../styles/navbar.css'
import { AiOutlineMenu } from "react-icons/ai"

const toggleMenu = () => {

  document.getElementById('mobLinks').style.display = document.getElementById('mobLinks').style.display === 'block' ? 'none' : 'block'
}

const Navbar = () => (
  <div>
      <div id='menu' onClick={toggleMenu}>
        <AiOutlineMenu />
      </div>
    <div className='links'>
      <ul className='link'>
        <Link to="/">
          INICIO
        </Link>
        </ul>
        <ul className='link'>
        <Link to="/videos">
          VIDEOS
        </Link>
        </ul>
        <ul className='link'>
        <Link to="/letras">
          LETRAS
        </Link>
        </ul>
        <ul className='link'>
        <Link to="/contacto">
          CONTACTO & REDES
        </Link>
        </ul>
    </div>
    <div id='mobLinks' class='slide-bottom' style={{display:'none'}}>
      <ul className='mobLink'>
        <Link to="/">
          INICIO
        </Link>
        </ul>
        <ul className='mobLink'>
        <Link to="/videos">
          VIDEOS
        </Link>
        </ul>
        <ul className='mobLink'>
        <Link to="/letras">
          LETRAS
        </Link>
        </ul>
        <ul className='mobLink'>
        <Link to="/contacto">
          CONTACTO & REDES
        </Link>
        </ul>
    </div>
    
  </div>
)

export default Navbar
