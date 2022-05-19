// basics and utilities import
import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// module stylessheet import
import * as headerStyles from './stylesComponents/header.module.scss'

const Header = () => {


//request to the GraphQL to bring all the data from the site
const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }

  }
`)

  return (
    <header className={headerStyles.header}>
        <h4>
          <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
          </Link>  
        </h4>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About me</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header