<template>
  <article v-if="post" class="article-page">
    <nav class="nav" aria-label="Laku navigation">
      <div class="shell nav-inner">
        <NuxtLink class="brand" to="/" aria-label="Laku home">
          <img class="brand-logo" src="/images/laku/Laku logo.png" alt="LAKU" width="2172" height="724" />
        </NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/visit">Visit</NuxtLink>
          <NuxtLink to="/workshops">Workshops</NuxtLink>
          <NuxtLink to="/faq">FAQ</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </div>
        <NuxtLink class="nav-cta" to="/#inquiry">Plan with LAKU</NuxtLink>
      </div>
    </nav>

    <header class="hero" :style="heroStyle">
      <div class="shell">
        <NuxtLink class="back-link" to="/blog">LAKU Culture Blog</NuxtLink>
        <p class="eyebrow">{{ post.topic }}</p>
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
      </div>
    </header>

    <main class="shell article-body">
      <section v-for="section in post.sections" :key="section.heading">
        <h2>{{ section.heading }}</h2>
        <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
      </section>

      <section>
        <h2>How to know if LAKU fits your plans</h2>
        <p>
          LAKU is for visitors who want a real cultural experience without turning the day into a complicated tour. It works best when you want something hands-on, personal, and rooted in local practice, with enough structure to make the visit easy to plan.
        </p>
        <p>
          Before you choose a session, think about your group size, available time, preferred pace, and whether you want to make something, observe Culture Keepers at work, learn through food, or arrange a deeper workshop. Sharing those details helps LAKU recommend the right format.
        </p>
      </section>

      <section>
        <h2>What to ask before you confirm</h2>
        <p>
          A strong LAKU inquiry should include your preferred dates, where you are staying, group size, child ages if relevant, and whether you want craft, culinary learning, observation, private time, or a deeper apprenticeship-style format. Those details help LAKU match the right Culture Keeper and avoid offering a session that is too short, too advanced, or too broad for your group.
        </p>
        <p>
          Ask what materials will be used, what guests can take home, whether the session works in the current weather, and how much time to leave before your next stop. For visitors staying around Kuta, Mawun, Are Guling, Torok, or Selong Belanak, LAKU can usually fit into a realistic South Lombok route when the timing is planned in advance.
        </p>
      </section>

      <section>
        <h2>A simple South Lombok route</h2>
        <p>
          Keep the plan focused. Start with LAKU as the cultural anchor, then add one nearby stop instead of trying to cover every beach in one day. Families often do best with a morning workshop and an easy lunch or beach afterward. Couples may prefer late afternoon before dinner. Solo travelers and nomads can use LAKU as a purposeful break between work, surf, and social plans.
        </p>
        <p>
          Send the inquiry while your dates are still flexible, then let the team recommend the workshop, visit, or Culture Keeper session that fits the way you want to spend the day.
        </p>
      </section>

      <section class="link-section">
        <h2>Plan the next step with LAKU Culture</h2>
        <p>
          If this guide matches what you are searching for, send LAKU your dates, group size, ages, and preferred workshop style. The team can recommend the Culture Keeper, activity length, and format that fits your visit.
        </p>
        <div class="internal-links">
          <NuxtLink v-for="link in post.internalLinks" :key="link.href" :to="link.href">{{ link.label }}</NuxtLink>
        </div>
      </section>

      <section class="faq-section">
        <h2>Questions before you book</h2>
        <article v-for="item in post.faqs" :key="item.question">
          <h3>{{ item.question }}</h3>
          <p>{{ item.answer }}</p>
        </article>
      </section>

      <NuxtLink class="button" to="/#inquiry">Plan with LAKU Culture</NuxtLink>
    </main>
  </article>
</template>

<script setup lang="ts">
import { blogPosts, imageDimensions, siteUrl } from '~/data/lakuSeo'

definePageMeta({ layout: false })

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const post = blogPosts.find((item) => item.slug === slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Guide not found' })
}

