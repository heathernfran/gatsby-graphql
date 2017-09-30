import React from 'react'

export default ({ children }) =>
  <main class='mdl-layout__content' style={{ margin: "3rem auto", maxWidth: 600 }}>
    <div class='page-content'>
      {children}
    </div>
  </main>
