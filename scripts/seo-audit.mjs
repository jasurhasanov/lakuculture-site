import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const siteUrl = 'https://lakuculture.id'
const minimumLastmod = '2026-08-25'

const routes = [
  '/',
  '/visit',
  '/workshops',
  '/apprenticeship',
  '/products',
  '/faq',
  '/blog',
  '/blog/things-to-do-lombok-couples-culture',
  '/blog/romantic-cultural-experience-lombok',
  '/blog/kuta-lombok-date-activity-laku',
  '/blog/lombok-with-toddlers-cultural-activity',
  '/blog/family-activities-kuta-lombok-kids',
  '/blog/children-workshop-lombok-ages-3-7',
  '/blog/educational-activities-lombok-kids-teens',
  '/blog/teen-activities-lombok-culture-workshop',
  '/blog/lombok-workshops-for-families',
  '/blog/solo-travel-lombok-cultural-experience',
  '/blog/authentic-lombok-cultural-experience',
  '/blog/workshops-in-kuta-lombok-alternative',
  '/blog/things-to-do-near-kuta-lombok-expats',
  '/blog/activities-near-selong-belanak-laku',
  '/blog/weekend-activities-lombok-families-expats'
]

const sourceFiles = [
  'nuxt.config.ts',
  'pages/index.vue',
  'pages/visit.vue',
  'pages/workshops.vue',
  'pages/apprenticeship.vue',
  'pages/products.vue',
  'pages/faq.vue',
  'pages/blog/index.vue',
  'pages/blog/[slug].vue',
  'components/LandingPage.vue',
  'data/lakuSeo.ts'
]

const failures = []
const read = (file) => readFileSync(join(root, file), 'utf8')
const assert = (condition, message) => {
  if (!condition) failures.push(message)
}

const sitemap = read('public/sitemap.xml')
const robots = read('public/robots.txt')

for (const route of routes) {
  assert(sitemap.includes(`<loc>${siteUrl}${route === '/' ? '/' : route}</loc>`), `Missing sitemap route: ${route}`)
}

assert(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`), 'robots.txt must point to the production sitemap')
assert(!robots.toLowerCase().includes('disallow: /'), 'robots.txt must not block the full site')
const lastmods = [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((match) => match[1])
assert(lastmods.length === routes.length, `sitemap should include one lastmod for each route; found ${lastmods.length}`)
assert(lastmods.every((lastmod) => /^\d{4}-\d{2}-\d{2}$/.test(lastmod)), 'sitemap lastmod values must use YYYY-MM-DD')
assert(lastmods.every((lastmod) => lastmod >= minimumLastmod), `sitemap lastmod values must be ${minimumLastmod} or newer`)

for (const file of sourceFiles) {
  assert(existsSync(join(root, file)), `Missing source file: ${file}`)
}

for (const file of sourceFiles.filter((file) => file.endsWith('.vue') || file.endsWith('.ts'))) {
  const text = read(file)
  if (file.includes('pages/')) {
    assert(text.includes("rel: 'canonical'") || text.includes('rel: "canonical"'), `${file} missing canonical link`)
    assert(text.includes("name: 'description'") || text.includes('name: "description"'), `${file} missing meta description`)
    assert(text.includes("type: 'application/ld+json'") || text.includes('type: "application/ld+json"'), `${file} missing JSON-LD`)
    assert(text.includes('og:image'), `${file} missing Open Graph image`)
    assert(text.includes('og:image:width'), `${file} missing Open Graph image dimensions`)
  }
}

const landing = read('components/LandingPage.vue')
assert(landing.includes(':width="imageSize.width"'), 'Landing page images need intrinsic width binding')
assert(landing.includes(':height="imageSize.height"'), 'Landing page images need intrinsic height binding')

const index = read('pages/index.vue')
assert((index.match(/<h1/g) || []).length === 1, 'Homepage should keep exactly one H1')
assert(index.includes('fetchpriority'), 'Homepage should preload/fetch-prioritize the LCP image')
assert(index.includes('max-image-preview:large'), 'Homepage should allow large image previews')

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'))
  process.exit(1)
}

console.log(`SEO audit passed for ${routes.length} routes.`)
