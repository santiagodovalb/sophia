import React from "react"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import "../styles/contacto.css"
import Navbar from "../components/navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

export default function contacto() {
  return (
    <div>
      <Seo />
      <Navbar />

      <div className="redes">
        <a href="https://www.instagram.com/sophia.musica/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/channel/UCV6mKRR8sthULiyMZanL9oQ" target="_blank">
          <FaYoutube />
        </a>
        <h2>mail@mail.com</h2>
      </div>
      <Layout />
    </div>
  )
}
