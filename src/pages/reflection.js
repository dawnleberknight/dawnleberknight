import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ExternalLink from '../components/externalLink'
import { DAWN_LEBERKNIGHT_RESOURCES_PAGE } from '../common/links'

const SCAHEC = () => (
  <ExternalLink href="https://www.scahec.net/">SC AHEC</ExternalLink>
)
const Module = () => (
  <ExternalLink
    href="https://dawnleberknight.now.sh/projects/rapid-eLearning-tool"
    spaceBefore={false}
  >
    module
  </ExternalLink>
)
const Course = () => (
  <ExternalLink href="https://dawnleberknight.now.sh/projects/coursesites-course-screencast">
    course
  </ExternalLink>
)

const Internship = () => (
  <ExternalLink href="https://dawnleberknight.now.sh/summaries/internship">
    internship
  </ExternalLink>
)
const Turner = () => (
  <ExternalLink href={DAWN_LEBERKNIGHT_RESOURCES_PAGE} spaceBefore={false}>
    Turner, 1995
  </ExternalLink>
)
const Kapp = () => (
  <ExternalLink href={DAWN_LEBERKNIGHT_RESOURCES_PAGE} spaceBefore={false}>
    Kapp, 2012
  </ExternalLink>
)
const Driscoll = () => (
  <ExternalLink href={DAWN_LEBERKNIGHT_RESOURCES_PAGE} spaceBefore={false}>
    Driscoll, 1999
  </ExternalLink>
)
const Moreno = () => (
  <ExternalLink href={DAWN_LEBERKNIGHT_RESOURCES_PAGE} spaceBefore={false}>
    Moreno, 2010
  </ExternalLink>
)
const CAST = () => (
  <ExternalLink href={DAWN_LEBERKNIGHT_RESOURCES_PAGE} spaceBefore={false}>
    CAST, 2018
  </ExternalLink>
)
const Resources = () => (
  <ExternalLink href={DAWN_LEBERKNIGHT_RESOURCES_PAGE} spaceBefore={false}>
    Resources page
  </ExternalLink>
)
export default function ReflectionPage() {
  return (
    <Layout>
      <SEO title="Reflection" />
      <section className="page-section bg-primary-light pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0 page-header">Reflection &amp; Synthesis</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-left">
              <p className="mb-4">
                I started the M.Ed. program the same month that I started as the
                Curriculum Coordinator for {SCAHEC()}. In this role, I
                collaborate with subject matter experts throughout the state in
                order to design, develop, and implement distance education
                opportunities for future and current healthcare professionals.
                Participating in this program has given me the knowledge,
                skills, and confidence to be a leader in my field of health
                professions education.
              </p>
              <p>
                As demonstrated in my portfolio, I have been able to develop
                instructional materials and integrate educational technology in
                my current professional work. For example, I have used the
                TeamSTEPPS® projects ({Module()} and {Course()}) to offer
                further teamwork trainings for current and future health
                professionals throughout the state, and the Health Careers
                Program online modules developed during my {Internship()}{' '}
                provided a valuable resource for high school students across the
                state when distance education was required due to COVID-19
                pandemic. I am grateful to be able to directly apply my learning
                and projects to my role at SC AHEC.
              </p>

              <h3 className="mt-5">Skills Developed</h3>
              <p>
                Over the past two years, I have acquired new knowledge and
                skills which I look forward to continue applying throughout my
                life-long learning adventure. I now feel confident in my ability
                to develop comprehensive instructional design documentation,
                from the initial stages of conducting a needs assessment to the
                final stages of developing plans for evaluation and revision. I
                also feel more equipped with strategies for designing effective
                instruction, such as applying 6C’s of Motivation learning theory
                ({Turner()}), incorporating gamification techniques ({Kapp()}),
                using Gagne’s Nine Events of Instruction ({Driscoll()}),
                applying Mayer’s multimedia learning principles ({Moreno()}),
                and utilizing Universal Design for Learning principles ({CAST()}
                ), in order to support high levels of engagement and achievement
                for all learners. In addition, my technical skills have
                significantly improved as I have explored and utilized so many
                different types of educational technologies over the past two
                years, and I have some of my favorites listed on the{' '}
                {Resources()}.
              </p>

              <h3 className="mt-5">Lessons Learned</h3>
              <p>
                While I have thoroughly enjoyed the program, it wasn’t without
                challenges and one of hardest components for me was group work.
                I am used to working ahead on school work, as I have always been
                the type of student who starts on the assignment as soon as I
                receive the instructions. However, some of my group members had
                different approaches to managing school work, and I learned to
                be more understanding with the different personality types,
                which is important in my professional work too. As I learned
                with my internship, team members are going to have different
                views and priorities, so it is important to develop a shared
                vision for the project, establish clear roles and
                responsibilities, and communicate clearly and frequently about
                task deadlines. In addition, I am not as creative as some so I
                struggled with image editing and graphic design, but I found
                design templates from valuable resources like Canvas and
                Piktochart. I learned to better admit my weaknesses (like
                graphic design) and look for resources or team members who can
                help with those areas.
              </p>

              <h3 className="mt-5">Leadership</h3>
              <p>
                As I was finishing the first year in the program, the entire
                world shifted due to the COVID-19 pandemic. Due to health and
                safety guidelines, the education system was forced to transition
                to emergency remote learning, which presented significant
                challenges and constraints. Educational institutions looked to
                instructional designers as valuable assets to lead the way for
                implementation of new educational technologies and redesign of
                instructional materials for the online environment. Because of
                what I have been learning throughout the program, I was able to
                provide leadership and direction for how to effectively design,
                develop, and implement distance education during these
                unprecedented times. Although many projects were expedited, I
                was able to clearly articulate the importance of following the
                instructional design process and helping teams follow the
                necessary steps to ensure that we were creating quality
                educational opportunities for our virtual learning communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
