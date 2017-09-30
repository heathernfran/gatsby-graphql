import React from 'react'
import Link from 'gatsby-link'
import CreateMarkup from '../helpers/CreateMarkup'

export default ({ data }) => (
  <div>
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
