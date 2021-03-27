import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Header() {
  return (
    <>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <div className="d-flex justify-content-center">
                <StaticImage
                  src="../images/logo.png"
                  alt="Adventure of Learning Logo"
                  placeholder="blurred"
                  height="400"
                  width="400"
                />
              </div>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white font-weight-bold mb-5">
                Dawn Leberknight's Professional Portfolio
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
