import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Container from '../components/container'

import 'sanitize.css'
import 'material-design-lite/material.min.css'
import 'material-design-lite/material.min.js'

const Header = () => (
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <div class="mdl-layout-spacer"></div>
    </div>
  </header>
)

const Menu = () => (
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Nav Menu</span>
    <nav class="mdl-navigation">
      <Link class='mdl-navigation__link' to="/">Home</Link>
      <Link class='mdl-navigation__link' to="/page-wp/">WP Demo</Link>
      <Link class='mdl-navigation__link' to="/blog/">Blog</Link>
      <Link class='mdl-navigation__link' to="/gallery/">Gallery</Link>
    </nav>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Menu />
    <Container style={{ margin: "3rem auto", maxWidth: 600 }}>
      {children()}
    </Container>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
