<template>
  <div class="laku-page">
    <nav class="nav" aria-label="Laku navigation">
      <div class="shell nav-inner">
        <NuxtLink class="brand" to="/" aria-label="Laku home">
          <img class="brand-logo" src="/images/laku/Laku logo.png" alt="LAKU" width="2172" height="724" />
        </NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/visit">Visit LAKU</NuxtLink>
          <NuxtLink to="/workshops">Lombok Workshops</NuxtLink>
          <NuxtLink to="/apprenticeship">Apprenticeship</NuxtLink>
          <NuxtLink to="/products">Products</NuxtLink>
          <NuxtLink to="/faq">FAQ</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </div>
        <a class="nav-cta" href="#inquiry">Plan a Visit</a>
      </div>
    </nav>

    <header class="hero">
      <div class="shell hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Mawun, Lombok</p>
          <h1>LAKU Culture Lombok: Indonesian Cultural Workshops and Living Experiences</h1>
          <p class="hero-lead">
            Visit LAKU Culture in Mawun, Lombok for hands-on Indonesian cultural
            workshops, traditional craft experiences, culinary classes, and deeper
            apprenticeship programs led by local Culture Keepers.
          </p>
          <div class="hero-actions">
            <NuxtLink class="button" to="/workshops">Book a Lombok Workshop</NuxtLink>
            <NuxtLink class="button secondary" to="/apprenticeship">Apply for Cultural Apprenticeship</NuxtLink>
            <NuxtLink class="text-link" to="/visit">Plan Your Visit</NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section id="meaning" class="meaning-section">
        <div class="shell meaning-grid">
          <div>
            <p class="eyebrow dark-text">What does Laku mean?</p>
            <h2>Culture expressed through daily practice.</h2>
          </div>
          <div class="meaning-copy">
            <p>
              In Indonesian philosophy, <strong>laku</strong> means the way one lives
              and practices life. It is not merely knowledge. It is drinking together,
              making with one's hands, listening to stories, sharing food, preserving
              traditions, and passing wisdom from one generation to the next.
            </p>
            <p>
              At LAKU Culture, Indonesia is not observed from a distance. It is lived
              through workshops, apprenticeships, food, craft, and conversation.
            </p>
          </div>
        </div>
      </section>

      <section class="intro-band">
        <div class="shell intro-layout">
          <figure class="image-frame">
            <img
              src="/images/laku/optimized/craft-detail.webp"
              alt="Hands-on Indonesian craft workshop detail at LAKU Culture in Mawun, Lombok"
              width="1200"
              height="1600"
              loading="lazy"
            />
          </figure>
          <div class="intro-card">
            <p class="eyebrow dark-text">Inside LAKU</p>
            <h2>Visitors do not just watch Indonesian culture. They enter its rhythm.</h2>
            <p>
              Culture Keepers are present during opening hours, practicing their craft,
              creating handmade products, demonstrating techniques, hosting cultural
              workshops, and sharing the stories behind their traditions.
            </p>
            <p>
              There is always something happening: batik wax lines, bamboo strips,
              clay taking shape, rattan patterns, woven fibers, traditional drinks,
              conversation, and music.
            </p>
          </div>
        </div>
      </section>

      <section id="visit" class="pathway-section">
        <div class="shell">
          <div class="section-head centered">
            <p class="eyebrow">Visit LAKU</p>
            <h2>Choose your cultural experience in Lombok.</h2>
            <p>
              Every guest can meet LAKU Culture at the level that fits their curiosity,
              travel schedule, and commitment.
            </p>
          </div>

          <div class="pathway-grid">
            <article v-for="level in levels" :key="level.title" class="pathway-card">
              <span>{{ level.kicker }}</span>
              <h3>{{ level.title }}</h3>
              <p>{{ level.copy }}</p>
              <a :href="level.href">{{ level.cta }}</a>
            </article>
          </div>
        </div>
      </section>

      <section id="workshops" class="workshop-section">
        <div class="shell">
          <div class="section-head values-head">
            <div>
              <p class="eyebrow">Create with Culture Keepers</p>
              <h2>Indonesian cultural workshops from EUR 75 for up to 3 people.</h2>
            </div>
            <p>
              Create something by hand with a Culture Keeper in Mawun, Lombok. Each
              workshop includes materials, a traditional drink, and a plate of traditional
              snacks. The minimum booking is EUR 75 for up to 3 people, then EUR 25 for
              each additional guest.
            </p>
          </div>

          <div class="workshop-grid">
            <article v-for="workshop in workshops" :key="workshop.title" class="workshop-card">
              <div>
                <p>{{ workshop.status }}</p>
                <h3>{{ workshop.title }}</h3>
                <span>{{ workshop.meta }}</span>
              </div>
              <ul>
                <li v-for="point in workshop.points" :key="point">{{ point }}</li>
              </ul>
              <a class="button small" href="#inquiry">{{ workshop.cta }}</a>
            </article>
          </div>
        </div>
      </section>

      <section id="apprenticeship" class="apprentice-section">
        <div class="shell apprentice-panel">
          <div>
            <p class="eyebrow">Living Culture Apprenticeship</p>
            <h2>Practice Indonesian craft with LAKU Culture Keepers in Lombok.</h2>
            <p>
              For deeper learners, LAKU offers a minimum 10-day and up to 3-month
              apprenticeship with daily traditional craft practice guided by an experienced
              Culture Keeper. Choose the apprenticeship only, or add two meals per day,
              accommodation, laundry support, and the weekly rhythm of LAKU life.
            </p>
          </div>
          <div class="program-grid">
            <article v-for="program in programs" :key="program.title">
              <span>{{ program.kicker }}</span>
              <strong>{{ program.title }}</strong>
              <p>{{ program.copy }}</p>
            </article>
          </div>
          <NuxtLink class="button" to="/apprenticeship#apply">Apply for Cultural Apprenticeship</NuxtLink>
        </div>
      </section>

      <section id="keepers" class="keepers-section">
        <div class="shell">
          <div class="section-head centered">
            <p class="eyebrow dark-text">Culture Keepers</p>
            <h2>Meet the Culture Keepers behind each workshop.</h2>
            <p>
              Meet the people who carry these practices through daily making,
              conversation, workshops, products, and longer apprenticeship programs.
            </p>
          </div>
          <div class="keeper-grid">
            <article v-for="keeper in keepers" :key="keeper.tradition" class="keeper-card" :class="{ 'keeper-card-combined': keeper.items }">
              <img v-if="keeper.image" class="keeper-photo" :src="keeper.image" :alt="keeper.alt" :width="imageDimensions[keeper.image]?.width" :height="imageDimensions[keeper.image]?.height" loading="lazy" />
              <span>{{ keeper.tradition }}</span>
              <h3>{{ keeper.name }}</h3>
              <p>{{ keeper.copy }}</p>
              <p v-if="keeper.description" class="keeper-description">{{ keeper.description }}</p>
              <div v-if="keeper.items" class="keeper-list">
                <p v-for="item in keeper.items" :key="item.title">
                  <strong>{{ item.title }}</strong>
                  {{ item.copy }}
                </p>
              </div>
              <a href="#inquiry">{{ keeper.cta }}</a>
            </article>
          </div>
        </div>
      </section>

      <section id="products" class="products-section">
        <div class="shell product-layout">
          <div>
            <p class="eyebrow">Handmade products</p>
            <h2>Handmade Indonesian products with the maker's story attached.</h2>
          </div>
          <div class="product-card">
            <h3>Know the maker behind the piece.</h3>
            <ul>
              <li>Meet the Culture Keeper behind each handmade piece</li>
              <li>See the making process and the tradition carried through it</li>
              <li>Understand the local materials and time behind the craft</li>
              <li>Plan a shop visit, choose a handmade piece, or request a custom order</li>
            </ul>
            <NuxtLink class="button secondary dark" to="/products">Explore Handmade Products</NuxtLink>
          </div>
        </div>
      </section>

      <section id="groups" class="groups-section">
        <div class="shell">
          <div class="section-head values-head">
            <div>
              <p class="eyebrow dark-text">Private and group programs</p>
              <h2>Private cultural programs for groups in Lombok.</h2>
            </div>
            <p>
              LAKU can serve schools, companies, hotels, retreats, families, cultural
              delegations, and travel partners with private programs built around living
              traditions.
            </p>
          </div>
          <div class="service-grid">
            <article v-for="service in services" :key="service" class="service-card">
              {{ service }}
            </article>
          </div>
        </div>
      </section>

      <section id="faq" class="faq-section">
        <div class="shell">
          <div class="section-head centered">
            <p class="eyebrow dark-text">FAQ</p>
            <h2>Questions about visiting LAKU Culture in Lombok.</h2>
            <p>
              Practical details for travelers, families, schools, retreats, hotels,
              and partners planning cultural workshops or private programs.
            </p>
          </div>
          <div class="faq-grid">
            <article v-for="item in faqs" :key="item.question" class="faq-card">
              <h3>{{ item.question }}</h3>
              <p>{{ item.answer }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="inquiry" class="inquiry-section">
        <div class="shell inquiry-grid">
          <div>
            <p class="eyebrow">Plan with us</p>
            <h2>Plan a LAKU Culture visit, workshop, or group program.</h2>
            <p>
              Ask about workshops, apprenticeships, group visits, handmade products,
              made-to-order pieces, or custom cultural programs. Share your dates and group
              details, and the LAKU team will follow up with availability.
            </p>
          </div>

          <form class="inquiry-form" @submit.prevent="handleInquiry">
            <label>
              Name
              <input v-model="form.name" required type="text" autocomplete="name" />
            </label>
            <div class="form-row">
              <label>
                Email
                <input v-model="form.email" type="email" autocomplete="email" />
              </label>
              <label>
                WhatsApp
                <input v-model="form.whatsapp" type="tel" autocomplete="tel" />
              </label>
            </div>
            <label>
              I am interested in
              <select v-model="form.interest" required>
                <option value="">Choose one</option>
                <option>Book a workshop</option>
                <option>Apply for apprenticeship</option>
                <option>Plan a group program</option>
                <option>Ask about products or custom orders</option>
                <option>Custom cultural program</option>
              </select>
            </label>
            <div class="form-row">
              <label>
                Preferred dates
                <div ref="datePickerRef" class="date-picker">
                  <button class="date-picker-trigger" type="button" @click="toggleDatePicker">
                    {{ selectedDateLabel }}
                  </button>
                  <div v-if="isDatePickerOpen" class="date-picker-panel">
                    <div class="date-picker-head">
                      <button type="button" aria-label="Previous month" @click="goToPreviousMonth">&lt;</button>
                      <strong>{{ monthLabel }}</strong>
                      <button type="button" aria-label="Next month" @click="goToNextMonth">&gt;</button>
                    </div>
                    <div class="date-picker-weekdays">
                      <span v-for="day in weekdays" :key="day">{{ day }}</span>
                    </div>
                    <div class="date-picker-days">
                      <button
                        v-for="day in calendarDays"
                        :key="day.key"
                        type="button"
                        :class="{ muted: !day.inCurrentMonth, selected: selectedDates.includes(day.value) }"
                        @click="toggleSelectedDate(day.value)"
                      >
                        {{ day.label }}
                      </button>
                    </div>
                    <div v-if="selectedDates.length" class="selected-dates">
                      <button v-for="date in selectedDates" :key="date" type="button" @click="toggleSelectedDate(date)">
                        {{ formatShortDate(date) }} x
                      </button>
                    </div>
                    <div class="date-picker-actions">
                      <button type="button" @click="closeDatePicker">Done</button>
                    </div>
                  </div>
                </div>
              </label>
              <label>
                Group size
                <input v-model="form.groupSize" type="text" placeholder="1" />
              </label>
            </div>
            <label>
              Message
              <textarea v-model="form.message" rows="4" placeholder="Tell us what you want to experience." />
            </label>
            <button class="button" type="submit" :disabled="isSubmitting">{{ isSubmitting ? 'Sending...' : 'Send Inquiry' }}</button>
            <p v-if="submitStatus" class="form-status" :class="submitStatus">{{ submitMessage }}</p>
          </form>
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
          <NuxtLink to="/blog">Blog</NuxtLink>
        </div>
      </div>
    </footer>

    <Transition name="guest-toast">
      <aside v-if="activeGuestActivity" class="guest-activity" aria-live="polite">
        <button class="guest-activity-close" type="button" aria-label="Dismiss recent guest activity" @click="dismissGuestActivity">
          x
        </button>
        <span class="guest-activity-kicker">Recent LAKU guest</span>
        <p>{{ activeGuestActivity.copy }}</p>
        <time>{{ activeGuestActivity.age }}</time>
        <a href="#inquiry" @click="handleGuestActivityCta">Ask About Your Visit</a>
      </aside>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { audienceFaqs, defaultSeoImage, imageDimensions } from '~/data/lakuSeo'

definePageMeta({ layout: false })

const siteUrl = 'https://lakuculture.id/'
const seoTitle = 'LAKU Culture Lombok | Workshops, Apprenticeships & Handmade Craft'
const seoDescription = 'Visit LAKU Culture in Mawun, Lombok for Indonesian cultural workshops, living culture apprenticeships, handmade craft, culinary classes, and private group programs.'
const seoImage = `${siteUrl}${defaultSeoImage.slice(1)}`
const seoImageSize = imageDimensions[defaultSeoImage]
const faqs = audienceFaqs


const workshopOfferDetails = {
  price: '75',
  priceCurrency: 'EUR',
  description: 'Minimum booking covers up to 3 people. Additional guests are EUR 25 each. Includes materials, a traditional drink, and a plate of traditional snacks.'
}

const offerCatalogSchema = {
  '@type': 'OfferCatalog',
  '@id': `${siteUrl}#cultural-programs`,
  name: 'LAKU Culture Programs',
  itemListElement: [
    { '@type': 'Offer', name: 'Nyensek Weaving Workshop', category: 'Indonesian cultural workshop', areaServed: 'Lombok, Indonesia', ...workshopOfferDetails },
    { '@type': 'Offer', name: 'Kecapil Hats Weaving Workshop', category: 'Indonesian cultural workshop', areaServed: 'Lombok, Indonesia', ...workshopOfferDetails },
    { '@type': 'Offer', name: 'Culinary Classes', category: 'Indonesian culinary class', areaServed: 'Lombok, Indonesia', ...workshopOfferDetails },
    { '@type': 'Offer', name: 'Living Culture Apprenticeship', category: 'Cultural education program', areaServed: 'Indonesia' },
    { '@type': 'Offer', name: 'Private Group Cultural Programs', category: 'Private cultural program', areaServed: 'Lombok, Indonesia' },
    { '@type': 'Offer', name: 'Handmade Indonesian Products', category: 'Handmade craft', areaServed: 'Indonesia' }
  ]
}

const organizationSchema = {
  '@type': ['LocalBusiness', 'TouristAttraction'],
  '@id': `${siteUrl}#organization`,
  name: 'LAKU Culture',
  alternateName: 'LAKU',
  url: siteUrl,
  logo: `${siteUrl}images/laku/Laku%20logo.png`,
  image: [seoImage, `${siteUrl}images/laku/optimized/craft-detail.webp`, `${siteUrl}images/laku/optimized/table-offering.webp`],
  description: seoDescription,
  slogan: "A Home for Indonesia's Living Culture",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mawun',
    addressRegion: 'Lombok',
    addressCountry: 'ID'
  },
  areaServed: ['Mawun', 'Lombok', 'Indonesia'],
  telephone: '+6285215622162',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+6285215622162',
    contactType: 'customer service',
    availableLanguage: ['English', 'Indonesian']
  },
  knowsAbout: [
    'Indonesian culture',
    'Lombok weaving',
    'Nyensek weaving',
    'Batik',
    'Pottery',
    'Bamboo craft',
    'Rattan craft',
    'Indonesian culinary traditions'
  ],
  sameAs: [
    'https://facebook.com/LakuCulture.id',
    'https://instagram.com/lakuculture.id/'
  ],
  hasOfferCatalog: { '@id': `${siteUrl}#cultural-programs` }
}

