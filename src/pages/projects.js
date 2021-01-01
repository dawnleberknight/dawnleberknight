import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ListItem from '../components/listItem'

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Projects" />
        <section className="page-section bg-primary-light pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Projects</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-lg-12 text-center">
                <h3 className="mt-0">Summaries of Projects</h3>
                <hr className="divider my-4" />
                <div className="text-left">
                  <p>Some description here...</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mr-auto text-center">
                <div className="border border-secondary p-2">
                  <h4>Portfolio Design and Development</h4>
                  <Link to="/summaries/portfolio-design-development">
                    Portfolio Design and Development
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <div className="border border-secondary p-2">
                  <h4>Professional Presentation</h4>
                  <Link to="/summaries/professional-presentation">
                    Professional Presentation
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <div className="border border-secondary p-2">
                  <h4>Internship</h4>
                  <Link to="/summaries/internship">Internship</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <h3 className="mt-0">Work Samples</h3>
                <hr className="divider my-4" />
                <div className="text-left">
                  <p>
                    All artifacts listed below are authentic products of my
                    activities during the M.Ed. program and are indications of
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
                <table className="table table-hover table-responsive mb-5">
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
                      <th scope="row">EDET 650</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        {' '}
                        <Link to="/projects/internship-final-report-presentation">
                          Internship Final Report Presentation
                        </Link>
                      </td>
                      <td></td>
                    </tr>
                    {/* <tr>
                      <th scope="row">EDET 735</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr> */}
                  </tbody>
                </table>
                <div className="text-left pt-5">
                  <h3>References</h3>
                  <ul className="list-unstyled">
                    <ListItem>
                      Association for Educational Communications and Technology
                      (2012). AECT Standards. Bloomington, IN: Association for
                      Educational Communications and Technology. Retrieved from
                      https://www.aect.org/docs/AECTstandards2012.pdf
                    </ListItem>
                    <ListItem>
                      Molenda, M. (2007). In search of the elusive ADDIE model.
                      Performance Improvement, 42(5), 34-36.
                      https://doi.org/10.1002/pfi.4930420508
                    </ListItem>
                    <ListItem>
                      Morrison, G. R., Ross, S. M., Kalman, H. K., & Kemp, J. E.
                      (2013). Designing effective instruction (7th ed.).
                      Hoboken, NJ: John Wiley & Sons, Inc.
                    </ListItem>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
