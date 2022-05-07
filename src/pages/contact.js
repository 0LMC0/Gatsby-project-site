// basics and utilities import
import React from 'react'
// components import
import Header from '../components/header'
import Footer from '../components/footer'

const ContactPage = () => {
  return (
    <div>
        <Header />
        <h1>Contact me!</h1>
        <h2>Phone number:</h2>
        <p>+54 11-3249-3803</p>
        <h2>E-mail:</h2>
        <p>Lautycaceresss871@mgail.com</p>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lautaro-caceres/">Linkedin profile</a>
        <Footer />
    </div>
  )
}

export default ContactPage