<template>
  <div class="laku-page">
    <nav class="nav" aria-label="Laku navigation">
      <div class="shell nav-inner">
        <NuxtLink class="brand" to="/" aria-label="Laku home">
          <img class="brand-logo" src="/images/laku/Laku logo.png" alt="LAKU" />
        </NuxtLink>
        <div class="nav-links">
          <a href="#visit">Visit</a>
          <a href="#workshops">Workshops</a>
          <a href="#apprenticeship">Apprenticeship</a>
          <a href="#groups">Groups</a>
        </div>
        <a class="nav-cta" href="#inquiry">Apply</a>
      </div>
    </nav>

    <header class="hero">
      <div class="shell hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Mawun, Lombok</p>
          <h1>A Home for Indonesia's Living Culture</h1>
          <p class="hero-lead">
            LAKU is not a museum, gallery, or staged workshop venue. It is a living
            space where Culture Keepers practice every day, visitors participate,
            and Indonesian traditions create sustainable livelihoods.
          </p>
          <div class="hero-actions">
            <a class="button" href="#workshops">Book a Workshop</a>
            <a class="button secondary" href="#apprenticeship">Apply for Apprenticeship</a>
            <a class="text-link" href="#visit">Plan Your Visit</a>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section id="meaning" class="meaning-section">
        <div class="shell meaning-grid">
          <div>
            <p class="eyebrow dark-text">What does Laku mean?</p>
            <h2>Culture expressed through action.</h2>
          </div>
          <div class="meaning-copy">
            <p>
              In Indonesian philosophy, <strong>laku</strong> means the way one lives
              and practices life. It is not merely knowledge. It is drinking together,
              making with one's hands, listening to stories, sharing food, preserving
              traditions, and passing wisdom from one generation to the next.
            </p>
            <p>
              At Laku, Indonesia is not observed from a distance. It is lived.
            </p>
          </div>
        </div>
      </section>

      <section class="intro-band">
        <div class="shell intro-layout">
          <div class="image-frame" />
          <div class="intro-card">
            <p class="eyebrow dark-text">Inside LAKU</p>
            <h2>Visitors do not just watch culture. They enter its rhythm.</h2>
            <p>
              Culture Keepers are present during opening hours, practicing their craft,
              creating products, demonstrating techniques, hosting workshops, and sharing
              the stories behind their traditions.
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
            <h2>Choose how deeply you want to take part.</h2>
            <p>
              Every guest can meet LAKU at the level that fits their curiosity, time,
              and commitment.
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
              <h2>Workshops you can book or request.</h2>
            </div>
            <p>
              Create something by hand with a Culture Keeper. Book available weaving
              and culinary experiences, or ask us about batik, pottery, and rattan
              sessions for your dates.
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
            <h2>This is not tourism. It is apprenticeship.</h2>
            <p>
              For deeper learners, LAKU offers one week, two week, three week, and one
              month programs where participants work directly with a Culture Keeper every
              day and receive a personal completion letter describing what they learned.
            </p>
          </div>
          <div class="program-grid">
            <span v-for="program in programs" :key="program">{{ program }}</span>
          </div>
          <a class="button" href="#inquiry">Apply for Apprenticeship</a>
        </div>
      </section>

      <section id="keepers" class="keepers-section">
        <div class="shell">
          <div class="section-head centered">
            <p class="eyebrow dark-text">Culture Keepers</p>
            <h2>Tradition holders, not performers.</h2>
            <p>
              Meet the people who carry these practices through daily making,
              conversation, workshops, products, and longer apprenticeship programs.
            </p>
          </div>
          <div class="keeper-grid">
            <article v-for="keeper in keepers" :key="keeper.tradition" class="keeper-card" :class="{ 'keeper-card-combined': keeper.items }">
              <img v-if="keeper.image" class="keeper-photo" :src="keeper.image" :alt="keeper.alt" loading="lazy" />
              <span>{{ keeper.tradition }}</span>
              <h3>{{ keeper.name }}</h3>
              <p>{{ keeper.copy }}</p>
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
            <h2>Products are not souvenirs. Every handmade piece carries a story.</h2>
          </div>
          <div class="product-card">
            <h3>Know the maker behind the piece.</h3>
            <ul>
              <li>Product name, Culture Keeper name, and maker photograph</li>
              <li>Making process photographs and tradition story</li>
              <li>Local materials and approximate time required to create</li>
              <li>Ask about shop visits, handmade pieces, and custom orders</li>
            </ul>
            <a class="button secondary dark" href="#inquiry">Ask About a Piece</a>
          </div>
        </div>
      </section>

      <section id="groups" class="groups-section">
        <div class="shell">
          <div class="section-head values-head">
            <div>
              <p class="eyebrow dark-text">Private and group programs</p>
              <h2>Bring your group into living culture.</h2>
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

      <section id="inquiry" class="inquiry-section">
        <div class="shell inquiry-grid">
          <div>
            <p class="eyebrow">Plan with us</p>
            <h2>Tell us what you want to experience.</h2>
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
        <img class="footer-logo" src="/images/laku/Laku logo.png" alt="LAKU" />
        <span>A Home for Indonesia's Living Culture</span>
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
definePageMeta({ layout: false })

