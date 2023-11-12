<template>
	<sidebar />
	<main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
		<navbar />
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card my-4" style="margin-top: 105px !important;">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 class="text-white text-capitalize ps-3" style="text-align: center; padding-left: 0 !important;">Dashboard</h6>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
              <div class="table-responsive p-0" style="padding: 5px !important;">
                <div style="padding-left: 10px; padding-right: 10px;">
                  <h4>1. Dashboard:</h4>
                  <div style="padding-left: 10px;">
                    <p>i. Dashboard menu contains all the instructions for controlling the application.</p>
                    <p>ii. Please read all the instructions for controlling the application.</p>
                  </div>
                </div>
                <div style="padding-left: 10px; padding-right: 10px;">
                  <h4>2. Profile:</h4>
                  <div style="padding-left: 10px;">
                    <p>i. Profile menu contains some of the informations of your profile.</p>
                    <p>ii. Profile menu also contains the functionality for changing the current email, password and profile picture.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
  import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
  import { useStore } from 'vuex';
  import materialDashboard from "../../../../js/materialDashboard";
  import profile from "../../../../js/composables/profile";
  import sidebar from '../../../components/pages/pro/partials/sidebar.vue';
  import navbar from '../../../components/pages/pro/partials/navbar.vue';
  export default{
    components: {
      sidebar,
      navbar
    },
    setup(){
      const store = useStore()
      onBeforeMount(
        async() => {
          const { checkAuthentication } = profile()
          await checkAuthentication()
        }
      )
      onMounted(
        async() => {
          document.getElementById('body').className = 'g-sidenav-show  bg-gray-200'
          const { usePerfectScrollbar, useToggleSidebar } = materialDashboard()
          usePerfectScrollbar()
          useToggleSidebar()
        }
      )
      onUnmounted(
        async() => {
          document.getElementById('body').removeAttribute('class')
        }
      )
    }
  }
</script>