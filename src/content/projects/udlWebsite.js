import {
  Molenda2007Link,
  Morrison2013Link,
  Cast2018Link,
  LighthouseLink,
  PixabayLink,
  GoogleSitesLink,
  createExternalLink,
} from '../../common/links'

const MicosoftAccessibilityCheckerLink = createExternalLink(
  'https://support.microsoft.com/en-us/topic/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25',
  'Microsoft accessibility checker'
)
const data = {
  titleMain: 'UDL Website',
  // titleSecondary: '',
  courseNumber: 'EDET 735',
  projectLink: 'https://sites.google.com/view/edet735-final-project',
  // projectLink2: '',
  standardName: 'AECT 3 – Learning Environments',
  standardSummary:
    'Candidates facilitate learning by creating, using, evaluating, and managing effective learning environments.',
  contextAndConditions:
    'During the Spring 2021 Technology Applications for Diverse Populations (EDET 735) course with Dr. Tammi Kolski, we examined the use of assistive devices and other technologies which enable access to information and productivity tools for diverse learners, including persons with disabilities, English-language learners, and the elderly.',
  scope:
    'This final project consisted of selecting a topic related to diverse populations and assistive technology and creating an accessible website with an instructional PowerPoint and video along with annotated references of research articles and technologies. I chose to focus on applying Universal Design for Learning (UDL) principles to health professions education.',
  role:
    'I completed this project by myself and served as the primary subject matter expert after completing extensive research on the topic. I was also the instructional designer and developer of the website.',
  instructionalDesign: `Following ADDIE (${Molenda2007Link}) and MRK (${Morrison2013Link}) instructional design models, I first analyzed research related to UDL in health professions education in order to create an annotated bibliography of references that would be helpful for the target audience. Next, I designed a site map and detailed outline of my website content and then worked on developing the PowerPoint and screencast video. I used ${GoogleSitesLink} to implement the instructional materials I had compiled and developed into a publicly available website, and then I evaluated the project based on feedback from the instructor and classmates.`,
  performanceIndicator: [
    // Each of these sections in between the {} represents a new bullet point in the list
    {
      title: 'Creating',
      indicator:
        'Candidates create instructional design products based on learning principles and research-based best practices.',
      implementation: `Content for the website was developed to provide instruction on research-based UDL principles (${Cast2018Link}).`,
    },
    {
      title: 'Using',
      indicator:
        'Candidates make professionally sound decisions in selecting appropriate processes and resources to provide optimal conditions for learning based on principles, theories, and effective practices.',
      implementation:
        'I conducted extensive research on how to apply UDL in the health professions education context and closely examined various assistive technologies which can help to provide solutions to learning barriers.',
    },
    {
      title: 'Assessing/Evaluating',
      indicator:
        'Candidates use multiple assessment strategies to collect data for informing decisions to improve instructional practice, learner outcomes, and the learning environment.',
      implementation: `I utilized ${MicosoftAccessibilityCheckerLink} for PowerPoint in order to evaluate and improve the accessibility of the presentation, and ${LighthouseLink} was used to check and improve website accessibility.`,
    },
    {
      title: 'Managing',
      indicator:
        'Candidates establish mechanisms for maintaining the technology infrastructure to improve learning and performance.',
      implementation:
        'I used Google Sites to create a publicly available website with a simple design and easy navigation for the user.',
    },
    {
      title: 'Ethics',
      indicator:
        'Candidates foster a learning environment in which ethics guide practice that promotes health, safety, best practice, and respect for copyright, Fair Use, and appropriate open access to resources.',
      implementation: `Resources and references were appropriately cited and open access resources, like ${PixabayLink} for images, were utilized.`,
    },
    {
      title: 'Diversity of Learners',
      indicator:
        'Candidates foster a learning community that empowers learners with diverse backgrounds, characteristics, and abilities.',
      implementation:
        'I developed this website in order to provide training and support for health professions educators so that they can apply UDL principles when creating an inclusive learning environment which meets the needs of diverse students.',
    },
  ],
  reflection:
    'Since I was already familiar with using the Google Sites platform and applying effective website design strategies, this artifact demonstrates more advanced application of knowledge and skills. This project provided an opportunity for me to closely examine UDL principles so that I could develop instructional materials for my colleagues in health professions education. In addition, I was not familiar with the various types of assistive technologies so I enjoyed exploring those in order to determine which might help to provide solutions to potential learning barriers.',
}

export default data
