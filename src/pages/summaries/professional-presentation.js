import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ExternalLink from '../../components/externalLink'

export default function ProfessionalPresentation() {
  return (
    <Layout>
      <SEO title="Professional Presentation" />
      <section className="page-section bg-primary-light pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Professional Presentation</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3>Presentation Title</h3>
              <p>
                Applying an Asset-based Approach to the Development of
                Innovative and Sustainable Interprofessional Education Programs
              </p>
              <h3 className="pt-5">Conference</h3>
              <p>
                The Generalist in Medical Education (TGME) Annual Conference
                November 7-8, 2019 in Phoenix, AZ
              </p>
              <h3 className="pt-5">Presentation Description</h3>
              <p>
                The Health Professions Accreditors Collaborative (HPAC) recently
                released guidance affirming the need for consistent, systematic,
                and longitudinal interprofessional practice and education;
                however, developing an interprofessional curriculum for health
                professions students can be daunting. In this session,
                participants were introduced to the asset-based approach to
                educational program development and learned to identify
                potential resources in 6 domains: individual, physical,
                financial, local institutions, associations of citizens, private
                sector, and others. Through an asset mapping activity,
                participants were able to identify potential new partnerships
                and funding opportunities that align with the health priorities
                of the institution/program and key stakeholders.
              </p>
              <h3 className="pt-5">Lessons Learned</h3>
              <p>
                Through the professional presentation experience, I learned a
                few valuable lessons. First, when presenting with another
                person(s), it is important to clarify roles and
                responsibilities. Since my co-presenter had other projects which
                took priority, we both agreed that I would take the lead on
                preparing all the presentation materials and scheduling the
                review/practice meetings. I did not mind doing most of the work
                since it had been openly discussed and agreed upon from the
                beginning. Secondly, I should create contingency plans for
                unforeseen circumstances like technology issues or number of
                participants. When we arrived for the presentation, the computer
                was not working so we had to scramble to get support from the
                session facilitator, and I should have been more prepared with a
                backup computer and connections. In addition, we had planned for
                15-20 participants and only had 4 participants since it was the
                last session of the conference day. While we were able to adjust
                our plans quickly, it came across less organized than we would
                have liked. Thirdly, I learned that when a participant takes
                over the discussion, I should use polite assertions to get the
                conversation back on track. There was one participant who kept
                asking questions which were unrelated to our main topic, and we
                should have said something to re-direct her, such as &quot;while
                that&#39;s a great question, let&#39;s focus back on our topic
                and we can discuss that after the session today.&quot; Overall,
                I thought the presentation went well, and I look forward to
                applying what I learned to the next professional presentation
                experience.
              </p>
              <h3 className="pt-5">Work Sample</h3>
              <p>
                <ExternalLink href="https://drive.google.com/file/d/1YXmfvj34h1OWr--rqElq32ufUVtfUduX/view?usp=sharing">
                  Presentation Slides
                </ExternalLink>
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
