<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-neutral text-white flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  font-family: 'Noto Serif TC', serif;
}
</style>
