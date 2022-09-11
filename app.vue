<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('layouts.title'),
  // link: [
  //   {
  //     rel: 'icon', type: 'image/png', href: '/nuxt.png',
  //   },
  // ],
})
if (process.client) {
  window.addEventListener('load', () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('serviceWorker is not supported in current browser!')
    }
    navigator.serviceWorker.register('/sw.js')
  })
}
</script>
  
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
