import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function ProjectsPage() {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="page-section bg-primary-light pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0 page-header">Artifacts</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="text-left">
                <p>
                  All artifacts listed below direct you to authentic products of
                  my activities during the M.Ed. program and are indications of
                  my skills and abilities, demonstrating mastery of{' '}
                  <a
                    href="https://www.aect.org/docs/AECTstandards2012.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AECT 2012 Standards.
                  </a>
                </p>
              </div>
              <table className="table table-hover table-responsive">
                <thead>
                  <tr className="bg-primary-light">
                    <th scope="col" style={{ width: '16.66%' }}>
                      Course
                    </th>
                    <th scope="col" style={{ width: '16.66%' }}>
                      AECT Standard 1
                    </th>
                    <th scope="col" style={{ width: '16.66%' }}>
                      AECT Standard 2
                    </th>
                    <th scope="col" style={{ width: '16.66%' }}>
                      AECT Standard 3
                    </th>
                    <th scope="col" style={{ width: '16.66%' }}>
                      AECT Standard 4
                    </th>
                    <th scope="col" style={{ width: '16.66%' }}>
                      AECT Standard 5
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">EDET 603</th>
                    <td>
                      <Link to="/projects/integrated-multimedia-project">
                        Integrated Multimedia Project
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">EDET 650</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Link to="/projects/internship-final-report-presentation">
                        Internship Final Report Presentation
                      </Link>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">EDET 652</th>
                    <td>
                      <Link to="/projects/game-design">Game Design</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">EDET 703</th>
                    <td></td>
                    <td>
                      <Link to="/projects/www-722-id-project">
                        WWW 722 ID Project
                      </Link>
                    </td>
                    <td>
                      <Link to="/projects/rapid-eLearning-tool">
                        Rapid eLearning Tool
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">EDET 709</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Link to="/projects/learning-theory-research-paper">
                        Learning Theory Research Paper
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">EDET 722</th>
                    <td></td>
                    <td>
                      <Link to="/projects/instructional-design-and-assessment-report">
                        Instructional Design and Assessment Report
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">EDET 735</th>
                    <td></td>
                    <td></td>
                    <td>
                      <Link to="/projects/udl-website">UDL Website</Link>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">EDET 746</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Link to="/projects/management-of-web-2dot0-tools">
                        Management of Web 2.0 Tools
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">EDET 755</th>
                    <td></td>
                    <td></td>
                    <td>
                      <Link to="/projects/coursesites-course-screencast">
                        CourseSites Course Screencast
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">EDET 780</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Link to="/projects/group-proposed-research-conference-paper">
                        Group Proposed Research Conference Paper
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">EDET 793</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Link to="/projects/id-model-eLearning">
                        ID Model eLearning
                      </Link>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section pb-6">
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-lg-12 text-center">
              <h3 className="mt-0">Additional Projects</h3>
              <hr className="divider my-4" />
              <div className="text-left">
                <p>
                  The image links below direct you to a detailed description of
                  other assignments that I have completed.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 mr-auto text-center pb-3">
              <div className="pb-1 image-hover">
                <Link to="/summaries/portfolio-design-development">
                  <StaticImage
                    src="../images/projects/portfolio-design-development.png"
                    alt="Portfolio Design and Development"
                    placeholder="blurred"
                  />
                </Link>
              </div>
            </div>
            <div className="col-sm-4 mr-auto text-center pb-3">
              <div className="pb-1 image-hover">
                <Link to="/summaries/professional-presentation">
                  <StaticImage
                    src="../images/projects/professional-presentation.png"
                    alt="Professional Presentation"
                    placeholder="blurred"
                  />
                </Link>
              </div>
            </div>
            <div className="col-sm-4 mr-auto text-center">
              <div className="pb-1 image-hover">
                <Link to="/summaries/internship">
                  <StaticImage
                    src="../images/projects/internship.png"
                    alt="Internship"
                    placeholder="blurred"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
