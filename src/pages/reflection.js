import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default class ReflectionPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Reflection"/>
        <section className="page-section bg-primary pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Reflection</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50">My Reflection</p>
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
          </div>
        </section>
      </Layout>
    )
  }
}
