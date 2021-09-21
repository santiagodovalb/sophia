import React from "react"
import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa"
import "../styles/contacto.css"
import Navbar from "../components/navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function contacto() {
  return (
    <div>
      <Seo />
      <Navbar />

      <div className="redes">
        <a href="https://www.instagram.com/sophia.musica/" target="_blank" rel="noreferrer"> 
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/channel/UCV6mKRR8sthULiyMZanL9oQ" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
        <a href="https://open.spotify.com/artist/0IY9YDRsCEg2lrDPWC8toy" target="_blank" rel="noreferrer">
          <FaSpotify />
        </a>
        <h2>info.sophiamusica@gmail.com</h2>
      </div>
      <Layout />
    </div>
  )
}
