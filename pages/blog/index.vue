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
          <h1>Conversion-focused Lombok culture guides by audience intent</h1>
          <p>Practical SEO articles for couples, families, solo travelers, expats, and nomads planning cultural workshops, visits, and living culture experiences at LAKU.</p>
        </div>
      </header>

      <section class="strategy-section">
        <div class="shell strategy-grid">
          <article class="strategy-panel">
            <p class="eyebrow dark-text">Target audiences</p>
            <h2>Who the content is written for</h2>
            <div class="audience-list">
              <section v-for="audience in seoAudiences" :key="audience.name">
                <h3>{{ audience.name }}</h3>
                <p>{{ audience.intent }}</p>
                <strong>{{ audience.conversionAction }}</strong>
                <ul>
                  <li v-for="query in audience.queries" :key="query">{{ query }}</li>
                </ul>
              </section>
            </div>
          </article>
          <article class="strategy-panel">
            <p class="eyebrow dark-text">Successful SEO article</p>
            <h2>Publishing criteria</h2>
            <ol>
              <li v-for="criterion in successfulSeoArticleCriteria" :key="criterion">{{ criterion }}</li>
            </ol>
          </article>
        </div>
      </section>

      <section class="topics-section">
        <div class="shell">
          <div class="section-head">
            <p class="eyebrow dark-text">Most relevant topics</p>
            <h2>Three intent-led topics for each audience</h2>
          </div>
          <div class="topic-grid">
            <article v-for="group in groupedPosts" :key="group.audience" class="topic-card">
              <h3>{{ group.audience }}</h3>
              <NuxtLink v-for="post in group.posts" :key="post.slug" :to="`/blog/${post.slug}`">
                <span>{{ post.intentQuery }}</span>
                {{ post.title }}
              </NuxtLink>
            </article>
          </div>
        </div>
      </section>

      <section class="posts-section">
        <div class="shell post-grid">
          <article v-for="post in blogPosts" :key="post.slug" class="post-card">
            <span>{{ post.topic }}</span>
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
            <dl>
              <div>
                <dt>Primary keyword</dt>
                <dd>{{ post.primaryKeyword }}</dd>
              </div>
              <div>
                <dt>Intent</dt>
                <dd>{{ post.intentQuery }}</dd>
              </div>
            </dl>
            <NuxtLink :to="`/blog/${post.slug}`">Read Guide</NuxtLink>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { blogPosts, defaultSeoImage, imageDimensions, seoAudiences, siteUrl, successfulSeoArticleCriteria } from '~/data/lakuSeo'

definePageMeta({ layout: false })

const groupedPosts = computed(() => seoAudiences.map((audience) => ({
  audience: audience.name,
  posts: blogPosts.filter((post) => post.audience === audience.name).slice(0, 3)
})))

const title = 'LAKU Culture Blog | Lombok Culture Guides by Audience Intent'
const description = 'Intent-led Lombok culture guides for couples, families, solo travelers, expats, and nomads planning LAKU workshops and visits.'
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
.blog-page{--ink:#1a2118;--muted:#66715f;--forest:#253f2f;--gold:#c99342;--clay:#9f5135;--paper:#fffaf0;--cream:#f3ead8;--line:rgba(37,63,47,.15);margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.5}.blog-page *{box-sizing:border-box}.blog-page a{color:inherit;text-decoration:none}.shell{width:min(1160px,calc(100% - 40px));margin:0 auto}.nav{position:fixed;top:0;left:0;right:0;z-index:20;color:white;background:rgba(37,63,47,.88);border-bottom:1px solid rgba(255,255,255,.16);backdrop-filter:blur(18px)}.nav-inner{min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand-logo{display:block;width:112px;height:42px;object-fit:contain}.nav-links{display:flex;gap:22px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.nav-cta{display:inline-flex;align-items:center;min-height:38px;padding:0 16px;border-radius:4px;background:var(--gold);color:#21180b;font-weight:800;font-size:13px}.hero{padding:138px 0 76px;color:white;background:linear-gradient(90deg,rgba(21,32,23,.92),rgba(21,32,23,.58)),url('/images/laku/optimized/hero-workshop.webp') center/cover}.eyebrow{margin:0 0 16px;color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.dark-text{color:var(--clay)}h1,h2,h3{margin:0;letter-spacing:0;line-height:1.04}h1,h2{font-family:Fraunces,Georgia,serif}h1{max-width:920px;font-size:clamp(44px,6vw,84px)}h2{font-size:clamp(30px,4vw,50px);color:var(--forest)}h3{font-size:22px;color:var(--forest)}.hero p:not(.eyebrow){max-width:780px;color:rgba(255,255,255,.84);font-size:21px}.strategy-section,.topics-section,.posts-section{padding:84px 0}.strategy-section,.posts-section{background:var(--cream)}.strategy-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:16px}.strategy-panel,.topic-card,.post-card{border:1px solid var(--line);border-radius:8px;background:white}.strategy-panel{padding:30px}.strategy-panel ol,.strategy-panel ul{padding-left:20px;color:var(--muted)}.strategy-panel li{margin:9px 0}.audience-list{display:grid;gap:18px;margin-top:24px}.audience-list section{padding-top:18px;border-top:1px solid var(--line)}.audience-list p{color:var(--muted)}.audience-list strong{display:block;color:var(--forest)}.section-head{max-width:760px;margin-bottom:34px}.topic-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}.topic-card{padding:22px}.topic-card a{display:block;margin-top:14px;padding-top:14px;border-top:1px solid var(--line);color:var(--forest);font-weight:800}.topic-card span{display:block;margin-bottom:5px;color:var(--clay);font-size:12px;text-transform:uppercase;letter-spacing:.08em}.post-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.post-card{min-height:430px;padding:30px;display:flex;flex-direction:column}.post-card>span{margin-bottom:16px;color:var(--clay);font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.post-card h2{font-size:30px}.post-card p,.post-card dd{color:var(--muted);font-size:16px}.post-card dl{display:grid;gap:10px;margin:16px 0}.post-card dt{font-size:12px;font-weight:900;text-transform:uppercase;color:var(--forest)}.post-card dd{margin:0}.post-card a{margin-top:auto;color:var(--forest);font-weight:900}@media (max-width:1100px){.topic-grid{grid-template-columns:repeat(2,1fr)}}@media (max-width:980px){.nav-links{display:none}.strategy-grid,.post-grid{grid-template-columns:1fr}}@media (max-width:640px){.shell{width:min(100% - 28px,1160px)}h1{font-size:42px}.strategy-section,.topics-section,.posts-section{padding:68px 0}.topic-grid{grid-template-columns:1fr}.strategy-panel,.topic-card,.post-card{padding:24px}}
</style>
