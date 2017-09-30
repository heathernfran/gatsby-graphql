import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Decoupled app</h1>
    <p>Proof of concept, using Gatsby and GraphQL.</p>
    <Link to="/page-wp/">Go to WordPress demo page</Link>
  </div>
)

export default IndexPage
