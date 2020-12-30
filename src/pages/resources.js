import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ListItem from '../components/listItem'

export default class ResourcesPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Resources" />
        <section className="page-section bg-primary pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Resources</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-left">
                <h3>Educational Technologies</h3>
                <p>
                  Although technology is constantly evolving, below are some
                  resources which I find especially helpful and encourage you to
                  explore.
                </p>
                <ul>
                  <li>
                    <span>Website Builder: </span>
                    <a
                      href="https://www.gatsbyjs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gatsby
                    </a>
                    <span>, </span>
                    <a
                      href="http://sites.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Sites
                    </a>
                  </li>
                  <li>
                    <span>Website Deployment and Hosting: </span>
                    <a
                      href="https://vercel.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vercel
                    </a>
                  </li>
                  <li>
                    <span>Audio/Video Editing: </span>
                    <a
                      href="https://www.apple.com/imovie/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      iMovie
                    </a>
                  </li>
                  <li>
                    <span>Image Manipulation: </span>
                    <a
                      href="https://www.gimp.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GIMP
                    </a>
                  </li>
                  <li>
                    <span>Videoconferencing: </span>
                    <a
                      href="https://www.webex.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WebEx
                    </a>
                    <span>, </span>
                    <a
                      href="https://zoom.us/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zoom
                    </a>
                  </li>
                  <li>
                    <span>Video Recording: </span>
                    <a
                      href="https://support.apple.com/guide/photo-booth/welcome/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Photo Booth
                    </a>
                  </li>
                  <li>
                    <span>Video Hosting: </span>
                    <a
                      href="http://youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <span>Learning Management: </span>
                    <a
                      href="https://articulate.com/360/rise"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Articular Rise
                    </a>
                    <span>, </span>
                    <a
                      href="https://www.coursesites.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Blackboard CourseSites
                    </a>
                  </li>
                  <li>
                    <span>Visual Content Creation: </span>
                    <a
                      href="https://piktochart.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Piktochart
                    </a>
                    <span>, </span>
                    <a
                      href="https://www.canva.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Canva
                    </a>
                  </li>
                  <li>
                    <span>Collaboration: </span>
                    <a
                      href="https://padlet.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Padlet
                    </a>
                    <span>, </span>
                    <a
                      href="https://info.flipgrid.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Flipgrid
                    </a>
                    <span>, </span>
                    <a
                      href="https://trello.com/en-US"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Trello
                    </a>
                    <span>, </span>
                    <a
                      href="https://slack.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Slack
                    </a>
                  </li>
                  <li>
                    <span>Free Images: </span>
                    <a
                      href="https://pixabay.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pixabay
                    </a>
                  </li>
                </ul>

                <h3 className="pt-5">Acknowledgement</h3>

                <p>
                  I want to recognize and show appreciation for my husband,
                  Shawn Leberknight, who has provided me with extra support
                  throughout the past two years while I completed the Master’s
                  degree program. His experience as a software engineer was
                  especially helpful as I worked on designing and developing
                  this portfolio site, and I appreciate all his advice and
                  tutorials throughout the process.{' '}
                </p>

                <h3 className="pt-5">References</h3>
                <ul className="list-unstyled">
                  <ListItem>
                    American Psychological Association. (2010/2019). Publication
                    manual of the American Psychological Association (6th/7th
                    ed.). Washington, DC.
                  </ListItem>
                  <ListItem>
                    Association for Educational Communications and Technology
                    (2012). AECT Standards. Bloomington, IN: Association for
                    Educational Communications and Technology. Retrieved from
                    https://www.aect.org/docs/AECTstandards2012.pdf
                  </ListItem>
                  <ListItem>
                    Kapp, K.M. (2012). The gamification of learning and
                    instruction: Game-based methods and strategies for training
                    and education. San Francisco, CA: Pfeiffer.
                  </ListItem>
                  <ListItem>
                    Molenda, M. (2007). In search of the elusive ADDIE model.
                    Performance Improvement, 42(5), 34-36.
                    https://doi.org/10.1002/pfi.4930420508
                  </ListItem>
                  <ListItem>
                    Morrison, G. R., Ross, S. M., Kalman, H. K., & Kemp, J. E.
                    (2013). Designing effective instruction (7th ed.). Hoboken,
                    NJ: John Wiley & Sons, Inc.
                  </ListItem>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
