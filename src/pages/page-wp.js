import React from 'react'
import Link from 'gatsby-link'
import CreateMarkup from '../helpers/CreateMarkup'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ data }) => (
  <div>
    {data.allWordpressPage.edges.map(({ node }) =>
      <div
        key={node.id}
        dangerouslySetInnerHTML={CreateMarkup(node.title)} 
      />
    )}
    <ul style={{ listStyle: `none` }}>
      <ListLink to="/">Go back to the homepage</ListLink>
      <ListLink to="/blog/">Go to blog</ListLink>
      <ListLink to="/gallery/">Go to gallery</ListLink>
    </ul>
  </div>
)

export const allPagesQuery = graphql`
  query AllWordpressPagesQuery {
    allWordpressPage {
      edges {
        node {
          id
          title 
        }
      }
    }
  }
`
