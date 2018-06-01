import MaterialIcon from '@material/react-material-icon'
import { DiscussionEmbed } from 'disqus-react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Bio } from '../components'
import { TagList } from '../components'
import { rhythm, scale } from '../utils/typography'

const CalendarIcon = styled(MaterialIcon).attrs({ icon: `calendar_today` })`
  + span {
    margin-left: 5px;
  }
`

interface BlogPostTemplateProps {
  data: {
    site: Site
    markdownRemark: MarkdownRemark
  }
  pathContext: {
    previous?: MarkdownRemark
    next?: MarkdownRemark
  }
}

class BlogPostTemplate extends React.Component<BlogPostTemplateProps> {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const disqus = get(this.props, 'data.site.siteMetadata.disqus')
    const { previous, next } = this.props.pathContext
    const { tags } = post.frontmatter

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...(scale(-1 / 5) as React.CSSProperties),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          <CalendarIcon>calendar_today</CalendarIcon>
          <span>{post.frontmatter.date}</span>
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <TagList tags={tags} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <Bio />
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0
          }}
        >
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
        <DiscussionEmbed shortname={disqus} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        disqus
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
