import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Projects" />
        <section className="page-section bg-primary pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Projects</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <h2 className="mt-0">List of Projects</h2>
                <hr className="divider my-4" />
                <table className="table table-hover table-responsive">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th scope="col" style={{ width: '16.66%' }}>
                        Course
                      </th>
                      <th scope="col" style={{ width: '16.66%' }}>
                        AECT Stardard 1
                      </th>
                      <th scope="col" style={{ width: '16.66%' }}>
                        AECT Stardard 2
                      </th>
                      <th scope="col" style={{ width: '16.66%' }}>
                        AECT Stardard 3
                      </th>
                      <th scope="col" style={{ width: '16.66%' }}>
                        AECT Stardard 4
                      </th>
                      <th scope="col" style={{ width: '16.66%' }}>
                        AECT Stardard 5
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
                      <td></td>
                      <td></td>
                      <td>
                        <Link to="/projects/game-design">Game Design</Link>
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
                      <th scope="row">EDET 650</th>
                      <td>Artifact Name and Link</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">EDET 735</th>
                      <td>Artifact Name and Link</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
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
