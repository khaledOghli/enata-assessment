<script setup lang="ts">
import JobListItem from './JobListItem.vue';
import JobPaginator from './JobPaginator.vue';
import { useAppStore } from '@/stores/appStore';
import { useAutoAnimate } from '@formkit/auto-animate/vue'
const [listAnimate] = useAutoAnimate()
const appStore = useAppStore();
</script>
<template>
  <div class="-mt-0 w-full lg:-mt-6 lg:w-2/3 xl:w-full">
    <div class="flex w-full items-center justify-between bg-primary-700 py-8 px-4 md:px-12">
      <div>
        <h4 class="font-rubik text-2xl font-light">Available Jobs</h4>
        <p class="font-rubik text-lg font-light">
          <span class="text-primary selection:bg-primary selection:text-pink-light">
            {{ appStore.paginatedJobs.length }}
          </span>
          jobs found
        </p>
      </div>
    </div>
    <div class="overflow-hidden bg-primary-700">
      <ul role="list" ref="listAnimate">
        <JobListItem v-for="job in appStore.paginatedJobs" :key="job.id" :job-item="job" />
      </ul>
    </div>
    <JobPaginator />

  </div>
</template>