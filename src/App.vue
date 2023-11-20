<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="slide">
      <component :is="Component" :key="route" />
    </transition>
  </router-view>
</template>
 