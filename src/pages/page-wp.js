import React from 'react'
import Link from 'gatsby-link'
import CreateMarkup from '../helpers/CreateMarkup'

export default ({ data }) => (
  <div>
    <Link to="/">Go back to the homepage</Link>
    {data.allWordpressPage.edges.map(({ node }) =>
      <div dangerouslySetInnerHTML={CreateMarkup(node.title)} />
    )}
    <Link to="/blog/">Go to blog</Link>
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

// export const homepageQuery = graphql`
//   query HomepageQuery {
//     wordpressPage(title: {eq: "Home"}) {
//       id
//       title
//     }
//   }
// `
