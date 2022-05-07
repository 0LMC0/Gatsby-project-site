import React from 'react'
import { Link } from 'gatsby'
 
const indexPage = () => {
  return(
    <div>
      <h1>Hello world first line of</h1>
      <h2>Gatsby.js</h2>
      <p>Need a Front-end developer? <Link to="/contact">Contact me</Link></p>
      
    </div>
  )
}

export default indexPage