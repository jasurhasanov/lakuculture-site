<template>
  <div class="laku-page">
    <nav class="nav" aria-label="Laku navigation">
      <div class="shell nav-inner">
        <NuxtLink class="brand" to="/" aria-label="Laku home">
          <span class="brand-mark" aria-hidden="true">L</span>
          <span>Laku</span>
        </NuxtLink>
        <div class="nav-links">
          <a href="#meaning">Meaning</a>
          <a href="#experience">Experience</a>
          <a href="#visit">Visit</a>
        </div>
        <a class="nav-aci" href="https://archipelagocollective.id">ACI</a>
      </div>
    </nav>

    <header class="hero">
      <div class="shell hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Mawun, Lombok</p>
          <h1>Live Indonesia Through Its Traditions</h1>
          <p class="hero-lead">
            Laku is an immersive Indonesian cultural experience where guests taste,
            create, listen, and participate in the living traditions of Indonesia.
          </p>
          <div class="hero-actions">
            <a class="button" href="#experience">Explore the experience</a>
            <a class="button secondary" href="#meaning">What does Laku mean?</a>
          </div>
        </div>

        <div class="hero-panel" aria-label="Indonesian cultural materials and handmade craft textures">
          <div class="panel-card">
            <span>Taste</span>
            <span>Create</span>
            <span>Listen</span>
            <span>Live</span>
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
          <div class="image-frame large" />
          <div class="intro-card">
            <p class="eyebrow">The spirit of Laku</p>
            <h2>A place of participation, not performance.</h2>
            <p>
              Nestled among the rice fields and plantations of Mawun, Lombok, Laku
              invites travelers, expats, and curious minds to slow down and discover
              Indonesia through its crafts, music, flavors, and hospitality.
            </p>
            <p>
              It is neither a museum nor a performance venue. It is a living cultural
              experience rooted in everyday traditions.
            </p>
          </div>
        </div>
      </section>

      <section class="philosophy-section">
        <div class="shell split">
          <div>
            <p class="eyebrow dark-text">Philosophy</p>
            <h2>Culture should be lived.</h2>
          </div>
          <div class="statement-list">
            <p>The songs must still be sung.</p>
            <p>The drinks must still be brewed.</p>
            <p>The crafts must still be made by hand.</p>
            <p>The stories must still be shared.</p>
            <p>The wisdom of generations must remain part of everyday life.</p>
          </div>
        </div>
      </section>

      <section id="experience" class="experience-section">
        <div class="shell">
          <div class="section-head centered">
            <p class="eyebrow">The Laku experience</p>
            <h2>A visit unfolds slowly.</h2>
            <p>
              Traditional melodies drift through the air. The scent of Indonesian
              coffee and spices welcomes arriving guests. Rice fields stretch beyond
              the terrace, tropical flowers frame the entrance, and open-air bamboo
              architecture invites visitors to pause.
            </p>
          </div>

          <div class="experience-grid">
            <article v-for="item in experience" :key="item.title" class="experience-card">
              <span>{{ item.number }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.copy }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="values-section">
        <div class="shell">
          <div class="section-head values-head">
            <div>
              <p class="eyebrow">Core values</p>
              <h2>Simple, respectful, and rooted.</h2>
            </div>
            <p>
              Laku honors traditions as they truly are, supports local makers, and
              creates meaningful cultural exchange between locals and visitors.
            </p>
          </div>

          <div class="values-grid">
            <article v-for="value in values" :key="value.title" class="value-card">
              <h3>{{ value.title }}</h3>
              <p>{{ value.copy }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="not-section">
        <div class="shell not-grid">
          <div>
            <p class="eyebrow dark-text">What Laku is not</p>
            <h2>Not a museum. Not a staged show. Not simply a cafe.</h2>
          </div>
          <div>
            <p>
              Laku is a place where Indonesia is experienced through participation and
              everyday traditions: brewing tea, shaping clay, weaving bamboo, sharing
              stories, and carrying melodies that accompany daily life.
            </p>
          </div>
        </div>
      </section>

      <section id="visit" class="visit-section">
        <div class="shell visit-panel">
          <p class="eyebrow">The essence of Laku</p>
          <h2>Taste Indonesia. Create Indonesia. Listen to Indonesia. Live Indonesia.</h2>
          <p>
            Located in Mawun, Lombok, surrounded by rice fields and plantations, Laku
            embraces the rhythms of village life through craft, music, flavor, natural
            materials, and warm Indonesian hospitality.
          </p>
          <a class="button" href="mailto:hello@archipelagocollective.id?subject=Laku%20inquiry">Start a Laku inquiry</a>
        </div>
      </section>
    </main>

    <footer>
      <div class="shell footer-inner">
        <strong>Laku</strong>
        <span>Live Indonesia Through Its Traditions</span>
        <a href="https://archipelagocollective.id">PT Archipelago Collective Indonesia</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

useHead({
  title: 'Laku | Live Indonesia Through Its Traditions',
  meta: [
    { name: 'description', content: 'Laku is an immersive Indonesian cultural experience in Mawun, Lombok, where guests taste, create, listen, and participate in living traditions.' },
    { name: 'theme-color', content: '#253f2f' },
    { property: 'og:title', content: 'Laku | Live Indonesia Through Its Traditions' },
    { property: 'og:description', content: 'An immersive Indonesian cultural experience in Mawun, Lombok, rooted in craft, music, flavor, hospitality, and participation.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,650;9..144,760&family=Inter:wght@400;500;600;700;800&display=swap' }
  ]
})

const experience = [
  { number: '01', title: 'Sit', copy: 'Slow down among rice fields, tropical gardens, bamboo ceilings, alang-alang roofs, and handmade details.' },
  { number: '02', title: 'Listen', copy: 'Traditional Indonesian music becomes part of the atmosphere, creating calm, nostalgia, and belonging.' },
  { number: '03', title: 'Taste', copy: 'Guests are welcomed by Indonesian coffee, tea, herbal drinks, sweets, spices, and seasonal local flavors.' },
  { number: '04', title: 'Create', copy: 'Hands-on workshops invite visitors to make something with local artisans and leave with both a creation and a story.' }
]

const values = [
  { title: 'Authenticity', copy: 'Genuine practices and stories, without manufactured experiences.' },
  { title: 'Participation', copy: 'Culture is best understood through doing, making, tasting, and listening.' },
  { title: 'Respect', copy: 'Care for the people, materials, traditions, and wisdom behind each experience.' },
  { title: 'Simplicity', copy: 'Beauty in the handmade, the imperfect, and the natural.' },
  { title: 'Community', copy: 'Connection between generations, locals and visitors, people and place.' },
  { title: 'Sustainability', copy: 'Materials and practices that have sustained Indonesian communities for centuries.' }
]
</script>

<style scoped>
.laku-page{--ink:#1a2118;--muted:#66715f;--forest:#253f2f;--leaf:#537b45;--moss:#8b9c5c;--gold:#c99342;--clay:#9f5135;--paper:#fffaf0;--cream:#f3ead8;--line:rgba(37,63,47,.15);--shadow:0 24px 80px rgba(37,63,47,.18);margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.5}.laku-page *{box-sizing:border-box}.laku-page a{color:inherit;text-decoration:none}.shell{width:min(1160px,calc(100% - 40px));margin:0 auto}.nav{position:fixed;top:0;left:0;right:0;z-index:20;color:white;background:rgba(37,63,47,.82);border-bottom:1px solid rgba(255,255,255,.16);backdrop-filter:blur(18px)}.nav-inner{min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center;gap:12px;font-weight:800;font-size:20px}.brand-mark{display:grid;place-items:center;width:38px;height:38px;border:1px solid rgba(255,255,255,.4);border-radius:50%;background:rgba(255,255,255,.12);font-family:Fraunces,Georgia,serif;font-weight:760}.nav-links{display:flex;gap:24px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.12em}.nav-links a{opacity:.82}.nav-links a:hover{opacity:1}.nav-aci{font-weight:800;font-size:12px;letter-spacing:.12em}.button{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 22px;border-radius:4px;border:1px solid transparent;background:var(--gold);color:#21180b;font-weight:800}.button.secondary{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.36);color:white}.hero{min-height:94vh;display:grid;align-items:end;padding:118px 0 54px;color:white;background:linear-gradient(90deg,rgba(21,32,23,.9),rgba(21,32,23,.58) 52%,rgba(21,32,23,.12)),linear-gradient(0deg,rgba(21,32,23,.82),rgba(21,32,23,.04) 46%),url("/images/laku/optimized/hero-workshop.webp") center/cover}.hero-grid{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:52px;align-items:end}.hero-copy{max-width:760px}.eyebrow{margin:0 0 16px;color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.dark-text{color:var(--clay)}.laku-page h1,.laku-page h2,.laku-page h3{margin:0;letter-spacing:0;line-height:1.03}.laku-page h1,.laku-page h2{font-family:Fraunces,Georgia,serif}.laku-page h1{font-size:clamp(52px,8vw,106px);font-weight:760;max-width:800px}.laku-page h2{font-size:clamp(34px,5vw,66px);font-weight:650;color:var(--forest)}.laku-page h3{font-size:24px;color:var(--forest)}.hero-lead{max-width:690px;margin:24px 0 0;color:rgba(255,255,255,.84);font-size:clamp(18px,2vw,22px)}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}.hero-panel{min-height:460px;border-radius:8px;background:linear-gradient(0deg,rgba(37,63,47,.15),rgba(37,63,47,.15)),url("/images/laku/optimized/table-offering.webp") center/cover;box-shadow:var(--shadow);display:flex;align-items:flex-end;padding:18px}.panel-card{width:100%;display:grid;grid-template-columns:repeat(2,1fr);gap:1px;border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.16);backdrop-filter:blur(12px)}.panel-card span{padding:18px;font-family:Fraunces,Georgia,serif;font-size:24px;font-weight:650}.meaning-section,.philosophy-section,.not-section{padding:100px 0}.meaning-grid,.split,.not-grid{display:grid;grid-template-columns:.86fr 1.14fr;gap:70px;align-items:start}.meaning-copy{font-size:22px;color:var(--muted)}.meaning-copy p{margin:0 0 22px}.meaning-copy strong{color:var(--forest)}.intro-band{padding:96px 0;background:var(--cream)}.intro-layout{display:grid;grid-template-columns:1.05fr .95fr;gap:30px;align-items:center}.image-frame{min-height:560px;border-radius:8px;background:linear-gradient(0deg,rgba(37,63,47,.1),rgba(37,63,47,.1)),url("/images/laku/optimized/craft-detail.webp") center/cover;box-shadow:var(--shadow)}.intro-card{padding:48px;background:var(--paper);border:1px solid var(--line);border-radius:8px}.intro-card p{color:var(--muted);font-size:18px}.statement-list{display:grid;gap:12px}.statement-list p{margin:0;padding:22px 24px;border-left:4px solid var(--gold);background:white;color:var(--forest);font-size:22px;font-family:Fraunces,Georgia,serif}.experience-section{padding:108px 0;background:var(--forest);color:white}.experience-section h2,.experience-section h3{color:white}.section-head{max-width:760px}.section-head.centered{margin:0 auto 48px;text-align:center}.section-head p{margin:16px 0 0;color:var(--muted);font-size:18px}.experience-section .section-head p{color:rgba(255,255,255,.72)}.experience-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.16)}.experience-card{min-height:300px;padding:28px;background:rgba(255,255,255,.07)}.experience-card span{display:block;margin-bottom:42px;color:#f1c77c;font-weight:800;letter-spacing:.12em}.experience-card p{color:rgba(255,255,255,.72)}.values-section{padding:100px 0;background:linear-gradient(90deg,rgba(37,63,47,.92),rgba(37,63,47,.68)),url("/images/laku/optimized/weaving-values.webp") center/cover;color:white}.values-section h2,.values-section h3{color:white}.values-head{display:grid;grid-template-columns:.95fr 1.05fr;gap:54px;align-items:end;margin-bottom:42px}.values-head p{color:rgba(255,255,255,.72)}.values-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.value-card{min-height:190px;padding:24px;border:1px solid rgba(255,255,255,.2);border-radius:8px;background:rgba(255,255,255,.08);backdrop-filter:blur(10px)}.value-card p{color:rgba(255,255,255,.72)}.not-grid p{margin:0;color:var(--muted);font-size:22px}.visit-section{padding:110px 0;background:var(--cream)}.visit-panel{padding:64px;border-radius:8px;background:var(--paper);border:1px solid var(--line);box-shadow:var(--shadow);text-align:center}.visit-panel h2{max-width:920px;margin:0 auto}.visit-panel p{max-width:680px;margin:24px auto 0;color:var(--muted);font-size:19px}.visit-panel .button{margin-top:34px}.laku-page footer{padding:34px 0;background:var(--forest);color:rgba(255,255,255,.72)}.footer-inner{display:flex;justify-content:space-between;gap:18px;align-items:center}.footer-inner strong{color:white;font-size:20px}.footer-inner a{font-weight:700;color:white}@media (max-width:980px){.nav-links{display:none}.hero-grid,.meaning-grid,.split,.intro-layout,.not-grid,.values-head{grid-template-columns:1fr;gap:32px}.hero{min-height:auto;padding-top:120px}.hero-panel{min-height:360px}.experience-grid,.values-grid{grid-template-columns:repeat(2,1fr)}.image-frame{min-height:420px}}@media (max-width:640px){.shell{width:min(100% - 28px,1160px)}.nav-inner{min-height:64px}.laku-page h1{font-size:48px}.hero-actions,.button{width:100%}.hero-panel{min-height:300px}.meaning-section,.philosophy-section,.not-section,.values-section,.visit-section{padding:72px 0}.intro-band,.experience-section{padding:76px 0}.intro-card,.visit-panel{padding:28px}.experience-grid,.values-grid{grid-template-columns:1fr}.footer-inner{align-items:flex-start;flex-direction:column}}
</style>
