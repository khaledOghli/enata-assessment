<script setup lang="ts">
import { toRefs } from "vue";
import { useRouter } from 'vue-router'
import Tag from 'primevue/tag';
import moment from "moment";
import { useAppStore } from '@/stores/appStore';
const appStore = useAppStore();
const router = useRouter();
const props = defineProps({
  jobItem: {
    type: Object,
    required: true,
  },
});
const { jobItem } = toRefs(props);
const formatRelativeDate = (dateString: any) => {
  const datePosted = moment(dateString);
  return datePosted.fromNow();
}
const viewJob = () => {
  appStore.selectedJob = props.jobItem;
  router.push({ path: `/jobs/${jobItem.value.id}` });
  appStore.sideBarJobsIsVisible = true;
}
</script>

<template>
  <li class="border-t border-primary-800">
    <button @click="viewJob" type="button"
      class="block w-full px-0 border-primary-400 border-0 border-b-1 bg-primary-700 hover:bg-primary-800 focus-visible:outline-none transition duration-300 ease-linear">
      <div class="px-4 py-4 md:px-12">
        <div class="flex items-center justify-between">
          <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <p class="text-left font-halyard text-xl font-book text-green-dark">
              {{ jobItem.position }}
            </p>
          </div>
          <div class="ml-2 flex flex-shrink-0 min-w-100px">
            <Tag class="bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-800 text-sm px-3 mb-2"
              severity="success" :value="jobItem.employment_type" rounded>
            </Tag>
          </div>
        </div>
        <div class="mt-1 sm:flex sm:justify-between">
          <div class="sm:flex">
            <p class="mt-2 flex gap-2 items-center text-sm font-light text-primary-300 sm:mt-0">
              <i class="pi pi-map-marker text-primary-400"></i>
              <span>
                {{ jobItem.location.city }}, {{ jobItem.location.region }}
              </span>
            </p>
          </div>
          <div class="mt-2 flex gap-2 items-center text-xs font-light text-primary-300 sm:mt-0 min-w-100px">
            <i class="pi pi-clock min-w-22px text-primary-400"></i>
            <p class="text-primary-300">
              <time class="text-primary-200" :datetime="jobItem.date_posted">
                {{ formatRelativeDate(jobItem.date_posted) }}
              </time>
            </p>
          </div>
        </div>
      </div>
    </button>
  </li>
</template>