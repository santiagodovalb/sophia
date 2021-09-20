import * as React from "react"
import { Link } from "gatsby"
import '../styles/navbar.css'

const Navbar = () => (
  <navbar>
    <div className='links'>
        <Link to="/videos">
          VIDEOS
        </Link>
        <Link to="/fechas">
          FECHAS
        </Link>
        <Link to="/cosas">
          COSAS
        </Link>
        <Link to="/otrascosas">
          OTRAS COSAS
        </Link>
    </div>
  </navbar>
)

export default Navbar