useHead({
  title: 'LAKU | A Home for Indonesia\'s Living Culture',
  meta: [
    { name: 'description', content: 'LAKU is a living cultural space in Mawun, Lombok, offering daily Culture Keeper experiences, paid workshops, apprenticeships, handmade products, and private programs.' },
    { name: 'theme-color', content: '#253f2f' },
    { property: 'og:title', content: 'LAKU | A Home for Indonesia\'s Living Culture' },
    { property: 'og:description', content: 'Meet Culture Keepers, book workshops, apply for living culture apprenticeships, and plan private cultural programs in Lombok.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,650;9..144,760&family=Inter:wght@400;500;600;700;800&display=swap' }
  ]
})

const levels = [
  { kicker: 'Level 1', title: 'Observe', copy: 'Visitors are welcome to watch, ask questions, enjoy the atmosphere, and meet the active Culture Keeper for free.', cta: 'Plan Your Visit', href: '#inquiry' },
  { kicker: 'Level 2', title: 'Experience', copy: 'A complimentary hands-on introduction gives guests a few minutes with bamboo, clay, batik, rattan, weaving, or culinary practice.', cta: 'Ask About Experiences', href: '#inquiry' },
  { kicker: 'Level 3', title: 'Create', copy: 'Paid workshops guide visitors through a complete handmade piece with a clear duration, price, take-home outcome, and story.', cta: 'Book a Workshop', href: '#workshops' },
  { kicker: 'Level 4', title: 'Apprentice', copy: 'Longer programs invite committed learners into daily practice with a Culture Keeper for one week to one month.', cta: 'Apply Now', href: '#apprenticeship' }
]

const workshops = [
  { status: 'Available to book', title: 'Nyensek Weaving', meta: 'Duration and price shared on inquiry / beginner friendly', points: ['Weave with a Culture Keeper using traditional Lombok techniques', 'Create a small textile piece through guided hands-on practice', 'Take home the piece you make and the story behind the tradition'], cta: 'Book This Workshop' },
  { status: 'Available to book', title: 'Kecapil Hats Weaving', meta: 'Duration and price shared on inquiry / beginner friendly', points: ['Learn how kecapil hat forms are built from woven natural materials', 'Shape a handmade piece with step-by-step guidance', 'Take home your woven work or arrange collection if finishing time is needed'], cta: 'Book This Workshop' },
  { status: 'Available to book', title: 'Culinary Classes', meta: 'Duration and price shared on inquiry / suitable for families and groups', points: ['Cook with a Traditional Culinary Keeper using local ingredients', 'Learn the story, preparation, and hospitality around the dish', 'Share what you make at LAKU or plan a private group session'], cta: 'Book This Workshop' },
  { status: 'Available by request', title: 'Batik Wax Lines', meta: 'Requested dates / price shared on inquiry / ages 10+', points: ['Draw wax lines with a Batik Culture Keeper', 'Learn motif meaning and cloth preparation', 'Take home a small batik work'], cta: 'Request This Workshop' },
  { status: 'Available by request', title: 'Pottery', meta: 'Requested dates / price shared on inquiry / beginner friendly', points: ['Shape clay with a Pottery Culture Keeper', 'Learn basic form, texture, and hand-building techniques', 'Take home your piece or arrange collection after drying and firing'], cta: 'Request This Workshop' },
  { status: 'Available by request', title: 'Rattan', meta: 'Requested dates / price shared on inquiry / beginner friendly', points: ['Work with rattan patterns guided by a Culture Keeper', 'Practice simple weaving structures and material handling', 'Take home a handmade woven piece'], cta: 'Request This Workshop' }
]