const canonicalUrl = `${siteUrl}/blog/${post.slug}`
const seoImage = `${siteUrl}${post.image}`
const seoImageSize = imageDimensions[post.image] ?? imageDimensions['/images/laku/optimized/hero-workshop.webp']
const heroStyle = computed(() => ({
  backgroundImage: `linear-gradient(90deg,rgba(21,32,23,.94),rgba(21,32,23,.64)),url("${post.image}")`
}))

useHead({
  title: `${post.title} | LAKU Culture`,
  meta: [
    { name: 'description', content: post.description },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { property: 'og:title', content: post.title },
    { property: 'og:description', content: post.description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: seoImage },
    { property: 'og:image:alt', content: post.imageAlt },
    { property: 'og:image:width', content: String(seoImageSize.width) },
    { property: 'og:image:height', content: String(seoImageSize.height) },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.title },
    { name: 'twitter:description', content: post.description },
    { name: 'twitter:image', content: seoImage }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'preload', as: 'image', href: post.image, fetchpriority: 'high' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,650;9..144,760&family=Inter:wght@400;500;600;700;800&display=swap' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id': `${canonicalUrl}#article`,
            headline: post.title,
            description: post.description,
            url: canonicalUrl,
            image: seoImage,
            publisher: { '@id': `${siteUrl}/#organization` },
            primaryImageOfPage: { '@type': 'ImageObject', url: seoImage, width: seoImageSize.width, height: seoImageSize.height },
            mainEntityOfPage: canonicalUrl,
            inLanguage: 'en-ID'
          },
          {
            '@type': 'FAQPage',
            '@id': `${canonicalUrl}#faq`,
            mainEntity: post.faqs.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer }
            }))
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${canonicalUrl}#breadcrumb`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
              { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl }
            ]
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.article-page{--ink:#1a2118;--muted:#66715f;--forest:#253f2f;--gold:#c99342;--clay:#9f5135;--paper:#fffaf0;--cream:#f3ead8;--line:rgba(37,63,47,.15);margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.65}.article-page *{box-sizing:border-box}.article-page a{color:inherit;text-decoration:none}.shell{width:min(920px,calc(100% - 40px));margin:0 auto}.nav{position:fixed;top:0;left:0;right:0;z-index:20;color:white;background:rgba(37,63,47,.88);border-bottom:1px solid rgba(255,255,255,.16);backdrop-filter:blur(18px)}.nav-inner{width:min(1160px,calc(100% - 40px));min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand-logo{display:block;width:112px;height:42px;object-fit:contain}.nav-links{display:flex;gap:22px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.nav-cta,.button{display:inline-flex;align-items:center;justify-content:center;border-radius:4px;background:var(--gold);color:#21180b;font-weight:800}.nav-cta{min-height:38px;padding:0 16px;font-size:13px}.button{min-height:50px;margin:20px 0 80px;padding:0 22px}.hero{padding:138px 0 76px;color:white;background-position:center;background-size:cover}.back-link{display:inline-flex;margin-bottom:28px;color:#f1c77c;font-weight:900}.eyebrow{margin:0 0 16px;color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}h1,h2,h3{margin:0;letter-spacing:0;line-height:1.08}h1,h2{font-family:Fraunces,Georgia,serif}h1{font-size:clamp(42px,6vw,76px)}h2{font-size:34px;color:var(--forest)}h3{font-size:22px;color:var(--forest)}.hero p:not(.eyebrow){max-width:760px;color:rgba(255,255,255,.84);font-size:21px}.article-body{padding:62px 0 0}.article-body section{padding:0 0 34px}.article-body p{color:var(--muted);font-size:20px}.link-section{margin:18px 0 46px;padding:30px;border:1px solid var(--line);border-radius:8px;background:white}.internal-links{display:flex;flex-wrap:wrap;gap:10px}.internal-links a{padding:10px 14px;border-radius:4px;background:var(--forest);color:white;font-weight:800}.faq-section article{padding:22px 0;border-top:1px solid var(--line)}@media (max-width:780px){.nav-links{display:none}}@media (max-width:640px){.shell,.nav-inner{width:min(100% - 28px,920px)}h1{font-size:40px}.article-body{padding:48px 0}.button{width:100%}}
</style>
