import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { markdownSchema } from 'sanity-plugin-markdown'

const projectId = '5n55q9i0'
const dataset = 'production'

export default createConfig({
  name: 'default',
  title: 'teka.dev',
  projectId,
  dataset,
  plugins: [deskTool(), markdownSchema()],
  schema: {
    types: [
      {
        name: 'post',
        type: 'document',
        title: 'Post',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
            },
          },
          {
            name: 'content',
            title: 'Content',
            type: 'markdown',
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'string',
          },
          {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
          },
          {
            name: 'date',
            title: 'Date',
            type: 'datetime',
          },
        ],
      },
    ],
  },
})
