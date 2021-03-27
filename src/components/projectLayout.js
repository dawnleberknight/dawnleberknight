import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from './layout'
import SEO from './seo'

const Paragraph = data => {
  return <p dangerouslySetInnerHTML={{ __html: data.children }} />
}

export default class ProjectLayout extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <SEO title={data.titleMain} />
        <section className="page-section bg-primary-light pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <h2 className="mt-0 page-header">{data.titleMain}</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <h2 className="mt-0">{data.standardName}</h2>
                <hr className="divider" />
                <div className="text-left">
                  <p>{data.standardSummary}</p>
                </div>
              </div>
              <div className="col-lg-12">
                <h3 className="mt-5">
                  {data.courseNumber} -{' '}
                  <a
                    href={data.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.titleMain}
                  </a>{' '}
                  {data.titleSecondary && (
                    <>
                      <span>and </span>
                      <a
                        href={data.projectLink2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.titleSecondary}
                      </a>
                    </>
                  )}
                </h3>
                <h4 className="mt-5">Context & Conditions</h4>
                <Paragraph>{data.contextAndConditions}</Paragraph>
                <h4 className="mt-5">Scope</h4>
                <Paragraph>{data.scope}</Paragraph>
                <h4 className="mt-5">Role</h4>
                <Paragraph>{data.role}</Paragraph>
                <h4 className="mt-5">Instructional Design</h4>
                <Paragraph>{data.instructionalDesign}</Paragraph>
                <div className="d-flex justify-content-center">
                  <StaticImage
                    src="../images/logo.png"
                    alt="Adventure of Learning Logo"
                    height="400"
                    width="400"
                  />
                </div>
                <h4 className="mt-5">AECT Performance Indicators</h4>
                {data.performanceIndicator.map((pi, index) => (
                  <div key={index}>
                    <h5 className="mt-4">
                      <u>{pi.title}</u>
                    </h5>
                    <p className="mb-0">
                      <i>{pi.indicator}</i>
                    </p>
                    <strong>
                      <Paragraph>{pi.implementation}</Paragraph>
                    </strong>
                  </div>
                ))}
                <h4 className="mt-5">Reflection</h4>
                <Paragraph>{data.reflection}</Paragraph>
              </div>
              <div className="col-lg-12 text-center mt-5">
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
}
