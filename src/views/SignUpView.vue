<script setup lang="ts">
import { ref } from 'vue'

const step = ref<number>(1)

const year: string[] = []
const this_year: number = new Date().getFullYear()
for (let i: number = 1940; i <= this_year; i++) {
  year.push(String(i))
}
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="flex items-start bg-neutral-bg h-full pb-[164px] pt-5 lg:pb-0">
    <div class="hidden w-full lg:block lg:w-1/2 relative">
      <img class="w-full" src="@/assets/images/Login_BG.png" alt="" />
    </div>
    <div
      class="w-full lg:w-1/2 relative flex flex-col justify-center items-center -mt-[32px] lg:mt-0"
    >
      <img class="w-full absolute left-0 right-0 -top-3.5" src="@/assets/images/Deco.png" alt="" />
      <div class="w-full lg:w-1/2 mx-auto px-5 lg:px-0 relative z-10">
        <p class="text-primary-100 mb-2 text-[14px]">享樂酒店，誠摯歡迎</p>
        <h1
          class="font-bold text-[32px] xl:text-[48px] leading-tight tracking-[1.6px] lg:tracking-[2.8px] mb-10"
        >
          立即註冊
        </h1>

        <ol class="items-center w-full flex justify-between text-neutral-60 mb-10">
          <li class="flex items-center justify-center flex-col shrink-0">
            <div
              class="mb-2 flex items-center justify-center w-8 h-8 border border-neutral-60 rounded-full"
              :class="{ active: step === 1 }"
            >
              1
            </div>
            <span class="font-medium leading-tight w-auto">輸入信箱及密碼</span>
          </li>
          <li class="flex-grow px-2">
            <div class="w-full h-[2px] rounded-lg bg-neutral-60"></div>
          </li>
          <li class="flex items-center flex-col justify-center shrink-0">
            <div
              class="mb-2 flex items-center justify-center w-8 h-8 border border-neutral-60 rounded-full"
              :class="{ active: step === 2 }"
            >
              2
            </div>
            <span class="font-medium leading-tight">填寫基本資料</span>
          </li>
        </ol>

        <form :class="{ hidden: step !== 1 }">
          <div class="mb-4">
            <label class="block text-[14px] mb-2 font-medium" for="email">電子信箱</label>
            <input type="email" class="form-control" id="email" placeholder="請輸入電子信箱" />
          </div>
          <div class="mb-4">
            <label class="block text-[14px] mb-2 font-medium" for="password">密碼</label>
            <input type="password" class="form-control" id="password" placeholder="請輸入密碼" />
          </div>
          <div class="mb-10">
            <label class="block text-[14px] font-medium" for="confirm_password">確認密碼</label>
            <input
              type="password"
              class="form-control"
              id="confirm_password"
              placeholder="請再輸入一次密碼"
            />
          </div>
          <button
            type="button"
            class="mb-10 block w-full text-neutral-60 bg-neutral-40 hover:bg-primary-100 hover:text-white font-medium rounded-xl px-8 py-4 focus:outline-none"
            @click="step = 2"
          >
            下一步
          </button>
          <div>
            <span class="mr-2">已經有會員嗎?</span>
            <router-link class="font-medium text-primary-100 underline" :to="{ name: 'Signup' }"
              >前往登入</router-link
            >
          </div>
        </form>

        <form :class="{ hidden: step !== 2 }">
          <div class="mb-4">
            <label class="block text-[14px] mb-2 font-medium" for="name">姓名</label>
            <input type="text" class="form-control" id="name" placeholder="請輸入姓名" />
          </div>
          <div class="mb-4">
            <label class="block text-[14px] mb-2 font-medium" for="phone">手機號碼</label>
            <input type="tel" class="form-control" id="phone" placeholder="請輸入手機號碼" />
          </div>
          <div class="mb-4">
            <label class="block text-[14px] font-medium" for="confirm_password">生日</label>
            <div class="flex">
              <div class="w-1/3 flex items-center pr-2">
                <select
                  class="bg-white border border-gray-300 text-neutral-80 text-sm rounded-lg focus:ring-primary-60 focus:border-primary-60 block w-full p-2.5"
                >
                  <option :value="y" v-for="y in year" :key="y">{{ y + ' 年' }}</option>
                </select>
              </div>
              <div class="w-1/3 flex items-center px-2">
                <select
                  class="bg-white border border-gray-300 text-neutral-80 text-sm rounded-lg focus:ring-primary-60 focus:border-primary-60 block w-full p-2.5"
                >
                  <option :value="m" v-for="m in 12" :key="'m' + m">{{ m + ' 月' }}</option>
                </select>
              </div>
              <div class="w-1/3 flex items-center pl-2">
                <select
                  class="bg-white border border-gray-300 text-neutral-80 text-sm rounded-lg focus:ring-primary-60 focus:border-primary-60 block w-full p-2.5"
                >
                  <option :value="d" v-for="d in 31" :key="'d' + d">{{ d + ' 月' }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-[14px] font-medium" for="confirm_password">生日</label>

            <div class="flex mb-4">
              <div class="w-1/2 flex items-center pr-2">
                <select
                  class="bg-white border border-gray-300 text-neutral-80 text-sm rounded-lg focus:ring-primary-60 focus:border-primary-60 block w-full p-2.5"
                >
                  <option value="高雄市">高雄市</option>
                </select>
              </div>
              <div class="w-1/2 flex items-center pl-2">
                <select
                  class="bg-white border border-gray-300 text-neutral-80 text-sm rounded-lg focus:ring-primary-60 focus:border-primary-60 block w-full p-2.5"
                >
                  <option value="新興區">新興區</option>
                </select>
              </div>
            </div>

            <div class="w-full">
              <input type="text" class="form-control" placeholder="請輸入詳細地址" />
            </div>
          </div>
          <div class="mb-10 flex items-center">
            <input
              id="check_rule"
              type="checkbox"
              value=""
              class="w-6 h-6 text-primary-100 bg-gray-100 border-gray-300 rounded focus:ring-primary-100"
            />
            <label for="check_rule" class="ms-2 text-sm font-medium dark:text-gray-300"
              >我已閱讀並同意本網站個資使用規範</label
            >
          </div>
          <button
            type="button"
            class="mb-10 block w-full bg-primary-100 text-white font-medium rounded-xl px-8 py-4 focus:outline-none"
          >
            完成註冊
          </button>
          <div>
            <span class="mr-2">已經有會員嗎?</span>
            <router-link class="font-medium text-primary-100 underline" :to="{ name: 'Signup' }"
              >立即登入</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply border-primary-100 bg-primary-100 text-white;
}

.active + span {
  @apply text-white;
}
</style>
