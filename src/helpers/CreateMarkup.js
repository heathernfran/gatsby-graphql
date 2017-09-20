import sanitizeHtml from 'sanitize-html-react'

export default (text) => {
  let clean = sanitizeHtml(text, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
  })
  return {__html: clean}
}