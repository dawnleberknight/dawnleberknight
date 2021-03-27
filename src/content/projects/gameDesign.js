import {
  createExternalLink,
  DAWN_LEBERKNIGHT_RESOURCES_PAGE,
} from '../../common/links'
const Kapp2012 = createExternalLink(
  DAWN_LEBERKNIGHT_RESOURCES_PAGE,
  'Kapp, 2012'
)

const data = {
  titleMain: 'Game Design',
  // titleSecondary: '',
  courseNumber: 'EDET 652',
  projectLink:
    'https://drive.google.com/file/d/18QxxNxmCmfCUfYtkK1Ok6ZmipStIrgqw/view?usp=sharing',
  // projectLink2: '',
  standardName: 'AECT 1 – Content Knowledge',
  standardSummary:
    'Candidates demonstrate the knowledge necessary to create, use, assess, and manage theoretical and practical applications of educational technologies and processes.',
  contextAndConditions:
    'During the Summer 2020 Design and Evaluation of Games and Simulations (EDET 652) course with Dr. William S. Morris, we evaluated the integration of games and gamification to support teaching, learning, and performance and designed games and gamification strategies to support teaching, learning, and performance.',
  scope: `Following best practices for gamification of learning and instruction (${Kapp2012}), I designed an online game for elementary school students to better understand COVID-19 prevention strategies.`,
  role:
    'Since I had recently developed a COVID-19 Contact Monitor course for my professional work with SC AHEC, I served as the primary subject matter expert and completed this project independently. I was also instructional designer and developer, applying what I had learned about effective gamification strategies throughout the course.',
  instructionalDesign:
    'Following ADDIE and MRK instructional design models, I completed an analysis of needs and goals for instruction on prevention of COVID-19 infection, and I also conducted an analysis of the target audience, which was elementary-aged students. I then designed performance objectives and sample assessment questions and developed the game characters, environment, and rules of play with careful consideration of reward structure and feedback which would be most effective for elementary students. Finally, I solicited feedback from two peers who enjoy playing video games and used their suggested improvements to make revisions to the game design.',
  performanceIndicator: [
    // Each of these sections in between the {} represents a new bullet point in the list
    {
      title: 'Creating',
      indicator:
        'Candidates demonstrate the ability to create instructional materials and learning environments using a variety of systems approaches.',
      implementation:
        'I created a game design document which provided detailed description and images of the game characters, environment, play/rules, rewards, and overall aesthetics.',
    },
    {
      title: 'Using',
      indicator:
        'Candidates demonstrate the ability to select and use technological resources and processes to support student learning and to enhance their pedagogy.',
      implementation:
        'Throughout the course, I played several video games in order to better understand how to effectively set up the game environment and reward structure.',
    },
    {
      title: 'Assessing/Evaluating',
      indicator:
        'Candidates demonstrate the ability to assess and evaluate the effective integration of appropriate technologies and instructional materials.',
      implementation:
        'With consideration of the local public school system, I developed a technical description which details how the game could be distributed and deployed.',
    },
    {
      title: 'Managing',
      indicator:
        'Candidates demonstrate the ability to effectively manage people, processes, physical infrastructures, and financial resources to achieve predetermined goals.',
      implementation:
        'While designing the online game and planning for implementation, I considered the existing educational technologies and limited financial resources of the local public school system.',
    },
    {
      title: 'Ethics',
      indicator:
        'Candidates demonstrate the contemporary professional ethics of the field as defined and developed by the Association for Educational Communications and Technology.',
      implementation: 'Resources and references were appropriately cited.',
    },
  ],
  reflection:
    'As someone who has never really enjoyed playing video games, this artifact reflects an initial understanding of how to design a game to support teaching, learning, and performance. However, the Kapp textbook was an extremely valuable resource which helped guide me through the process of game design. In the future, I would love to work on this project more (or an alternate topic for game design) in order to learn how to build and implement a video game in the real world context.',
}

export default data
