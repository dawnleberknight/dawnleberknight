import React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'
import SEO from './seo'

export default class ProjectLayout extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <SEO title={data.titleMain} />
        <section className="page-section bg-primary pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">{data.titleMain}</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">{data.standardName}</h2>
                <hr className="divider" />
                <p>{data.standardSummary}</p>
              </div>
              <div className="col-lg-8">
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
                <p>{data.contextAndConditions}</p>
                <h4 className="mt-5">Scope</h4>
                <p>{data.scope}</p>
                <h4 className="mt-5">Role</h4>
                <p>{data.role}</p>
                <h4 className="mt-5">Instructional Design</h4>
                <p>{data.instructionalDesign}</p>
                <h4 className="mt-5">Performance Indicator</h4>
                {data.performanceIndicator.map((pi, index) => (
                  <p key={index}>
                    <u>{pi.title}</u> - {pi.indicator}{' '}
                    <strong>{pi.implementation}</strong>
                  </p>
                ))}
                <h4 className="mt-5">Reflection</h4>
                <p>{data.reflection}</p>

                {data.references && (
                  <>
                    <h5 className="mt-5">*Reference</h5>
                    <ul>
                      {data.references.map((reference, index) => (
                        <li key={index}>
                          <a
                            href={reference.linkTo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {reference.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div className="col-lg-8 text-center mt-5">
                <Link to="/projects">
                  <button className="btn btn-primary btn-xl">
                    Back to Projects
                  </button>
                </Link>
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
