import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => (
  <div>
    <Link to="/">Go back to the homepage</Link>
    {data.allWordpressPage.edges.map(({ node }) =>
      <div>{node.title}</div>
    )}
  </div>
)

export const query = graphql`
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
