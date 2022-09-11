<template>
  <div class="max-w-1200px mx-auto">
    <w-header class="flex items-center justify-between text-fs18">
      <NuxtLink to="/" class="text-primary-500 cursor-pointer flex items-center space-x-1 text-fs24">
        <img class="w-8 h-8" src="/nuxt.png" alt="">
        <span>Nuxt3</span>
      </NuxtLink>
      <div class="flex items-center space-x-4">
        <nuxt-link dark="text-white" light="text-black" hover="opacity-100" class="opacity-50 transition delay-50 flex items-center space-x-1"
          to="https://socket.hom.wang">
          <i i-carbon-chat></i>
          <span>{{ $t('header.在线聊天') }}</span>  
        </nuxt-link>
      </div>
      <div class="flex items-center space-x-4">
        <span dark="text-white" light="text-black" hover="opacity-100" class="opacity-50 transition delay-50" v-for="locale in availableLocales" :key="locale.code">
          <NuxtLink :to="switchLocalePath(locale.code) || ''">{{ locale.name }}</NuxtLink>
        </span>
        <DarkToggle />
        <a dark="text-white" light="text-black" hover="opacity-100" class="text-fs24 opacity-50 transition delay-50" i-carbon-logo-github href="https://github.com/516310460/hom.wang" target="_blank" />
      </div>
    </w-header>
    <div class="max-w-1000px mx-auto px-6 py-10">
      <p dark="text-white" light="text-black" class="text-fs32">{{ $t('home.名字') }}</p>
      <p dark="text-[#ccc]" light="text-black opacity-50" class="mt-6 text-fs20">
        {{ $t('home.欢迎词') }}
      </p>
      <p dark="text-[#ccc]" light="text-black opacity-50" class="mt-6 text-fs20">{{ $t('home.介绍') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LocaleObject, useI18n } from '#i18n'
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter(i => i.code !== locale.value)
})
</script>