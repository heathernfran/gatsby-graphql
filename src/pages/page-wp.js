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
    <ul style={{ listStyle: `none` }}>
      <ListLink to="/">Homepage</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
      <ListLink to="/gallery/">Gallery</ListLink>
    </ul>
    {data.allWordpressPage.edges.map(({ node }) =>
      <div
        key={node.id}
        dangerouslySetInnerHTML={CreateMarkup(node.title)} 
      />
    )}
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
