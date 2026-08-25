<template>
  <div class="blog-page">
    <nav class="nav" aria-label="Laku navigation">
      <div class="shell nav-inner">
        <NuxtLink class="brand" to="/" aria-label="Laku home">
          <img class="brand-logo" src="/images/laku/Laku logo.png" alt="LAKU" width="2172" height="724" />
        </NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/visit">Visit</NuxtLink>
          <NuxtLink to="/workshops">Workshops</NuxtLink>
          <NuxtLink to="/apprenticeship">Apprenticeship</NuxtLink>
          <NuxtLink to="/products">Products</NuxtLink>
          <NuxtLink to="/faq">FAQ</NuxtLink>
        </div>
        <NuxtLink class="nav-cta" to="/#inquiry">Plan with LAKU</NuxtLink>
      </div>
    </nav>

    <main>
      <header class="hero">
        <div class="shell">
          <p class="eyebrow">LAKU Culture Blog</p>
          <h1>Stories and guides for experiencing Indonesian culture in Lombok</h1>
          <p>Practical articles for travelers, students, partners, and groups planning cultural workshops, apprenticeships, and visits to LAKU Culture.</p>
        </div>
      </header>

      <section class="posts-section">
        <div class="shell post-grid">
          <article v-for="post in blogPosts" :key="post.slug" class="post-card">
            <span>{{ post.topic }}</span>
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
            <NuxtLink :to="`/blog/${post.slug}`">Read Guide</NuxtLink>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { blogPosts, defaultSeoImage, imageDimensions, siteUrl } from '~/data/lakuSeo'

definePageMeta({ layout: false })

const title = 'LAKU Culture Blog | Lombok Culture Guides'
const description = 'Guides to cultural workshops, apprenticeships, handmade products, and visiting LAKU Culture in Mawun, Lombok.'
const canonicalUrl = `${siteUrl}/blog`
const seoImage = `${siteUrl}${defaultSeoImage}`
const seoImageSize = imageDimensions[defaultSeoImage]

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: seoImage },
    { property: 'og:image:alt', content: 'Culture Keeper workshop at LAKU Culture in Mawun, Lombok' },
    { property: 'og:image:width', content: String(seoImageSize.width) },
    { property: 'og:image:height', content: String(seoImageSize.height) }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'preload', as: 'image', href: defaultSeoImage, fetchpriority: 'high' },
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
            '@type': 'Blog',
            '@id': `${canonicalUrl}#blog`,
            url: canonicalUrl,
            name: title,
            description,
            publisher: { '@id': `${siteUrl}/#organization` },
            blogPost: blogPosts.map((post) => ({ '@type': 'BlogPosting', headline: post.title, url: `${siteUrl}/blog/${post.slug}` }))
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${canonicalUrl}#breadcrumb`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: canonicalUrl }
            ]
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.blog-page{--ink:#1a2118;--muted:#66715f;--forest:#253f2f;--gold:#c99342;--clay:#9f5135;--paper:#fffaf0;--cream:#f3ead8;--line:rgba(37,63,47,.15);margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.5}.blog-page *{box-sizing:border-box}.blog-page a{color:inherit;text-decoration:none}.shell{width:min(1160px,calc(100% - 40px));margin:0 auto}.nav{position:fixed;top:0;left:0;right:0;z-index:20;color:white;background:rgba(37,63,47,.88);border-bottom:1px solid rgba(255,255,255,.16);backdrop-filter:blur(18px)}.nav-inner{min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand-logo{display:block;width:112px;height:42px;object-fit:contain}.nav-links{display:flex;gap:22px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.nav-cta{display:inline-flex;align-items:center;min-height:38px;padding:0 16px;border-radius:4px;background:var(--gold);color:#21180b;font-weight:800;font-size:13px}.hero{padding:138px 0 76px;color:white;background:linear-gradient(90deg,rgba(21,32,23,.92),rgba(21,32,23,.58)),url('/images/laku/optimized/hero-workshop.webp') center/cover}.eyebrow{margin:0 0 16px;color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}h1,h2{margin:0;font-family:Fraunces,Georgia,serif;line-height:1.04;letter-spacing:0}h1{max-width:920px;font-size:clamp(44px,6vw,84px)}.hero p:not(.eyebrow){max-width:760px;color:rgba(255,255,255,.84);font-size:21px}.posts-section{padding:92px 0}.post-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.post-card{min-height:340px;padding:30px;border:1px solid var(--line);border-radius:8px;background:white;display:flex;flex-direction:column}.post-card span{margin-bottom:16px;color:var(--clay);font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.post-card h2{font-size:32px;color:var(--forest)}.post-card p{color:var(--muted);font-size:17px}.post-card a{margin-top:auto;color:var(--forest);font-weight:900}@media (max-width:980px){.nav-links{display:none}.post-grid{grid-template-columns:1fr}}@media (max-width:640px){.shell{width:min(100% - 28px,1160px)}h1{font-size:42px}.posts-section{padding:72px 0}}
</style>
