import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import Scroller from './scroller'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
  }

  render() {
    return (
      <>
        <Navbar
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              Dawn Leberknight
            </Link>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="ml-auto">
                <ul className="navbar-nav my-2 my-lg-0">
                  <li className="nav-item">
                    <Nav.Item>
                      <Link to="/">Home</Link>
                    </Nav.Item>
                  </li>
                  <li className="nav-item">
                    <Nav.Item>
                      <Link to="/about">About</Link>
                    </Nav.Item>
                  </li>
                  <li className="nav-item">
                    <Nav.Item>
                      <Link to="/goals">Goals</Link>
                    </Nav.Item>
                  </li>
                  <li className="nav-item">
                    <Nav.Item>
                      <Link to="/projects">Artifacts</Link>
                    </Nav.Item>
                  </li>
                  <li className="nav-item">
                    <Nav.Item>
                      <Link to="/reflection">Reflection</Link>
                    </Nav.Item>
                  </li>
                  <li className="nav-item">
                    <Nav.Item>
                      <Link to="/resources">Resources</Link>
                    </Nav.Item>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    )
  }
}