const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${siteUrl}#website`,
  name: 'LAKU Culture',
  url: siteUrl,
  publisher: { '@id': `${siteUrl}#organization` },
  inLanguage: 'en-ID'
}

const webPageSchema = {
  '@type': 'WebPage',
  '@id': `${siteUrl}#webpage`,
  url: siteUrl,
  name: seoTitle,
  description: seoDescription,
  isPartOf: { '@id': `${siteUrl}#website` },
  about: { '@id': `${siteUrl}#organization` },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: seoImage,
    width: seoImageSize.width,
    height: seoImageSize.height,
    caption: 'Culture Keeper workshop at LAKU Culture in Mawun, Lombok'
  },
  breadcrumb: { '@id': `${siteUrl}#breadcrumb` },
  inLanguage: 'en-ID'
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  '@id': `${siteUrl}#breadcrumb`,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl
    }
  ]
}

const faqSchema = {
  '@type': 'FAQPage',
  '@id': `${siteUrl}#faq`,
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [organizationSchema, offerCatalogSchema, websiteSchema, webPageSchema, breadcrumbSchema, faqSchema]
}

useHead({
  title: seoTitle,
  meta: [
    { name: 'description', content: seoDescription },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { name: 'theme-color', content: '#253f2f' },
    { property: 'og:title', content: seoTitle },
    { property: 'og:description', content: seoDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: siteUrl },
    { property: 'og:image', content: seoImage },
    { property: 'og:image:alt', content: 'Culture Keeper workshop at LAKU Culture in Mawun, Lombok' },
    { property: 'og:image:width', content: String(seoImageSize.width) },
    { property: 'og:image:height', content: String(seoImageSize.height) },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoTitle },
    { name: 'twitter:description', content: seoDescription },
    { name: 'twitter:image', content: seoImage }
  ],
  link: [
    { rel: 'canonical', href: siteUrl },
    { rel: 'preload', as: 'image', href: defaultSeoImage, fetchpriority: 'high' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,650;9..144,760&family=Inter:wght@400;500;600;700;800&display=swap' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(structuredData)
    }
  ]
})

