// Import typefaces
import React from 'react'
import 'typeface-merriweather'
import 'typeface-montserrat'
import { rhythm } from '../../utils/typography'

export class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5)
        }}
      >
        {/* <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2)
          }}
        /> */}
        <p>
          Written by <strong>Jasper Jian</strong> who lives and works in Taiwan
          building useful things.{' '}
          <a href="https://twitter.com/JJJ69310417">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
