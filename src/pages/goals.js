import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default class PhilosophyPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Philosophy" />
        <section className="page-section bg-primary pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Goals</h2>
                <hr className="divider light my-4" />
                <p className="text-white-50">Statement of Professional Goals</p>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">
              Statement of Professional Goals
            </h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Item 1</h3>
                  <p className="text-muted mb-0">
                    Lorem ipsum dolor sit amet labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Item 2</h3>
                  <p className="text-muted mb-0">
                    Lorem ipsum dolor sit amet labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Item 3</h3>
                  <p className="text-muted mb-0">
                    Lorem ipsum dolor sit amet labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Item 4</h3>
                  <p className="text-muted mb-0">
                    Lorem ipsum dolor sit amet labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section bg-dark text-white">
          <div className="container text-center"></div>
        </section>
      </Layout>
    )
  }
}
