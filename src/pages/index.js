// basics and utilities import
import React from 'react'
import { Link } from 'gatsby'
// Layout import
import Layout from '../components/layout'
 
const IndexPage = () => {
  return(
    <Layout>
      <h1>Hello world first line of</h1>
      <h2>Gatsby.js</h2>
      <p>Need a Front-end developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage