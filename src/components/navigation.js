import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import Scroller from './scroller'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    console.log(' Navigation props', props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger" to="/">Dawn Leberknight</Link>            
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                  <li className="nav-item">            
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                  </li>
                  <li className="nav-item">            
                    <Nav.Link><Link to="/philosophy">Philosophy</Link></Nav.Link>
                  </li>
                  <li className="nav-item">            
                    <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
                  </li>
                  <li className="nav-item">            
                    <Nav.Link><Link to="/reflection">Reflection</Link></Nav.Link>
                  </li>   
                  <li className="nav-item">            
                    <Nav.Link><Link to="/resume">Resume</Link></Nav.Link>
                  </li>  
                  <li className="nav-item">            
                    <Nav.Link><Link to="/resources">Resources</Link></Nav.Link>
                  </li>                                                  
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}
