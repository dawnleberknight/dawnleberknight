import {
  TeamSTEPPSLink,
  DAWN_LEBERKNIGHT_RESOURCES_PAGE,
  createExternalLink,
  ArticulateRiseLink,
  Molenda2007Link,
  Morrison2013Link,
} from '../../common/links'

const Tripp1990 = createExternalLink(
  DAWN_LEBERKNIGHT_RESOURCES_PAGE,
  'Tripp, 1990'
)

const data = {
  titleMain: 'Rapid eLearning Tool',
  courseNumber: 'EDET 703',
  projectLink:
    'https://rise.articulate.com/share/eui4eQU7CtbUv97UoNVT0MZl9p0kW9iQ#/',
  standardName: 'AECT 3 – Learning Environments',
  standardSummary:
    'Candidates facilitate learning by creating, using, evaluating, and managing effective learning environments.',
  contextAndConditions:
    'During the Spring 2020 Design and Development Tools II (EDET 703) course with Dr. Gary Senn, we further developed our technical skills using current and emerging technologies to create web-based projects that included instructional and multimedia elements.',
  scope: `Following the Rapid Prototyping instructional design model (${Tripp1990}) that I researched earlier in the course, I created a module using a rapid eLearning development tool, ${ArticulateRiseLink}. The 40-minute “TeamSTEPPS® Communication” module was intended to be part of a larger course covering the ${TeamSTEPPSLink} curriculum.`,
  role:
    'Since I am a certified TeamSTEPPS® Master Trainer, I completed this project by myself and served as the primary subject matter expert, instructional designer, and developer.',
  instructionalDesign: `Following Rapid Prototyping instructional design model, which overlaps with the ADDIE (${Molenda2007Link}) and MRK (${Morrison2013Link}) models, I began with an analysis of needs and existing TeamSTEPPS® content along with tentative objectives. I continued with the parallel and combined processes of constructing (designing and developing) and utilizing (implementing and evaluating) the instructional module prototype. The next step in the Rapid Prototyping instructional design process would be to design additional modules as part of the TeamSTEPPS® series and continue pilot testing and revising content and learning objectives as needed.`,
  performanceIndicator: [
    {
      title: 'Creating',
      indicator:
        'Candidates create instructional design products based on learning principles and research-based best practices.',
      implementation: `Content for the online module was adapted from the evidence-based TeamSTEPPS® for Office-Based Care* curriculum, founded by Agency for Healthcare Research and Quality after accumulating over 40 years of research on team performance.`,
    },
    {
      title: 'Using',
      indicator:
        'Candidates make professionally sound decisions in selecting appropriate processes and resources to provide optimal conditions for learning based on principles, theories, and effective practices.',
      implementation:
        'I followed the Rapid Prototyping instructional design model when assessing needs, analyzing content, setting learning objectives, constructing prototype (design), and utilizing prototype (research).',
    },
    {
      title: 'Assessing/Evaluating',
      indicator:
        'Candidates use multiple assessment strategies to collect data for informing decisions to improve instructional practice, learner outcomes, and the learning environment.',
      implementation:
        'In order to evaluate the effectiveness of the instructional material and learning environment, I developed a three-question multiple-choice quiz to be completed by the learner at the end of the module. In addition, two pilot testers completed the module and offered feedback for improvements.',
    },
    {
      title: 'Managing',
      indicator:
        'Candidates establish mechanisms for maintaining the technology infrastructure to improve learning and performance.',
      implementation:
        'Using features available in with Article 360 Rise e-learning tool, I created interactive content like the step-by-step cards, embedded video, and quiz.',
    },
    {
      title: 'Ethics',
      indicator:
        'Candidates foster a learning environment in which ethics guide practice that promotes health, safety, best practice, and respect for copyright, Fair Use, and appropriate open access to resources.',
      implementation:
        'Resources and references were appropriately cited and open access resources, like TeamSTEPPS® for Office-Based Care* curriculum and YouTube videos, were utilized.',
    },
    {
      title: 'Diversity of Learners',
      indicator:
        'Candidates foster a learning community that empowers learners with diverse backgrounds, characteristics, and abilities.',
      implementation:
        'My primary goal for the e-learning module was to equip learners with a variety of communication tools and strategies in order to work with team members who have diverse backgrounds, characteristics, and abilities.',
    },
  ],
  reflection:
    'Since I was already familiar with the TeamSTEPPS® curriculum and Articulate 360 Rise e-learning tool, this artifact demonstrates more advanced application of knowledge and skills. I have taught the concepts within the face-to-face learning environment, but this project allowed me to apply instructional design strategies to optimize the online learning environment. In addition, I was able to explore and apply a new instructional design model, Rapid Prototyping, and I can see the benefits of using this model in certain circumstances and contexts.',
}

export default data
