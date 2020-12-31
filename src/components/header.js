import React from 'react'
import Scroller from './scroller'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
  }

  render() {
    return (
      <>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">
                  The Adventure of Learning
                </h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">
                  Dawn Leberknight's Professional Porfolio
                </p>
                <a
                  className="btn btn-primary-light btn-xl js-scroll-trigger"
                  href="#about"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
