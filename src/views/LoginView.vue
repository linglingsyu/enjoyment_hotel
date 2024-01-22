<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="flex bg-neutral-bg h-full pb-[164px] lg:pb-0">
    <div class="hidden w-full lg:block lg:w-1/2 relative">
      <img class="w-full" src="@/assets/images/Login_BG.png" alt="" />
    </div>
    <div class="w-full lg:w-1/2 relative flex flex-col justify-center items-center lg:-mt-[120px]">
      <img
        class="w-full lg:absolute left-0 right-0 lg:top-[120px] lg:translate-y-[45px]"
        src="@/assets/images/Deco.png"
        alt=""
      />
      <div class="w-full lg:w-1/2 mx-auto px-5 lg:px-0 relative z-10">
        <p class="text-primary-100 mb-2 text-[14px]">享樂酒店，誠摯歡迎</p>
        <h1
          class="font-bold text-[32px] xl:text-[48px] leading-tight tracking-[1.6px] lg:tracking-[2.8px] mb-10"
        >
          立即開始旅程
        </h1>
        <form action="">
          <div class="mb-4">
            <label class="block text-[14px] mb-2 font-medium" for="email">電子信箱</label>
            <input type="email" class="form-control" id="email" placeholder="請輸入電子信箱" />
          </div>
          <div class="mb-4">
            <label class="block text-[14px] mb-2 font-medium" for="password">密碼</label>
            <input type="password" class="form-control" id="password" placeholder="請輸入密碼" />
          </div>
          <div class="flex justify-between items-center mb-10">
            <div class="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-6 h-6 text-primary-100 bg-gray-100 border-gray-300 rounded focus:ring-primary-100"
              />
              <label for="default-checkbox" class="ms-2 text-sm font-medium dark:text-gray-300"
                >記住帳號</label
              >
            </div>
            <a href="#" class="font-medium text-primary-100 underline">忘記密碼?</a>
          </div>
          <button
            type="button"
            class="mb-10 block w-full text-neutral-60 bg-neutral-40 hover:bg-primary-100 hover:text-white font-medium rounded-xl px-8 py-4 focus:outline-none"
          >
            會員登入
          </button>
          <div>
            <span class="mr-2">沒有會員嗎?</span>
            <a href="#" class="font-medium text-primary-100 underline">前往註冊</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
