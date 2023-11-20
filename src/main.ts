import '@assets/reset.css'
import '@unocss/reset/normalize.css'
import 'uno.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-dark-blue/theme.css'
import './assets/main.css'
import './assets/primevue-overwrite.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';
import VueSweetalert2 from 'vue-sweetalert2'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import ToastService from 'primevue/toastservice';
import PortalVue from 'portal-vue'
const app = createApp(App)
const options = {
  showConfirmButton: true,
  focusConfirm: false,
  showCloseButton: true,
  showCancelButton: true,
}
app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(autoAnimatePlugin);
app.use(ToastService);
app.use(PortalVue);
app.use(VueSweetalert2, options);
app.directive('ripple', Ripple);
app.mount('#app')
export default app
