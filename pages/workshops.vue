<template>
  <div class="workshops-page">
    <LakuNav />

    <header class="hero">
      <div class="shell hero-inner">
        <p class="eyebrow">Hands-on culture in Mawun</p>
        <h1>Lombok cultural workshops at LAKU Culture</h1>
        <p class="hero-lead">
          Make something by hand with local Culture Keepers through weaving, culinary,
          batik, pottery, bamboo, and rattan workshops between Kuta Lombok and Selong Belanak.
        </p>
        <div class="hero-actions">
          <NuxtLink class="button" to="/#inquiry">Book a Workshop</NuxtLink>
          <NuxtLink class="button secondary" to="/visit">Plan a Visit First</NuxtLink>
        </div>
      </div>
    </header>

    <main>
      <section class="intro-section">
        <div class="shell intro-grid">
          <figure class="image-frame tall">
            <img
              src="/images/laku/optimized/craft-detail.webp"
              alt="Hands-on Indonesian craft workshop detail at LAKU Culture in Mawun, Lombok"
              width="1200"
              height="1600"
              loading="lazy"
            />
          </figure>
          <div class="intro-copy">
            <p class="eyebrow dark-text">What happens here</p>
            <h2>Workshops are built around Culture Keepers, materials, and a clear take-home outcome.</h2>
            <p>
              LAKU workshops are practical, personal, and rooted in living Indonesian culture.
              Guests learn directly from the people who carry the practice, ask questions as
              they make, and leave with a handmade piece, shared dish, or deeper understanding
              of the tradition.
            </p>
            <div class="quick-facts" aria-label="Workshop highlights">
              <span>EUR 75 minimum booking</span>
              <span>Covers up to 3 people</span>
              <span>EUR 25 per additional guest</span>
              <span>Traditional drink and snacks included</span>
              <span>Beginner friendly</span>
              <span>Family and group options</span>
              <span>Private sessions by request</span>
            </div>
          </div>
        </div>
      </section>

      <section class="workshop-section">
        <div class="shell">
          <div class="section-head centered">
            <p class="eyebrow dark-text">Available workshops</p>
            <h2>Choose a hands-on cultural experience.</h2>
            <p>
              Some workshops are available to book regularly, while others depend on Culture Keeper,
              material, and date availability. Each workshop has a minimum booking of EUR 75 for
              up to 3 people, with additional guests at EUR 25 each. A traditional drink and a
              plate of traditional snacks are included.
            </p>
          </div>
          <div class="workshop-grid">
            <article v-for="workshop in workshops" :key="workshop.title" class="workshop-card">
              <div>
                <span>{{ workshop.status }}</span>
                <h3>{{ workshop.title }}</h3>
                <p class="meta">{{ workshop.meta }}</p>
              </div>
              <ul>
                <li v-for="point in workshop.points" :key="point">{{ point }}</li>
              </ul>
              <NuxtLink class="text-link" to="/#inquiry">{{ workshop.cta }}</NuxtLink>
            </article>
          </div>
        </div>
      </section>

      <section class="fit-section">
        <div class="shell fit-grid">
          <div class="section-head">
            <p class="eyebrow dark-text">Who it fits</p>
            <h2>A useful cultural stop for travelers, residents, and groups.</h2>
            <p>
              LAKU sits in Mawun, between Kuta Lombok and Selong Belanak, making it easy to build
              a meaningful half-day plan around a workshop, lunch, beach time, or a private group program.
            </p>
          </div>
          <div class="fit-list">
            <article v-for="item in fits" :key="item.title">
              <h3>{{ item.title }}</h3>
              <p>{{ item.copy }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="process-section">
        <div class="shell">
          <div class="section-head centered">
            <p class="eyebrow">How to plan</p>
            <h2>Send the details, then LAKU prepares the right session.</h2>
          </div>
          <div class="steps-grid">
            <article v-for="step in steps" :key="step.title" class="step-card">
              <span>{{ step.kicker }}</span>
              <h3>{{ step.title }}</h3>
              <p>{{ step.copy }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="keeper-section">
        <div class="shell keeper-layout">
          <div>
            <p class="eyebrow dark-text">Culture Keepers</p>
            <h2>Learn from the people who keep each practice alive.</h2>
            <p>
              Workshops at LAKU are not performances separated from daily life. They are guided by
              Culture Keepers who share technique, material knowledge, local stories, and the rhythm
              behind the work.
            </p>
            <NuxtLink class="button dark" to="/#keepers">Meet the Culture Keepers</NuxtLink>
          </div>
          <figure class="image-frame">
            <img
              src="/images/laku/20260810_111236.jpg"
              alt="Ibu Wahyu leading a Nyensek weaving workshop at LAKU Culture Lombok"
              width="4000"
              height="3000"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section class="faq-section">
        <div class="shell">
          <div class="section-head">
            <p class="eyebrow dark-text">Questions</p>
            <h2>Common questions before booking a workshop.</h2>
          </div>
          <div class="faq-grid">
            <article v-for="item in faqs" :key="item.question" class="faq-card">
              <h3>{{ item.question }}</h3>
              <p>{{ item.answer }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="shell cta-panel">
          <div>
            <p class="eyebrow">Plan with us</p>
            <h2>Tell us your dates, group size, ages, and the kind of workshop you want.</h2>
          </div>
          <NuxtLink class="button" to="/#inquiry">Send an Inquiry</NuxtLink>
        </div>
      </section>
    </main>

    <footer>
      <div class="shell footer-inner">
        <div class="footer-brand">
          <img class="footer-logo" src="/images/laku/Laku logo.png" alt="LAKU" width="2172" height="724" loading="lazy" />
          <span>A Home for Indonesia's Living Culture</span>
          <address>Mawun, Lombok, Indonesia</address>
        </div>
        <div class="footer-socials" aria-label="LAKU social links">
          <a href="https://facebook.com/LakuCulture.id" target="_blank" rel="noopener">Facebook</a>
          <a href="https://instagram.com/lakuculture.id/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://wa.me/6285215622162" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { imageDimensions, landingPages, siteUrl } from '~/data/lakuSeo'

definePageMeta({ layout: false })

const page = landingPages.workshops
const canonicalUrl = `${siteUrl}/workshops`
const pageImage = `${siteUrl}/images/laku/optimized/hero-workshop.webp`
const heroImageSize = imageDimensions['/images/laku/optimized/hero-workshop.webp']

const workshops = [
  {
    status: 'Available to book',
    title: 'Nyensek Weaving',
    meta: 'From EUR 75 for up to 3 people / EUR 25 per additional guest',
    points: [
      'Weave with a Culture Keeper using traditional Lombok techniques',
      'Create a small textile piece through guided hands-on practice',
      'Enjoy a traditional drink and plate of traditional snacks during the session',
      'Take home the piece you make and the story behind the tradition'
    ],
    cta: 'Book Nyensek Weaving'
  },
  {
    status: 'Available to book',
    title: 'Kecapil Hat Weaving',
    meta: 'From EUR 75 for up to 3 people / EUR 25 per additional guest',
    points: [
      'Learn how kecapil hat forms are built from woven natural materials',
      'Shape a handmade piece with step-by-step guidance',
      'Enjoy a traditional drink and plate of traditional snacks during the session',
      'Take home your woven work or arrange collection if finishing time is needed'
    ],
    cta: 'Book Hat Weaving'
  },
  {
    status: 'Available to book',
    title: 'Culinary Classes',
    meta: 'From EUR 75 for up to 3 people / EUR 25 per additional guest',
    points: [
      'Cook with a Traditional Culinary Keeper using local ingredients',
      'Learn the story, preparation, and hospitality around the dish',
      'Enjoy a traditional drink and plate of traditional snacks during the session',
      'Share what you make at LAKU or plan a private group session'
    ],
    cta: 'Book a Culinary Class'
  },
  {
    status: 'Available by request',
    title: 'Batik Wax Lines',
    meta: 'From EUR 75 for up to 3 people / EUR 25 per additional guest',
    points: [
      'Draw wax lines with a Batik Culture Keeper',
      'Learn motif meaning and cloth preparation',
      'Enjoy a traditional drink and plate of traditional snacks during the session',
      'Take home a small batik work'
    ],
    cta: 'Request Batik'
  },
  {
    status: 'Available by request',
    title: 'Pottery',
    meta: 'From EUR 75 for up to 3 people / EUR 25 per additional guest',
    points: [
      'Shape clay with a Pottery Culture Keeper',
      'Learn basic form, texture, and hand-building techniques',
      'Enjoy a traditional drink and plate of traditional snacks during the session',
      'Take home your piece or arrange collection after drying and firing'
    ],
    cta: 'Request Pottery'
  },
  {
    status: 'Available by request',
    title: 'Rattan and Bamboo',
    meta: 'From EUR 75 for up to 3 people / EUR 25 per additional guest',
    points: [
      'Work with rattan, bamboo, or woven patterns guided by a Culture Keeper',
      'Practice simple structures and material handling',
      'Enjoy a traditional drink and plate of traditional snacks during the session',
      'Take home a handmade woven piece when the format allows'
    ],
    cta: 'Request Rattan or Bamboo'
  }
]

const fits = [
  { title: 'Couples', copy: 'A relaxed cultural date, honeymoon stop, or quiet alternative to another beach or dinner plan.' },
  { title: 'Families with young children', copy: 'Shorter hands-on formats can be arranged when parents share ages and timing in advance.' },
  { title: 'Older children and teens', copy: 'A screen-free way to learn craft, food, patience, and Indonesian cultural context through making.' },
  { title: 'Solo travelers and nomads', copy: 'A purposeful break from surf, work, and travel routines, with direct connection to local makers.' },
  { title: 'Schools, retreats, and companies', copy: 'Private Culture Keeper-led programs can be shaped around learning goals, group size, and schedule.' }
]

const steps = [
  { kicker: 'Step 1', title: 'Share your plan', copy: 'Send your preferred date, group size, ages, language needs, and which workshop interests you.' },
  { kicker: 'Step 2', title: 'Confirm the booking', copy: 'LAKU confirms Culture Keeper availability, materials, and the EUR 75 minimum booking for up to 3 people, plus EUR 25 per additional guest.' },
  { kicker: 'Step 3', title: 'Arrive and make', copy: 'Come to Mawun ready to create by hand, ask questions, and enjoy the included traditional drink and snack plate.' }
]

const faqs = [
  { question: 'Do I need to book in advance?', answer: 'Advance inquiry is recommended so LAKU can prepare the right Culture Keeper, materials, timing, and group setup.' },
  { question: 'How much does a workshop cost?', answer: 'The minimum booking is EUR 75 and covers up to 3 people. Additional guests are EUR 25 each.' },
  { question: 'What is included in a workshop booking?', answer: 'Each booking includes Culture Keeper guidance, workshop materials, a traditional choice of drink, and a plate of traditional snacks.' },
  { question: 'How long does a workshop take?', answer: 'Workshops are paced without rush. Most take about half a day, around 3-4 hours, while full-day formats can be arranged depending on participant availability.' },
  { question: 'What should we bring?', answer: 'Wear comfortable clothes and arrive ready to use your hands. LAKU provides water, a traditional drink, and traditional snacks.' },
  { question: 'What happens if it rains?', answer: 'LAKU has a fully covered indoor space with AC and fans, plus a covered terrace for outdoor seating, so workshops can continue comfortably in rainy weather.' },
  { question: 'Are LAKU workshops suitable for beginners?', answer: 'Yes. Workshops are guided step by step and can be adjusted for first-time makers, families, and private groups.' },
  { question: 'Can children join the workshops?', answer: 'Yes, depending on the workshop and age. Share each child age when inquiring so LAKU can recommend a comfortable format.' },
  { question: 'Can we take home what we make?', answer: 'Many workshops include a handmade piece or clear take-home outcome. Some materials may need drying, finishing, or later collection.' },
  { question: 'Where is LAKU Culture?', answer: 'LAKU Culture is in Mawun, South Lombok, positioned between Kuta Lombok and Selong Belanak.' },
  { question: 'How do we contact LAKU?', answer: 'Use the inquiry form on the website or message LAKU on WhatsApp at https://wa.me/6285215622162 with your dates, group size, ages, and workshop interests.' },
  { question: 'Can LAKU host private group workshops?', answer: 'Yes. LAKU can plan private cultural workshops for families, schools, companies, retreats, hotels, and travel partners.' }
]

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  '@id': `${canonicalUrl}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: 'Lombok Cultural Workshops', item: canonicalUrl }
  ]
}

const offerSchema = workshops.map((workshop) => ({
  '@type': 'Offer',
  name: workshop.title,
  category: 'Indonesian cultural workshop',
  areaServed: 'Lombok, Indonesia',
  price: '75',
  priceCurrency: 'EUR',
  description: 'Minimum booking covers up to 3 people. Additional guests are EUR 25 each. Includes a traditional drink and traditional snacks.',
  availability: 'https://schema.org/InStock',
  url: canonicalUrl
}))

const webPageSchema = {
  '@type': 'WebPage',
  '@id': `${canonicalUrl}#webpage`,
  url: canonicalUrl,
  name: page.title,
  description: page.description,
  isPartOf: { '@id': `${siteUrl}/#website` },
  about: { '@id': `${siteUrl}/#organization` },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: pageImage,
    width: heroImageSize.width,
    height: heroImageSize.height,
    caption: 'Culture Keeper workshop at LAKU Culture in Mawun, Lombok'
  },
  breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'LAKU Culture workshops',
    itemListElement: offerSchema
  },
  inLanguage: 'en-ID'
}

