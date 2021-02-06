import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ExternalLink from '../../components/externalLink'
import {
  STYLE_GUIDE,
  SITE_MAP,
  GOOGLE_DOCS,
  GATSBY,
  REACT,
  GATSBY_CREATIVE,
  LIGHTHOUSE,
  FONT_AWESOME_FREE,
  PIXABAY,
  CANVA,
  GITHUB,
  VERCEL,
  VS_CODE,
} from '../../common/links'

export default function PortfolioDesignAndDevelopment() {
  return (
    <Layout>
      <SEO title="Portfolio Design and Development" />
      <section className="page-section bg-primary-light pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Portfolio Design and Development</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3>Purpose</h3>
              <p>
                For the culminating assignment in my Master’s degree, I created,
                curated, and reflected on a digital portfolio that aligns my
                projects, experiences, and growth with M.Ed. program standards.
              </p>
              <h3 className="pt-5">Description</h3>
              <p>
                The portfolio site uses top-horizontal navigation which adjusts
                to hamburger menu based on screen size. While the website is
                non-linear, the intended order of navigation is (1) Home, (2)
                Goals, (3) Projects, (4) Reflection, (5) Resources. The Projects
                webpage contains links to additional webpages, and the intended
                order of navigation is (1) Portfolio Design &amp; Development,
                (2) Professional Presentation, (3) Internship, (4) Work Samples.
              </p>
              <h3 className="pt-5">Design</h3>
              <p>
                Following an analysis of existing personal and portfolio
                websites and brainstorming content for my own professional
                portfolio, I designed the website through the creation of a
                <ExternalLink href={STYLE_GUIDE}>style guide</ExternalLink> and
                <ExternalLink href={SITE_MAP}>site map</ExternalLink>. I
                carefully considered how to depict my expertise and growth as an
                educational technology specialist in a unique visual and
                professional manner, using the tagline “The Adventure of
                Learning” to depict my belief that learning is a life-long
                adventure. Images and graphics were limited in order to provide
                a simple, professional design, and I selected colors which have
                an earthy and natural tone.
              </p>
              <h3 className="pt-5">Development</h3>
              <p>
                I developed and implemented the portfolio using several web
                design and graphic tools. First, I thoroughly reviewed the
                portfolio content requirements and used
                <ExternalLink href={GOOGLE_DOCS}>Google Docs</ExternalLink> to
                create a comprehensive document which contained all the text for
                each page in my digital portfolio.
              </p>
              <p>
                To build the website, I used
                <ExternalLink href={GATSBY}>Gatsby</ExternalLink> framework,
                which utilizes the JavaScript library
                <ExternalLink href={REACT}>React</ExternalLink> to create a
                single-page application (SPA) to dynamically rewrite the webpage
                content based on the user’s navigation, allowing for faster load
                times. I edited the existing
                <ExternalLink href={GATSBY_CREATIVE}>
                  gatsby-creative
                </ExternalLink>{' '}
                theme which implements the Start Bootstrap Creative template. I
                used <ExternalLink href={VS_CODE}>VS Code</ExternalLink> text
                editor to add and edit CSS, HTML, and JavaScript.
                <ExternalLink href={LIGHTHOUSE}>Lighthouse</ExternalLink> was
                used to check website accessibility within the Chrome browser,
                and I made updates to the font colors to ensure appropriate
                contract for accessibility.
              </p>
              <p>
                Most icons came from
                <ExternalLink href={FONT_AWESOME_FREE}>
                  Font Awesome Free
                </ExternalLink>{' '}
                and were already within the template. I updated the template’s
                homepage background image with a mountain scene from
                <ExternalLink href={PIXABAY}>Pixabay</ExternalLink>, and I used
                <ExternalLink href={CANVA}>Canva</ExternalLink> to create custom
                icons for the Projects webpage. An iframe was used to embed the
                YouTube introductory video on the homepage,
              </p>
              <p>
                I would edit the site while it was running on a local server on
                my computer so that I could view my changes immediately before
                publishing. When I am satisfied with the changes, I save the
                updates to <ExternalLink href={GITHUB}>GitHub</ExternalLink>,
                where the source code is stored, and I am using the platform
                <ExternalLink href={VERCEL}>Vercel</ExternalLink> to deploy the
                updated code for online viewing.
              </p>
              <p>
                My husband, Shawn Leberknight, is a software engineer and
                reviewed the website frequently during the development process,
                offering helpful feedback and advice, which I used to edit CSS,
                HTML, and JavaScript as needed. I also sent the finalized
                website to colleagues for review and they provided feedback on
                minor grammatical issues which I corrected. Overall, I am very
                pleased with my digital portfolio and learned so much during the
                design and development process.
              </p>
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
          </div>
        </div>
      </section>
    </Layout>
  )
}
