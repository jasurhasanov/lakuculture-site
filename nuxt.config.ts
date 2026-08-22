// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true
  },
  app: {
    head: {
      title: "Laku | Live Indonesia Through Its Traditions",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Laku is an immersive Indonesian cultural experience in Mawun, Lombok, where guests taste, create, listen, and participate in living traditions." },
        { name: "theme-color", content: "#253f2f" }
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
    }
  }
})