const levels = [
  { kicker: 'Level 1', title: 'Observe', copy: 'Visitors are welcome to watch, ask questions, enjoy the atmosphere, and meet the active Culture Keeper for free.', cta: 'Plan Your Visit', href: '#inquiry' },
  { kicker: 'Level 2', title: 'Experience', copy: 'A complimentary hands-on introduction gives guests a few minutes with bamboo, clay, batik, rattan, weaving, or culinary practice.', cta: 'Ask About Experiences', href: '#inquiry' },
  { kicker: 'Level 3', title: 'Create', copy: 'Paid workshops guide visitors through a complete handmade piece with a clear duration, price, take-home outcome, and story.', cta: 'Book a Workshop', href: '#workshops' },
  { kicker: 'Level 4', title: 'Apprentice', copy: 'Longer programs invite committed learners into daily practice with a Culture Keeper for a minimum of 10 days and up to 3 months.', cta: 'Apply Now', href: '/apprenticeship#apply' }
]

const workshops = [
  { status: 'Available to book', title: 'Nyensek Weaving', meta: 'From EUR 75 for up to 3 people / EUR 25 per additional guest', points: ['Weave with a Culture Keeper using traditional Lombok techniques', 'Create a small textile piece through guided hands-on practice', 'Enjoy a traditional drink and plate of traditional snacks during the session', 'Take home the piece you make and the story behind the tradition'], cta: 'Book This Workshop' },
  { status: 'Available to book', title: 'Kecapil Hats Weaving', meta: 'From EUR 75 for up to 3 people / EUR 25 per additional guest', points: ['Learn how kecapil hat forms are built from woven natural materials', 'Shape a handmade piece with step-by-step guidance', 'Enjoy a traditional drink and plate of traditional snacks during the session', 'Take home your woven work or arrange collection if finishing time is needed'], cta: 'Book This Workshop' },
  { status: 'Available to book', title: 'Culinary Classes', meta: 'From EUR 75 for up to 3 people / EUR 25 per additional guest', points: ['Cook with a Traditional Culinary Keeper using local ingredients', 'Learn the story, preparation, and hospitality around the dish', 'Enjoy a traditional drink and plate of traditional snacks during the session', 'Share what you make at LAKU or plan a private group session'], cta: 'Book This Workshop' },
  { status: 'Available by request', title: 'Batik Wax Lines', meta: 'From EUR 75 for up to 3 people / EUR 25 per additional guest', points: ['Draw wax lines with a Batik Culture Keeper', 'Learn motif meaning and cloth preparation', 'Enjoy a traditional drink and plate of traditional snacks during the session', 'Take home a small batik work'], cta: 'Request This Workshop' },
  { status: 'Available by request', title: 'Pottery', meta: 'From EUR 75 for up to 3 people / EUR 25 per additional guest', points: ['Shape clay with a Pottery Culture Keeper', 'Learn basic form, texture, and hand-building techniques', 'Enjoy a traditional drink and plate of traditional snacks during the session', 'Take home your piece or arrange collection after drying and firing'], cta: 'Request This Workshop' },
  { status: 'Available by request', title: 'Rattan', meta: 'From EUR 75 for up to 3 people / EUR 25 per additional guest', points: ['Work with rattan patterns guided by a Culture Keeper', 'Practice simple weaving structures and material handling', 'Enjoy a traditional drink and plate of traditional snacks during the session', 'Take home a handmade woven piece'], cta: 'Request This Workshop' }
]

