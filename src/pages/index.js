import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/index.css"
import Navbar from "../components/navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/index.css'

const IndexPage = () => (
  <div>
    <Seo />
    <Navbar />
    <div className='logo slide-top'>
    <StaticImage src='../../public/logoBlanco.png' alt="logo" placeholder='blurred'/>
    </div>
    <Layout />
  </div>
)

export default IndexPage
