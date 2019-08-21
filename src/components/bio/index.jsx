import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction } = data.site.siteMetadata

      return (
        <div className="bio">
          <div className="author">
            <div className="author-description">
              <Image
                className="author-image"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  borderRadius: `100%`,
                }}
              />
              <div className="author-name">
                <span className="author-name-prefix">Written by</span>
                <a href={"https://resume.ljlm0402.now.sh/"} target="_blank">@{author}</a>
                <div className="author-introduction">{introduction}</div>
                <p className="author-socials">
                  {social.github && (
                    <a href={social.github} target="_blank">GitHub</a>
                  )}
                  {social.medium && (
                    <a href={social.medium} target="_blank">Medium</a>
                  )}
                  {social.twitter && (
                    <a href={social.twitter} target="blank">Twitter</a>
                  )}
                  {social.facebook && (
                    <a href={social.facebook} target="_blank">Facebook</a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.jpeg/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitter
          github
          medium
          facebook
        }
      }
    }
  }
`

export default Bio
