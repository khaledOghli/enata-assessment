<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/appStore';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import PageCover from '@/components/shared/PageCover.vue';
import JobSorting from '@/components/shared/JobSorting.vue';
import JobFilter from '@/components/shared/JobFilter.vue';
import JobList from '@/components/shared/JobList.vue';
import JobViewer from '@/components/shared/JobViewer.vue';
import JobForm from '@/components/shared/JobForm.vue';
const appStore = useAppStore();
const route = useRoute();
const { id } = route.params;

onMounted(() => {
  if (id) {
    const job = appStore.jobsFiltered.filter(job => job.id === Number(id));
    if (job.length > 0) {
      appStore.selectedJob = job[0];
      appStore.sideBarJobsIsVisible = true;
    }
    else {
      alert('Job not found');
    }
  }
});
</script>
<template>
  <div class="card">
    <Sidebar class="lg:w-500px sm:w-500px w-95% h-97% me-1% rounded-2 bg-primary-850 bg-opacity-80 backdrop-blur-15"
      v-model:visible="appStore.sideBarJobsIsVisible" @hide="appStore.jobDialogIsVisible = false" position="right">
      <template #container="{ closeCallback }">
        <div class="flex flex-col h-full">
          <div class="flex items-center justify-between px-4 pt-3 flex-shrink-0">
            <span class="inline-flex items-center gap-2">
              <strong class="text-2xl font-normal text-primary-100">
                Job Details
                <i class="pi pi-chevron-right text-lg text-primary-300"></i>
              </strong>
            </span>
            <span>
              <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined
                class="h-2rem w-2rem text-secondary-300" />
            </span>
          </div>
          <JobViewer :job="appStore.selectedJob" />
          <div
            class="mt-auto px-6 mb-5 z-10 -mt-24 space-y-2 bg-gradient-to-t from-primary-850 via-primary-800 pt-15 pb-4">
            <Button @click="appStore.jobDialogIsVisible = true"
              class="w-full fw-bold text-secondary-900 bg-secondary-300 border-secondary-300 hover:bg-secondary-400 hover:border-secondary-400 transition duration-300 ease-linear mb-2"
              label="Apply Now" size="large" />
            <div class="flex items-center gap-4">
              <Button
                class="w-full fw-bold text-primary-100 border-primary-300 hover:bg-primary-500 hover:border-primary-500 transition duration-300 ease-linear"
                icon="pi pi-share-alt" label="Share" size="large" outlined />
              <Button
                class="w-full fw-bold text-primary-100  border-primary-300 hover:bg-primary-500 hover:border-primary-500 transition duration-300 ease-linear"
                icon="pi pi-star" label="Save" size="large" outlined />
            </div>
          </div>
        </div>
      </template>
    </Sidebar>
    <Dialog class="lg:w-75rem sm:w-97% w-full lg:ms-15 sm:ms-3 ms-0 bg-primary-850 bg-opacity-75 backdrop-blur-15"
      v-model:visible="appStore.jobDialogIsVisible" position="left" modal :draggable="false" header="Header">
      <template #header>
        <div class="flex flex-col items-start gap-2">
          <h2 class="text-2xl font-semibold mb-4">Submit Your Candidacy</h2>
        </div>
      </template>
      <div>
        <JobForm />
      </div>
      <template #footer>
        <portal-target name="jobFormFooter"> </portal-target>
      </template>
    </Dialog>
    <PageCover />
    <div class="-mt-20 relative z-10">
      <JobSorting />
      <div class="flex flex-col items-start bg-primary-950 lg:flex-row">
        <JobFilter />
        <JobList />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
<route lang="yaml">
meta:
  name: Jobs
  title: Jobs
  nav-order: 2
  isVisible: true
</route>