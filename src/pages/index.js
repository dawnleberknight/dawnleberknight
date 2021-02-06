import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

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

        <section className="page-section" id="about">
          <div className="container">
            <h3 className="text-center mt-0">About Me</h3>
            <hr className="divider my-4" />
            <p className="mb-4">
              Currently, I am the Curriculum Coordinator for the South Carolina
              Area Health Education Consortium, whose mission is to provide
              education, recruitment, and retention programs to build and
              support the healthcare workforce in the state. In this role, I
              primarily focus on developing distance education programs and
              online courses for future and current healthcare professionals,
              and I really enjoying being able to work with subject matter
              experts throughout the state in order to create educational
              opportunities which meet the diverse needs of our learners.
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
            <div className="row justify-content-md-center">
              <iframe
                width="560"
                height="315"
                title="Introduction to Professional Portfolio Website"
                src="https://www.youtube.com/embed/JsAKDeqWSSQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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
