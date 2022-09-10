<template>
  <div class="max-w-1000px mx-auto">
    <w-header class="flex items-center justify-between text-fs18">
      <NuxtLink to="/" class="text-primary-500 cursor-pointer flex items-center space-x-1 text-fs24">
        <img class="w-8 h-8" src="/nuxt.png" alt="">
        <span>Nuxt3</span>
      </NuxtLink>
      <div class="flex items-center space-x-4">
        <nuxt-link class="dark:text-white light:text-black opacity-75 hover:opacity-100" to="https://socket.hom.wang">Nuxt3 socket</nuxt-link>
      </div>
      <div class="flex items-center space-x-4">
        <DarkToggle />
        <a class="text-fs24" i-carbon-logo-github href="https://github.com/516310460/hom.wang" target="_blank" />
      </div>
    </w-header>
    <div class="mt-10 text-center text-fs32 text-primary-500">
      Hello. Welcome to my website
    </div>
  </div>
</template>