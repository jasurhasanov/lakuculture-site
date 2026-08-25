<template>
  <div class="laku-landing">
    <LakuNav />

    <header class="hero" :style="heroStyle">
      <div class="shell hero-inner">
        <p class="eyebrow">{{ page.eyebrow }}</p>
        <h1>{{ page.h1 }}</h1>
        <p class="hero-lead">{{ page.lead }}</p>
        <div class="hero-actions">
          <NuxtLink class="button" to="/#inquiry">{{ page.primaryCta }}</NuxtLink>
          <NuxtLink class="button secondary" :to="secondaryHref">{{ page.secondaryCta }}</NuxtLink>
        </div>
      </div>
    </header>

    <main>
      <section class="intro-section">
        <div class="shell intro-grid">
          <figure class="image-frame">
            <img
              :src="page.image"
              :alt="page.imageAlt"
              :width="imageSize.width"
              :height="imageSize.height"
              loading="lazy"
            />
          </figure>
          <div class="intro-copy">
            <p class="eyebrow dark-text">LAKU Culture Lombok</p>
            <h2>{{ page.title }}</h2>
            <p>{{ page.description }}</p>
          </div>
        </div>
      </section>

      <section class="detail-section">
        <div class="shell detail-grid">
          <article v-for="section in page.sections" :key="section.title" class="detail-card">
            <span>{{ section.eyebrow }}</span>
            <h2>{{ section.title }}</h2>
            <p>{{ section.copy }}</p>
            <ul>
              <li v-for="point in section.points" :key="point">{{ point }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="faq-section">
        <div class="shell">
          <div class="section-head">
            <p class="eyebrow dark-text">Questions</p>
            <h2>Common questions about {{ page.h1.toLowerCase() }}.</h2>
          </div>
          <div class="faq-grid">
            <article v-for="item in page.faqs" :key="item.question" class="faq-card">
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
            <h2>Share your dates, group size, and what you want to experience.</h2>
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
import { imageDimensions } from '~/data/lakuSeo'
import type { LandingPageContent } from '~/data/lakuSeo'

const props = defineProps<{
  page: LandingPageContent
}>()

const imageSize = computed(() => imageDimensions[props.page.image] ?? { width: 1200, height: 900 })

const secondaryHref = computed(() => {
  if (props.page.slug === 'workshops') return '/visit'
  if (props.page.slug === 'visit') return '/workshops'
  if (props.page.slug === 'apprenticeship') return '/workshops'
  if (props.page.slug === 'products') return '/#keepers'
  return '/visit'
})

const heroStyle = computed(() => ({
  backgroundImage: `linear-gradient(90deg,rgba(21,32,23,.92),rgba(21,32,23,.58) 54%,rgba(21,32,23,.2)),linear-gradient(0deg,rgba(21,32,23,.82),rgba(21,32,23,.08) 46%),url("${props.page.image}")`
}))
</script>

<style scoped>
.laku-landing{--ink:#1a2118;--muted:#66715f;--forest:#253f2f;--gold:#c99342;--clay:#9f5135;--paper:#fffaf0;--cream:#f3ead8;--line:rgba(37,63,47,.15);--shadow:0 24px 80px rgba(37,63,47,.18);margin:0;background:var(--paper);color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.5}.laku-landing *{box-sizing:border-box}.laku-landing a{color:inherit;text-decoration:none}.shell{width:min(1160px,calc(100% - 40px));margin:0 auto}.nav{position:fixed;top:0;left:0;right:0;z-index:20;color:white;background:rgba(37,63,47,.88);border-bottom:1px solid rgba(255,255,255,.16);backdrop-filter:blur(18px)}.nav-inner{min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand-logo{display:block;width:112px;height:42px;object-fit:contain}.nav-links{display:flex;gap:22px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.nav-links a{opacity:.84}.nav-links a:hover{opacity:1}.nav-cta,.button{display:inline-flex;align-items:center;justify-content:center;border-radius:4px;font-weight:800}.nav-cta{min-height:38px;padding:0 16px;background:var(--gold);color:#21180b;font-size:13px}.button{min-height:50px;padding:0 22px;border:1px solid transparent;background:var(--gold);color:#21180b}.button.secondary{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.36);color:white}.hero{min-height:74vh;display:grid;align-items:end;padding:118px 0 58px;color:white;background-position:center;background-size:cover}.hero-inner{max-width:900px}.eyebrow{margin:0 0 16px;color:#f1c77c;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.dark-text{color:var(--clay)}h1,h2,h3{margin:0;letter-spacing:0;line-height:1.04}h1,h2{font-family:Fraunces,Georgia,serif}h1{max-width:900px;font-size:clamp(46px,6.4vw,88px);font-weight:760}h2{font-size:clamp(31px,4vw,54px);font-weight:650;color:var(--forest)}h3{font-size:23px;color:var(--forest)}.hero-lead{max-width:760px;margin:24px 0 0;color:rgba(255,255,255,.84);font-size:clamp(18px,2vw,22px)}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}.intro-section,.detail-section,.faq-section,.cta-section{padding:92px 0}.intro-section,.faq-section{background:var(--cream)}.intro-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:54px;align-items:center}.image-frame{min-height:520px;margin:0;border-radius:8px;overflow:hidden;box-shadow:var(--shadow);background:var(--cream)}.image-frame img{display:block;width:100%;height:520px;object-fit:cover}.intro-copy{padding:40px;background:var(--paper);border:1px solid var(--line);border-radius:8px}.intro-copy p,.detail-card p,.faq-card p{color:var(--muted);font-size:18px}.detail-grid,.faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.detail-card,.faq-card{padding:30px;border:1px solid var(--line);border-radius:8px;background:white}.detail-card{min-height:390px}.detail-card span{display:block;margin-bottom:14px;color:var(--clay);font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.detail-card ul{padding-left:18px;color:var(--muted);font-size:17px}.detail-card li{margin:9px 0}.section-head{max-width:780px;margin:0 0 40px}.faq-card{min-height:190px}.cta-section{background:var(--forest);color:white}.cta-panel{display:flex;align-items:center;justify-content:space-between;gap:28px}.cta-panel h2{max-width:760px;color:white}.laku-landing footer{padding:34px 0;background:#17261c;color:rgba(255,255,255,.72)}.footer-inner{display:flex;justify-content:space-between;gap:18px;align-items:center}.footer-brand{display:grid;gap:6px}.footer-brand address{font-style:normal;color:rgba(255,255,255,.6)}.footer-logo{display:block;width:104px;height:40px;object-fit:contain}.footer-socials{display:flex;gap:16px;align-items:center}.footer-inner a{font-weight:700;color:white}@media (max-width:980px){.nav-links{display:none}.intro-grid,.detail-grid,.faq-grid{grid-template-columns:1fr}.hero{min-height:auto;padding-top:120px}.image-frame{min-height:420px}.image-frame img{height:420px}.cta-panel{align-items:flex-start;flex-direction:column}}@media (max-width:640px){.shell{width:min(100% - 28px,1160px)}.nav-inner{min-height:64px}h1{font-size:43px}.hero-actions,.button{width:100%}.intro-section,.detail-section,.faq-section,.cta-section{padding:72px 0}.intro-copy,.detail-card,.faq-card{padding:26px}.footer-inner{align-items:flex-start;flex-direction:column}}
</style>
