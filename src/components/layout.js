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

const getScrollNode = element => {
  if (element.ownerDocument) {
    return (
      element.ownerDocument.scrollingElement ||
      element.ownerDocument.documentElement
    )
  }
}

const isScrolled = element => {
  const scrollNode = getScrollNode(element)
  return scrollNode ? scrollNode.scrollTop > 0 : false
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.siteContainer = React.createRef()
    this.state = {
      scrolled: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
    console.log('Layout props', props)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  render() {
    let className = 'site-container'
    if (this.props.className) className += ` ${this.props.className}`
    if (this.state.scrolled) className += ' navbar-scrolled'
    const currentYear = new Date().getFullYear()

    return (
      <div className={className} ref={this.siteContainer} id="page-top">
        <Navigation page={this.props.page} />
        <main>{this.props.children}</main>
        <footer className="bg-dark text-white py-5">
          <div className="container">
            <div className="small text-center">
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
