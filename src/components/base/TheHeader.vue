<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import enataLight from '@/assets/images/enata-light.svg';
import { useRouter } from 'vue-router'
const router = useRouter()
const routes: Ref<any> = ref(router.options.routes)
const items = routes.value
  .filter((route: any) => route.meta.isVisible)
  .sort((navItemPrev: any, navItemNext: any) => navItemPrev.meta['nav-order'] - navItemNext.meta['nav-order'])
  .map((route: any) => ({
    label: route.meta.title,
    to: route.path.replace(":id", '')
  }))
</script>
<template>
  <Menubar
    class="navigation-header bg-opacity-75 bg-primary-900 fixed top-0 left-0 z-999 w-full h-60px rounded-0 enata-container"
    :model="items">
    <template #start>
      <img width="125" alt="logo" :src="enataLight" class="me-5" />
    </template>
    <template #item="{ item, props }">
      <router-link v-ripple v-if="item.to" class="flex align-items-center" :to="item.to" v-bind="props.action">
        {{ item.label }}
      </router-link>
    </template>
    <template #end>
      <div class="flex align-items-center gap-2">
        <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
      </div>
    </template>
  </Menubar>
</template>

<style scoped>
:global(.p-menubar.navigation-header) {
  backdrop-filter: blur(3px);
}

:deep(.p-menubar-end) {
  margin-left: auto;
}
</style>
