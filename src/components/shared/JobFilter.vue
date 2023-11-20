<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import RadioButton from 'primevue/radiobutton';
import { useAppStore } from '@/stores/appStore';
const appStore = useAppStore();
const searchQuery: Ref<string> = ref('');
type JobType = {
  id: number;
  label: string;
  value: string;
};
const jobTypeOptions: JobType[] = [
  { id: 1, label: 'All', value: 'all' },
  { id: 2, label: 'Permanent', value: 'permanent' },
  { id: 3, label: 'Freelance', value: 'freelance' },
  { id: 4, label: 'Full time', value: 'full-time' },
  { id: 5, label: 'Contract', value: 'contract' }
];
</script>

<template>
  <div class="w-full flex flex-col gap-4 py-8 pl-4 pr-4 md:pl-16 md:pr-16 lg:w-1/3 lg:pr-6 xl:w-[600px] min-h-490px">
    <div
      class="flex flex-col gap-2 space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:flex-col lg:space-x-0 lg:space-y-2">
      <span class="p-input-icon-left w-full">
        <i class="pi pi-search" />
        <InputText class="w-full" v-model="searchQuery" placeholder="Search jobs..." size="large" />
      </span>
      <Button @click="appStore.searchQuery = searchQuery"
        class="w-full fw-bold text-secondary-900 bg-secondary-300 border-secondary-300 hover:bg-secondary-400 hover:border-secondary-400 transition duration-300 ease-linear"
        label="Search" size="large" />
    </div>
    <Accordion class="accordion" :activeIndex="0">
      <AccordionTab>
        <template #header>
          <div class="flex items-center justify-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-6 w-6 text-secondary-300">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5">
              </path>
            </svg>
            <span class="text-lg font-light text-primary-100">Search filters</span>
          </div>
        </template>
        <div class="px-4 py-2">
          <div class="grid grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-2 lg:grid-cols-1">
            <fieldset>
              <div class="mb-5">
                <legend class="contents text-lg font-light text-primary-100">Job Type</legend>
                <p class="text-base font-light text-primary-300">Select your preferred job contract type.</p>
              </div>
              <div class="flex flex-col gap-5 mt-2">
                <div v-for="type in jobTypeOptions" :key="type.id"
                  class="flex items-center cursor-pointer gap-2 border-2">
                  <RadioButton v-model="appStore.selectedJobType" :inputId="type.value" name="jobType"
                    :value="type.value" />
                  <label :for="type.value" class="ml-2 text-base cursor-pointer">
                    {{ type.label }}
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<style scoped>
:deep(.p-accordion-header-link.p-accordion-header-action) {
  @apply px-0 py-3 items-center justify-between bg-primary-950 border-0;
  flex-direction: row-reverse;

}

:deep(.p-accordion-content) {
  @apply bg-primary-950
}

:deep(.p-icon.p-accordion-toggle-icon) {
  @apply text-secondary-300 w-17px h-17px;
}
</style>