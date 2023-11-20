<script setup lang="ts">
import { toRefs } from "vue";
import Tag from 'primevue/tag';
const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});
const { job } = toRefs(props);
const formatDate = (date: string | Date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions;
  return new Date(date).toLocaleDateString(undefined, options);
};
const formatKey = (key: any) => {
  return key.replace(/_/g, ' ').replace(/\b\w/g, (match: any) => match.toUpperCase());
}
const formatValue = (value: any) => {
  if (Array.isArray(value)) {
    return value.join(', ');
  }
  return value;
}
</script>
<template>
  <div class="h-80% p-6 overflow-y-auto">
    <div class="w-full flex items-center justify-between ">
      <h2
        class="text-4xl font-semibold mb-2 text-secondary-300 bg-gradient-to-r from-secondary-300 to-secondary-500 bg-clip-text text-transparent">
        {{ job.position }}
      </h2>
      <Tag class="bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-800 text-sm px-3" severity="success"
        :value="job.employment_type" rounded>
      </Tag>
    </div>
    <div class="flex justify-between items-center items-center mb-6">
      <div class="flex items-center gap-2">
        <i class="pi pi-map-marker text-secondary-200"></i>
        <span class="text-secondary-200">{{ job.location.city }}, {{ job.location.region }}</span>
      </div>
      <div class="flex items-center gap-2">
        <i class="pi pi-clock text-secondary-200"></i>
        <span class="text-secondary-200">{{ formatDate(job.date_posted) }}</span>
      </div>
    </div>
    <div class="mb-6">
      <h3 class="flex items-center gap-2 text-2xl font-semibold mb-2 title-primary-gradient">
        <span class="flex items-center">
          <i class="pi pi-circle-fill text-10px text-secondary-200"></i>
        </span>
        Description:
      </h3>
      <p class="text-primary-100 ms-5">{{ job.description }}</p>
    </div>
    <div class="mb-6">
      <h3 class="flex items-center gap-2 text-2xl font-semibold mb-2 title-primary-gradient">
        <span class="flex items-center">
          <i class="pi pi-circle-fill text-10px text-secondary-200"></i>
        </span>
        Responsibilities:
      </h3>
      <ul class="list-inside list-disc text-primary-100 ms-5">
        <li v-for="(responsibility, index) in job.responsibilities" :key="index">{{ responsibility }}</li>
      </ul>
    </div>
    <div class="mb-6">
      <h3 class="flex items-center gap-2 text-2xl font-semibold mb-2 title-primary-gradient">
        <span class="flex items-center">
          <i class="pi pi-circle-fill text-10px text-secondary-200"></i>
        </span>
        Qualifications:
      </h3>
      <ul class="list-inside list-disc text-primary-100 ms-5">
        <li v-for="(qualification, index) in job.qualifications" :key="index">{{ qualification }}</li>
      </ul>
    </div>
    <div class="mb-6">
      <h3 class="flex items-center gap-2 text-2xl font-semibold mb-2 title-primary-gradient">
        <span class="flex items-center">
          <i class="pi pi-circle-fill text-10px text-secondary-200"></i>
        </span>
        Additional Information:
      </h3>
      <ul class="list-inside list-disc text-primary-100 ms-5">
        <li v-for="(info, key) in job.additional_info" :key="key">
          <span class="font-semibold">{{ formatKey(key) }}:</span> {{ formatValue(info) }}
        </li>
      </ul>
    </div>
  </div>
</template>
