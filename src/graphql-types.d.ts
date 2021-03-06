interface MarkdownRemark {
  id: string
  html: string
  excerpt: string
  frontmatter: Frontmatter
  fields: {
    slug?: string
  }
}

interface Frontmatter {
  title: string
  date: string
  tags: string[]
}

interface Site {
  siteMetadata: SiteMetadata
}

interface SiteMetadata {
  title: string
  author: string
  disqus: string
}
