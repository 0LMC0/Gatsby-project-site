import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <div>
        <h4>My portfolio</h4>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/about">About me</Link></p>
        <p><Link to="/blog">Blog</Link></p>
        <p><Link to="/contact">Contact</Link></p>
    </div>
  )
}

export default Header