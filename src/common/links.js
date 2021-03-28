export const STYLE_GUIDE =
  'https://drive.google.com/file/d/115WX4Tu6I519J699XrmOmLclVQMxRt6B/view'
export const SITE_MAP =
  'https://drive.google.com/file/d/1J62bz-DA33XEYrpRrUKJx-s2ZpqZ2Q0p/view'
export const GOOGLE_DOCS = 'https://www.google.com/docs/about/'
export const GOOGLE_SITES = 'http://sites.google.com/'
export const GATSBY = 'https://www.gatsbyjs.com/'
export const GATSBY_CREATIVE =
  'https://www.gatsbyjs.org/starters/JohnJKerr/gatsby-creative/'
export const REACT = 'https://reactjs.org/'
export const LIGHTHOUSE = 'https://developers.google.com/web/tools/lighthouse'
export const FONT_AWESOME_FREE = 'https://github.com/FortAwesome/Font-Awesome'
export const PIXABAY = 'https://pixabay.com/'
export const CANVA = 'https://www.canva.com/'
export const GITHUB = 'https://github.com/'
export const VERCEL = 'https://vercel.com/'
export const VS_CODE = 'https://code.visualstudio.com/'
export const IMOVIE = 'https://www.apple.com/imovie/'
export const GIMP = 'https://www.gimp.org/'
export const WEBEX = 'https://www.webex.com/'
export const ZOOM = 'https://zoom.us/'
export const PHOTO_BOOTH =
  'https://support.apple.com/guide/photo-booth/welcome/mac'
export const YOUTUBE = 'http://youtube.com/'
export const ARTICULAR_RISE = 'https://articulate.com/360/rise'
export const BLACKBOARD_COURSESITES = 'https://www.coursesites.com/'
export const PIKTOCHART = 'https://piktochart.com/'
export const PADLET = 'https://padlet.com/'
export const FLIPGRID = 'https://info.flipgrid.com/'
export const TRELLO = 'https://trello.com/en-US'
export const SLACK = 'https://slack.com/'
export const UDUTU = 'http://udutu.com/'
export const TEAM_STEPPS =
  'https://www.ahrq.gov/teamstepps/officebasedcare/index.html'
export const SURVEY_MONKEY = 'https://www.surveymonkey.com/'
export const MOODLE = 'https://moodle.org/'
export const HARVARD_MACY_6C =
  'https://www.harvardmacy.org/index.php/hmi/applying-the-6cs'

export const DAWN_LEBERKNIGHT_RESOURCES_PAGE =
  'https://dawnleberknight.now.sh/resources/'

export const createExternalLink = (linkTo, text) =>
  `<a href="${linkTo}" target="_blank" rel="noopener noreferrer">${text}</a>`

// Used in project data files
export const GoogleSitesLink = createExternalLink(GOOGLE_SITES, 'Google Sites')
export const CanvaLink = createExternalLink(CANVA, 'Canva')
export const CitrixWebExLink = createExternalLink(WEBEX, 'Citrix WebEx')
export const IMovieLink = createExternalLink(IMOVIE, 'iMovie')
export const TeamSTEPPSLink = createExternalLink(
  TEAM_STEPPS,
  'TeamSTEPPS® for Office-Based Care'
)
export const SurveyMonkeyLink = createExternalLink(
  SURVEY_MONKEY,
  'Survey Monkey'
)
export const ArticulateRiseLink = createExternalLink(
  ARTICULAR_RISE,
  'Articulate 360 Rise'
)
export const BlackboardCourseSitesLink = createExternalLink(
  BLACKBOARD_COURSESITES,
  'Blackboard CourseSites'
)
export const MoodleLink = createExternalLink(MOODLE, 'Moodle')
export const UdutuLink = createExternalLink(UDUTU, 'Udutu')
export const HarvardMacy6CLink = createExternalLink(
  HARVARD_MACY_6C,
  'Harvard Macy Community Blog'
)
export const Molenda2007Link = createExternalLink(
  DAWN_LEBERKNIGHT_RESOURCES_PAGE,
  'Molenda, 2007'
)
export const Morrison2013Link = createExternalLink(
  DAWN_LEBERKNIGHT_RESOURCES_PAGE,
  'Morrison, 2013'
)
export const Cast2018Link = createExternalLink(
  DAWN_LEBERKNIGHT_RESOURCES_PAGE,
  'Cast, 2018'
)
export const LighthouseLink = createExternalLink(LIGHTHOUSE, 'Lighthouse')
export const PixabayLink = createExternalLink(PIXABAY, 'Pixabay')
