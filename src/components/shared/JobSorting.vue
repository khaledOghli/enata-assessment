<script setup lang="ts">
import { ref } from "vue";
import RadioButton from 'primevue/radiobutton';
const selectedJobType = ref('all-jobs');
type JobType = {
  id: number;
  label: string;
  value: string;
}
const jobTypeOptions: JobType[] = [
  { id: 1, label: 'All Jobs', value: 'all-jobs' },
  { id: 2, label: 'Applied', value: 'applied' },
  { id: 3, label: 'Saved', value: 'saved' }
];
</script>
<template>
  <div class="w-full bg-primary-800 lg:w-2/3">
    <div class="pt-5 pb-2 lg:pb-12">
      <div class="flex items-center justify-start gap-5 h-full enata-container">
        <div class="flex flex-wrap gap-10">
          <div v-for="type in jobTypeOptions" :key="type.id" class="flex items-center cursor-pointer gap-2 border-2">
            <RadioButton v-model="selectedJobType" :inputId="type.value" name="jobType" :value="type.value" />
            <label :for="type.value" class="ml-2 text-xl cursor-pointer">
              {{ type.label }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>