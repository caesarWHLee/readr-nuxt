const oldNewsProjectSlugs = require('@readr-media/old-news-project-slugs')

function getHref({ type, id, slug } = {}) {
  switch (type) {
    case 1:
      return `/post/${id}`
    case 4:
      return oldNewsProjectSlugs.includes(slug)
        ? `/project/${slug}`
        : `/project/3/${slug}`
    default:
      return undefined
  }
}

Object.assign(module.exports, {
  getHref,
})
