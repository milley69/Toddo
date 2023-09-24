<template>
  <section class="flex flex-1 h-screen -mt-16">
    <div class="flex flex-col items-center flex-1 flex-shrink-0 px-5 pb-5 lg:border-r border-base-content/50 shadow-lg">
      <div class="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">
        <div class="mb-10">
          <h1 class="mt-8 mb-2 text-2xl lg:text-3xl">{{ isLogin ? 'Welcome back' : 'Get started' }}</h1>
          <h2 class="text-sm text-scale-1100">{{ isLogin ? 'Sign in to your account' : 'Create a new account' }}</h2>
        </div>
        <div class="flex flex-col gap-5">
          <div class="tooltip tooltip-open" data-tip="🚧 Later... 🚧">
            <button class="btn btn-ghost btn-outline btn-disabled w-full">
              <span class="truncate">Continue with GitHub</span>
              <i class="bx bxl-github bx-sm"></i>
            </button>
          </div>
          <div class="divider">OR</div>
          <auth-form-sign-in v-if="isLogin" />
          <auth-form-sign-up v-else />
        </div>

        <div class="self-center mt-8 text-sm">
          <div>
            <span class="">{{ isLogin ? `Don't have an account? ` : 'Have an account? ' }}</span>
            <span class="cursor-pointer underline transition hover:text-primary" @click="isLogin = !isLogin">
              {{ isLogin ? 'Sign Up Now' : 'Sign In Now' }}
            </span>
          </div>
        </div>
      </div>
      <div class="sm:text-center -mt-8">
        <p class="text-xs sm:mx-auto sm:max-w-sm opacity-50">
          By continuing, you agree to Toddo's
          <a class="hover:text-primary line-through"> Terms of Service</a> and
          <a class="hover:text-primary line-through"> Privacy Policy </a>.
        </p>
      </div>
    </div>
    <aside class="items-center justify-center flex-1 bg-base-200 flex-shrink hidden basis-1/4 lg:flex relative">
      <auth-quote />
    </aside>
  </section>
</template>

<script setup lang="ts">
const isLogin = ref(true)
</script>
