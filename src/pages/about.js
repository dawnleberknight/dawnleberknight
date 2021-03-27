import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About Me" />
      <section className="page-section bg-primary-light pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0 page-header">About Me</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div class="col-lg-6">
              <div className="mb-4 row justify-content-sm-center">
                <iframe
                  width="530"
                  height="275"
                  title="Introduction to Professional Portfolio Website"
                  src="https://www.youtube.com/embed/JsAKDeqWSSQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="col-lg-6">
              <p className="mb-4">
                Currently, I am the Curriculum Coordinator for the South
                Carolina Area Health Education Consortium, whose mission is to
                provide education, recruitment, and retention programs to build
                and support the healthcare workforce in the state. In this role,
                I primarily focus on developing distance education programs and
                online courses for future and current healthcare professionals,
                and I really enjoying being able to work with subject matter
                experts throughout the state in order to create educational
                opportunities which meet the diverse needs of our learners.
              </p>
            </div>
          </div>
          <div>
            <p className="mb-4">
              Prior to this role, I worked as Graduate Medical Education
              Coordinator at the Medical University of South Carolina for seven
              years and before that I was a 7th grade English teacher for three
              years. I grew up in eastern North Carolina and moved to
              Charleston, SC in 2005 to attend College of Charleston.
            </p>
            <p className="mb-4">
              I have been married for 10 years to my husband Shawn, who is a
              software engineer. We have a two daughters, 9 year old Brooklyn
              and 5 year old London, who both attend a wonderful creative arts
              elementary school. My family lives in Charleston and enjoys
              exploring our city along with traveling to other places.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
