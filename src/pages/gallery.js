import React from 'react'
import CreateMarkup from '../helpers/CreateMarkup'

export default ({ data }) => (
  <div>
    <h1>{data.wordpressPage.title}</h1>
    {data.allWordpressWpMedia.edges.map(({ node }) =>
      <div key={node.id}>
        <h2 dangerouslySetInnerHTML={CreateMarkup(node.title.rendered)} />
        <img src={node.source_url} alt={node.alt_text || node.title.rendered} />
      </div>
    )}
    <div dangerouslySetInnerHTML={CreateMarkup(data.wordpressPage.content)} />
    <div>{data.wordpressPage.content}</div>
  </div>
)

export const galleryQuery = graphql`
  query GalleryQuery {
    allWordpressWpMedia {
      edges {
        node {
          id
          slug
          template
          title {
            rendered
          }
          caption {
            rendered
          }
          alt_text
          media_type
          mime_type
          media_details {
            width
            height
            file
          }
          post
          source_url
        }
      }
    }
    wordpressPage(title: {eq: "Gallery"}) {
      id
      title
      content
    }
  }
`
