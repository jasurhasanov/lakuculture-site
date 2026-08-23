<template>
  <div class="laku-page">
    <nav class="nav" aria-label="Laku navigation">
      <div class="shell nav-inner">
        <NuxtLink class="brand" to="/" aria-label="Laku home">
          <span class="brand-mark" aria-hidden="true">L</span>
          <span>LAKU</span>
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

        <div class="hero-panel" aria-label="Indonesian cultural materials and handmade craft textures">
          <div class="panel-card">
            <span>Observe</span>
            <span>Experience</span>
            <span>Create</span>
            <span>Apprentice</span>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="intro-band">
        <div class="shell intro-layout">
          <div class="image-frame" />
          <div class="intro-card">
            <p class="eyebrow dark-text">The LAKU model</p>
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
            <p class="eyebrow">Visitor pathways</p>
            <h2>Four ways to take part.</h2>
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

      <section class="schedule-section">
        <div class="shell split">
          <div>
            <p class="eyebrow dark-text">This week at LAKU</p>
            <h2>Reliability is part of the experience.</h2>
            <p class="section-copy">
              The site should show who visitors will meet each day, so the space feels
              alive before they arrive.
            </p>
          </div>
          <div class="schedule-list">
            <div v-for="day in schedule" :key="day.day" class="schedule-row">
              <strong>{{ day.day }}</strong>
              <span>{{ day.tradition }}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="workshops" class="workshop-section">
        <div class="shell">
          <div class="section-head values-head">
            <div>
              <p class="eyebrow">Create with Culture Keepers</p>
              <h2>Launch fewer workshops, make them excellent.</h2>
            </div>
            <p>
              The first release should sell two polished workshops and preview future
              traditions as coming soon. Each workshop states duration, price, what guests
              create, what they take home, age guidance, and the Culture Keeper.
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
              Each profile should connect the person, the practice, the products, and the
              learning opportunities they host.
            </p>
          </div>
          <div class="keeper-grid">
            <article v-for="keeper in keepers" :key="keeper.tradition" class="keeper-card">
              <span>{{ keeper.tradition }}</span>
              <h3>{{ keeper.name }}</h3>
              <p>{{ keeper.copy }}</p>
              <a href="#inquiry">Learn with this Culture Keeper</a>
            </article>
          </div>
        </div>
      </section>

      <section id="products" class="products-section">
        <div class="shell product-layout">
          <div>
            <p class="eyebrow">Handmade products</p>
            <h2>Products are not souvenirs. Every object carries a story.</h2>
          </div>
          <div class="product-card">
            <h3>Product story format</h3>
            <ul>
              <li>Object name, Culture Keeper name, and maker photograph</li>
              <li>Making process photographs and tradition story</li>
              <li>Local materials and approximate time required to create</li>
              <li>Lead CTA for shop visits, questions, commissions, and special orders</li>
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
              <h2>Revenue beyond walk-ins.</h2>
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
            <p class="eyebrow">Start here</p>
            <h2>Turn interest into a lead.</h2>
            <p>
              Use this form for workshops, apprenticeships, group visits, product
              questions, and custom programs. It opens a structured email for now and can
              later connect to CRM, WhatsApp, or a booking system.
            </p>
          </div>

          <form class="inquiry-form" @submit.prevent="handleInquiry">
            <label>
              Name
              <input v-model="form.name" required type="text" autocomplete="name" />
            </label>
            <label>
              Email or WhatsApp
              <input v-model="form.contact" required type="text" autocomplete="email" />
            </label>
            <label>
              I am interested in
              <select v-model="form.interest" required>
                <option value="">Choose one</option>
                <option>Book a workshop</option>
                <option>Apply for apprenticeship</option>
                <option>Plan a group program</option>
                <option>Ask about products or commissions</option>
                <option>Custom cultural program</option>
              </select>
            </label>
            <div class="form-row">
              <label>
                Preferred dates
                <input v-model="form.dates" type="text" placeholder="Flexible" />
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
            <button class="button" type="submit">Send Inquiry</button>
          </form>
        </div>
      </section>
    </main>

    <footer>
      <div class="shell footer-inner">
        <strong>LAKU</strong>
        <span>A Home for Indonesia's Living Culture</span>
        <a href="https://archipelagocollective.id">PT Archipelago Collective Indonesia</a>
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
  { kicker: 'Level 2', title: 'Experience', copy: 'A complimentary hands-on introduction gives guests a few minutes with bamboo, clay, batik, rattan, weaving, or culinary practice.', cta: 'See Daily Schedule', href: '#visit' },
  { kicker: 'Level 3', title: 'Create', copy: 'Paid workshops guide visitors through a complete handmade object with a clear duration, price, take-home outcome, and story.', cta: 'Book a Workshop', href: '#workshops' },
  { kicker: 'Level 4', title: 'Apprentice', copy: 'Longer programs invite committed learners into daily practice with a Culture Keeper for one week to one month.', cta: 'Apply Now', href: '#apprenticeship' }
]

