<template>
  <div class="max-w-1200px mx-auto">
    <w-header class="flex items-center justify-between text-fs18">
      <NuxtLink to="/" class="text-primary-500 cursor-pointer flex items-center space-x-1 text-fs24">
        <img class="w-8 h-8" src="/nuxt.png" alt="">
        <span>Nuxt3</span>
      </NuxtLink>
      <div class="flex items-center space-x-4">
        <NuxtLink dark="text-white" light="text-black" hover="opacity-100" class="opacity-50 transition delay-50 flex items-center space-x-1"
          :aria-label="$t('header.在线聊天')"
          to="https://socket.hom.wang">
          <i i-carbon-chat></i>
          <span>{{ $t('header.在线聊天') }}</span>  
        </NuxtLink>
      </div>
      <div class="flex items-center space-x-4">
        <span dark="text-white" light="text-black" hover="opacity-100" class="opacity-50 transition delay-50" v-for="locale in availableLocales" :key="locale.code">
          <NuxtLink :to="switchLocalePath(locale.code) || ''">{{ locale.name }}</NuxtLink>
        </span>
        <DarkToggle />
        <a dark="text-white" light="text-black" hover="opacity-100" class="text-fs24 opacity-50 transition delay-50"  i-carbon-logo-github :aria-label="$t('header.阅读王弘更多的信息')" to="https://github.com/516310460/hom.wang" target="_blank" />
      </div>
    </w-header>
    <div class="max-w-1000px mx-auto px-6 py-10 space-y-6">
      <p dark="text-white" light="text-black" class="text-fs32">{{ $t('home.名字') }}</p>
      <p dark="text-[#ccc]" light="text-black opacity-50" class="text-fs16">
        {{ $t('home.欢迎词') }}
      </p>
      <p dark="text-[#ccc]" light="text-black opacity-50" class="text-fs16 leading-6">{{ $t('home.介绍') }}</p>
      <div class="text-fs16">
        <span dark="text-[#ccc]" light="text-black opacity-50">{{ $t('home.创建了~') }}</span><NuxtLink dark="text-white" light="text-black" hover="text-primary-500 border-primary-500" class="border-b transition delay-50" :aria-label="$t('header.阅读王弘更多的信息')" to="https://github.com/516310460/NuxtUI">nuxt-ui</NuxtLink>, <NuxtLink dark="text-white" light="text-black" hover="text-primary-500 border-primary-500" class="border-b transition delay-50" :aria-label="$t('header.阅读王弘更多的信息')" to="https://github.com/516310460/pinia-nuxt-persist">pinia-nuxt-persist</NuxtLink><span dark="text-[#ccc]" light="text-black opacity-50">{{ $t('home.~等') }}</span>
      </div>
      <p dark="text-[#ccc]" light="text-black opacity-50" class="text-fs16 leading-6">{{ $t('home.热情所在') }}</p>
      <p dark="text-[#ccc]" light="text-black opacity-50" class="text-fs16 leading-6">{{ $t('home.兴趣爱好') }}</p>
      <div>
        <p dark="text-[#ccc]" light="text-black opacity-50" class="text-fs16 leading-6">{{ $t('home.语言') }}:</p>
        <p dark="text-[#ccc]" light="text-black opacity-50" class="text-fs16 leading-6">{{ $t('home.中文') }}</p>
        <p dark="text-[#ccc]" light="text-black opacity-50" class="text-fs16 leading-6">{{ $t('home.英语') }}</p>
      </div>
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