<script setup lang="ts">
import Paginator from 'primevue/paginator';
import { useAppStore } from '@/stores/appStore';
const appStore = useAppStore();
</script>

<template>
  <div>
    <div class="bg-red-bars h-2 w-full bg-cover bg-right bg-no-repeat lg:bg-green-light lg:bg-1/2"></div>
    <div v-if="appStore.jobsFiltered.length > 0" class="flex items-center justify-between enata-container">
      <div class="flex flex-1 items-center justify-between lg:justify-end">
        <Paginator v-model:first="appStore.pagination"
          template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink" :rows="appStore.pageSize"
          :totalRecords="appStore.jobsFiltered.length" />
      </div>
    </div>
  </div>
</template>
<style scoped>
:deep(.p-paginator-page.p-paginator-element.p-link.p-highlight) {
  @apply bg-primary-950 text-primary-100 rounded-full border-1 border-solid border-secondary-300
}

:deep(.p-paginator.p-component) {
  @apply bg-primary-950 border-0
}
</style>