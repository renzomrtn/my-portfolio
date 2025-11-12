import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // compatibilityDate: '2025-11-11',
  modules: ['@nuxt/content'],

  css: ['bootstrap/dist/css/bootstrap.min.css'],

  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },

  compatibilityDate: '2025-11-12'
})