<template>
  <article v-if="post" class="article-page">
    <nav class="nav" aria-label="Laku navigation">
      <div class="shell nav-inner">
        <NuxtLink class="brand" to="/" aria-label="Laku home">
          <img class="brand-logo" src="/images/laku/Laku logo.png" alt="LAKU" />
        </NuxtLink>
        <NuxtLink class="nav-cta" to="/#inquiry">Plan with LAKU</NuxtLink>
      </div>
    </nav>

    <header class="hero">
      <div class="shell">
        <NuxtLink class="back-link" to="/blog">LAKU Culture Blog</NuxtLink>
        <p class="eyebrow">{{ post.topic }}</p>
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
      </div>
    </header>

    <main class="shell article-body">
      <section>
        <h2>Start with the Culture Keeper, not the activity list.</h2>
        <p>
          The strongest LAKU experiences begin with the person carrying the practice. A workshop, visit, or apprenticeship becomes more meaningful when guests understand who is teaching, what tradition they carry, and why the material matters.
        </p>
      </section>
      <section>
        <h2>Match the format to your time in Lombok.</h2>
        <p>
          Short visits are best for observing Culture Keepers and asking questions. Workshops are better when you want to create something by hand. Apprenticeships fit learners who want daily practice over one week to one month.
        </p>
      </section>
      <section>
        <h2>Ask about dates, group size, and the take-home outcome.</h2>
        <p>
          A good cultural experience has a clear schedule, the right materials, and enough space for the group. Share your dates and interests early so LAKU can match the right Culture Keeper and workshop format.
        </p>
      </section>
      <NuxtLink class="button" to="/#inquiry">Plan with LAKU Culture</NuxtLink>
    </main>
  </article>
</template>

<script setup lang="ts">
import { blogPosts, siteUrl } from '~/data/lakuSeo'

definePageMeta({ layout: false })

const route = useRoute()
const post = blogPosts.find((item) => item.slug === route.params.slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Guide not found' })
}

const canonicalUrl = `${siteUrl}/blog/${post.slug}`

useHead({
  title: `${post.title} | LAKU Culture`,
  meta: [
    { name: 'description', content: post.description },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { property: 'og:title', content: post.title },
    { property: 'og:description', content: post.description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: `${siteUrl}/images/laku/optimized/hero-workshop.webp` }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
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
            image: `${siteUrl}/images/laku/optimized/hero-workshop.webp`,
            publisher: { '@id': `${siteUrl}/#organization` },
            mainEntityOfPage: canonicalUrl
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
.article-page{--ink:#1a2118;--muted:#66715f;--forest:#253f2f;--gold:#c99342;--clay:#9f5135;--paper:#fffaf0;--cream:#f3ead8;--line:rgba(37,63,47,.15);margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.65}.article-page *{box-sizing:border-box}.article-page a{color:inherit;text-decoration:none}.shell{width:min(920px,calc(100% - 40px));margin:0 auto}.nav{position:fixed;top:0;left:0;right:0;z-index:20;color:white;background:rgba(37,63,47,.88);border-bottom:1px solid rgba(255,255,255,.16);backdrop-filter:blur(18px)}.nav-inner{width:min(1160px,calc(100% - 40px));min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand-logo{display:block;width:112px;height:42px;object-fit:contain}.nav-cta,.button{display:inline-flex;align-items:center;justify-content:center;border-radius:4px;background:var(--gold);color:#21180b;font-weight:800}.nav-cta{min-height:38px;padding:0 16px;font-size:13px}.button{min-height:50px;margin-top:16px;padding:0 22px}.hero{padding:138px 0 76px;color:white;background:linear-gradient(90deg,rgba(21,32,23,.92),rgba(21,32,23,.58)),url('/images/laku/optimized/weaving-values.webp') center/cover}.back-link{display:inline-flex;margin-bottom:28px;color:#f1c77c;font-weight:900}.eyebrow{margin:0 0 16px;color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}h1,h2{margin:0;font-family:Fraunces,Georgia,serif;line-height:1.04;letter-spacing:0}h1{font-size:clamp(42px,6vw,76px)}.hero p:not(.eyebrow){max-width:760px;color:rgba(255,255,255,.84);font-size:21px}.article-body{padding:76px 0}.article-body section{padding:0 0 34px}.article-body h2{font-size:34px;color:var(--forest)}.article-body p{color:var(--muted);font-size:20px}@media (max-width:640px){.shell,.nav-inner{width:min(100% - 28px,920px)}h1{font-size:40px}.article-body{padding:58px 0}}
</style>
