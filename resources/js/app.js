import './bootstrap';

import {createApp} from 'vue';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import store from './store.js';
import router from './router.js';
import 'dropify';
import 'dropify/dist/css/dropify.min.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import index from './components/index.vue';

toastr.options.newestOnTop = true
toastr.options.closeButton = true
toastr.options.timeOut = 5000
window.toastr = toastr

axios.interceptors.response.use(
	response => response,
  	async(error) => {
		if(error.response.status === 500){
			toastr.error('Something went wrong')
		}
		return Promise.reject(error)
	}
)

const app = createApp({})
app.component('index', index)
app.use(store)
app.use(router)
app.mount('#app')
