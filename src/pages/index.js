import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

import Layout from '../components/layout'
import Header from '../components/header'
import SEO from '../components/seo'
import Scroller from '../components/scroller'
import PortfolioModal from '../components/portfolio/modal'
import PortfolioCarousel from '../components/portfolio/carousel'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }

  handlePortfolioClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    return (
      <Layout page="home">
        <SEO title="Home" />
        <Header />
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Welcome</h2>
                <hr className="divider light my-4" />
                <p className="text-white mb-4">
                  My name is Dawn Leberknight, and I am working toward my M.Ed.
                  in Educational Technology at University of South Carolina.
                  This website is my professional portfolio to highlight my
                  learning adventure throughout the past two years.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="about">
          <div className="container">
            <h2 className="text-center mt-0">About Me</h2>
            <hr className="divider light my-4" />
            <p className="mb-4">
              Currently, I am the Curriculum Coordinator for the South Carolina
              Area Health Education Consortium, whose mission is to provide
              education, recruitment, and retention programs to build and
              support the healthcare workforce in the state. In this role, I
              primarily focus on building online courses for future and current
              healthcare professionals, and I really enjoying being able to work
              with subject matter experts throughout the state in order to
              create educational opportunities which meet the diverse needs of
              our learners.
            </p>
            <p className="mb-4">
              Prior to this role, I worked as Graduate Medical Education
              Coordinator at the Medical University of South Carolina for seven
              years and before that I was a 7th grade English teacher for three
              years. I grew up in eastern North Carolina and moved to
              Charleston, SC in 2005 to attend College of Charleston.{' '}
            </p>
            <p className="mb-4">
              I have been married for 10 years to my husband Shawn, who is a
              software engineer. We have a two daughters, 9 year old Brooklyn
              and 5 year old London, who both attend a wonderful creative arts
              elementary school. My family lives in Charleston and enjoys
              exploring our city along with traveling to other places.
            </p>
          </div>
        </section>

        {/* <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 0)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[0].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/2.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 1)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[1].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/3.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 2)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[2].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="images/portfolio/fullsize/4.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 3)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[3].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/5.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 4)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[4].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/6.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 5)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[5].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section> */}

        <section className="page-section bg-dark text-white">
          {/* <div className="container text-center">
            <h2 className="mb-4">Some other section</h2>
          </div> */}
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
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
        <PortfolioModal
          show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
        >
          <PortfolioCarousel
            images={this.props.data.images.edges}
            current={this.state.modalCurrent}
          />
        </PortfolioModal>
      </Layout>
    )
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "portfolio/fullsize/*.jpg" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
