import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default class ReflectionPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Reflection" />
        <section className="page-section bg-primary-light pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Reflection</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-left">
                <p>
                  I started the M.Ed. program the same month that I started as
                  the Curriculum Coordinator for SC AHEC. In this role, I
                  collaborate with subject matter experts throughout the state
                  in order to design, develop, and implement distance education
                  opportunities for future and current healthcare professionals.
                  Participating in this program has given me the knowledge,
                  skills, and confidence to be a leader in my field of health
                  professions education.
                </p>
                <p>
                  As demonstrated in my portfolio, I have been able to develop
                  instructional materials and integrate educational technology
                  in my current professional work. For example, I have used the
                  TeamSTEPPS® projects to offer further teamwork trainings for
                  current and future health professionals throughout the state,
                  and the Health Careers Program online modules developed during
                  my internship provided a valuable resource for high school
                  students across the state when distance education was required
                  due to COVID-19 pandemic. I am grateful to be able to directly
                  apply my learning and projects to my role at SC AHEC.
                </p>
                <p>
                  While I have thoroughly enjoyed the program, it wasn’t without
                  challenges and one of hardest components for me was group
                  work. I am used to working ahead on school work, as I have
                  always been the type of student who starts on the assignment
                  as soon as I receive the instructions. However, some of my
                  group members had different approaches to managing school
                  work, and I learned to be more understanding with the
                  different personality types, which is important in my
                  professional work too. As I learned with my internship, team
                  members are going to have different views and priorities, so
                  it is important to develop a shared vision for the project,
                  establish clear roles and responsibilities, and communicate
                  clearly and frequently about task deadlines. In addition, I am
                  not as creative as some so I struggled with image editing and
                  graphic design, but I found design templates from valuable
                  resources like Canvas and Piktochart. I learned to better
                  admit my weaknesses (like graphic design) and look for
                  resources or team members who can help with those areas.
                </p>
                <p>
                  As I was finishing the first year in the program, the entire
                  world shifted due to the COVID-19 pandemic. Due to health and
                  safety guidelines, the education system was forced to
                  transition to emergency remote learning, which presented
                  significant challenges and constraints. Educational
                  institutions looked to instructional designers as valuable
                  assets to lead the way for implementation of new educational
                  technologies and redesign of instructional materials for the
                  online environment. Because of what I have been learning
                  throughout the program, I was able to provide leadership and
                  direction for how to effectively design, develop, and
                  implement distance education during these unprecedented times.
                  Although many projects were expedited, I was able to clearly
                  articulate the importance of following the instructional
                  design process and helping teams follow the necessary steps to
                  ensure that we were creating quality educational opportunities
                  for our virtual learning communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
