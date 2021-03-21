import {
  createExternalLink,
  DAWN_LEBERKNIGHT_RESOURCES_PAGE,
} from '../../common/links'

const Deci1985 = createExternalLink(
  DAWN_LEBERKNIGHT_RESOURCES_PAGE,
  'Deci, 1985'
)
const Guay2000 = createExternalLink(
  DAWN_LEBERKNIGHT_RESOURCES_PAGE,
  'Guay, 2000'
)

export default {
  titleMain: 'Group Proposed Research Conference Paper',
  titleSecondary: 'Presentation',
  courseNumber: 'EDET 780',
  projectLink:
    'https://drive.google.com/file/d/1xv0kR4DxTiiyn8e8SLjmhmXmaeX8_-xv/view?usp=sharing',
  projectLink2: 'https://youtu.be/BtIO5zCJva4',
  standardName: 'AECT 5 – Research',
  standardSummary:
    'Candidates explore, evaluate, synthesize, and apply methods of inquiry to enhance learning and improve performance.',
  contextAndConditions:
    'During the Summer 2020 Research Seminar in Educational Technology (EDET 780) course with Dr. Erin Besser, we explored contemporary trends, problem areas, and issues in educational technology through literature investigations, seminar discussions, and case studies.',
  scope:
    'For this group research project, I collaborated with two classmates, Daniel Berg and Ellis Reeves, in order to further explore the research process and a topic related to educational technology and instructional design.',
  role:
    'Each group member served as subject matter expert, instructional designer and developer. Ellis and I had already completed research on motivation-related learning theories in EDET 709, so this provided a foundation for our proposed study, In addition, Daniel and I had been involved in the same online digital accessibilities training, which we used as the context for our proposed study. In my specific role within the group, I organized the meetings, started the initial draft of the research paper, and developed the PowerPoint presentation.',
  instructionalDesign:
    'Following ADDIE and MRK instructional design models, we first analyzed research related to student motivation along with gamification in the online learning environment in order to create an annotated bibliography of references related to our specific focus on the impact of digital credentials on student motivation and performance in an online higher education course. Next, we designed an outline of the research paper and developed the research paper. Then our course instructor evaluated the paper and offered suggestions for improvements, which we used when implementing the research paper concepts through the use of a recorded presentation.',
  performanceIndicator: [
    // Each of these sections in between the {} represents a new bullet point in the list
    {
      title: 'Theoretical Foundations',
      indicator:
        'Candidates demonstrate foundational knowledge of the contribution of research to the past and current theory of educational communications and technology.',
      implementation: `We completed extensive research on student motivation, including Self-Determination Theory (${Deci1985}), along with the impact of gamification in the online learning environment.`,
    },
    {
      title: 'Method',
      indicator:
        'Candidates apply research methodologies to solve problems and enhance practice.',
      implementation:
        'We carefully considered research methodology when determining our proposed study participants, design, materials, procedures, and analyses.',
    },
    {
      title: 'Assessing/Evaluating',
      indicator:
        'Candidates apply formal inquiry strategies in assessing and evaluating processes and resources for learning and performance.',
      implementation: `Following the SDT framework, we decided to measure self-reported student motivation using the validated Situation Motivation Scale (${Guay2000}) in order to determine if there was a correlation between the use of digital credentials and student motivation in the online course.`,
    },
    {
      title: 'Ethics',
      indicator:
        'Candidates conduct research and practice using accepted professional and institutional guidelines and procedures.',
      implementation: 'Resources and references were appropriately cited.',
    },
  ],
  reflection:
    'I used this project as an opportunity to collaborate with classmates who are also involved in higher education online learning, and we each brought unique strengths and abilities to the team. Both the Group Proposed Research Conference Paper and Presentation demonstrate advanced application of our combined knowledge and skills, and I am hopeful to be able use some of the concepts from our proposed research study in my future work with student motivation in the online learning environment.',
}
