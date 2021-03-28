import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ListItem from '../components/listItem'
import ExternalLink from '../components/externalLink'
import ArrowBullet from '../components/arrowBullet'
import {
  GATSBY,
  GOOGLE_SITES,
  VERCEL,
  IMOVIE,
  GIMP,
  WEBEX,
  ZOOM,
  PHOTO_BOOTH,
  YOUTUBE,
  ARTICULAR_RISE,
  BLACKBOARD_COURSESITES,
  PIKTOCHART,
  PADLET,
  CANVA,
  FLIPGRID,
  TRELLO,
  SLACK,
  PIXABAY,
  UDUTU,
  MOODLE,
} from '../common/links'

export default function ResourcesPage() {
  return (
    <Layout>
      <SEO title="Resources" />
      <section className="page-section bg-primary-light pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0 page-header">Resources</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-left">
              <h3 className="pt-5">References</h3>
              <ul className="list-unstyled">
                <ListItem>
                  Association for Educational Communications and Technology.
                  (2012). <em>AECT Standards.</em> Bloomington, IN: Association
                  for Educational Communications and Technology. Retrieved from
                  <ExternalLink href="https://www.aect.org/docs/AECTstandards2012.pdf">
                    https://www.aect.org/docs/AECTstandards2012.pdf
                  </ExternalLink>
                </ListItem>
                <ListItem>
                  CAST. (2018).{' '}
                  <em>Universal Design for Learning Guidelines. </em>
                  <ExternalLink href="http://udlguidelines.cast.org">
                    http://udlguidelines.cast.org
                  </ExternalLink>
                </ListItem>
                <ListItem>
                  Deci, E. L., &amp; Ryan, R. M. (1985).{' '}
                  <em>
                    Intrinsic motivation and self-determination in human
                    behavior.
                  </em>{' '}
                  New York: Plenum Press.
                </ListItem>
                <ListItem>
                  Dick, W., Carey, L., &amp; Carey, J. (2015).{' '}
                  <em>Systematic design of instruction</em> (8th ed.). London,
                  UK: Pearson.
                </ListItem>
                <ListItem>
                  Driscoll, M. (1999). Gagné's theory of instruction.{' '}
                  <em>Psychology of learning for instruction </em> (Chapter 10).
                  Boston, MA: Allyn &amp; Bacon, Inc.
                </ListItem>
                <ListItem>
                  Guay, F., Vallerand, R. J., &amp; Blanchard, C. (2000). On the
                  assessment of situational intrinsic and extrinsic motivation:
                  The situational motivation scale (sims).
                  <em> Motivation and Emotion, 24</em>(3), 175–213.
                  <ExternalLink href="https://doi.org/10.1023/A:1005614228250">
                    https://doi.org/10.1023/A:1005614228250
                  </ExternalLink>
                </ListItem>
                <ListItem>
                  Kapp, K.M. (2012).{' '}
                  <em>
                    The gamification of learning and instruction: Game-based
                    methods and strategies for training and education.
                  </em>{' '}
                  San Francisco, CA: Pfeiffer.
                </ListItem>
                <ListItem>
                  Molenda, M. (2007). In search of the elusive ADDIE model.
                  <em> Performance Improvement, 42</em>(5), 34-36.
                  <ExternalLink href="https://doi.org/10.1002/pfi.4930420508">
                    https://doi.org/10.1002/pfi.4930420508
                  </ExternalLink>
                </ListItem>
                <ListItem>
                  Moreno, R. (2010). An in-depth guide to using technology in
                  the classroom. <em>Educational psychology</em> (Chapter 14).
                  Hoboken, NJ: Wiley.
                </ListItem>
                <ListItem>
                  Morrison, G. R., Ross, S. M., Kalman, H. K., &amp; Kemp, J. E.
                  (2013). <em>Designing effective instruction</em> (7th ed.).
                  Hoboken, NJ: John Wiley &amp; Sons, Inc.
                </ListItem>
                <ListItem>
                  Tripp, S.D., Bichelmeyer, B. (1990). Rapid prototyping: An
                  alternative instructional design strategy.{' '}
                  <em>Educational Technology Research and Development, 38</em>
                  (1) 31-44.
                  <ExternalLink href="https://doi.org/10.1007/BF02298246">
                    https://doi.org/10.1007/BF02298246
                  </ExternalLink>
                </ListItem>
                <ListItem>
                  Turner, J., &amp; Paris, S. G. (1995). How literacy tasks
                  influence children’s motivation for literacy.{' '}
                  <em>The Reading Teacher, 48</em>(8), 662-673.
                </ListItem>
              </ul>

              <h3 className="pt-5">Educational Technologies</h3>
              <p>
                Although technology is constantly evolving, below are some
                resources which I find especially helpful and encourage you to
                explore.
              </p>
              <ul class="fa-ul">
                <li className="mb-1">
                  <ArrowBullet />
                  <span>Website Builder:</span>
                  <ExternalLink href={GATSBY}>Gatsby</ExternalLink>,
                  <ExternalLink href={GOOGLE_SITES}>Google Sites</ExternalLink>
                </li>
                <li className="mb-1">
                  <ArrowBullet />
                  <span>Website Deployment and Hosting:</span>
                  <ExternalLink href={VERCEL}>Vercel</ExternalLink>
                </li>
                <li className="mb-1">
                  <ArrowBullet />
                  <span>Audio/Video Editing:</span>
                  <ExternalLink href={IMOVIE}>iMovie</ExternalLink>
                </li>
                <li className="mb-1">
                  <ArrowBullet />
                  <span>Image Manipulation:</span>
                  <ExternalLink href={GIMP}>GIMP</ExternalLink>
                </li>
                <li className="mb-1">
                  <ArrowBullet />
                  <span>Videoconferencing:</span>
                  <ExternalLink href={WEBEX}>WebEx</ExternalLink>,
                  <ExternalLink href={ZOOM}>Zoom</ExternalLink>
                </li>
                <li className="mb-1">
                  <ArrowBullet />
                  <span>Video Recording:</span>
                  <ExternalLink href={PHOTO_BOOTH}>Photo Booth</ExternalLink>
                </li>
                <li className="mb-1">
                  <ArrowBullet />
                  <span>Video Hosting:</span>
                  <ExternalLink href={YOUTUBE}>YouTube</ExternalLink>
                </li>
                <li className="mb-1">
                  <ArrowBullet />
                  <span>Rapid eLearning Tools:</span>
                  <ExternalLink href={ARTICULAR_RISE}>
                    Articular Rise
                  </ExternalLink>
                  ,<ExternalLink href={UDUTU}>Udutu</ExternalLink>
                </li>
                <li className="mb-1">
                  <ArrowBullet />
                  <span>Learning Management:</span>
                  <ExternalLink href={BLACKBOARD_COURSESITES}>
                    Blackboard CourseSites
                  </ExternalLink>
                  ,<ExternalLink href={MOODLE}>Moodle</ExternalLink>
                </li>
                <li className="mb-1">
                  <ArrowBullet />
                  <span>Visual Content Creation:</span>
                  <ExternalLink href={PIKTOCHART}>Piktochart</ExternalLink>,
                  <ExternalLink href={CANVA}>Canva</ExternalLink>
                </li>
                <li className="mb-1">
                  <ArrowBullet />
                  <span>Collaboration:</span>
                  <ExternalLink href={PADLET}>Padlet</ExternalLink>,
                  <ExternalLink href={FLIPGRID}>Flipgrid</ExternalLink>,
                  <ExternalLink href={TRELLO}>Trello</ExternalLink>,
                  <ExternalLink href={SLACK}>Slack</ExternalLink>
                </li>
                <li className="mb-1">
                  <ArrowBullet />
                  <span>Free Images:</span>
                  <ExternalLink href={PIXABAY}>Pixabay</ExternalLink>
                </li>
              </ul>

              <h3 className="pt-5">Acknowledgement</h3>
              <p>
                I want to recognize and show appreciation for my husband, Shawn
                Leberknight, who has provided me with extra support throughout
                the past two years while I completed the master’s degree
                program. His experience as a software engineer was especially
                helpful as I worked on designing and developing this portfolio
                site, and I appreciate all his advice and tutorials throughout
                the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
