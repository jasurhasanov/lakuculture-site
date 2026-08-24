<template>
  <LandingPage :page="page" />
</template>

<script setup lang="ts">
import { landingPages, siteUrl } from '~/data/lakuSeo'

definePageMeta({ layout: false })

const page = landingPages.products
const canonicalUrl = `${siteUrl}/products`
const pageImage = `${siteUrl}${page.image}`

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  '@id': `${canonicalUrl}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: page.h1, item: canonicalUrl }
  ]
}

const webPageSchema = {
  '@type': 'WebPage',
  '@id': `${canonicalUrl}#webpage`,
  url: canonicalUrl,
  name: page.title,
  description: page.description,
  isPartOf: { '@id': `${siteUrl}/#website` },
  about: { '@id': `${siteUrl}/#organization` },
  primaryImageOfPage: { '@type': 'ImageObject', url: pageImage, caption: page.imageAlt },
  breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
  inLanguage: 'en-ID'
}

const faqSchema = {
  '@type': 'FAQPage',
  '@id': `${canonicalUrl}#faq`,
  mainEntity: page.faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
}

useHead({
  title: page.title,
  meta: [
    { name: 'description', content: page.description },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: pageImage },
    { property: 'og:image:alt', content: page.imageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: pageImage }
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
      innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@graph': [webPageSchema, breadcrumbSchema, faqSchema] })
    }
  ]
})
</script>
