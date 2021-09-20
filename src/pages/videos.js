import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Seo from "../components/seo"
import "../styles/videos.css"

export default function Videos() {
  return (
    <div>
      <Seo />
      <Navbar />
      <div className="videos">
        <h1>MARTES</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1Slx4ivJlLI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <h1>STALKEO</h1>
        <iframe
          width="560"
          height="315"
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