const programs = [
  { kicker: 'Duration', title: '10 days to 3 months', copy: 'Start with the minimum 10-day commitment or stay longer as your craft practice deepens.' },
  { kicker: 'Option 1', title: 'EUR 20 per day', copy: 'Apprenticeship, daily Culture Keeper practice, materials, and weekly side activities.' },
  { kicker: 'Option 2', title: 'EUR 37 per day', copy: 'Apprenticeship plus accommodation, two meals per day, laundry, and weekly side activities.' },
  { kicker: 'Completion', title: 'Mastery letter', copy: 'Receive a Culture Keeper and LAKU letter describing your craft focus and level reached.' }
]

const keepers = [
  {
    tradition: 'Textile Weaving',
    name: 'Nyensek Weaving Culture Keeper',
    copy: 'Ibu Wahyu',
    description: 'Introduces Nyensek weaving through traditional Lombok textile patterns, loom practice, and the stories held in each thread.',
    image: '/images/laku/20260810_111236.jpg',
    alt: 'Ibu Wahyu leading a Nyensek weaving workshop at LAKU Culture Lombok',
    cta: 'Learn with Ibu Wahyu'
  },
  {
    tradition: 'Natural-Fiber Weaving',
    name: 'Anyaman Culture Keeper',
    copy: 'Pak Yusuf',
    description: 'Introduces traditional anyaman through natural fibers, handwoven forms, and practical skills passed through daily making.',
    image: '/images/laku/20260816_090306.jpg',
    alt: 'Pak Yusuf teaching traditional anyaman natural-fiber weaving at LAKU Culture Lombok',
    cta: 'Learn with Pak Yusuf'
  },
  {
    tradition: 'Culinary',
    name: 'Traditional Culinary Keeper',
    copy: 'Ibu Noni',
    description: 'Introduces Indonesian drinks, spices, sweets, local cooking classes, and hospitality through taste.',
    image: '/images/laku/20251008_091302.jpg',
    alt: 'Ibu Noni preparing an Indonesian culinary class at LAKU Culture Lombok',
    cta: 'Learn with Ibu Noni'
  },
  {
    tradition: 'More Culture Keepers',
    name: 'Pottery, Bamboo, and Batik',
    copy: 'Learn with keepers across LAKU traditions.',
    items: [
      { title: 'Pottery', copy: 'Pottery Culture Keeper' },
      { title: 'Bamboo', copy: 'Bamboo Culture Keeper' },
      { title: 'Batik', copy: 'Batik Culture Keeper' }
    ],
    cta: 'Learn with our culture keepers'
  }
]

