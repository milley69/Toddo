<template>
  <section class="hero min-h-screen -mt-16">
    <div class="hero-overlay bg-opacity-60 hero-animation" v-show="isGradientBackground"></div>
    <div class="hero-overlay" v-show="!isGradientBackground"></div>
    <Empty v-if="temp" />
    <div class="hero-content text-center text-white" v-else>
      <div class="max-w-md space-y-5">
        <h1 class="text-5xl font-bold">
          Hello there
          <span class="avatar">
            <span class="w-[60px]">
              <img src="/pwa/ios/60.png" class="-mb-3 mt-2" alt="logo" />
            </span>
          </span>
        </h1>
        <p>
          Toddo is a well-designed app with separate task groups and secure authorization and database features, a great
          addition to productivity toolkits.
        </p>
        <button type="button" class="btn text-white glass" @click="push('sign-in')">Get Started</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
const { isGradientBackground } = storeToRefs(useUser())
const { push } = useRouter()

const temp = ref(1)
</script>

<style scoped>
.hero-animation {
  background: repeating-linear-gradient(to bottom, #ed71ad 0%, #7277f1 25%, #b174ce 50%, #7277f1 75%, #ed71ad 100%);
  background-size: auto 400%;
  background-position: 0 0;
  animation: animation-background 10s infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  -webkit-filter: blur(100px);
  filter: blur(100px);
  opacity: 0.7;
}
@keyframes animation-background {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -400%;
  }
}
</style>
