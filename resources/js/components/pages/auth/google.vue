<template>
	<main class="main-content  mt-0">
    <div class="page-header align-items-start min-vh-100"></div>
  </main>
</template>
<script>
	import { onBeforeMount } from 'vue';
	import { useRoute } from 'vue-router';
	import social from '../../../../js/composables/social';
  export default{
    setup(){
      onBeforeMount(
        async() => {
          document.getElementById('body').className = 'g-sidenav-show  bg-gray-200'
        	const route = useRoute()
		  		const { google } = social()
		  		const code = route.query.code
          const scope = route.query.scope
          const authuser = route.query.authuser
          const prompt = route.query.prompt
          await google(code, scope, authuser, prompt)
        }
      )
    }
  }
</script>