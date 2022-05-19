// basics and utilities import
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        author
      }
    }  
  }
`)
  return (
    <footer>
        <p>Design and development by {data.site.siteMetadata.author}, © 2022</p>
    </footer>
  )
}

export default Footer