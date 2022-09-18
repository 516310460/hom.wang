<script setup lang="ts">
import { LocaleObject, useI18n } from "#i18n";
import { io } from 'socket.io-client'
const socket = io();
const copyState = ref(0)
const copyMsg = ref('')
const connected = ref(false)
const msg = ref('')
const getIp = ref('')
const getMsg: any = ref([])
const hello = ref({ hello: '' })
const head = useLocaleHead({ addSeoAttributes: true });
const title = computed(() => t("layouts.title", { title: "Wang" }));
const { locale, locales, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter((i) => i.code !== locale.value);
});
let ChatModal = ref(false);
const ChatModalRef = ref(null);
onClickOutside(ChatModalRef, (event) => {
  ChatModal.value = false;
});

let FAQModal = ref(false);
const FAQModalRef = ref(null);
onClickOutside(FAQModalRef, (event) => {
  FAQModal.value = false;
});

onMounted(() => {
  socket.on('connect', () => {
    connected.value = socket.connected
  });
  socket.on('disconnect', () => {
    connected.value = socket.connected
  });
  socket.on('getIP', function (data) {
    getIp.value = data
    // socket.emit('my other event', { my: 'data' });
  });
  socket.on('hello', function (data) {
    hello.value = data
    // socket.emit('my other event', { my: 'data' });
  });
  socket.on('msg', function (data) {
    getMsg.value.push(data)
    // socket.emit('my other event', { my: 'data' });
  });
})

const sendMsg = () => {
  if(!msg.value){
    copyState.value = 2
    copyMsg.value = t('header.发送信息不能为空')
    let copyTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
      copyState.value = 0
      copyMsg.value = ''
      clearTimeout(copyTimer)
    }, 3000);
    return
  }
  socket.emit('msg', { user: `User Address ${getIp.value}:`, text: `${msg.value}` })
  msg.value = ''
}
</script>

