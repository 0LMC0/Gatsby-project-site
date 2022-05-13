// basics and utilities import
import React from 'react'
import { Link } from "gatsby";
// Layout import
import Layout from '../components/layout';

const AboutPage = () => {
  return (
      <Layout>
        <h1>Hello!</h1>
        <p>My name is lautaro.</p>
        <Link to="/contact">If you want to contact me click here!</Link>
      </Layout>
        
  )
}

export default AboutPage