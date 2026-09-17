<template>
  <div class="apprenticeship-page">
    <LakuNav cta-label="Apply" cta-to="#apply" />

    <header class="hero">
      <div class="shell hero-inner">
        <p class="eyebrow">Living culture apprenticeship</p>
        <h1>Live at LAKU and learn Indonesian craft through daily practice.</h1>
        <p class="hero-lead">
          Stay for 10 days to 3 months in Mawun, Lombok, learning directly from Indonesian Culture Keepers through hands-on craft, cultural context, and the daily rhythm of LAKU.
        </p>
        <div class="hero-facts" aria-label="Apprenticeship quick facts">
          <span>10 days minimum</span>
          <span>EUR 20/day or EUR 37/day with stay + meals</span>
          <span>Beginner friendly</span>
          <span>Completion letter included</span>
        </div>
        <div class="hero-actions">
          <a class="button" href="#apply">Apply for Apprenticeship</a>
          <NuxtLink class="button secondary" to="/workshops">View Short Workshops</NuxtLink>
        </div>
      </div>
    </header>

    <main>
      <section class="intro-section">
        <div class="shell intro-grid">
          <figure class="image-frame tall">
            <img
              src="/images/laku/optimized/weaving-values.webp"
              alt="Traditional weaving practice during a LAKU Culture apprenticeship in Lombok"
              width="1200"
              height="1600"
              loading="lazy"
            />
          </figure>
          <div class="intro-copy">
            <p class="eyebrow dark-text">What you join</p>
            <h2>A practice-based program for people who want more than a one-day workshop.</h2>
            <p>
              The LAKU apprenticeship is a daily learning path with experienced Culture Keepers. You choose a traditional craft focus, practice consistently, learn the cultural context behind the work, and progress as far as your program duration allows.
            </p>
            <div class="quick-facts" aria-label="Apprenticeship highlights">
              <span>Minimum 10 days</span>
              <span>Up to 3 months</span>
              <span>Daily guided practice</span>
              <span>Mawun, Lombok</span>
            </div>
          </div>
        </div>
      </section>

      <section class="package-section">
        <div class="shell">
          <div class="section-head centered">
            <p class="eyebrow">Program options</p>
            <h2>Choose the support level that fits your stay.</h2>
            <p>
              Both options include daily craft learning, weekly side activities, materials, and a completion letter from your Culture Keeper and LAKU.
            </p>
          </div>
          <div class="package-grid">
            <article v-for="option in packages" :key="option.title" class="package-card">
              <span>{{ option.kicker }}</span>
              <h3>{{ option.title }}</h3>
              <p class="price">{{ option.price }}</p>
              <ul>
                <li v-for="point in option.points" :key="point">{{ point }}</li>
              </ul>
              <a class="button small" href="#apply">Apply for this option</a>
            </article>
          </div>
          <p class="support-note">
            Your fee helps pay Culture Keepers fairly, buy craft materials, maintain the learning space, support meals and accommodation, and keep traditional knowledge active through daily practice.
          </p>
        </div>
      </section>

      <section class="learning-section">
        <div class="shell learning-grid">
          <div class="section-head">
            <p class="eyebrow dark-text">Daily learning</p>
            <h2>Build skill through repetition, correction, and cultural context.</h2>
            <p>
              Apprentices learn and practice selected traditional craft work with an experienced Culture Keeper every day. The goal is not passive observation. It is steady hands-on practice shaped by your chosen craft, your available time, and the level of mastery you can realistically reach.
            </p>
          </div>
          <div class="level-list">
            <article v-for="level in masteryLevels" :key="level.title">
              <span>{{ level.kicker }}</span>
              <h3>{{ level.title }}</h3>
              <p>{{ level.copy }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="day-section">
        <div class="shell day-grid">
          <div class="section-head">
            <p class="eyebrow dark-text">A day at LAKU</p>
            <h2>Know what daily life feels like before you apply.</h2>
            <p>
              The exact rhythm changes by craft, season, Culture Keeper availability, and your energy. Most days balance focused practice with rest, meals, local life, and informal moments around the house.
            </p>
          </div>
          <div class="timeline-list">
            <article v-for="item in dailyRhythm" :key="item.time">
              <span>{{ item.time }}</span>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.copy }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="craft-section">
        <div class="shell">
          <div class="section-head centered">
            <p class="eyebrow dark-text">Craft focus</p>
            <h2>Choose an interest, then LAKU confirms what is possible for your dates.</h2>
            <p>
              Apprentices can share one main interest or several. The team matches your duration, level, and dates with available Culture Keepers and materials.
            </p>
          </div>
          <div class="craft-grid">
            <article v-for="craft in craftExamples" :key="craft.title" class="craft-card">
              <h3>{{ craft.title }}</h3>
              <p>{{ craft.copy }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="stay-section">
        <div class="shell stay-grid">
          <figure class="image-frame">
            <img
              src="/images/laku/optimized/craft-detail.webp"
              alt="Details of hands-on craft materials used during a LAKU apprenticeship"
              width="1200"
              height="1600"
              loading="lazy"
            />
          </figure>
          <div>
            <p class="eyebrow dark-text">Where you stay</p>
            <h2>Choose daily learning only, or make LAKU your home during the program.</h2>
            <p>
              The EUR 37/day option is for applicants who want the most immersive rhythm: stay at LAKU, eat with the house, receive laundry support, and move naturally between practice, rest, and community moments.
            </p>
            <div class="detail-list">
              <span>Accommodation at LAKU</span>
              <span>Two meals per day</span>
              <span>Laundry support</span>
              <span>Arrival details after confirmation</span>
            </div>
          </div>
        </div>
      </section>

      <section class="fit-section">
        <div class="shell fit-grid">
          <article>
            <p class="eyebrow">Good fit</p>
            <h2>This is for you if...</h2>
            <ul>
              <li v-for="point in goodFit" :key="point">{{ point }}</li>
            </ul>
          </article>
          <article>
            <p class="eyebrow">Not the best fit</p>
            <h2>This may not be for you if...</h2>
            <ul>
              <li v-for="point in notFit" :key="point">{{ point }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="life-section">
        <div class="shell life-panel">
          <div>
            <p class="eyebrow">Life at LAKU</p>
            <h2>The apprenticeship also includes a weekly rhythm of shared cultural activities.</h2>
            <p>
              Depending on the week, apprentices may join side activities such as outdoor slow food experiences, tea ceremonies, outdoor movie nights, conversations with Culture Keepers, and community moments around the house.
            </p>
          </div>
          <div class="activity-grid">
            <span>Slow food experiences</span>
            <span>Tea ceremonies</span>
            <span>Outdoor movie nights</span>
            <span>Culture Keeper conversations</span>
          </div>
        </div>
      </section>

      <section class="completion-section">
        <div class="shell completion-grid">
          <figure class="image-frame">
            <img
              src="/images/laku/20260810_111236.jpg"
              alt="Ibu Wahyu guiding hands-on weaving practice at LAKU Culture"
              width="4000"
              height="3000"
              loading="lazy"
            />
          </figure>
          <div>
            <p class="eyebrow dark-text">Completion</p>
            <h2>Leave with a record of what you practiced and the level you reached.</h2>
            <p>
              At completion, apprentices receive a mastery level letter from the Culture Keeper and LAKU. It describes the craft focus, practice duration, cultural context, and the level of independence reached during the program.
            </p>
            <a class="button dark" href="#apply">Start an Application</a>
          </div>
        </div>
      </section>

      <section class="process-section">
        <div class="shell">
          <div class="section-head centered">
            <p class="eyebrow dark-text">How applying works</p>
            <h2>The application is a conversation, not an instant booking.</h2>
            <p>
              Send your preferred dates, package, and craft interests. LAKU will check availability and help shape a program that fits your goals and the Culture Keeper schedule.
            </p>
          </div>
          <div class="process-grid">
            <article v-for="step in applicationSteps" :key="step.title">
              <span>{{ step.kicker }}</span>
              <h3>{{ step.title }}</h3>
              <p>{{ step.copy }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="faq-section">
        <div class="shell">
          <div class="section-head">
            <p class="eyebrow dark-text">Questions</p>
            <h2>Before you apply.</h2>
          </div>
          <div class="faq-grid">
            <article v-for="item in faqs" :key="item.question" class="faq-card">
              <h3>{{ item.question }}</h3>
              <p>{{ item.answer }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="apply" class="apply-section">
        <div class="shell apply-grid">
          <div>
            <p class="eyebrow">Apply</p>
            <h2>Tell LAKU when you want to come and what you want to practice.</h2>
            <p>
              Share your preferred dates, program length, package choice, craft interests, and a little about your background. The LAKU team will follow up with availability and next steps.
            </p>
            <p>
              Come with patience, curiosity, and respect. LAKU will help match your dates, craft interest, and level with the right Culture Keeper.
            </p>
          </div>
          <form class="application-form" @submit.prevent="handleApplication">
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
            <div class="form-row">
              <label>
                Preferred start date
                <input v-model="form.startDate" type="date" />
              </label>
              <label>
                Duration
                <select v-model="form.duration" required>
                  <option value="">Choose one</option>
                  <option>10-14 days</option>
                  <option>2-4 weeks</option>
                  <option>1-2 months</option>
                  <option>Up to 3 months</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>
            <label>
              Package
              <select v-model="form.packageChoice" required>
                <option value="">Choose one</option>
                <option>The Apprenticeship - EUR 20/day</option>
                <option>Apprenticeship + meals + accommodation - EUR 37/day</option>
                <option>I need help choosing</option>
              </select>
            </label>
            <label>
              Craft or practice interests
              <input v-model="form.craftInterest" type="text" placeholder="Weaving, culinary, batik, pottery, bamboo, rattan..." />
            </label>
            <label>
              Why do you want to join?
              <textarea v-model="form.message" required rows="5" placeholder="Tell us about your background, goals, and any questions."></textarea>
            </label>
            <button class="button" type="submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Application' }}
            </button>
            <p v-if="submitMessage" class="form-status" :class="submitStatus">{{ submitMessage }}</p>
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
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { imageDimensions, landingPages, siteUrl } from '~/data/lakuSeo'

definePageMeta({ layout: false })

const page = landingPages.apprenticeship
const canonicalUrl = `${siteUrl}/apprenticeship`
const pageImage = `${siteUrl}${page.image}`
const imageSize = imageDimensions[page.image]

const packages = [
  {
    kicker: 'Option 1',
    title: 'The Apprenticeship',
    price: 'EUR 20 per day, minimum 10 days',
    points: [
      'Daily practice with an experienced Culture Keeper',
      'Selected traditional craft learning shaped by your duration',
      'Weekly side activities such as slow food, tea, and outdoor movie nights',
      'Materials, workshops, and completion letter included'
    ]
  },
  {
    kicker: 'Option 2',
    title: 'Apprenticeship, Meals, and Accommodation',
    price: 'EUR 37 per day, minimum 10 days',
    points: [
      'Everything in The Apprenticeship program',
      'Accommodation at LAKU during the program',
      'Two meals per day plus laundry support',
      'A more immersive daily rhythm inside LAKU Culture'
    ]
  }
]

const masteryLevels = [
  { kicker: 'Level 1', title: 'Observer-Practitioner', copy: 'For shorter stays, you learn the story, tools, materials, and basic movements of your chosen craft.' },
  { kicker: 'Level 2', title: 'Guided Maker', copy: 'With more repetition, you can complete simple steps with close guidance and understand the rhythm of the work.' },
  { kicker: 'Level 3', title: 'Independent Beginner', copy: 'You begin making parts of the process independently while still receiving correction from your Culture Keeper.' },
  { kicker: 'Level 4', title: 'Developing Apprentice', copy: 'Longer stays allow stronger technique, better material judgment, and more confidence across the craft process.' },
  { kicker: 'Level 5', title: 'Culture Keeper Pathway', copy: 'For the longest programs, the completion letter can record deeper practice, consistency, and readiness for continued learning.' }
]


const dailyRhythm = [
  { time: 'Morning', title: 'Arrive, eat, or settle into the house', copy: 'Start with breakfast if you are staying at LAKU, or arrive for the day with enough time to prepare for practice.' },
  { time: 'Late morning', title: 'Guided craft practice', copy: 'Work directly with your Culture Keeper on tools, materials, technique, correction, and the cultural meaning behind the process.' },
  { time: 'Afternoon', title: 'Independent repetition and rest', copy: 'Repeat what you learned, continue simple tasks, ask questions, rest, or move through local life around Mawun.' },
  { time: 'Evening', title: 'Shared moments when scheduled', copy: 'Depending on the week, join dinner, tea, slow food, outdoor movie nights, or conversations with Culture Keepers and the LAKU team.' }
]

const craftExamples = [
  { title: 'Weaving', copy: 'Learn materials, patterns, hand rhythm, and beginner steps before moving into more independent repetition.' },
  { title: 'Batik', copy: 'Practice motif preparation, wax handling, dye awareness, and the patience needed for layered textile work.' },
  { title: 'Pottery', copy: 'Understand clay preparation, shaping, surface detail, drying, and the discipline of repeating small forms.' },
  { title: 'Bamboo or rattan', copy: 'Explore natural materials, basic joining, hand tools, and the logic behind useful woven or built objects.' },
  { title: 'Culinary culture', copy: 'Learn ingredients, preparation rhythm, local food stories, and the social meaning carried through shared meals.' },
  { title: 'Natural materials', copy: 'Work with locally available fibers, plants, colors, and textures while learning why material knowledge matters.' }
]

const goodFit = [
  'You want slow hands-on learning, not a quick tourist class.',
  'You respect local knowledge and Culture Keeper guidance.',
  'You can practice patiently and consistently every day.',
  'You are comfortable with cultural immersion and simple daily rhythms.'
]

const notFit = [
  'You need a formal academic certificate or university credit.',
  'You expect instant mastery after a few sessions.',
  'You mainly want sightseeing with occasional activities.',
  'You require a luxury stay or highly private retreat setup.'
]

const applicationSteps = [
  { kicker: 'Step 1', title: 'Send your application', copy: 'Share dates, duration, package choice, craft interests, and why you want to join.' },
  { kicker: 'Step 2', title: 'LAKU checks availability', copy: 'The team confirms Culture Keeper schedules, materials, accommodation, and what is realistic for your stay.' },
  { kicker: 'Step 3', title: 'Confirm the plan', copy: 'You agree on the package, dates, craft focus, arrival details, and any important needs before booking.' },
  { kicker: 'Step 4', title: 'Begin practice', copy: 'Arrive in Mawun, settle in, meet your Culture Keeper, and start the daily rhythm of learning.' }
]

const faqs = [
  { question: 'What is the minimum duration?', answer: 'The apprenticeship requires a minimum of 10 days. Longer stays can continue up to 3 months.' },
  { question: 'Is this a volunteer program or a paid learning program?', answer: 'This is a paid learning program. Your daily fee supports Culture Keeper time, materials, workshops, meals or accommodation when selected, and the sustainability of LAKU.' },
  { question: 'What is included in the EUR 20 per day option?', answer: 'It includes daily Culture Keeper practice, selected traditional craft learning, weekly side activities, materials, workshops, and a completion letter.' },
  { question: 'What is included in the EUR 37 per day option?', answer: 'It includes the apprenticeship plus accommodation at LAKU, two meals per day, laundry support, weekly side activities, materials, workshops, and completion documentation.' },
  { question: 'Do I need craft experience before applying?', answer: 'No. Beginners can apply, but the program is best for people who are patient, respectful, consistent, and ready for daily hands-on practice.' },
  { question: 'Can I choose the craft I want to learn?', answer: 'You can share your interests in the application. LAKU will confirm what is possible based on Culture Keeper, material, and date availability.' },
  { question: 'What language is instruction in?', answer: 'Instruction depends on the Culture Keeper and LAKU team available during your stay. Share your language needs in the application so LAKU can confirm what support is possible.' },
  { question: 'Can I work remotely during the stay?', answer: 'You can ask about this when applying. The program expects daily practice, so remote work should fit around the apprenticeship rhythm rather than replace it.' },
  { question: 'Are materials included?', answer: 'Yes. Materials needed for the agreed apprenticeship practice are included in both program options.' },
  { question: 'Can dietary needs be handled?', answer: 'Share dietary needs in your application. LAKU will confirm what can be supported before you finalize the stay-and-meals option.' },
  { question: 'What happens if my preferred craft is unavailable?', answer: 'LAKU will suggest another available craft focus, different dates, or a realistic alternative based on Culture Keeper schedules and materials.' },
  { question: 'What do I receive after completion?', answer: 'You receive a mastery level letter from your Culture Keeper and LAKU describing your practice, duration, cultural context, and the level reached.' }
]

const form = reactive({
  name: '',
  email: '',
  whatsapp: '',
  startDate: '',
  duration: '',
  packageChoice: '',
  craftInterest: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | ''>('')
const submitMessage = ref('')

const handleApplication = async () => {
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
    const details = [
      `Package: ${form.packageChoice || 'Not selected'}`,
      `Duration: ${form.duration || 'Not specified'}`,
      `Craft interests: ${form.craftInterest || 'Not specified'}`,
      `Motivation: ${form.message || 'Not provided'}`
    ].join('\n')

    await $fetch('/api/inquiry', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        whatsapp: form.whatsapp,
        interest: 'Apprenticeship application',
        dates: form.startDate || 'Flexible',
        groupSize: '1 applicant',
        message: details
      }
    })

    submitStatus.value = 'success'
    submitMessage.value = 'Thank you. LAKU received your apprenticeship application and will follow up soon.'
    Object.assign(form, {
      name: '',
      email: '',
      whatsapp: '',
      startDate: '',
      duration: '',
      packageChoice: '',
      craftInterest: '',
      message: ''
    })
  } catch {
    submitStatus.value = 'error'
    submitMessage.value = 'Sorry, the application could not be sent. Please try again or contact LAKU directly.'
  } finally {
    isSubmitting.value = false
  }
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  '@id': `${canonicalUrl}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: 'Living Culture Apprenticeship', item: canonicalUrl }
  ]
}

const offerSchema = packages.map((item) => ({
  '@type': 'Offer',
  name: item.title,
  category: 'Cultural apprenticeship',
  areaServed: 'Lombok, Indonesia',
  priceCurrency: 'EUR',
  price: item.price.includes('20') ? '20' : '37',
  unitText: 'day',
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
  primaryImageOfPage: { '@type': 'ImageObject', url: pageImage, width: imageSize.width, height: imageSize.height, caption: page.imageAlt },
  breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'LAKU Culture apprenticeship options',
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
    { property: 'og:image:alt', content: page.imageAlt },
    { property: 'og:image:width', content: String(imageSize.width) },
    { property: 'og:image:height', content: String(imageSize.height) },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: pageImage }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'preload', as: 'image', href: page.image, fetchpriority: 'high' },
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
.apprenticeship-page{--ink:#1a2118;--muted:#66715f;--forest:#253f2f;--leaf:#537b45;--gold:#c99342;--clay:#9f5135;--paper:#fffaf0;--cream:#f3ead8;--line:rgba(37,63,47,.15);--shadow:0 24px 80px rgba(37,63,47,.18);margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.5}.apprenticeship-page *{box-sizing:border-box}.apprenticeship-page a{color:inherit;text-decoration:none}.shell{width:min(1160px,calc(100% - 40px));margin:0 auto}.nav{position:fixed;top:0;left:0;right:0;z-index:20;color:white;background:rgba(37,63,47,.86);border-bottom:1px solid rgba(255,255,255,.16);backdrop-filter:blur(18px)}.nav-inner{min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand-logo{display:block;width:112px;height:42px;object-fit:contain}.nav-links{display:flex;gap:24px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.nav-links a{opacity:.84}.nav-links a:hover{opacity:1}.nav-cta{display:inline-flex;align-items:center;min-height:38px;padding:0 16px;border-radius:4px;background:var(--gold);color:#21180b;font-weight:800;font-size:13px}.button{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 22px;border-radius:4px;border:1px solid transparent;background:var(--gold);color:#21180b;font-weight:800;cursor:pointer}.button:disabled{opacity:.68;cursor:not-allowed}.button.secondary{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.36);color:white}.button.dark{background:var(--forest);color:white;border-color:var(--forest)}.button.small{min-height:44px;padding:0 16px;font-size:14px}.hero{min-height:94vh;display:grid;align-items:end;padding:118px 0 54px;color:white;background:linear-gradient(90deg,rgba(21,32,23,.92),rgba(21,32,23,.58) 52%,rgba(21,32,23,.12)),linear-gradient(0deg,rgba(21,32,23,.82),rgba(21,32,23,.04) 46%),url("/images/laku/optimized/weaving-values.webp") center/cover}.hero-inner{max-width:860px}.eyebrow{margin:0 0 16px;color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.dark-text{color:var(--clay)}.apprenticeship-page h1,.apprenticeship-page h2,.apprenticeship-page h3{margin:0;letter-spacing:0;line-height:1.03}.apprenticeship-page h1,.apprenticeship-page h2{font-family:Fraunces,Georgia,serif}.apprenticeship-page h1{font-size:clamp(48px,7vw,94px);font-weight:760;max-width:880px}.apprenticeship-page h2{font-size:clamp(34px,4.8vw,62px);font-weight:650;color:var(--forest)}.apprenticeship-page h3{font-size:24px;color:var(--forest)}.hero-lead{max-width:720px;margin:24px 0 0;color:rgba(255,255,255,.84);font-size:clamp(18px,2vw,22px)}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}.intro-section,.learning-section,.completion-section,.faq-section,.apply-section{padding:96px 0}.intro-section,.faq-section{background:var(--cream)}.intro-grid,.learning-grid,.completion-grid,.apply-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:54px;align-items:center}.image-frame{min-height:520px;margin:0;border-radius:8px;overflow:hidden;box-shadow:var(--shadow);background:var(--cream)}.image-frame img{display:block;width:100%;height:520px;object-fit:cover}.image-frame.tall,.image-frame.tall img{min-height:620px;height:620px}.intro-copy p,.section-head p,.learning-grid p,.completion-grid p,.apply-grid p{color:var(--muted);font-size:18px}.quick-facts,.activity-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:28px}.quick-facts span,.activity-grid span{padding:18px;border:1px solid var(--line);border-radius:8px;background:white;color:var(--forest);font-weight:800}.package-section,.life-section{padding:104px 0;background:var(--forest);color:white}.package-section h2,.package-section h3,.life-section h2{color:white}.section-head{max-width:790px}.section-head.centered{margin:0 auto 48px;text-align:center}.package-section .section-head p,.life-section p{color:rgba(255,255,255,.74);font-size:18px}.package-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.package-card{min-height:440px;padding:34px;border:1px solid rgba(255,255,255,.18);border-radius:8px;background:rgba(255,255,255,.08);display:flex;flex-direction:column;gap:22px}.package-card span,.level-list span{color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.package-card .price{margin:0;color:#f1c77c;font-size:22px;font-weight:900}.package-card ul{padding-left:18px;margin:0}.package-card li{margin:9px 0;color:rgba(255,255,255,.76)}.package-card .button{margin-top:auto;align-self:flex-start}.support-note{margin:22px 0 0;color:rgba(255,255,255,.78);font-weight:800}.level-list{display:grid;gap:12px}.level-list article,.faq-card{padding:26px;border:1px solid var(--line);border-radius:8px;background:white}.level-list article span{color:var(--clay)}.level-list p,.faq-card p{margin:12px 0 0;color:var(--muted)}.life-panel{padding:64px;border-radius:8px;background:linear-gradient(90deg,rgba(37,63,47,.9),rgba(37,63,47,.62)),url("/images/laku/optimized/craft-detail.webp") center/cover;box-shadow:var(--shadow)}.life-panel h2{max-width:850px}.life-panel p{max-width:820px}.activity-grid span{border-color:rgba(255,255,255,.24);background:rgba(255,255,255,.1);color:white}.faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:34px}.apply-section{background:var(--forest);color:white}.apply-section h2{color:white}.apply-section p{color:rgba(255,255,255,.76)}.application-form{display:grid;gap:16px;padding:40px;background:var(--paper);border:1px solid var(--line);border-radius:8px;color:var(--ink)}.application-form label{display:grid;gap:8px;font-weight:800;font-size:13px;color:var(--forest)}.application-form input,.application-form select,.application-form textarea{width:100%;border:1px solid var(--line);border-radius:4px;background:white;padding:12px 14px;color:var(--ink);font:inherit}.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}.form-status{margin:0;font-size:14px;font-weight:800}.form-status.success{color:var(--leaf)}.form-status.error{color:var(--clay)}footer{padding:34px 0;background:#17261c;color:rgba(255,255,255,.72)}.footer-inner{display:flex;justify-content:space-between;gap:18px;align-items:center}.footer-brand{display:grid;gap:6px}.footer-brand address{font-style:normal;color:rgba(255,255,255,.6)}.footer-logo{display:block;width:104px;height:40px;object-fit:contain}.footer-socials{display:flex;gap:16px;align-items:center}.footer-inner a{font-weight:700;color:white}.hero-facts{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:28px;max-width:900px}.hero-facts span{min-height:66px;padding:14px;border:1px solid rgba(255,255,255,.24);border-radius:8px;background:rgba(255,255,255,.1);color:white;font-weight:800;font-size:14px;backdrop-filter:blur(12px)}.day-section,.craft-section,.stay-section,.process-section{padding:96px 0}.day-section,.stay-section{background:var(--paper)}.craft-section,.process-section{background:var(--cream)}.day-grid,.stay-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:54px;align-items:center}.timeline-list{display:grid;gap:12px}.timeline-list article{display:grid;grid-template-columns:120px 1fr;gap:18px;padding:24px;border:1px solid var(--line);border-radius:8px;background:white}.timeline-list article>span,.process-grid span{color:var(--clay);font-size:12px;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.timeline-list h3,.timeline-list p,.craft-card p,.process-grid p{margin:0}.timeline-list p,.craft-card p,.stay-grid p,.process-grid p{color:var(--muted);font-size:17px}.timeline-list h3{margin-bottom:8px}.craft-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.craft-card,.process-grid article{padding:26px;border:1px solid var(--line);border-radius:8px;background:white}.detail-list{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:28px}.detail-list span{padding:18px;border:1px solid var(--line);border-radius:8px;background:white;color:var(--forest);font-weight:800}.fit-section{padding:104px 0;background:var(--forest);color:white}.fit-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.fit-grid article{padding:34px;border:1px solid rgba(255,255,255,.18);border-radius:8px;background:rgba(255,255,255,.08)}.fit-grid h2{color:white;font-size:clamp(30px,3.6vw,48px)}.fit-grid ul{margin:24px 0 0;padding-left:20px}.fit-grid li{margin:10px 0;color:rgba(255,255,255,.78);font-size:17px}.process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.process-grid h3{margin-top:12px}.process-grid p{margin-top:10px}@media (max-width:980px){.nav-links{display:none}.intro-grid,.learning-grid,.completion-grid,.apply-grid,.day-grid,.stay-grid{grid-template-columns:1fr;gap:32px}.hero{min-height:auto;padding-top:120px}.hero-facts{grid-template-columns:repeat(2,1fr)}.craft-grid,.process-grid,.fit-grid{grid-template-columns:1fr 1fr}.image-frame,.image-frame img,.image-frame.tall,.image-frame.tall img{height:420px;min-height:420px}}@media (max-width:640px){.shell{width:min(100% - 28px,1160px)}.nav-inner{min-height:64px}.apprenticeship-page h1{font-size:43px}.hero-actions,.button{width:100%}.intro-section,.learning-section,.completion-section,.faq-section,.apply-section,.package-section,.life-section,.day-section,.craft-section,.stay-section,.process-section,.fit-section{padding:72px 0}.package-grid,.quick-facts,.activity-grid,.faq-grid,.form-row,.hero-facts,.craft-grid,.process-grid,.fit-grid,.detail-list,.timeline-list article{grid-template-columns:1fr}.application-form,.life-panel,.package-card{padding:28px}.footer-inner{align-items:flex-start;flex-direction:column}}
</style>