const services = [
  'School visits',
  'Corporate cultural workshops',
  'Private group workshops',
  'Family day programs',
  'Hotel and travel partner experiences',
  'Retreat cultural sessions',
  'Custom cultural delegations',
  'Made-to-order handmade pieces'
]

const guestActivities = [
  { id: "nyensek-germany", copy: "Anna from Germany booked a Nyensek weaving workshop.", age: "5h ago" },
  { id: "bamboo-australia", copy: "James from Australia asked about a handmade bamboo piece.", age: "9h ago" },
  { id: "cooking-singapore", copy: "Sofia from Singapore requested a local cooking class.", age: "1 day ago" },
  { id: "private-uk", copy: "Michael from the UK planned a private Culture Keeper visit.", age: "2 days ago" },
  { id: "hat-usa", copy: "Maya from the USA asked about a custom woven hat.", age: "3 days ago" },
  { id: "group-france", copy: "Camille from France requested a private group workshop.", age: "4 days ago" },
  { id: "school-japan", copy: "Yuki from Japan asked about a school culture visit.", age: "6 days ago" },
  { id: "family-netherlands", copy: "Noah from the Netherlands planned a family workshop at LAKU.", age: "1 week ago" }
] as const

type GuestActivity = (typeof guestActivities)[number]

const form = reactive({
  name: '',
  email: '',
  whatsapp: '',
  interest: '',
  groupSize: '',
  message: ''
})

type CalendarDay = {
  key: string
  value: string
  label: number
  inCurrentMonth: boolean
}

const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | ''>('')
const submitMessage = ref('')
const isDatePickerOpen = ref(false)
const datePickerRef = ref<HTMLElement | null>(null)
const activeGuestActivity = ref<GuestActivity | null>(null)
let guestActivityTimer: number | undefined
let guestActivityCycleTimer: number | undefined
const visibleMonth = ref(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
const selectedDates = ref<string[]>([])
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const guestActivitySessionCountKey = "laku-guest-activity-count"
const guestActivitySessionSeenKey = "laku-guest-activity-seen"
const guestActivityDismissPrefix = "laku-guest-activity-dismissed:"
const guestActivityCtaKey = "laku-guest-activity-cta"
const guestActivityCloseKey = "laku-guest-activity-closed"
const guestActivityDismissDays = 7
const guestActivityCtaSuppressDays = 14
const guestActivityCloseSuppressHours = 12
const guestActivityMaxPerSession = 4
const guestActivityCycleMs = 11000

const getStoredTimestamp = (key: string) => {
  if (!import.meta.client) return 0

  const value = window.localStorage.getItem(key)
  const timestamp = value ? Number(value) : 0
  return Number.isFinite(timestamp) ? timestamp : 0
}

const wasStoredRecently = (key: string, days: number) => {
  const timestamp = getStoredTimestamp(key)
  return timestamp > 0 && Date.now() - timestamp < days * 24 * 60 * 60 * 1000
}

const isInquiryVisible = () => {
  const inquiry = document.querySelector("#inquiry")
  if (!inquiry) return false

  const rect = inquiry.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

const getGuestActivitySessionCount = () => {
  if (!import.meta.client) return 0

  const value = Number(window.sessionStorage.getItem(guestActivitySessionCountKey) || 0)
  return Number.isFinite(value) ? value : 0
}

const getSeenGuestActivityIds = () => {
  if (!import.meta.client) return [] as string[]

  return (window.sessionStorage.getItem(guestActivitySessionSeenKey) || '').split(',').filter(Boolean)
}

const pickGuestActivity = () => {
  const seenIds = getSeenGuestActivityIds()
  const availableActivities = guestActivities.filter((activity) => {
    return !seenIds.includes(activity.id) && !wasStoredRecently(guestActivityDismissPrefix + activity.id, guestActivityDismissDays)
  })
  const activities = availableActivities.length ? availableActivities : [...guestActivities]
  const index = Math.floor(Math.random() * activities.length)
  return activities[index]
}

const scheduleNextGuestActivity = () => {
  if (!import.meta.client) return

  if (guestActivityCycleTimer) window.clearTimeout(guestActivityCycleTimer)
  guestActivityCycleTimer = window.setTimeout(() => {
    activeGuestActivity.value = null
    window.setTimeout(showGuestActivity, 260)
  }, guestActivityCycleMs)
}

const showGuestActivity = () => {
  if (!import.meta.client || activeGuestActivity.value) return
  if (getGuestActivitySessionCount() >= guestActivityMaxPerSession) return
  if (wasStoredRecently(guestActivityCtaKey, guestActivityCtaSuppressDays)) return
  if (wasStoredRecently(guestActivityCloseKey, guestActivityCloseSuppressHours / 24)) return
  if (submitStatus.value === "success" || isInquiryVisible()) return

  const activity = pickGuestActivity()
  activeGuestActivity.value = activity
  const seenIds = [...getSeenGuestActivityIds(), activity.id]
  window.sessionStorage.setItem(guestActivitySessionSeenKey, seenIds.join(','))
  window.sessionStorage.setItem(guestActivitySessionCountKey, String(getGuestActivitySessionCount() + 1))
  scheduleNextGuestActivity()
}

const dismissGuestActivity = () => {
  if (!activeGuestActivity.value || !import.meta.client) return

  window.localStorage.setItem(guestActivityDismissPrefix + activeGuestActivity.value.id, String(Date.now()))
  window.localStorage.setItem(guestActivityCloseKey, String(Date.now()))
  if (guestActivityCycleTimer) window.clearTimeout(guestActivityCycleTimer)
  activeGuestActivity.value = null
}

const handleGuestActivityCta = () => {
  if (import.meta.client) {
    window.localStorage.setItem(guestActivityCtaKey, String(Date.now()))
    if (guestActivityCycleTimer) window.clearTimeout(guestActivityCycleTimer)
  }

  activeGuestActivity.value = null
}

const handleGuestActivityScroll = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
  if (scrollableHeight <= 0) return
  if (window.scrollY / scrollableHeight >= 0.45) showGuestActivity()
}

const toDateValue = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const formatDisplayDate = (value: string, options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  const [year, month, day] = value.split('-').map(Number)
  return new Intl.DateTimeFormat('en', options).format(new Date(year, month - 1, day))
}

const formatShortDate = (value: string) => formatDisplayDate(value, { month: 'short', day: 'numeric' })

const selectedDateLabel = computed(() => {
  if (!selectedDates.value.length) return 'Flexible / choose dates'
  if (selectedDates.value.length === 1) return formatDisplayDate(selectedDates.value[0])
  return `${selectedDates.value.length} dates selected`
})

const monthLabel = computed(() => new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(visibleMonth.value))

const calendarDays = computed<CalendarDay[]>(() => {
  const year = visibleMonth.value.getFullYear()
  const month = visibleMonth.value.getMonth()
  const firstDay = new Date(year, month, 1)
  const startDate = new Date(firstDay)
  startDate.setDate(firstDay.getDate() - firstDay.getDay())

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + index)
    const value = toDateValue(date)

    return {
      key: value,
      value,
      label: date.getDate(),
      inCurrentMonth: date.getMonth() === month
    }
  })
})