const faqSchema = {
  '@type': 'FAQPage',
  '@id': `${canonicalUrl}#faq`,
  mainEntity: faqs.map((item) => ({
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
    { property: 'og:image:alt', content: 'Culture Keeper workshop at LAKU Culture in Mawun, Lombok' },
    { property: 'og:image:width', content: String(heroImageSize.width) },
    { property: 'og:image:height', content: String(heroImageSize.height) },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: pageImage }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'preload', as: 'image', href: '/images/laku/optimized/hero-workshop.webp', fetchpriority: 'high' },
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

<style scoped>
.workshops-page{--ink:#1a2118;--muted:#66715f;--forest:#253f2f;--leaf:#537b45;--gold:#c99342;--clay:#9f5135;--paper:#fffaf0;--cream:#f3ead8;--line:rgba(37,63,47,.15);--shadow:0 24px 80px rgba(37,63,47,.18);margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.5}.workshops-page *{box-sizing:border-box}.workshops-page a{color:inherit;text-decoration:none}.shell{width:min(1160px,calc(100% - 40px));margin:0 auto}.nav{position:fixed;top:0;left:0;right:0;z-index:20;color:white;background:rgba(37,63,47,.88);border-bottom:1px solid rgba(255,255,255,.16);backdrop-filter:blur(18px)}.nav-inner{min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand-logo{display:block;width:112px;height:42px;object-fit:contain}.nav-links{display:flex;gap:22px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.nav-links a{opacity:.84}.nav-links a:hover{opacity:1}.nav-cta,.button{display:inline-flex;align-items:center;justify-content:center;border-radius:4px;font-weight:800}.nav-cta{min-height:38px;padding:0 16px;background:var(--gold);color:#21180b;font-size:13px}.button{min-height:50px;padding:0 22px;border:1px solid transparent;background:var(--gold);color:#21180b}.button.secondary{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.36);color:white}.button.dark{margin-top:26px;background:var(--forest);color:white}.hero{min-height:86vh;display:grid;align-items:end;padding:118px 0 58px;color:white;background:linear-gradient(90deg,rgba(21,32,23,.92),rgba(21,32,23,.58) 54%,rgba(21,32,23,.2)),linear-gradient(0deg,rgba(21,32,23,.82),rgba(21,32,23,.08) 46%),url('/images/laku/optimized/hero-workshop.webp') center/cover}.hero-inner{max-width:930px}.eyebrow{margin:0 0 16px;color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.dark-text{color:var(--clay)}h1,h2,h3{margin:0;letter-spacing:0;line-height:1.04}h1,h2{font-family:Fraunces,Georgia,serif}h1{max-width:920px;font-size:clamp(46px,6.4vw,88px);font-weight:760}h2{font-size:clamp(31px,4vw,54px);font-weight:650;color:var(--forest)}h3{font-size:23px;color:var(--forest)}.hero-lead{max-width:790px;margin:24px 0 0;color:rgba(255,255,255,.86);font-size:clamp(18px,2vw,22px)}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}.intro-section,.workshop-section,.fit-section,.process-section,.keeper-section,.faq-section,.cta-section{padding:92px 0}.intro-section,.fit-section,.faq-section{background:var(--cream)}.intro-grid,.keeper-layout,.fit-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:54px;align-items:center}.image-frame{min-height:520px;margin:0;border-radius:8px;overflow:hidden;box-shadow:var(--shadow);background:var(--cream)}.image-frame.tall{min-height:600px}.image-frame img{display:block;width:100%;height:520px;object-fit:cover}.image-frame.tall img{height:600px}.intro-copy{padding:40px;background:var(--paper);border:1px solid var(--line);border-radius:8px}.intro-copy p,.section-head p,.workshop-card li,.fit-list p,.step-card p,.keeper-layout p,.faq-card p{color:var(--muted);font-size:18px}.quick-facts{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.quick-facts span{padding:9px 12px;border:1px solid var(--line);border-radius:4px;background:white;color:var(--forest);font-size:13px;font-weight:800}.section-head{max-width:780px;margin:0 0 42px}.section-head.centered{margin:0 auto 46px;text-align:center}.workshop-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.workshop-card,.faq-card,.step-card,.fit-list article{padding:28px;border:1px solid var(--line);border-radius:8px;background:white}.workshop-card{min-height:430px;display:flex;flex-direction:column}.workshop-card span,.step-card span{display:block;margin-bottom:14px;color:var(--clay);font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.workshop-card .meta{margin:10px 0 0;color:var(--clay);font-size:13px;font-weight:800}.workshop-card ul{padding-left:18px;margin:22px 0;color:var(--muted)}.workshop-card li{margin:9px 0}.text-link{margin-top:auto;color:var(--forest);font-weight:900}.fit-grid{align-items:start}.fit-list{display:grid;gap:12px}.fit-list article{min-height:150px}.process-section,.cta-section{background:var(--forest);color:white}.process-section h2,.process-section h3,.cta-panel h2{color:white}.process-section .section-head p,.process-section .eyebrow,.cta-section .eyebrow{color:#f1c77c}.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.step-card{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.16)}.step-card p{color:rgba(255,255,255,.75)}.keeper-layout p{max-width:610px}.faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.faq-card{min-height:190px}.cta-panel{display:flex;align-items:center;justify-content:space-between;gap:28px}.cta-panel h2{max-width:760px}.workshops-page footer{padding:34px 0;background:#17261c;color:rgba(255,255,255,.72)}.footer-inner{display:flex;justify-content:space-between;gap:18px;align-items:center}.footer-brand{display:grid;gap:6px}.footer-brand address{font-style:normal;color:rgba(255,255,255,.6)}.footer-logo{display:block;width:104px;height:40px;object-fit:contain}.footer-socials{display:flex;gap:16px;align-items:center}.footer-inner a{font-weight:700;color:white}@media (max-width:980px){.nav-links{display:none}.intro-grid,.keeper-layout,.fit-grid,.workshop-grid,.steps-grid,.faq-grid{grid-template-columns:1fr}.hero{min-height:auto;padding-top:120px}.image-frame,.image-frame.tall{min-height:420px}.image-frame img,.image-frame.tall img{height:420px}.cta-panel{align-items:flex-start;flex-direction:column}}@media (max-width:640px){.shell{width:min(100% - 28px,1160px)}.nav-inner{min-height:64px}h1{font-size:43px}.hero-actions,.button{width:100%}.intro-section,.workshop-section,.fit-section,.process-section,.keeper-section,.faq-section,.cta-section{padding:72px 0}.intro-copy,.workshop-card,.faq-card,.step-card,.fit-list article{padding:26px}.workshop-card{min-height:auto}.footer-inner{align-items:flex-start;flex-direction:column}}
</style>
