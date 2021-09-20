import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/letras.css'

export default function letras() {
  return (
    <div>
        <Seo />
    <Navbar />
    <div className='letras'>
      <Link to="/letras/martes">MARTES</Link>
      <Link to="/letras/stalkeo">STALKEO</Link>
      </div>
      <Layout />
    </div>
  )
}
