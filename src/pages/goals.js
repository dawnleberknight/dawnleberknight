import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function GoalsPage() {
  return (
    <Layout>
      <SEO title="Goals" />
      <section className="page-section bg-primary-light pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0 page-header">Goals</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="services">
        <div className="container">
          <p>
            Throughout childhood and adolescence, I was taught that you should
            learn for the sake of learning and was supported and encouraged in
            my educational endeavors. This led me to a career as an educator and
            to the development of my personal belief that learning is the
            ongoing, life-long process of gaining and applying new knowledge and
            skills. As an instructional designer, I seek to better understand
            factors which influence student engagement and performance,
            especially in the online learning environment, in order to identify
            design strategies for educational opportunities which meet the
            diverse needs of the learners.
          </p>
          <p>
            I am passionate about serving my local and state community,
            especially those who have been marginalized. In my profession, I
            work to advance health equity by helping to build and support the
            healthcare workforce.
          </p>

          <h3 className="text-center pt-5">Statement of Professional Goals</h3>
          <hr className="divider my-4" />
          <div className="row pb-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-globe text-primary-light mb-4"></i>
                <p className="text-muted mb-0">
                  Collaborate with local, state, and national partners to
                  provide distance education programs which promote life-long
                  learning for practicing healthcare providers.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-heart text-primary-light mb-4"></i>
                <p className="text-muted mb-0">
                  Design innovative instruction which inspires students to
                  become healthcare professionals, especially in rural and
                  underserved communities.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-laptop-code text-primary-light mb-4"></i>
                <p className="text-muted mb-0">
                  Developing didactic and experiential training opportunities
                  which prepare future and current health professionals to
                  become leaders in interprofessional, transformative practice.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-gem text-primary-light mb-4"></i>
                <p className="text-muted mb-0">
                  Training fellow health professions educators on effective use
                  of instructional design strategies, educational technology,
                  and best practices for online learning.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <p>
              <span>
                To learn more about my professional experience, please review my{' '}
              </span>
              <a
                href="https://drive.google.com/file/d/1GWfjkdFDYgco07OEBauIw8J1x8xJQgP0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Curriculum Vitae
              </a>
              <span> and </span>
              <a
                href="https://drive.google.com/file/d/1GHFshNT-gJiYAKhoLVbJHbnM6-ldxEla/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Teaching Philosophy
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
