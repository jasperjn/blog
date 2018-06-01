import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = ({ rhythm }) => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none'
  },
  '.gatsby-highlight': {
    backgroundColor: `#fef9ec`,
    borderRadius: `.15rem`,
    marginTop: `0`,
    marginBottom: rhythm(3 / 4),
    padding: rhythm(3 / 4),
    overflow: `auto`
  },
  ".gatsby-highlight pre[class*='language-']": {
    backgroundColor: `transparent`,
    borderRadius: 0,
    margin: 0,
    padding: 0,
    overflow: `initial`,
    float: `left`,
    minWidth: `100%`,
    textShadow: `none`
  },
  '.gatsby-highlight-code-line': {
    background: `#fff2cc`,
    display: `block`,
    marginRight: rhythm(-3 / 4),
    marginLeft: rhythm(-3 / 4),
    paddingRight: rhythm(3 / 4),
    paddingLeft: rhythm(2 / 4),
    borderLeft: `${rhythm(1 / 4)} solid #ffd9b3`
  }
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export const { scale, rhythm } = typography
export default typography