const schedule = [
  { day: 'Monday', tradition: 'Batik' },
  { day: 'Tuesday', tradition: 'Bamboo' },
  { day: 'Wednesday', tradition: 'Pottery' },
  { day: 'Thursday', tradition: 'Rattan' },
  { day: 'Friday', tradition: 'Traditional Culinary' },
  { day: 'Saturday', tradition: 'Weaving' },
  { day: 'Sunday', tradition: 'Rotating Program / Family Day' }
]

const workshops = [
  { status: 'Opening workshop', title: 'Bamboo Weaving Introduction', meta: '90 minutes / beginner friendly', points: ['Create a small woven piece', 'Learn material preparation and simple patterns', 'Take home your handmade object'], cta: 'Book This Workshop' },
  { status: 'Opening workshop', title: 'Batik Wax Lines', meta: '2 hours / ages 10+', points: ['Draw wax lines with a canting', 'Learn motif meaning and cloth preparation', 'Take home a small batik work'], cta: 'Book This Workshop' },
  { status: 'Coming soon', title: 'Pottery, Rattan, Weaving, and Culinary', meta: 'One new workshop added each month', points: ['Quality before quantity', 'Each launch becomes a marketing story', 'Visitors can join the waiting list'], cta: 'Join the Waitlist' }
]

const programs = ['1 week', '2 weeks', '3 weeks', '1 month']

const keepers = [
  { tradition: 'Batik', name: 'Batik Culture Keeper', copy: 'Practices wax drawing, motif stories, cloth preparation, and daily demonstration.' },
  { tradition: 'Bamboo', name: 'Bamboo Culture Keeper', copy: 'Works with local bamboo strips, weaving patterns, and functional handmade objects.' },
  { tradition: 'Pottery', name: 'Pottery Culture Keeper', copy: 'Shapes clay, teaches form, and shares the relationship between earth, hand, and utility.' },
  { tradition: 'Culinary', name: 'Traditional Culinary Keeper', copy: 'Introduces Indonesian drinks, spices, sweets, and local hospitality through taste.' }
]

const services = [
  'School visits',
  'Corporate cultural workshops',
  'Private group workshops',
  'Family day programs',
  'Hotel and travel partner experiences',
  'Retreat cultural sessions',
  'Custom cultural delegations',
  'Product commissions'
]

const form = reactive({
  name: '',
  contact: '',
  interest: '',
  dates: '',
  groupSize: '',
  message: ''
})

