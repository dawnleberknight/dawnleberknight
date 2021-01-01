import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

export default function ProfessionalPresentation() {
  return (
    <Layout>
      <SEO title="Professional Presentation" />
      <section className="page-section bg-primary-light pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Professional Presentation</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3>some content....</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mt-5">
              <Link to="/projects">
                <button className="btn btn-primary-light btn-xl">
                  Back to Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
