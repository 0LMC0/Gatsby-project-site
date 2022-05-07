// basics and utilities import
import React from 'react'
import { Link } from 'gatsby'
// components import
import Header from '../components/header'
import Footer from '../components/footer'
 
const IndexPage = () => {
  return(
    <div>
      <Header />
      <h1>Hello world first line of</h1>
      <h2>Gatsby.js</h2>
      <p>Need a Front-end developer? <Link to="/contact">Contact me</Link></p>
      <Footer />
    </div>
  )
}

export default IndexPage