<template>
  <main class="main-content  mt-0">
    <div class="page-header align-items-start min-vh-100" style="background-image: url('/assets/img/illustrations/signin.webp');"></div>
  </main>
</template>
<script>
  import { onBeforeMount } from 'vue';
  import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';
  import auth from '../../../js/composables/auth';
  export default{
    setup(){
    	const store = useStore()
    	const router = useRouter()
      onBeforeMount(
        async() => {
          const { logout } = auth()
          await logout()
        }
      )
    }
  }
</script>