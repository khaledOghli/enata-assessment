<script setup lang="ts">
import Button from 'primevue/button';
</script>
<template>
  <div class="enata-container mt-30">
    <h1 class="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
    <router-link to="/jobs" class="text-blue-500 hover:underline">
      <Button
        class="w-auto fw-bold text-secondary-900 bg-secondary-300 border-secondary-300 hover:bg-secondary-400 hover:border-secondary-400 transition duration-300 ease-linear mb-2"
        label="Go To Jobs" />
    </router-link>
  </div>
</template>
<style scoped></style>
<route lang="yaml">
meta:
  name: Home
  title: Home
  nav-order: 1
  isVisible: true
</route>