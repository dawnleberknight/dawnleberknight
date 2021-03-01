/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './navigation'
import './layout.scss'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.siteContainer = React.createRef()
  }

  render() {
    let className = 'site-container'
    if (this.props.className) className += ` ${this.props.className}`
    const currentYear = new Date().getFullYear()

    return (
      <div className={className} ref={this.siteContainer} id="page-top">
        <Navigation page={this.props.page} />
        <main>{this.props.children}</main>
        <footer className="bg-dark text-white py-5">
          <div className="container">
            <div className="text-center">
              Dawn Leberknight &copy; {currentYear}
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
