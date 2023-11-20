import { ref, computed } from 'vue'
import type { Ref } from 'vue';
import { defineStore } from 'pinia'
import jobs from '../data/jobs.json'

export const useAppStore = defineStore('appStore', () => {
  const jobsList: Ref<any[]> = ref(jobs)
  const selectedJobType: Ref<string> = ref('all')
  const pagination: Ref<number> = ref(0)
  const pageSize: Ref<number> = ref(5)
  const searchQuery: Ref<any> = ref('')
  const sideBarJobsIsVisible: Ref<boolean> = ref(false);
  const selectedJob: Ref<any> = ref(null)
  const jobDialogIsVisible: Ref<boolean> = ref(false);

  const jobsFiltered = computed(() => {
    return jobsList.value.filter((job) => {
      return job.position.toLowerCase().includes(searchQuery.value.toLowerCase()) && (selectedJobType.value.toLowerCase() === 'all' || job.employment_type.toLowerCase() === selectedJobType.value.toLowerCase())
    })
  })
  const paginatedJobs = computed(() => {
    const startIndex = pagination.value;
    const endIndex = startIndex + pageSize.value;
    return jobsFiltered.value.slice(startIndex, endIndex);
  });
  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }
  return {
    jobsList,
    jobsFiltered,
    searchQuery,
    setSearchQuery,
    selectedJobType,
    selectedJob,
    pagination,
    paginatedJobs,
    pageSize,
    sideBarJobsIsVisible,
    jobDialogIsVisible
  }
})