const handleInquiry = () => {
  const subject = encodeURIComponent(`LAKU inquiry: ${form.interest}`)
  const body = encodeURIComponent([
    `Name: ${form.name}`,
    `Email / WhatsApp: ${form.contact}`,
    `Interest: ${form.interest}`,
    `Preferred dates: ${form.dates || 'Flexible'}`,
    `Group size: ${form.groupSize || 'Not specified'}`,
    '',
    form.message || 'No extra message provided.'
  ].join('\n'))

  window.location.href = `mailto:hello@archipelagocollective.id?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.laku-page{--ink:#1a2118;--muted:#66715f;--forest:#253f2f;--leaf:#537b45;--gold:#c99342;--clay:#9f5135;--paper:#fffaf0;--cream:#f3ead8;--line:rgba(37,63,47,.15);--shadow:0 24px 80px rgba(37,63,47,.18);margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.5}.laku-page *{box-sizing:border-box}.laku-page a{color:inherit;text-decoration:none}.shell{width:min(1160px,calc(100% - 40px));margin:0 auto}.nav{position:fixed;top:0;left:0;right:0;z-index:20;color:white;background:rgba(37,63,47,.86);border-bottom:1px solid rgba(255,255,255,.16);backdrop-filter:blur(18px)}.nav-inner{min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center;gap:12px;font-weight:800;font-size:20px}.brand-mark{display:grid;place-items:center;width:38px;height:38px;border:1px solid rgba(255,255,255,.4);border-radius:50%;background:rgba(255,255,255,.12);font-family:Fraunces,Georgia,serif;font-weight:760}.nav-links{display:flex;gap:24px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.nav-links a{opacity:.84}.nav-links a:hover{opacity:1}.nav-cta{display:inline-flex;align-items:center;min-height:38px;padding:0 16px;border-radius:4px;background:var(--gold);color:#21180b;font-weight:800;font-size:13px}.button{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 22px;border-radius:4px;border:1px solid transparent;background:var(--gold);color:#21180b;font-weight:800;cursor:pointer}.button.secondary{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.36);color:white}.button.secondary.dark{background:var(--forest);color:white;border-color:var(--forest)}.button.small{min-height:44px;padding:0 16px;font-size:14px}.text-link{display:inline-flex;align-items:center;font-weight:800;color:white}.hero{min-height:94vh;display:grid;align-items:end;padding:118px 0 54px;color:white;background:linear-gradient(90deg,rgba(21,32,23,.92),rgba(21,32,23,.58) 52%,rgba(21,32,23,.12)),linear-gradient(0deg,rgba(21,32,23,.82),rgba(21,32,23,.04) 46%),url("/images/laku/optimized/hero-workshop.webp") center/cover}.hero-grid{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:52px;align-items:end}.hero-copy{max-width:820px}.eyebrow{margin:0 0 16px;color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.dark-text{color:var(--clay)}.laku-page h1,.laku-page h2,.laku-page h3{margin:0;letter-spacing:0;line-height:1.03}.laku-page h1,.laku-page h2{font-family:Fraunces,Georgia,serif}.laku-page h1{font-size:clamp(50px,7vw,98px);font-weight:760;max-width:860px}.laku-page h2{font-size:clamp(34px,4.8vw,62px);font-weight:650;color:var(--forest)}.laku-page h3{font-size:24px;color:var(--forest)}.hero-lead{max-width:720px;margin:24px 0 0;color:rgba(255,255,255,.84);font-size:clamp(18px,2vw,22px)}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}.hero-panel{min-height:460px;border-radius:8px;background:linear-gradient(0deg,rgba(37,63,47,.15),rgba(37,63,47,.15)),url("/images/laku/optimized/table-offering.webp") center/cover;box-shadow:var(--shadow);display:flex;align-items:flex-end;padding:18px}.panel-card{width:100%;display:grid;grid-template-columns:repeat(2,1fr);gap:1px;border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.16);backdrop-filter:blur(12px)}.panel-card span{padding:18px;font-family:Fraunces,Georgia,serif;font-size:24px;font-weight:650}.intro-band,.pathway-section,.schedule-section,.keepers-section,.groups-section,.inquiry-section{padding:96px 0}.intro-band,.visit-section{background:var(--cream)}.intro-layout,.split,.product-layout,.inquiry-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:54px;align-items:center}.image-frame{min-height:560px;border-radius:8px;background:linear-gradient(0deg,rgba(37,63,47,.1),rgba(37,63,47,.1)),url("/images/laku/optimized/craft-detail.webp") center/cover;box-shadow:var(--shadow)}.intro-card,.product-card,.inquiry-form{padding:40px;background:var(--paper);border:1px solid var(--line);border-radius:8px}.intro-card p,.section-copy{color:var(--muted);font-size:18px}.section-head{max-width:780px}.section-head.centered{margin:0 auto 48px;text-align:center}.section-head p{margin:16px 0 0;color:var(--muted);font-size:18px}.pathway-grid,.keeper-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.pathway-card,.keeper-card,.service-card{padding:26px;border:1px solid var(--line);border-radius:8px;background:white}.pathway-card{min-height:300px;display:flex;flex-direction:column}.pathway-card span,.workshop-card p,.keeper-card span{color:var(--clay);font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.pathway-card p,.keeper-card p,.product-card li,.workshop-card li{color:var(--muted)}.pathway-card a,.keeper-card a{margin-top:auto;color:var(--forest);font-weight:800}.schedule-list{display:grid;gap:10px}.schedule-row{display:flex;justify-content:space-between;gap:18px;padding:18px 20px;border-left:4px solid var(--gold);background:white}.schedule-row strong{color:var(--forest)}.workshop-section,.apprentice-section{padding:108px 0;background:var(--forest);color:white}.workshop-section h2,.workshop-section h3,.apprentice-section h2{color:white}.values-head{display:grid;grid-template-columns:.95fr 1.05fr;gap:54px;align-items:end;margin-bottom:42px}.values-head p{color:rgba(255,255,255,.72)}.groups-section .values-head p{color:var(--muted)}.workshop-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.workshop-card{min-height:380px;padding:28px;border:1px solid rgba(255,255,255,.18);border-radius:8px;background:rgba(255,255,255,.08);display:flex;flex-direction:column;gap:22px}.workshop-card span{color:rgba(255,255,255,.72)}.workshop-card ul,.product-card ul{padding-left:18px}.workshop-card li{color:rgba(255,255,255,.72);margin:8px 0}.workshop-card .button{margin-top:auto;align-self:flex-start}.apprentice-panel{padding:64px;border-radius:8px;background:linear-gradient(90deg,rgba(37,63,47,.9),rgba(37,63,47,.64)),url("/images/laku/optimized/weaving-values.webp") center/cover;box-shadow:var(--shadow)}.apprentice-panel p{max-width:820px;color:rgba(255,255,255,.78);font-size:19px}.program-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:34px 0}.program-grid span{padding:22px;text-align:center;border:1px solid rgba(255,255,255,.24);border-radius:8px;background:rgba(255,255,255,.1);font-family:Fraunces,Georgia,serif;font-size:26px}.products-section{padding:96px 0;background:linear-gradient(90deg,rgba(37,63,47,.92),rgba(37,63,47,.68)),url("/images/laku/optimized/table-offering.webp") center/cover;color:white}.products-section h2,.products-section h3{color:white}.product-card{background:rgba(255,255,255,.94)}.product-card h3{color:var(--forest)}.service-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.service-card{min-height:110px;display:flex;align-items:flex-end;color:var(--forest);font-family:Fraunces,Georgia,serif;font-size:22px;font-weight:650}.inquiry-section{background:var(--forest);color:white}.inquiry-section h2{color:white}.inquiry-section p{color:rgba(255,255,255,.76);font-size:19px}.inquiry-form{display:grid;gap:16px;background:var(--paper);color:var(--ink)}.inquiry-form label{display:grid;gap:8px;font-weight:800;font-size:13px;color:var(--forest)}.inquiry-form input,.inquiry-form select,.inquiry-form textarea{width:100%;border:1px solid var(--line);border-radius:4px;background:white;padding:12px 14px;color:var(--ink);font:inherit}.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}.laku-page footer{padding:34px 0;background:#17261c;color:rgba(255,255,255,.72)}.footer-inner{display:flex;justify-content:space-between;gap:18px;align-items:center}.footer-inner strong{color:white;font-size:20px}.footer-inner a{font-weight:700;color:white}@media (max-width:980px){.nav-links{display:none}.hero-grid,.intro-layout,.split,.product-layout,.inquiry-grid,.values-head{grid-template-columns:1fr;gap:32px}.hero{min-height:auto;padding-top:120px}.hero-panel{min-height:360px}.pathway-grid,.keeper-grid,.workshop-grid,.service-grid{grid-template-columns:repeat(2,1fr)}.image-frame{min-height:420px}}@media (max-width:640px){.shell{width:min(100% - 28px,1160px)}.nav-inner{min-height:64px}.laku-page h1{font-size:45px}.hero-actions,.button{width:100%}.hero-panel{min-height:300px}.intro-band,.pathway-section,.schedule-section,.keepers-section,.groups-section,.inquiry-section,.workshop-section,.apprentice-section,.products-section{padding:72px 0}.intro-card,.product-card,.inquiry-form,.apprentice-panel{padding:28px}.pathway-grid,.keeper-grid,.workshop-grid,.service-grid,.program-grid,.form-row{grid-template-columns:1fr}.schedule-row{display:grid}.footer-inner{align-items:flex-start;flex-direction:column}}
</style>
