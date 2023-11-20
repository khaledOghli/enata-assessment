<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@components/base/TheHeader.vue';
import TheFooter from '@components/base/TheFooter.vue';
</script>
<template>
  <div class="page_container">
    <TheHeader />
    <div id="#content-wrap">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>
<style scoped>
.page_container {
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
}
</style>