const toggleDatePicker = () => {
  isDatePickerOpen.value = !isDatePickerOpen.value
}

const closeDatePicker = () => {
  isDatePickerOpen.value = false
}

const handleDatePickerOutsideClick = (event: MouseEvent) => {
  if (!isDatePickerOpen.value || !datePickerRef.value) return
  if (event.target instanceof Node && datePickerRef.value.contains(event.target)) return

  closeDatePicker()
}

const goToPreviousMonth = () => {
  visibleMonth.value = new Date(visibleMonth.value.getFullYear(), visibleMonth.value.getMonth() - 1, 1)
}

const goToNextMonth = () => {
  visibleMonth.value = new Date(visibleMonth.value.getFullYear(), visibleMonth.value.getMonth() + 1, 1)
}

const toggleSelectedDate = (value: string) => {
  if (selectedDates.value.includes(value)) {
    selectedDates.value = selectedDates.value.filter((date) => date !== value)
    return
  }

  selectedDates.value = [...selectedDates.value, value].sort()
}

const selectedDatesForSubmission = computed(() => selectedDates.value.map((date) => formatDisplayDate(date)).join(', '))

onMounted(() => {
  document.addEventListener('click', handleDatePickerOutsideClick)
  window.addEventListener("scroll", handleGuestActivityScroll, { passive: true })
  guestActivityTimer = window.setTimeout(showGuestActivity, 24000)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDatePickerOutsideClick)
  window.removeEventListener("scroll", handleGuestActivityScroll)
  if (guestActivityTimer) window.clearTimeout(guestActivityTimer)
  if (guestActivityCycleTimer) window.clearTimeout(guestActivityCycleTimer)
})

