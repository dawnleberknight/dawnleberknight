import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Projects"/>
        <section className="page-section bg-primary">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Projects</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50">Here are my projects</p>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Some content section</h2>
                <hr className="divider light my-4"/>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Another section</h2>
          </div>
        </section>
      </Layout>
    )
  }
}
