// basics and utilities import
import React from 'react'
// Scss import
import '../styles/index.scss' 
import * as layoutStyles from './stylesComponents/layout.module.scss'
// components import
import Header from './header'
import Footer from './footer'


const Layout = (props) => {
    return (
        <div className={ layoutStyles.container }>
            <div className={ layoutStyles.content }>
                <Header />
                { props.children }
            </div>
            <Footer />
        </div>
  )
}

export default Layout