const handleInquiry = async () => {
  isSubmitting.value = true
  submitStatus.value = ''
  submitMessage.value = ''

  if (!form.email.trim() && !form.whatsapp.trim()) {
    submitStatus.value = 'error'
    submitMessage.value = 'Please add an email address or WhatsApp number so the LAKU team can reply.'
    isSubmitting.value = false
    return
  }

  try {
    await $fetch('/api/inquiry', {
      method: 'POST',
      body: { ...form, dates: selectedDatesForSubmission.value }
    })

    submitStatus.value = 'success'
    submitMessage.value = 'Thank you. The LAKU team received your inquiry and will follow up soon.'
    Object.assign(form, {
      name: '',
      email: '',
      whatsapp: '',
      interest: '',
      groupSize: '',
      message: ''
    })
    selectedDates.value = []
    isDatePickerOpen.value = false
    if (import.meta.client) {
      window.localStorage.setItem(guestActivityCtaKey, String(Date.now()))
      if (guestActivityCycleTimer) window.clearTimeout(guestActivityCycleTimer)
    }
    activeGuestActivity.value = null
  } catch {
    submitStatus.value = 'error'
    submitMessage.value = 'Sorry, the inquiry could not be sent. Please try again or contact LAKU directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.laku-page{--ink:#1a2118;--muted:#66715f;--forest:#253f2f;--leaf:#537b45;--gold:#c99342;--clay:#9f5135;--paper:#fffaf0;--cream:#f3ead8;--line:rgba(37,63,47,.15);--shadow:0 24px 80px rgba(37,63,47,.18);margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.5}.laku-page *{box-sizing:border-box}.laku-page a{color:inherit;text-decoration:none}.shell{width:min(1160px,calc(100% - 40px));margin:0 auto}.nav{position:fixed;top:0;left:0;right:0;z-index:20;color:white;background:rgba(37,63,47,.86);border-bottom:1px solid rgba(255,255,255,.16);backdrop-filter:blur(18px)}.nav-inner{min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center}.brand-logo{display:block;width:112px;height:42px;object-fit:contain}.nav-links{display:flex;gap:24px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.nav-links a{opacity:.84}.nav-links a:hover{opacity:1}.nav-cta{display:inline-flex;align-items:center;min-height:38px;padding:0 16px;border-radius:4px;background:var(--gold);color:#21180b;font-weight:800;font-size:13px}.button{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 22px;border-radius:4px;border:1px solid transparent;background:var(--gold);color:#21180b;font-weight:800;cursor:pointer}.button:disabled{opacity:.68;cursor:not-allowed}.button.secondary{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.36);color:white}.button.secondary.dark{background:var(--forest);color:white;border-color:var(--forest)}.button.small{min-height:44px;padding:0 16px;font-size:14px}.text-link{display:inline-flex;align-items:center;font-weight:800;color:white}.hero{min-height:94vh;display:grid;align-items:end;padding:118px 0 54px;color:white;background:linear-gradient(90deg,rgba(21,32,23,.92),rgba(21,32,23,.58) 52%,rgba(21,32,23,.12)),linear-gradient(0deg,rgba(21,32,23,.82),rgba(21,32,23,.04) 46%),url("/images/laku/optimized/hero-workshop.webp") center/cover}.hero-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:52px;align-items:end}.hero-copy{max-width:820px}.eyebrow{margin:0 0 16px;color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.dark-text{color:var(--clay)}.laku-page h1,.laku-page h2,.laku-page h3{margin:0;letter-spacing:0;line-height:1.03}.laku-page h1,.laku-page h2{font-family:Fraunces,Georgia,serif}.laku-page h1{font-size:clamp(50px,7vw,98px);font-weight:760;max-width:860px}.laku-page h2{font-size:clamp(34px,4.8vw,62px);font-weight:650;color:var(--forest)}.laku-page h3{font-size:24px;color:var(--forest)}.hero-lead{max-width:720px;margin:24px 0 0;color:rgba(255,255,255,.84);font-size:clamp(18px,2vw,22px)}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}.meaning-section{padding:100px 0}.meaning-grid{display:grid;grid-template-columns:.86fr 1.14fr;gap:70px;align-items:start}.meaning-copy{font-size:22px;color:var(--muted)}.meaning-copy p{margin:0 0 22px}.meaning-copy strong{color:var(--forest)}.intro-band,.pathway-section,.keepers-section,.groups-section,.faq-section,.inquiry-section{padding:96px 0}.intro-band,.visit-section{background:var(--cream)}.intro-layout,.split,.product-layout,.inquiry-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:54px;align-items:center}.image-frame{min-height:560px;margin:0;border-radius:8px;overflow:hidden;box-shadow:var(--shadow);background:var(--cream)}.image-frame img{display:block;width:100%;height:560px;object-fit:cover}.intro-card,.product-card,.inquiry-form{padding:40px;background:var(--paper);border:1px solid var(--line);border-radius:8px}.intro-card p,.section-copy{color:var(--muted);font-size:18px}.section-head{max-width:780px}.section-head.centered{margin:0 auto 48px;text-align:center}.section-head p{margin:16px 0 0;color:var(--muted);font-size:18px}.pathway-grid,.keeper-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.pathway-card,.keeper-card,.service-card{padding:26px;border:1px solid var(--line);border-radius:8px;background:white}.pathway-card{min-height:300px;display:flex;flex-direction:column}.keeper-card{min-height:420px;display:flex;flex-direction:column;overflow:hidden}.keeper-photo{width:calc(100% + 52px);height:230px;margin:-26px -26px 24px;object-fit:cover;background:var(--cream)}.keeper-card-combined{background:var(--forest);color:white}.keeper-card-combined h3{color:white}.keeper-card-combined span,.keeper-card-combined a{color:#f1c77c}.keeper-list{display:grid;gap:12px;margin:6px 0 18px}.keeper-list p{margin:0;padding:14px;border:1px solid rgba(255,255,255,.18);border-radius:6px;color:rgba(255,255,255,.78)}.keeper-list strong{display:block;margin-bottom:3px;color:white}.pathway-card span,.workshop-card p,.keeper-card span{color:var(--clay);font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.pathway-card p,.keeper-card p,.product-card li,.workshop-card li{color:var(--muted)}.keeper-card-combined>p{color:rgba(255,255,255,.72)}.pathway-card a,.keeper-card a{margin-top:auto;color:var(--forest);font-weight:800}.keeper-card.keeper-card-combined span,.keeper-card.keeper-card-combined a{color:#f1c77c}.workshop-section,.apprentice-section{padding:108px 0;background:var(--forest);color:white}.workshop-section h2,.workshop-section h3,.apprentice-section h2{color:white}.values-head{display:grid;grid-template-columns:.95fr 1.05fr;gap:54px;align-items:end;margin-bottom:42px}.values-head p{color:rgba(255,255,255,.72)}.groups-section .values-head p{color:var(--muted)}.workshop-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.workshop-card{min-height:380px;padding:28px;border:1px solid rgba(255,255,255,.18);border-radius:8px;background:rgba(255,255,255,.08);display:flex;flex-direction:column;gap:22px}.workshop-card span{color:rgba(255,255,255,.72)}.workshop-card ul,.product-card ul{padding-left:18px}.workshop-card li{color:rgba(255,255,255,.72);margin:8px 0}.workshop-card .button{margin-top:auto;align-self:flex-start}.apprentice-panel{padding:64px;border-radius:8px;background:linear-gradient(90deg,rgba(37,63,47,.9),rgba(37,63,47,.64)),url("/images/laku/optimized/weaving-values.webp") center/cover;box-shadow:var(--shadow)}.apprentice-panel p{max-width:820px;color:rgba(255,255,255,.78);font-size:19px}.program-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:34px 0}.program-grid article{min-height:190px;padding:22px;border:1px solid rgba(255,255,255,.24);border-radius:8px;background:rgba(255,255,255,.1)}.program-grid span{display:block;margin-bottom:10px;color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.program-grid strong{display:block;color:white;font-family:Fraunces,Georgia,serif;font-size:24px;line-height:1.08}.program-grid p{margin:12px 0 0;color:rgba(255,255,255,.74);font-size:15px;line-height:1.42}.products-section{padding:96px 0;background:linear-gradient(90deg,rgba(37,63,47,.92),rgba(37,63,47,.68)),url("/images/laku/optimized/table-offering.webp") center/cover;color:white}.products-section h2,.products-section h3{color:white}.product-card{background:rgba(255,255,255,.94)}.product-card h3{color:var(--forest)}.service-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.faq-section{background:var(--cream)}.faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.faq-card{min-height:210px;padding:28px;border:1px solid var(--line);border-radius:8px;background:white}.faq-card p{margin:14px 0 0;color:var(--muted);font-size:17px}.service-card{min-height:110px;display:flex;align-items:flex-end;color:var(--forest);font-family:Fraunces,Georgia,serif;font-size:22px;font-weight:650}.inquiry-section{background:var(--forest);color:white}.inquiry-section h2{color:white}.inquiry-section p{color:rgba(255,255,255,.76);font-size:19px}.inquiry-form{display:grid;gap:16px;background:var(--paper);color:var(--ink)}.inquiry-form label{display:grid;gap:8px;font-weight:800;font-size:13px;color:var(--forest)}.inquiry-form input,.inquiry-form select,.inquiry-form textarea{width:100%;border:1px solid var(--line);border-radius:4px;background:white;padding:12px 14px;color:var(--ink);font:inherit}.date-picker{position:relative}.date-picker-trigger{width:100%;min-height:47px;border:1px solid var(--line);border-radius:4px;background:white;padding:12px 14px;color:var(--ink);font:inherit;text-align:left;cursor:pointer}.date-picker-panel{position:absolute;z-index:10;top:calc(100% + 8px);left:0;width:min(340px,calc(100vw - 56px));padding:14px;border:1px solid var(--line);border-radius:8px;background:white;box-shadow:0 18px 48px rgba(26,33,24,.18)}.date-picker-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}.date-picker-head button{width:34px;height:34px;border:1px solid var(--line);border-radius:4px;background:var(--paper);color:var(--forest);font:inherit;font-weight:800;cursor:pointer}.date-picker-head strong{color:var(--forest);font-size:14px}.date-picker-weekdays,.date-picker-days{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}.date-picker-weekdays span{color:var(--muted);font-size:11px;text-align:center}.date-picker-days button{aspect-ratio:1;border:0;border-radius:4px;background:transparent;color:var(--ink);font:inherit;font-size:13px;cursor:pointer}.date-picker-days button:hover{background:var(--cream)}.date-picker-days button.muted{color:#a2aa9d}.date-picker-days button.selected{background:var(--forest);color:white;font-weight:800}.selected-dates{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.selected-dates button{border:1px solid var(--line);border-radius:999px;background:var(--cream);padding:6px 9px;color:var(--forest);font:inherit;font-size:12px;font-weight:800;cursor:pointer}.date-picker-actions{display:flex;justify-content:flex-end;margin-top:14px;padding-top:12px;border-top:1px solid var(--line)}.date-picker-actions button{min-height:38px;border:0;border-radius:4px;background:var(--forest);padding:0 16px;color:white;font:inherit;font-weight:800;cursor:pointer}.date-picker-actions button:hover{background:#1b3023}.guest-activity{position:fixed;left:22px;bottom:22px;z-index:30;width:min(360px,calc(100vw - 44px));padding:18px 44px 18px 18px;border:1px solid rgba(37,63,47,.16);border-radius:8px;background:rgba(255,250,240,.96);box-shadow:0 18px 54px rgba(26,33,24,.22);backdrop-filter:blur(16px)}.guest-activity-kicker{display:block;margin-bottom:7px;color:var(--clay);font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.guest-activity p{margin:0;color:var(--forest);font-size:15px;font-weight:800;line-height:1.36}.guest-activity time{display:block;margin-top:7px;color:var(--muted);font-size:12px;font-weight:800}.guest-activity a{display:inline-flex;margin-top:11px;color:var(--forest);font-size:13px;font-weight:900}.guest-activity-close{position:absolute;top:10px;right:10px;width:28px;height:28px;border:1px solid var(--line);border-radius:4px;background:white;color:var(--forest);font:inherit;font-weight:800;cursor:pointer}.guest-toast-enter-active,.guest-toast-leave-active{transition:opacity .24s ease,transform .24s ease}.guest-toast-enter-from,.guest-toast-leave-to{opacity:0;transform:translateY(12px)}.form-status{margin:0;font-size:14px;font-weight:800}.form-status.success{color:var(--leaf)}.form-status.error{color:var(--clay)}.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}.laku-page footer{padding:34px 0;background:#17261c;color:rgba(255,255,255,.72)}.footer-inner{display:flex;justify-content:space-between;gap:18px;align-items:center}.footer-brand{display:grid;gap:6px}.footer-brand address{font-style:normal;color:rgba(255,255,255,.6)}.footer-logo{display:block;width:104px;height:40px;object-fit:contain}.footer-socials{display:flex;gap:16px;align-items:center}.footer-inner a{font-weight:700;color:white}@media (max-width:980px){.nav-links{display:none}.hero-grid,.meaning-grid,.intro-layout,.split,.product-layout,.inquiry-grid,.values-head{grid-template-columns:1fr;gap:32px}.hero{min-height:auto;padding-top:120px}.pathway-grid,.keeper-grid,.workshop-grid,.service-grid{grid-template-columns:repeat(2,1fr)}.image-frame{min-height:420px}.image-frame img{height:420px}}@media (max-width:640px){.shell{width:min(100% - 28px,1160px)}.nav-inner{min-height:64px}.laku-page h1{font-size:45px}.hero-actions,.button{width:100%}.meaning-section,.intro-band,.pathway-section,.keepers-section,.groups-section,.faq-section,.inquiry-section,.workshop-section,.apprentice-section,.products-section{padding:72px 0}.intro-card,.product-card,.inquiry-form,.apprentice-panel{padding:28px}.pathway-grid,.keeper-grid,.workshop-grid,.service-grid,.faq-grid,.program-grid,.form-row{grid-template-columns:1fr}.guest-activity{left:14px;right:14px;bottom:14px;width:auto}.footer-inner{align-items:flex-start;flex-direction:column}}
</style>