<template>
  <div class="h-full" v-waterMarker="{
      text: 'Hom Wang',
      textColor: 'rgba(16, 185, 129, 0.2)'
  }">
    <Html :lang="head?.htmlAttrs?.lang">

    <Head>
      <Title>{{ title }}</Title>
      <template v-for="(link, index) in head.link" :key="index">
        <Link :hid="link.hid" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="(meta, index) in head.meta" :key="index">
        <Meta :hid="meta.hid" :property="meta.property" :content="meta.content" />
      </template>
    </Head>

    <Body>
      <w-header class="flex items-center justify-between text-fs18">
        <NuxtLink to="/" dark="text-white" light="text-darkPrimary-500"
          class="cursor-pointer flex items-center space-x-1 text-fs24 flex-none">
          <img class="w-8 h-8" src="/nuxt.png" alt="" />
          <span sm="block" class="hidden">Nuxt3</span>
        </NuxtLink>
        <div sm="flex items-center space-x-8 flex-1 ml-24" class="hidden">
          <NuxtLink dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85" hover="opacity-100"
            class="transition delay-50 flex items-center space-x-1" :aria-label="$t('header.在线聊天')"
            to="https://socket.hom.wang" target="_blank">
            <i i-carbon-chat></i>
            <span>{{ $t("header.在线聊天") }}</span>
          </NuxtLink>
          <NuxtLink dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85" hover="opacity-100"
            class="transition delay-50 flex items-center space-x-2" aria-label="NFT" to="https://otoko.io"
            target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 48 48">
              <g fill="none">
                <path fill="currentColor"
                  d="M44 21a2 2 0 1 0-4 0h4ZM23 8a2 2 0 1 0 0-4v4Zm16 32H9v4h30v-4ZM8 39V9H4v30h4Zm32-18v18h4V21h-4ZM9 8h14V4H9v4Zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5v-4Zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1v4ZM8 9a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5h4Z" />
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                  d="m6 35l10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 31M33.3 6C31.478 6 30 7.435 30 9.205c0 3.204 3.9 6.117 6 6.795c2.1-.678 6-3.59 6-6.795C42 7.435 40.523 6 38.7 6A3.326 3.326 0 0 0 36 7.362A3.326 3.326 0 0 0 33.3 6Z" />
              </g>
            </svg>
            <span>NFT</span>
          </NuxtLink>
          <NuxtLink dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85" hover="opacity-100"
            class="transition delay-50 flex items-center space-x-1" aria-label="EthwSwap" to="https://www.ethwswap.org"
            target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2.4em" preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32">
              <path fill="currentColor"
                d="M14.953 3L6.93 15.553l9.074 4.46l8.93-4.464L17.053 3h-2.1zM15 6.637v4.351l-3.914 1.776L15 6.637zm2 .04l3.818 6.08L17 11.005V6.678zm-2 6.507v4.107l-4.344-2.137L15 13.184zm2 .023l4.246 1.95L17 17.278v-4.072zM7 17.512v2.52l7.928 8.843h2.144L25 20.031v-2.52l-9 4.614l-9-4.613zm4.521 4.566L15 23.861v2.096l-3.479-3.879zm8.958 0L17 25.957v-2.096l3.479-1.783z" />
            </svg>
            <span>EthwSwap</span>
          </NuxtLink>
        </div>
        <div class="flex items-center space-x-4">
          <span dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85" hover="opacity-100"
            class="transition delay-50" v-for="locale in availableLocales" :key="locale.code">
            <NuxtLink :to="switchLocalePath(locale.code) || ''">
              <i i-carbon-language class="inline-block text-fs24"></i>
            </NuxtLink>
          </span>
          <DarkToggle />
          <NuxtLink dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85" hover="opacity-100"
            class="text-fs24 transition delay-50" i-carbon-logo-github :aria-label="$t('header.阅读王弘更多的信息')"
            to="https://github.com/516310460/hom.wang" target="_blank"></NuxtLink>
          <div @click="ChatModal = true" dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85"
            hover="opacity-100" class="text-fs24 transition delay-50 cursor-pointer" i-carbon-chat></div>
          <div @click="FAQModal = true" sm="hidden" dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85"
            hover="opacity-100" class="text-fs24 transition delay-50 cursor-pointer" i-carbon-menu></div>
        </div>
      </w-header>
      <div class="h-content">
        <slot />
      </div>
      <!-- <div>
            <h2>I18n Head</h2>
            <code>{{ head }}</code>
          </div> -->
      <div class="p-4 text-fs12">
        <div class="flex items-center justify-between space-x-2 mt-2">
          <div class="text-white opacity-60">
            Media inquires for HomWang Labs - Contact 516310460@qq.com
          </div>
          <div class="flex items-center space-x-4">
            <span dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85" hover="opacity-100"
              class="transition delay-50" v-for="locale in availableLocales" :key="locale.code">
              <NuxtLink :to="switchLocalePath(locale.code) || ''">
                <i i-carbon-language class="inline-block text-fs24"></i>
              </NuxtLink>
            </span>
            <DarkToggle />
            <NuxtLink dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85" hover="opacity-100"
              class="text-fs24 transition delay-50" i-carbon-logo-github :aria-label="$t('header.阅读王弘更多的信息')"
              to="https://github.com/516310460/hom.wang" target="_blank"></NuxtLink>
            <div @click="ChatModal = true" dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85"
              hover="opacity-100" class="text-fs24 transition delay-50 cursor-pointer" i-carbon-chat></div>
          </div>
        </div>
      </div>

      <!-- Chat/聊天 -->
      <div>
        <div v-show="ChatModal" class="fixed top-0 right-0 w-full h-full bg-black z-999 opacity-75"></div>
        <Transition enter-from-class="transform transition ease-in-out duration-500 sm:duration-700 translate-y-full"
          enter-to-class="transform transition ease-in-out duration-500 sm:duration-700 translate-y-0"
          leave-from-class="transform transition ease-in-out duration-500 sm:duration-700 translate-y-0"
          leave-to-class="transform transition ease-in-out duration-500 sm:duration-700 translate-y-full">
          <div v-show="ChatModal" ref="ChatModalRef" sm="w-480px h-640px rounded-lg"
            class="flex items-center justify-center w-full h-full fixed right-0 bottom-0 h-screen p-4 bg-[#012a35] text-white z-999 min-w-1/3">
            <div class="w-full h-full">
              <div class="flex items-center justify-between">
                <div>{{$t('header.在线聊天')}}</div>
                <i @click="ChatModal = false" i-carbon-close hover="text-primary-500"
                  class="text-white inline-block text-fs22 cursor-pointer"></i>
              </div>
              <div class="mt-4 text-fs14 h-chat-content">
                <div class="flex items-center justify-between py-4">
                  <div>IP: {{ getIp }}</div>
                  <div class="flex items-center space-x-1">
                    <div>{{$t('header.状态')}}:</div>
                    <div :class="connected ? 'text-primary-500' : 'text-red'">{{ connected ? $t('header.已连接') :
                    $t('header.连接失败') }}</div>
                  </div>
                </div>
                <div>
                  <div class="bg-[#003543] p-4 rounded-t">{{$t('header.消息列表')}}</div>
                  <div id="content" ref="content" v-scrollBottom sm="h-420px"
                    class="bg-[#012a35] p-4 rounded-b space-y-2 overflow-y-auto h-chatMsg-content">
                    <div v-for="(item, index) in getMsg" :key="index">
                      <div class="flex items-center justify-between text-xs">
                        <div>{{item.user.user}}</div>
                        <div>{{item.time}}</div>
                      </div>
                      <div class="text-[#bae6fd] text-fs14 flex items-center justify-between space-x-4 py-2">
                        <span>{{item.user.text}}</span>
                        <i hover="text-primary-500" class="cursor-pointer" v-copy="item.user.text" i-carbon-copy></i>
                      </div>
                    </div>
                    <div v-if="!getMsg.length" class="text-center">{{$t('header.暂无数据')}}</div>
                  </div>
                </div>
              </div>
              <div class="flex items-center mt-4 space-x-2">
                <w-input v-model="msg" @keyup.enter="sendMsg" class="flex-1"></w-input>
                <w-button v-debounce="sendMsg" size="default">{{$t('header.发送')}}</w-button>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Menu/菜单 -->
      <div>
        <div v-show="FAQModal" class="fixed top-0 right-0 w-full h-full bg-black z-999 opacity-75"></div>
        <Transition enter-from-class="transform transition ease-in-out duration-500 sm:duration-700 translate-x-full"
          enter-to-class="transform transition ease-in-out duration-500 sm:duration-700 translate-x-0"
          leave-from-class="transform transition ease-in-out duration-500 sm:duration-700 translate-x-0"
          leave-to-class="transform transition ease-in-out duration-500 sm:duration-700 translate-x-full">
          <div v-show="FAQModal" ref="FAQModalRef"
            class="flex items-center justify-center fixed right-0 top-0 h-screen p-4 bg-[#012a35] text-white z-999 min-w-1/3">
            <div class="w-full h-full">
              <div class="flex items-center justify-between">
                <div>Menu</div>
                <i @click="FAQModal = false" i-carbon-close hover="text-primary-500"
                  class="text-white inline-block text-fs22 cursor-pointer"></i>
              </div>
              <div class="mt-4 space-y-2 pr-4">
                <NuxtLink dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85" hover="opacity-100"
                  class="transition delay-50 flex items-center space-x-2" :aria-label="$t('header.在线聊天')"
                  to="https://socket.hom.wang" target="_blank">
                  <i i-carbon-chat></i>
                  <span>{{ $t("header.在线聊天") }}</span>
                </NuxtLink>
                <NuxtLink dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85" hover="opacity-100"
                  class="transition delay-50 flex items-center space-x-2" aria-label="NFT" to="https://otoko.io"
                  target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                    <g fill="none">
                      <path fill="currentColor"
                        d="M44 21a2 2 0 1 0-4 0h4ZM23 8a2 2 0 1 0 0-4v4Zm16 32H9v4h30v-4ZM8 39V9H4v30h4Zm32-18v18h4V21h-4ZM9 8h14V4H9v4Zm0 32a1 1 0 0 1-1-1H4a5 5 0 0 0 5 5v-4Zm30 4a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1v4ZM8 9a1 1 0 0 1 1-1V4a5 5 0 0 0-5 5h4Z" />
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                        d="m6 35l10.693-9.802a2 2 0 0 1 2.653-.044L32 36m-4-5l4.773-4.773a2 2 0 0 1 2.615-.186L42 31M33.3 6C31.478 6 30 7.435 30 9.205c0 3.204 3.9 6.117 6 6.795c2.1-.678 6-3.59 6-6.795C42 7.435 40.523 6 38.7 6A3.326 3.326 0 0 0 36 7.362A3.326 3.326 0 0 0 33.3 6Z" />
                    </g>
                  </svg>
                  <span>NFT</span>
                </NuxtLink>
                <NuxtLink dark="text-white opacity-50" light="text-darkPrimary-500 opacity-85" hover="opacity-100"
                  class="transition delay-50 flex items-center space-x-2" aria-label="EthwSwap"
                  to="https://www.ethwswap.org" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                    <path fill="currentColor"
                      d="M14.953 3L6.93 15.553l9.074 4.46l8.93-4.464L17.053 3h-2.1zM15 6.637v4.351l-3.914 1.776L15 6.637zm2 .04l3.818 6.08L17 11.005V6.678zm-2 6.507v4.107l-4.344-2.137L15 13.184zm2 .023l4.246 1.95L17 17.278v-4.072zM7 17.512v2.52l7.928 8.843h2.144L25 20.031v-2.52l-9 4.614l-9-4.613zm4.521 4.566L15 23.861v2.096l-3.479-3.879zm8.958 0L17 25.957v-2.096l3.479-1.783z" />
                  </svg>
                  <span>EthwSwap</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </Transition>

        <!-- 提示框 -->
        <div>
          <Transition enter-from-class="opacity-0 scale-95 duration-150 ease-out"
            enter-to-class="opacity-100 scale-100 duration-150 ease-out"
            leave-from-class="opacity-100 scale-100 duration-150 ease-in"
            leave-to-class="opacity-0 scale-95 duration-150 ease-in">
            <div v-show="copyState" :class="copyState == 1 ? 'bg-primary-500' : 'bg-red'"
              class="flex items-center justify-center absolute right-4 top-4 px-4 py-2 rounded-2xl text-white z-999 flex items-center space-x-2">
              <i class="bg-white" v-if="copyState == 1" i-carbon-checkmark-filled></i>
              <i class="bg-white" v-if="copyState == 2" i-carbon-checkmark-filled-error></i>
              <span>{{copyMsg}}</span>
            </div>
          </Transition>
        </div>
      </div>
    </Body>

    </Html>
  </div>
</template>
