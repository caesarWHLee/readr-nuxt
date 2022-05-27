import gql from 'graphql-tag'

const editorChoices = gql`
  query {
    editorChoices: allEditorChoices(
      sortBy: [sortOrder_ASC, publishTime_DESC]
      first: 3
      where: { state: published }
    ) {
      heroImage {
        urlTabletSized
        urlMobileSized
      }
      choice {
        id
        title: name
        slug
        style
        heroImage {
          urlTabletSized
          urlMobileSized
        }
        ogImage {
          urlMobileSized
          urlDesktopSized
        }
        publishTime
        readingTime
      }
      publishTime
    }
  }
`

export { editorChoices }