const programs = ['1 week', '2 weeks', '3 weeks', '1 month']

const keepers = [
  {
    tradition: 'Textile Weaving',
    name: 'Nyensek Weaving Culture Keeper',
    copy: 'Ibu Wahyu',
    image: '/images/laku/20260810_111236.jpg',
    alt: 'Ibu Wahyu, Nyensek Weaving Culture Keeper',
    cta: 'Learn with Ibu Wahyu'
  },
  {
    tradition: 'Natural-Fiber Weaving',
    name: 'Traditional Anyaman Culture Keeper',
    copy: 'Pak Yusuf',
    image: '/images/laku/20260816_090306.jpg',
    alt: 'Pak Yusuf, Traditional Anyaman Culture Keeper',
    cta: 'Learn with Pak Yusuf'
  },
  {
    tradition: 'Culinary',
    name: 'Traditional Culinary Keeper',
    copy: 'Ibu Noni',
    image: '/images/laku/20251008_091302.jpg',
    alt: 'Ibu Noni, Traditional Culinary Keeper',
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
const visibleMonth = ref(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
const selectedDates = ref<string[]>([])
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

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
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDatePickerOutsideClick)
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
  } catch {
    submitStatus.value = 'error'
    submitMessage.value = 'Sorry, the inquiry could not be sent. Please try again or contact LAKU directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.laku-page{--ink:#1a2118;--muted:#66715f;--forest:#253f2f;--leaf:#537b45;--gold:#c99342;--clay:#9f5135;--paper:#fffaf0;--cream:#f3ead8;--line:rgba(37,63,47,.15);--shadow:0 24px 80px rgba(37,63,47,.18);margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.5}.laku-page *{box-sizing:border-box}.laku-page a{color:inherit;text-decoration:none}.shell{width:min(1160px,calc(100% - 40px));margin:0 auto}.nav{position:fixed;top:0;left:0;right:0;z-index:20;color:white;background:rgba(37,63,47,.86);border-bottom:1px solid rgba(255,255,255,.16);backdrop-filter:blur(18px)}.nav-inner{min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center}.brand-logo{display:block;width:112px;height:42px;object-fit:contain}.nav-links{display:flex;gap:24px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.nav-links a{opacity:.84}.nav-links a:hover{opacity:1}.nav-cta{display:inline-flex;align-items:center;min-height:38px;padding:0 16px;border-radius:4px;background:var(--gold);color:#21180b;font-weight:800;font-size:13px}.button{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 22px;border-radius:4px;border:1px solid transparent;background:var(--gold);color:#21180b;font-weight:800;cursor:pointer}.button:disabled{opacity:.68;cursor:not-allowed}.button.secondary{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.36);color:white}.button.secondary.dark{background:var(--forest);color:white;border-color:var(--forest)}.button.small{min-height:44px;padding:0 16px;font-size:14px}.text-link{display:inline-flex;align-items:center;font-weight:800;color:white}.hero{min-height:94vh;display:grid;align-items:end;padding:118px 0 54px;color:white;background:linear-gradient(90deg,rgba(21,32,23,.92),rgba(21,32,23,.58) 52%,rgba(21,32,23,.12)),linear-gradient(0deg,rgba(21,32,23,.82),rgba(21,32,23,.04) 46%),url("/images/laku/optimized/hero-workshop.webp") center/cover}.hero-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:52px;align-items:end}.hero-copy{max-width:820px}.eyebrow{margin:0 0 16px;color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.dark-text{color:var(--clay)}.laku-page h1,.laku-page h2,.laku-page h3{margin:0;letter-spacing:0;line-height:1.03}.laku-page h1,.laku-page h2{font-family:Fraunces,Georgia,serif}.laku-page h1{font-size:clamp(50px,7vw,98px);font-weight:760;max-width:860px}.laku-page h2{font-size:clamp(34px,4.8vw,62px);font-weight:650;color:var(--forest)}.laku-page h3{font-size:24px;color:var(--forest)}.hero-lead{max-width:720px;margin:24px 0 0;color:rgba(255,255,255,.84);font-size:clamp(18px,2vw,22px)}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}.meaning-section{padding:100px 0}.meaning-grid{display:grid;grid-template-columns:.86fr 1.14fr;gap:70px;align-items:start}.meaning-copy{font-size:22px;color:var(--muted)}.meaning-copy p{margin:0 0 22px}.meaning-copy strong{color:var(--forest)}.intro-band,.pathway-section,.keepers-section,.groups-section,.inquiry-section{padding:96px 0}.intro-band,.visit-section{background:var(--cream)}.intro-layout,.split,.product-layout,.inquiry-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:54px;align-items:center}.image-frame{min-height:560px;border-radius:8px;background:linear-gradient(0deg,rgba(37,63,47,.1),rgba(37,63,47,.1)),url("/images/laku/optimized/craft-detail.webp") center/cover;box-shadow:var(--shadow)}.intro-card,.product-card,.inquiry-form{padding:40px;background:var(--paper);border:1px solid var(--line);border-radius:8px}.intro-card p,.section-copy{color:var(--muted);font-size:18px}.section-head{max-width:780px}.section-head.centered{margin:0 auto 48px;text-align:center}.section-head p{margin:16px 0 0;color:var(--muted);font-size:18px}.pathway-grid,.keeper-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.pathway-card,.keeper-card,.service-card{padding:26px;border:1px solid var(--line);border-radius:8px;background:white}.pathway-card{min-height:300px;display:flex;flex-direction:column}.keeper-card{min-height:420px;display:flex;flex-direction:column;overflow:hidden}.keeper-photo{width:calc(100% + 52px);height:230px;margin:-26px -26px 24px;object-fit:cover;background:var(--cream)}.keeper-card-combined{background:var(--forest);color:white}.keeper-card-combined h3{color:white}.keeper-card-combined span,.keeper-card-combined a{color:#f1c77c}.keeper-list{display:grid;gap:12px;margin:6px 0 18px}.keeper-list p{margin:0;padding:14px;border:1px solid rgba(255,255,255,.18);border-radius:6px;color:rgba(255,255,255,.78)}.keeper-list strong{display:block;margin-bottom:3px;color:white}.pathway-card span,.workshop-card p,.keeper-card span{color:var(--clay);font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.pathway-card p,.keeper-card p,.product-card li,.workshop-card li{color:var(--muted)}.keeper-card-combined>p{color:rgba(255,255,255,.72)}.pathway-card a,.keeper-card a{margin-top:auto;color:var(--forest);font-weight:800}.keeper-card.keeper-card-combined span,.keeper-card.keeper-card-combined a{color:#f1c77c}.workshop-section,.apprentice-section{padding:108px 0;background:var(--forest);color:white}.workshop-section h2,.workshop-section h3,.apprentice-section h2{color:white}.values-head{display:grid;grid-template-columns:.95fr 1.05fr;gap:54px;align-items:end;margin-bottom:42px}.values-head p{color:rgba(255,255,255,.72)}.groups-section .values-head p{color:var(--muted)}.workshop-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.workshop-card{min-height:380px;padding:28px;border:1px solid rgba(255,255,255,.18);border-radius:8px;background:rgba(255,255,255,.08);display:flex;flex-direction:column;gap:22px}.workshop-card span{color:rgba(255,255,255,.72)}.workshop-card ul,.product-card ul{padding-left:18px}.workshop-card li{color:rgba(255,255,255,.72);margin:8px 0}.workshop-card .button{margin-top:auto;align-self:flex-start}.apprentice-panel{padding:64px;border-radius:8px;background:linear-gradient(90deg,rgba(37,63,47,.9),rgba(37,63,47,.64)),url("/images/laku/optimized/weaving-values.webp") center/cover;box-shadow:var(--shadow)}.apprentice-panel p{max-width:820px;color:rgba(255,255,255,.78);font-size:19px}.program-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:34px 0}.program-grid span{padding:22px;text-align:center;border:1px solid rgba(255,255,255,.24);border-radius:8px;background:rgba(255,255,255,.1);font-family:Fraunces,Georgia,serif;font-size:26px}.products-section{padding:96px 0;background:linear-gradient(90deg,rgba(37,63,47,.92),rgba(37,63,47,.68)),url("/images/laku/optimized/table-offering.webp") center/cover;color:white}.products-section h2,.products-section h3{color:white}.product-card{background:rgba(255,255,255,.94)}.product-card h3{color:var(--forest)}.service-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.service-card{min-height:110px;display:flex;align-items:flex-end;color:var(--forest);font-family:Fraunces,Georgia,serif;font-size:22px;font-weight:650}.inquiry-section{background:var(--forest);color:white}.inquiry-section h2{color:white}.inquiry-section p{color:rgba(255,255,255,.76);font-size:19px}.inquiry-form{display:grid;gap:16px;background:var(--paper);color:var(--ink)}.inquiry-form label{display:grid;gap:8px;font-weight:800;font-size:13px;color:var(--forest)}.inquiry-form input,.inquiry-form select,.inquiry-form textarea{width:100%;border:1px solid var(--line);border-radius:4px;background:white;padding:12px 14px;color:var(--ink);font:inherit}.date-picker{position:relative}.date-picker-trigger{width:100%;min-height:47px;border:1px solid var(--line);border-radius:4px;background:white;padding:12px 14px;color:var(--ink);font:inherit;text-align:left;cursor:pointer}.date-picker-panel{position:absolute;z-index:10;top:calc(100% + 8px);left:0;width:min(340px,calc(100vw - 56px));padding:14px;border:1px solid var(--line);border-radius:8px;background:white;box-shadow:0 18px 48px rgba(26,33,24,.18)}.date-picker-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}.date-picker-head button{width:34px;height:34px;border:1px solid var(--line);border-radius:4px;background:var(--paper);color:var(--forest);font:inherit;font-weight:800;cursor:pointer}.date-picker-head strong{color:var(--forest);font-size:14px}.date-picker-weekdays,.date-picker-days{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}.date-picker-weekdays span{color:var(--muted);font-size:11px;text-align:center}.date-picker-days button{aspect-ratio:1;border:0;border-radius:4px;background:transparent;color:var(--ink);font:inherit;font-size:13px;cursor:pointer}.date-picker-days button:hover{background:var(--cream)}.date-picker-days button.muted{color:#a2aa9d}.date-picker-days button.selected{background:var(--forest);color:white;font-weight:800}.selected-dates{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.selected-dates button{border:1px solid var(--line);border-radius:999px;background:var(--cream);padding:6px 9px;color:var(--forest);font:inherit;font-size:12px;font-weight:800;cursor:pointer}.date-picker-actions{display:flex;justify-content:flex-end;margin-top:14px;padding-top:12px;border-top:1px solid var(--line)}.date-picker-actions button{min-height:38px;border:0;border-radius:4px;background:var(--forest);padding:0 16px;color:white;font:inherit;font-weight:800;cursor:pointer}.date-picker-actions button:hover{background:#1b3023}.form-status{margin:0;font-size:14px;font-weight:800}.form-status.success{color:var(--leaf)}.form-status.error{color:var(--clay)}.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}.laku-page footer{padding:34px 0;background:#17261c;color:rgba(255,255,255,.72)}.footer-inner{display:flex;justify-content:space-between;gap:18px;align-items:center}.footer-logo{display:block;width:104px;height:40px;object-fit:contain}.footer-socials{display:flex;gap:16px;align-items:center}.footer-inner a{font-weight:700;color:white}@media (max-width:980px){.nav-links{display:none}.hero-grid,.meaning-grid,.intro-layout,.split,.product-layout,.inquiry-grid,.values-head{grid-template-columns:1fr;gap:32px}.hero{min-height:auto;padding-top:120px}.pathway-grid,.keeper-grid,.workshop-grid,.service-grid{grid-template-columns:repeat(2,1fr)}.image-frame{min-height:420px}}@media (max-width:640px){.shell{width:min(100% - 28px,1160px)}.nav-inner{min-height:64px}.laku-page h1{font-size:45px}.hero-actions,.button{width:100%}.meaning-section,.intro-band,.pathway-section,.keepers-section,.groups-section,.inquiry-section,.workshop-section,.apprentice-section,.products-section{padding:72px 0}.intro-card,.product-card,.inquiry-form,.apprentice-panel{padding:28px}.pathway-grid,.keeper-grid,.workshop-grid,.service-grid,.program-grid,.form-row{grid-template-columns:1fr}.footer-inner{align-items:flex-start;flex-direction:column}}
</style>
