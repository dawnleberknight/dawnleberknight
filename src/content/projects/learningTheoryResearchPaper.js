import {
  DAWN_LEBERKNIGHT_RESOURCES_PAGE,
  HarvardMacy6CLink,
  createExternalLink,
  Molenda2007Link,
  Morrison2013Link,
} from '../../common/links'

const Turner1995 = createExternalLink(
  DAWN_LEBERKNIGHT_RESOURCES_PAGE,
  'Turner, 1995'
)

const data = {
  titleMain: 'Learning Theory Research Paper',
  courseNumber: 'EDET 709',
  projectLink:
    'https://drive.google.com/file/d/1Q9jSelqqdFuB9-hDrhKs54V1O-5dAAHs/view?usp=sharing',
  standardName: 'AECT 5 – Research',
  standardSummary:
    'Candidates explore, evaluate, synthesize, and apply methods of inquiry to enhance learning and improve performance.',
  contextAndConditions:
    'During the Spring 2020 Applications of Learning Principles (EDET 709) course with Dr. Erin Besser, we examined behavioral and cognitive learning principles applicable to the design of technology-based instruction and performance training.',
  scope: `The purpose of the research paper was to further explore and examine a selected learning theory in order to bring a new and interesting perspective to the topic. I chose to focus on the application of 6C’s of Motivation learning theory (${Turner1995}) to online learning for healthcare professionals.`,
  role:
    'I completed this project by myself and served as the primary subject matter expert after completing extensive research on the topic.',
  instructionalDesign: `Following ADDIE (${Molenda2007Link}) and MRK (${Morrison2013Link}) instructional design models, I first analyzed research related to the 6C’s of Motivation in order to create an annotated bibliography of references related to my specific focus on interprofessional, online education for healthcare professions. Next, I designed an outline of my research paper and developed a draft. Then two classmates evaluated my draft and offered suggestions for improvements, which I used to finalize my research paper. Finally, I was able to implement an abbreviated version of my research paper recommendations, which were posted on the ${HarvardMacy6CLink}.`,
  performanceIndicator: [
    {
      title: 'Theoretical Foundations',
      indicator:
        'Candidates demonstrate foundational knowledge of the contribution of research to the past and current theory of educational communications and technology.',
      implementation:
        'I completed extensive research on the 6C’s of Motivation and how the learning theory can be applied to the online learning environment and/or education of healthcare professionals.',
    },
    {
      title: 'Method',
      indicator:
        'Candidates apply research methodologies to solve problems and enhance practice.',
      implementation:
        'I selected and analyzed two case studies specific to the target audience of healthcare professionals and online learning environment in order to identify common successes, challenges, and recommendations.',
    },
    {
      title: 'Assessing/Evaluating',
      indicator:
        'Candidates apply formal inquiry strategies in assessing and evaluating processes and resources for learning and performance.',
      implementation:
        'After a thorough literature review and case analysis, I recommended instructional design strategies which can be used to increase student motivation for healthcare professionals participating in interprofessional, online education.',
    },
    {
      title: 'Ethics',
      indicator:
        'Candidates conduct research and practice using accepted professional and institutional guidelines and procedures.',
      implementation: ' Resources and references were appropriately cited.',
    },
  ],
  reflection:
    'Since I had written research papers in previous courses and dedicated extensive time to the research and drafting process, the Learning Theory Research Paper demonstrates advanced application of knowledge and skills. I appreciated the opportunity to collaborate with a UofSC librarian on the research process, which helped to narrow down the literature search. From this project, I was able to identify practical instructional design strategies to use in my current role with SC AHEC and to share with other health professions educators.',
  references: [
    {
      title: 'Harvard Macy Community Blog',
      linkTo: 'https://www.harvardmacy.org/index.php/hmi/applying-the-6cs',
    },
  ],
}

export default data
