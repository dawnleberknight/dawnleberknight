import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

export default class IntegratedMultimediaProject extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Integrated Multimedia Project"/>
        <section className="page-section bg-primary pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Integrated Multimedia Project</h2>                
              </div>
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">AECT 1 – Content Knowledge</h2>
                <hr className="divider"/>
                <p>
                  Candidates demonstrate the knowledge necessary to create, use, assess, and manage
                  theoretical and practical applications of educational technologies and processes.
                </p>
              </div>
              <div className="col-lg-8">
                <h3 className="mt-5">EDET 603 - <a href="https://sites.google.com/view/teacher-confessions/home" target="_blank" rel="noopener noreferrer">Integrated Multimedia Project</a></h3>
                <h4 className="mt-5">Context & Conditions</h4>
                <p>
                  During the Fall 2019 Design and Development Tools I (EDET 603) course with Dr. Erin Besser, 
                  we studied multimedia elements, including the creation and editing of materials with exploration 
                  of Instructional applications, copyright issues, and technology limitations.
                </p>
                <h4 className="mt-5">Scope</h4>
                <p>
                  For the Integrated Multimedia Project, I worked with a classmate (Daniel Berg) to collaboratively 
                  plan, design and develop a dynamic multimedia project which included a podcast episode, vodcast, 
                  marketing poster, cover art, and website.
                </p>
                <h4 className="mt-5">Role</h4>
                <p>
                  Since both Daniel and I were previously public school teachers, we both served as Subject Matter 
                  Experts for the “Confessions of an Ex. Teacher” IMP. I was the instructional designer and developer 
                  of the vodcast, marketing poster, and covert art, and we both participated in the recording of the 
                  podcast and vodcast.
                </p>   
                <h4 className="mt-5">Instructional Design</h4>
                <p>
                  Following ADDIE and MRK instructional design models, we first analyzed content that would be helpful 
                  for our target audience, which included determining instructional problems, identifying learner 
                  characteristics, and analyzing task components. We then designed scripts for the podcast and vodcast, 
                  which included defining instructional objectives, structuring content sequentially, designing instructional 
                  strategies, and planning the instructional message and mode of delivery. Then we developed the recordings 
                  and marketing materials and implemented them into a publicly available website. Finally, we evaluated the 
                  project based on feedback from peer reviewers in the class.
                </p>
                <h4 className="mt-5">Performance indicator</h4>    
                <p>
                  <strong>Creating</strong> - Candidates demonstrate the ability to create instructional materials and learning
                  environments using a variety of systems approaches. We created instructional materials (podcast, vodcast, 
                  marketing poster and cover art) and created a website to make the materials publicly accessible online.
                </p>  
                <p>
                  <strong>Using</strong> - Candidates demonstrate the ability to select and use technological resources and processes to support 
                  student learning and to enhance their pedagogy. We selected and used Google Sites (website), Canva (cover art,
                  marketing poster), Citrix WebEx (recording tool), and iMovie (vodcast/podcast production).
                </p>
                <p>
                  <strong>Managing</strong> - Candidates demonstrate the ability to effectively manage people, processes, physical infrastructures, 
                  and financial resources to achieve predetermined goals. At the beginning of the project, roles and tasks for each
                  team member were clearly communicated and deadlines were established based on the course schedule. Frequent communication
                  and virtual meetings were used throughout the project to effectively manage process.
                </p>
                <p>
                  <strong>Ethics</strong> - Candidates demonstrate the contemporary professional ethics of the field as defined 
                  and developed by the Association for Educational Communications and Technology. Resources and references were 
                  appropriately cited.
                </p>
                <h4 className="mt-5">Reflection</h4>
                <p>
                  Since I was not familiar with the process for developing a vodcast, I learned how to utilize a 
                  storyboard for the development stage. In addition, I had not created cover art and enjoyed exploring the 
                  features available in Canva. Looking back now, I would have spent more time testing the recording program 
                  and equipment in order to make improvements to the sound quality for both the vodcast and podcast. Since 
                  many of technological resources and processes were new for us, the artifact demonstrates application of 
                  our newly acquired knowledge and skills.
                </p>                       
              </div>
              <div className="col-lg-8 text-center mt-5">
                <Link to="/projects"><button className="btn btn-primary btn-xl">Back to Projects</button></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section bg-dark text-white">
          <div className="container text-center">          
          </div>
        </section>
      </Layout>
    )
  }
}
