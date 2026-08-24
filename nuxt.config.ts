// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    discordWebhookUrl: process.env.DISCORD_WEBHOOK_URL || ""
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  app: {
    head: {
      title: "LAKU Culture Lombok | Workshops, Apprenticeships & Handmade Craft",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Visit LAKU Culture in Mawun, Lombok for Indonesian cultural workshops, living culture apprenticeships, handmade craft, culinary classes, and private group programs." },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "theme-color", content: "#253f2f" },
        { property: "og:site_name", content: "LAKU Culture" },
        { property: "og:locale", content: "en_ID" },
        { name: "twitter:site", content: "@lakuculture_id" }
      ],
      link: [
        { rel: "canonical", href: "https://lakuculture.id/" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-Y3DN21N4S1",
          async: true
        },
        {
          innerHTML: "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-Y3DN21N4S1');"
        }
      ]
    }
  }
})
