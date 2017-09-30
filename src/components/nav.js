import React from 'react'
import Link from 'gatsby-link'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default () => (
  <ul style={{ listStyle: `none` }}>
    <ListLink to="/">Homepage</ListLink>
    <ListLink to="/blog/">Blog</ListLink>
    <ListLink to="/gallery/">Gallery</ListLink>
  </ul>
)
