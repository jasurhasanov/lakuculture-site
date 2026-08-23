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
      title: "LAKU | A Home for Indonesia's Living Culture",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "LAKU is a living cultural space in Mawun, Lombok, offering daily Culture Keeper experiences, paid workshops, apprenticeships, handmade products, and private programs." },
        { name: "theme-color", content: "#253f2f" }
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
    }
  }
})
