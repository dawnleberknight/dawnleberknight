import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Header from '../components/header'
import SEO from '../components/seo'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout page="home">
        <SEO title="Home" />
        <Header />
        <section className="page-section bg-primary-light" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Welcome</h2>
                <hr className="divider dark my-4" />
                <Img
                  alt="Profile picture of Dawn Leberknight"
                  className="rounded-circle mx-auto d-block mb-4"
                  fixed={this.props.data.images.childImageSharp.fixed}
                />
                <p className="mb-4">
                  My name is Dawn Leberknight, and I am working toward my M.Ed.
                  in Educational Technology at University of South Carolina.
                  This website is my professional portfolio to highlight my
                  learning adventure throughout the past two years.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="site-sections">
          <div className="container">
            <h3 className="text-center pt-5">What You Will Find Here</h3>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-4 col-md-6 text-center icon-link">
                <Link to="/about">
                  <div className="py-5">
                    <i className="fas fa-4x fa-user-graduate text-primary-light mb-4"></i>
                    <h4>About</h4>
                    <p className="text-muted mb-0">Learn more about me.</p>
                  </div>
                </Link>
                <hr className="link-divider" />
              </div>
              <div className="col-lg-4 col-md-6 text-center icon-link">
                <Link to="/goals">
                  <div className="py-5">
                    <i className="fas fa-4x fa-bullseye text-primary-light mb-4"></i>
                    <h4>Goals</h4>
                    <p className="text-muted mb-0">
                      Check out my professional goals.
                    </p>
                  </div>
                </Link>
                <hr className="link-divider" />
              </div>
              <div className="col-lg-4 col-md-12 text-center icon-link">
                <Link to="/projects">
                  <div className="py-5">
                    <i className="fas fa-4x fa-pencil-alt text-primary-light mb-4"></i>
                    <h4>Projects</h4>
                    <p className="text-muted mb-0">View samples of my work.</p>
                  </div>
                </Link>
                <hr className="link-divider" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center icon-link">
                <Link to="/reflection">
                  <div className="py-5">
                    <i className="fas fa-4x fa-lightbulb text-primary-light mb-4"></i>
                    <h4>Reflection</h4>
                    <p className="text-muted mb-0">
                      Read a reflection on my educational journey.
                    </p>
                  </div>
                </Link>
                <hr className="link-divider" />
              </div>
              <div className="col-md-6 text-center icon-link">
                <Link to="/resources">
                  <div className="py-5">
                    <i className="fas fa-4x fa-wrench text-primary-light mb-4"></i>
                    <h4>Resources</h4>
                    <p className="text-muted mb-0">
                      Review a list of recommended resources.
                    </p>
                  </div>
                </Link>
                <hr className="link-divider" />
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-light" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h3 className="mt-0">Let's Get In Touch!</h3>
                <hr className="divider my-4" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mr-auto text-center mb-5">
                <i className="fas fa-envelope fa-3x mb-3 secondary-color"></i>
                <a
                  className="d-block"
                  href="mailto:dawnleberknight@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dawnleberknight@gmail.com
                </a>
              </div>
              <div className="col-lg-4 mr-auto text-center mb-5">
                <i className="fab fa-linkedin fa-3x mb-3 secondary-color"></i>
                <a
                  className="d-block"
                  href="https://www.linkedin.com/in/dawn-leberknight/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fab fa-twitter fa-3x mb-3 secondary-color"></i>
                <a
                  className="d-block"
                  href="https://twitter.com/dawnlknight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @dawnlknight
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const imageData = graphql`
  query {
    images: file(
      relativePath: { eq: "portfolio/fullsize/profile-picture.jpg" }
    ) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
