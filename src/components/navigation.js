import React from 'react'
// import Scrollspy from "react-scrollspy"
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
                {/* <Scrollspy className="navbar-nav"
                           items={["about", "services", "portfolio", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}> */}
                  {/* <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#about" onClick={Scroller.handleAnchorScroll}>About</Nav.Link>
                  </li> */}
                  <li className="nav-item">            
                    <Nav.Link href="/artifacts"><Link to="/artifacts">Artifacts</Link></Nav.Link>
                  </li>
                  {/* <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#portfolio" onClick={Scroller.handleAnchorScroll}>Portfolio</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>Contact</Nav.Link>
                  </li> */}
                {/* </Scrollspy> */}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}
