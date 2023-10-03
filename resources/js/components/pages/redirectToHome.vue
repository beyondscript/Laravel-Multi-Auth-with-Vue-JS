<template>
  <main class="main-content  mt-0">
    <div class="page-header align-items-start min-vh-100" style="background-image: url('/assets/img/illustrations/background.webp');"></div>
  </main>
</template>
<script>
  import { onBeforeMount } from 'vue';
  import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';
  export default{
    setup(){
    	const store = useStore()
    	const router = useRouter()
      onBeforeMount(
        async() => {
        	try{
		        let response = await axios.post('/api/remove-remember-me')
		        store.dispatch('removeToken')
		        store.dispatch('removeType')
		        router.push({name: 'Home'})
		      }
		      catch(error){}
        }
      )
    }
  }
</script>