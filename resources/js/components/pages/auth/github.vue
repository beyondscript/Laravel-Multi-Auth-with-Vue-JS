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
		  		const { github } = social()
		  		const code = route.query.code
		  		const error = route.query.error
        	await github(code, error)
        }
      )
    }
  }
</script>