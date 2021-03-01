import React from 'react'

export default class Header extends React.Component {
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
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
