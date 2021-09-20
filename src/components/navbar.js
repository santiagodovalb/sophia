import * as React from "react"
import { Link } from "gatsby"
import '../styles/navbar.css'

const Navbar = () => (
  <navbar>
    <div className='links'>
        <Link to="/">
          INICIO
        </Link>
        <Link to="/videos">
          VIDEOS
        </Link>
        <Link to="/letras">
          LETRAS
        </Link>
        <Link to="/cosas">
          COSAS
        </Link>
        <Link to="/contacto">
          CONTACTO
        </Link>
    </div>
  </navbar>
)

export default Navbar
