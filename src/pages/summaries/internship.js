import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ExternalLink from '../../components/externalLink'

export default function Internship() {
  return (
    <Layout>
      <SEO title="Internship" />
      <section className="page-section bg-primary-light pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Internship</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p>
                I was grateful for the opportunity to apply my M.Ed. program
                learning through community service with the development of 20
                one-hour online modules for health careers. The goal of the
                modules is to help develop academically proficient and
                self-confident future healthcare professionals, with an emphasis
                on underrepresented minority and disadvantaged students in order
                to address disparities in the health professions workforce in
                South Carolina.
              </p>
              <h3 className="pt-5">Site</h3>
              <p>
                My internship took place at South Carolina Area Health Education
                Consortium (SC AHEC). While I am employed by this state agency,
                the internship project involved work outside my typical scope of
                practice and allowed me to work more directly with regional AHEC
                centers, who are private not-for-profit 501(c)3 organizations.
              </p>
              <h3 className="pt-5">Supervisor</h3>
              <p>
                Paula Jones, MBA, Director of Health Careers Program (HCP) at SC
                AHEC, was my internship supervisor. She manages regional and
                statewide collaboration for project implementation and expansion
                of the Career Options for Health Professions programs. Paula
                also develops and facilitates innovative activities for the
                Health Careers Academies targeting high school and undergraduate
                students pursuing a career in the health professions.
              </p>
              <h3 className="pt-5">Role</h3>
              <p>
                As a former middle/high school teacher with years of experience
                in healthcare administration, I served as one of the subject
                matter experts and collaborated with other subject matter
                experts, which were the HCP Coordinators throughout South
                Carolina. In addition, I served as the instructional designer
                and developer for the online modules.
              </p>
              <h3 className="pt-5">Work</h3>
              <p>
                During the internship, I worked with HCP Coordinators in order
                to develop 20 one-hour online modules. Prior to my internship
                project, the HCP Coordinators had delivered in-person
                instruction to as many high school students as possible given
                the limitations of time and funding. The primary goal of
                developing the 20 free, self-paced, online instructional modules
                is to reach significantly more high school students throughout
                the state in order to increase understanding of the various
                careers in healthcare and necessary skills. For more information
                about each of the modules, please review the
                <ExternalLink href="https://www.scahec.net/docs/SC-AHEC-HCP-Modules-Catalog.pdf">
                  SC AHEC HCP Modules Catalog
                </ExternalLink>
                .
              </p>
              <h3 className="pt-5">Activities</h3>
              <ul>
                <li>
                  Designed and developed online instructional modules related to
                  healthcare careers and skills, which included:
                  <ul>
                    <li>
                      Collaborated with HCP Coordinators to determine learning
                      objectives for instructional modules
                    </li>
                    <li>
                      Researched, located, and utilized educational resources
                      for module content development
                    </li>
                    <li>
                      Developed pre- and post-tests, assignments, and
                      evaluations for instructional modules
                    </li>
                    <li>
                      Coordinated with SMEs for review and implementation of
                      instructional modules
                    </li>
                  </ul>
                </li>
                <li>
                  Created job aids for (1) staff workflow to implement
                  instructional modules and (2) student directions to complete
                  instructional modules
                </li>
                <li>
                  Analyzed summative evaluation data for an existing
                  instructional module
                </li>
                <li>
                  Continually reflected on the instructional design and
                  development process
                </li>
              </ul>
              <h3 className="pt-5">Lessons Learned</h3>
              <p>
                During the internship experience, I learned to avoid “recreating
                the wheel” and the importance of conducting an assessment of
                existing resources prior to developing new content. I was able
                to use some content which existed in the SC AHEC undergraduate
                and graduate level curriculum along with content developed by
                established organizations within the healthcare field. In
                addition, I learned to follow the key components for successful
                project management, including clear and specific project
                requirements, regular and effective communications, appropriate
                allocation of work to team members, and detailed timelines for
                task completion. Finally, I learned that there will be obstacles
                and minor set-backs but those should be viewed as opportunities
                to make positive changes. Despite some frustrations along the
                way, I tried to stay focused on continual quality improvement to
                make the instructional design process more efficient and
                effective.
              </p>
              <h3 className="pt-5">Work Sample</h3>
              <p>
                <ExternalLink href="https://drive.google.com/file/d/19U-hec4fDzM7QHosa_LQu4EZYiEV7gHp/view">
                  Job Aid
                </ExternalLink>
              </p>
              <div className="pt-5">
                <p>
                  For more information about my internship experience, please
                  visit{' '}
                  <Link to="/projects/internship-final-report-presentation">
                    Internship Final Report Presentation
                  </Link>{' '}
                  page.
                </p>
              </div>

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
