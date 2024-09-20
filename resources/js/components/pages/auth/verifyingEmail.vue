<template>
  <main class="main-content  mt-0">
    <div class="page-header align-items-start min-vh-100"></div>
  </main>
</template>
<script>
  import { onBeforeMount, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import auth from '../../../../js/composables/auth';
  export default{
    setup(){
      onBeforeMount(
        async() => {
          document.getElementById('body').className = 'g-sidenav-show  bg-gray-200'
          const route = useRoute()
          const { verify } = auth()
          const url = ref({
            id: route.params.id,
            hash: route.params.hash,
            expires: route.query.expires,
            signature: route.query.signature
          })
        	await verify(url)
        }
      )
    }
  }
</script>