import {
  TeamSTEPPSLink,
  BlackboardCourseSitesLink,
  Molenda2007Link,
  Morrison2013Link,
  createExternalLink,
} from '../../common/links'

const TeamSteppsModule = createExternalLink(
  'https://dawnleberknight.now.sh/projects/rapid-eLearning-tool',
  'TeamSTEPPS® for Office-Based Care module'
)

const data = {
  titleMain: 'CourseSites Course Screencast',
  // titleSecondary: '',
  courseNumber: 'EDET 755',
  projectLink: 'https://youtu.be/YJKAVZ10kgY',
  // projectLink2: '',
  standardName: 'AECT 3 – Learning Environments',
  standardSummary:
    'Candidates facilitate learning by creating, using, evaluating, and managing effective learning environments.',
  contextAndConditions:
    'During the Summer 2020 Design and Evaluation of Information Access and Delivery (EDET 755) course with Dr. Erin Besser, we studied the use of telecommunications tools to support research and instruction across the curriculum, including distance education and issues related to instructional delivery, connectivity, and distribution methods.',
  scope: `The purpose of this project was to gradually develop and implement a fully online course which contained three modules to be completed over the course of three weeks, and I used this opportunity to expand on the ${TeamSteppsModule} developed in EDET 703.`,
  role:
    'As a certified TeamSTEPPS® Master Trainer, I completed this project by myself and served as the primary subject matter expert, instructional designer, and developer.',
  instructionalDesign: `Following ADDIE (${Molenda2007Link}) and MRK (${Morrison2013Link}) instructional design models, I first analyzed content (in addition to the formalized ${TeamSTEPPSLink} curriculum) that would be helpful for our target audience, which included determining instructional problems, identifying learner characteristics, and analyzing task components. I then designed the course by completing the provided templates for course description, syllabus, online tools, and module agenda. This included defining instructional objectives, structuring content sequentially, designing instructional strategies, and planning the instructional message and mode of delivery. After designing the instruction and evaluation instruments, I developed the course in ${BlackboardCourseSitesLink} and evaluated the project based on feedback from the instructor.`,
  performanceIndicator: [
    // Each of these sections in between the {} represents a new bullet point in the list
    {
      title: 'Creating',
      indicator:
        'Candidates create instructional design products based on learning principles and research-based best practices.',
      implementation:
        'Following the ADDIE and MRK instructional design models, I adapted the evidence-based TeamSTEPPS® for Office-Based Care curriculum to create the online course.',
    },
    {
      title: 'Using',
      indicator:
        'Candidates make professionally sound decisions in selecting appropriate processes and resources to provide optimal conditions for learning based on principles, theories, and effective practices.',
      implementation:
        'I used a variety of Blackboard CourseSites tools to optimize the learning environment, including discussion boards, quiz, essay assignment, multimedia, and course calendar.',
    },
    {
      title: 'Assessing/Evaluating',
      indicator:
        'Candidates use multiple assessment strategies to collect data for informing decisions to improve instructional practice, learner outcomes, and the learning environment.',
      implementation:
        'Formative assessment took place at the conclusion of each weekly module as learners participated in discussion boards to demonstrate their understanding of the material and to learn from classmates. In addition, a final reflection essay and quiz was developed as summative assessments.',
    },
    {
      title: 'Managing',
      indicator:
        'Candidates establish mechanisms for maintaining the technology infrastructure to improve learning and performance.',
      implementation:
        'The interactive online course was implemented in Blackboard CourseSites, which is an open source learning management system which offers a variety of built-in features and tools to promote learning.',
    },
    {
      title: 'Ethics',
      indicator:
        'Candidates foster a learning environment in which ethics guide practice that promotes health, safety, best practice, and respect for copyright, Fair Use, and appropriate open access to resources.',
      implementation:
        'Resources and references were appropriately cited and open access resources, like TeamSTEPPS® for Office-Based Care curriculum and YouTube videos, were utilized.',
    },
    {
      title: 'Diversity of Learners',
      indicator:
        'Candidates foster a learning community that empowers learners with diverse backgrounds, characteristics, and abilities.',
      implementation:
        'Through the use of frequent discussion boards, I created an environment which promotes open dialogue and reflection so that the diverse group of students (healthcare professionals) can learn from each other.',
    },
  ],
  reflection:
    'This project allowed me to expand on previous course work and demonstrate more advanced application of knowledge and skills for creating an effective online learning environment. Although much of the content is from a formal, structured TeamSTEPPS® curriculum, I was able to incorporate short videos from mainstream media in order to engage students and provide entertainment while still reinforcing the educational content.',
}

export default data
