// basics and utilities import
import React from 'react'
import { Link } from "gatsby";
// components import
import Header from '../components/header';
import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <div>
        <Header />
        <h1>Hello!</h1>
        <p>My name is lautaro.</p>
        <Link to="/contact">If you want to contact me click here!</Link>
        <Footer />
    </div>
  )
}

export default AboutPage