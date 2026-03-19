import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    works: defineCollection({
      type: 'page',
      source: 'works/**/*.md',
      schema: z.object({
        id: z.int(),
        title: z.string(),
        description: z.string(),
        createDate: z.string(),
        pinned: z.boolean(),
        icon: z.string(),
        draft: z.boolean(),
        mainCategory: z.string(),
        category: z.array(z.object({
            icon: z.string(),
            label: z.string()
        })),
        headerLinks: z.array(z.object({
            label: z.string(),
            icon: z.string(),
            to: z.string()
        }))
      })
    })
  }
})
