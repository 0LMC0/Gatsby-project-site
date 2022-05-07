import React from 'react'
import { Link } from "gatsby";

const aboutPage = () => {
  return (
    <div>
        <h1>Hello!</h1>
        <p>My name is lautaro.</p>
        <Link to="/contact">If you want to contact me click here!</Link>
    </div>
  )
}

export default aboutPage