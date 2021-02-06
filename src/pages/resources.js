import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ListItem from '../components/listItem'
import ExternalLink from '../components/externalLink'
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
} from '../common/links'

export default function ResourcesPage() {
  return (
    <Layout>
      <SEO title="Resources" />
      <section className="page-section bg-primary-light pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Resources</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-left">
              <h3>Educational Technologies</h3>
              <p>
                Although technology is constantly evolving, below are some
                resources which I find especially helpful and encourage you to
                explore.
              </p>
              <ul>
                <li>
                  <span>Website Builder:</span>
                  <ExternalLink href={GATSBY}>Gatsby</ExternalLink>,
                  <ExternalLink href={GOOGLE_SITES}>Google Sites</ExternalLink>
                </li>
                <li>
                  <span>Website Deployment and Hosting:</span>
                  <ExternalLink href={VERCEL}>Vercel</ExternalLink>
                </li>
                <li>
                  <span>Audio/Video Editing:</span>
                  <ExternalLink href={IMOVIE}>iMovie</ExternalLink>
                </li>
                <li>
                  <span>Image Manipulation:</span>
                  <ExternalLink href={GIMP}>GIMP</ExternalLink>
                </li>
                <li>
                  <span>Videoconferencing:</span>
                  <ExternalLink href={WEBEX}>WebEx</ExternalLink>,
                  <ExternalLink href={ZOOM}>Zoom</ExternalLink>
                </li>
                <li>
                  <span>Video Recording:</span>
                  <ExternalLink href={PHOTO_BOOTH}>Photo Booth</ExternalLink>
                </li>
                <li>
                  <span>Video Hosting:</span>
                  <ExternalLink href={YOUTUBE}>YouTube</ExternalLink>
                </li>
                <li>
                  <span>Learning Management:</span>
                  <ExternalLink href={ARTICULAR_RISE}>
                    Articular Rise
                  </ExternalLink>
                  ,
                  <ExternalLink href={BLACKBOARD_COURSESITES}>
                    Blackboard CourseSites
                  </ExternalLink>
                </li>
                <li>
                  <span>Visual Content Creation:</span>
                  <ExternalLink href={PIKTOCHART}>Piktochart</ExternalLink>,
                  <ExternalLink href={CANVA}>Canva</ExternalLink>
                </li>
                <li>
                  <span>Collaboration:</span>
                  <ExternalLink href={PADLET}>Padlet</ExternalLink>,
                  <ExternalLink href={FLIPGRID}>Flipgrid</ExternalLink>,
                  <ExternalLink href={TRELLO}>Trello</ExternalLink>,
                  <ExternalLink href={SLACK}>Slack</ExternalLink>
                </li>
                <li>
                  <span>Free Images:</span>
                  <ExternalLink href={PIXABAY}>Pixabay</ExternalLink>
                </li>
              </ul>

              <h3 className="pt-5">Acknowledgement</h3>
              <p>
                I want to recognize and show appreciation for my husband, Shawn
                Leberknight, who has provided me with extra support throughout
                the past two years while I completed the Master’s degree
                program. His experience as a software engineer was especially
                helpful as I worked on designing and developing this portfolio
                site, and I appreciate all his advice and tutorials throughout
                the process.
              </p>

              <h3 className="pt-5">References</h3>
              <ul className="list-unstyled">
                <ListItem>
                  American Psychological Association. (2010/2019). Publication
                  manual of the American Psychological Association (6th/7th
                  ed.). Washington, DC.
                </ListItem>
                <ListItem>
                  Association for Educational Communications and Technology
                  (2012). AECT Standards. Bloomington, IN: Association for
                  Educational Communications and Technology. Retrieved from
                  https://www.aect.org/docs/AECTstandards2012.pdf
                </ListItem>
                <ListItem>
                  Kapp, K.M. (2012). The gamification of learning and
                  instruction: Game-based methods and strategies for training
                  and education. San Francisco, CA: Pfeiffer.
                </ListItem>
                <ListItem>
                  Molenda, M. (2007). In search of the elusive ADDIE model.
                  Performance Improvement, 42(5), 34-36.
                  https://doi.org/10.1002/pfi.4930420508
                </ListItem>
                <ListItem>
                  Morrison, G. R., Ross, S. M., Kalman, H. K., & Kemp, J. E.
                  (2013). Designing effective instruction (7th ed.). Hoboken,
                  NJ: John Wiley & Sons, Inc.
                </ListItem>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
