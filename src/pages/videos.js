import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Seo from "../components/seo"
import "../styles/videos.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Videos() {
  return (
    <div>
      <Seo />
      <Navbar />
      
      <div className="videos">
        <h1>MARTES</h1>
        <Loader
        type="Puff"
        color="#FFFFFF"
        height={50}
        width={50}
        timeout={500} //3 secs
      />
        <iframe
          className='video'
          src="https://www.youtube.com/embed/1Slx4ivJlLI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <h1>STALKEO</h1>
        <Loader
        type="Puff"
        color="#FFFFFF"
        height={50}
        width={50}
        timeout={500} //3 secs
      />
        <iframe
        className='video'
          
          src="https://www.youtube.com/embed/1KKqCq2skFU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Layout />
      </div>
    </div>
  )
}
