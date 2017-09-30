import React from 'react'
import CreateMarkup from '../helpers/CreateMarkup'

export default ({ data }) => (
  <div>
    {data.allWordpressPost.edges.map(({ node }) =>
      <div>
        <h1 dangerouslySetInnerHTML={CreateMarkup(node.title)} />
        <div dangerouslySetInnerHTML={CreateMarkup(node.content)} />
      </div>
    )}
  </div>
)

export const blogQuery = graphql`
  query BlogQuery {
    allWordpressPost {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`