import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
const dynamicRoutes = generatedRoutes
const customRoutes = [
  ...dynamicRoutes,
]
const routes = setupLayouts(customRoutes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router
