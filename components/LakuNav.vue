<template>
  <nav class="nav" aria-label="Laku navigation">
    <div class="shell nav-inner">
      <NuxtLink class="brand" to="/" aria-label="Laku home">
        <img class="brand-logo" src="/images/laku/Laku logo.png" alt="LAKU" width="2172" height="724" />
      </NuxtLink>
      <div class="nav-links">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink>
      </div>
      <NuxtLink class="nav-cta" :to="ctaTo">{{ ctaLabel }}</NuxtLink>
      <button
        class="mobile-menu-toggle"
        type="button"
        :aria-expanded="isMobileNavOpen"
        aria-controls="mobile-menu"
        aria-label="Open navigation menu"
        @click="toggleMobileNav"
      >
        <span />
        <span />
        <span />
      </button>
    </div>
    <div id="mobile-menu" class="mobile-menu" :class="{ open: isMobileNavOpen }">
      <div class="shell mobile-menu-inner">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" @click="closeMobileNav">{{ item.label }}</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  ctaLabel?: string
  ctaTo?: string
}>(), {
  ctaLabel: 'Plan with LAKU',
  ctaTo: '/#inquiry'
})

const navItems = [
  { label: 'Visit', to: '/visit' },
  { label: 'Workshops', to: '/workshops' },
  { label: 'Apprenticeship', to: '/apprenticeship' },
  { label: 'Products', to: '/products' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Blog', to: '/blog' }
]

const isMobileNavOpen = ref(false)

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}

const closeMobileNav = () => {
  isMobileNavOpen.value = false
}
</script>

<style scoped>
.shell{width:min(1160px,calc(100% - 40px));margin:0 auto}.nav{position:fixed;top:0;left:0;right:0;z-index:20;color:white;background:rgba(37,63,47,.88);border-bottom:1px solid rgba(255,255,255,.16);backdrop-filter:blur(18px)}.nav-inner{min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center}.brand-logo{display:block;width:112px;height:42px;object-fit:contain}.nav-links{display:flex;gap:22px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.nav-links a{color:white;text-decoration:none;opacity:.84}.nav-links a:hover,.nav-links a.router-link-active{color:white;opacity:1}.nav-cta{display:inline-flex;align-items:center;justify-content:center;min-height:38px;padding:0 16px;border-radius:4px;background:#c99342;color:#21180b;font-size:13px;font-weight:800;text-decoration:none}.mobile-menu-toggle{display:none;width:42px;height:42px;border:1px solid rgba(255,255,255,.28);border-radius:4px;background:rgba(255,255,255,.08);padding:10px;color:white;cursor:pointer}.mobile-menu-toggle span{display:block;width:100%;height:2px;margin:5px 0;border-radius:999px;background:currentColor}.mobile-menu{display:none;border-top:1px solid rgba(255,255,255,.14);background:rgba(37,63,47,.96)}.mobile-menu-inner{display:grid;gap:2px;padding-top:10px;padding-bottom:14px}.mobile-menu a{display:block;padding:13px 0;color:white;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.12)}@media (max-width:980px){.nav-links,.nav-cta{display:none}.mobile-menu-toggle{display:block}.mobile-menu.open{display:block}}@media (max-width:640px){.shell{width:min(100% - 28px,1160px)}.nav-inner{min-height:64px}}
</style>
