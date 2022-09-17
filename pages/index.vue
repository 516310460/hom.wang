<template>
  <div class="max-w-1200px mx-auto">
    <div class="max-w-1000px mx-auto px-6 py-10 space-y-6">
      <p dark="text-white" light="text-darkPrimary-500" class="text-fs32">{{ $t('home.名字') }}</p>
      <p dark="text-[#ccc]" light="text-darkPrimary-500" class="text-fs16">
        {{ $t('home.欢迎词') }}
      </p>
      <p dark="text-[#ccc]" light="text-darkPrimary-500" class="text-fs16 leading-6">{{ $t('home.介绍') }}</p>
      <div class="text-fs16">
        <span dark="text-[#ccc]" light="text-darkPrimary-500">{{ $t('home.创建了~') }}</span>
        <NuxtLink dark="text-white" light="text-darkPrimary-500" hover="text-primary-500 border-primary-500"
          class="border-b transition delay-50" :aria-label="'nuxt-ui'" to="https://github.com/516310460/NuxtUI"
          target="_blank">nuxt-ui</NuxtLink>, <NuxtLink dark="text-white" light="text-darkPrimary-500"
          hover="text-primary-500 border-primary-500" class="border-b transition delay-50"
          :aria-label="'pinia-nuxt-persist'" to="https://github.com/516310460/pinia-nuxt-persist" target="_blank">
          pinia-nuxt-persist</NuxtLink><span dark="text-[#ccc]" light="text-darkPrimary-500">{{ $t('home.~等') }}</span>
      </div>
      <p dark="text-[#ccc]" light="text-darkPrimary-500" class="text-fs16 leading-6">{{ $t('home.热情所在') }}</p>
      <p dark="text-[#ccc]" light="text-darkPrimary-500" class="text-fs16 leading-6">{{ $t('home.兴趣爱好') }}</p>
      <div>
        <p dark="text-[#ccc]" light="text-darkPrimary-500" class="text-fs16 leading-6">{{ $t('home.语言') }}:</p>
        <p dark="text-[#ccc]" light="text-darkPrimary-500" class="text-fs16 leading-6">{{ $t('home.中文') }}</p>
        <p dark="text-[#ccc]" light="text-darkPrimary-500" class="text-fs16 leading-6">{{ $t('home.英语') }}</p>
      </div>


      <!-- <ClientOnly>
        <button v-copy="'data'">复制</button>
        <div>
          <div
            v-loading="loading"
            style="background: url('https://avatars.githubusercontent.com/u/65016011?v=4')"
            :style="{width: '100px', height: '100px', backgroundSize: 'cover'}"
        ></div>
          <button @click="changeLoading">switch</button>
        </div>
        <div v-textellipsis:3 class="w-[300px]">2016-5-26 · CSS
          如何实现文字溢出<strong>隐藏</strong>时，<strong>隐藏</strong>左边或者右边，并显示省略号 指定一个定宽高的盒子，当文字溢出，会换行显示出来。 .box { width: 60px;
          height: 30px; background-color: #ff0000 2 0; } 当限制 文字 不换 行 后 ，会在一 行 超出 显示 出来。</div>
        <div v-collapse="{open:'200px',close:'43px',icon:'iconfont icon_global_ArrowDown'}"
          style="width:200px;margin:0 auto">
          <div class="box">12313123123123</div>
        </div>
        <img class="w-[100px]"
          v-LazyLoad="'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'" />
        <div v-format-text.money="','">123456789</div>
        <div v-format-text.money="'_'">123456789</div>
        <div v-format-text.money:4="','">123456789</div>
        <div v-format-text.money:4="','">123456789</div>
        <div v-hide-text.name>张三</div>
        张*
        <div v-hide-text.name>张三丰</div>
        张*丰
        <div v-hide-text.mobile>13412345678</div>
        134****5678
        <div v-hide-text.idcard>422124199010101234</div>
        <input class="text-black" v-input:decimal_2="inputValue" v-model="inputValue" type="text"
          placeholder="'decimal'：数字加小数, 'decimal_2'：数字加 2 位小数" />
        <button v-click-outside>点击区域外就隐藏</button>
        <div v-draggable class="drag-box flx-center text">我可以拖拽哦~</div>
        <button type="primary" v-longpress="longpress">长按2秒触发事件</button>
        <button class="btn" v-throttle="refreshAAAA">节流--{{pending ? '加载中...' : '重载'}}</button>
        <input class="text-black" v-throttle="inputValueFn" v-model="inputValue" placeholder="节流--输入框" />
        <button class="btn" v-debounce="inputValueFn">防抖--{{pending ? '加载中...' : '重载'}}</button>
        <input class="text-black" v-debounce="inputValueFn" v-model="inputValue" placeholder="防抖--输入框" />
        <div class="w-[600px] h-[400px]" v-waterMarker="{
            text: 'Watermark Direct',
            textColor: 'rgba(180, 180, 180, 0.6)'
        }">
          <span class="text">水印指令</span>
        </div>
        <input class="text-black" v-focus v-model="inputValue" placeholder="获取焦点--输入框" />

        <button @click="add">增加</button>
        <button v-scrollTop:content="100">滚动到顶部</button>
        <div id="content" ref="content" v-scrollBottom class="w-[200px] h-[200px] overflow-y-auto">
          <div v-for="index in num" :key="index">第{{index}}个</div>
        </div>
      </ClientOnly> -->

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


// import { invitationPaginateListApi } from "~~/api/api";
// const {
//     data: invitationData,
//     pending,
//     refresh: refreshAAAA,
// } = await invitationPaginateListApi({ type: 1, current_page: 1, per_page: 10 });

const inputValue = ref(null);

const num = ref(100);
function add() {
    num.value++;
}

function scrollTop() {
    console.log("到顶部");
}

function inputValueFn() {
    console.log(111111);
}

const loading = ref(false);

const changeLoading = () => {
    loading.value = !loading.value;
};

const option = {
    title: {
        text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
        data: ["销量"],
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
        {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
        },
    ],
};

const longpress = () => {
    console.log("长按事件触发成功");
};

const newLoading = ref([false, false, false]);
const load = (index) => {
    newLoading.value[index] = true;
    setTimeout(() => newLoading.value[index] = false, 1000);
}

</script>