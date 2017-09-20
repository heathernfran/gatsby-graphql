import React from 'react'

export default ({ data }) => (
  <div>
    {data.allWordpressPost.edges.map(({ node }) =>
      <div>
        <h1>{node.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: node.content }} />
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