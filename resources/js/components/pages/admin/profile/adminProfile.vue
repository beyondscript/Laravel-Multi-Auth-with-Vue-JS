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
                <h6 class="text-white text-capitalize ps-3" style="text-align: center; padding-left: 0 !important;">Profile</h6>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
              <div class="table-responsive p-0" style="padding: 5px !important; overflow: hidden;">
                <div style="display: flex; justify-content: center;" v-if="$store.getters.getUserLoading">
                  <div class="user_loader"></div>
                </div>
                <div v-else>
                  <img class="profile_picture" :src="'/' + $store.getters.getUser.image" alt="Profile Picture">
                  <span style="display: block; color: #DE2768; font-size: 18px; font-weight: 500; text-align: center; margin-top: 5px;">{{$store.getters.getUser.name}}</span>
                  <span style="display: block; color: #DE2768; font-size: 14px; font-weight: 400; text-align: center;">Email: {{$store.getters.getUser.email}}</span>
                  <div class="profile_settings_div">
                    <router-link class="btn btn-outline-primary btn-sm mb-0 me-3" style="display: flex; justify-content: center; align-items: center; width: 165px; height: 52px; margin: 5px !important; padding: 5px;" :to="{name: 'adminChangeEmail'}">Change Email</router-link>
                    <router-link class="btn btn-outline-primary btn-sm mb-0 me-3" style="display: flex; justify-content: center; align-items: center; width: 165px; height: 52px; margin: 5px !important; padding: 5px;" :to="{name: 'adminChangePassword'}">Change Password</router-link>
                    <router-link class="btn btn-outline-primary btn-sm mb-0 me-3" style="display: flex; justify-content: center; align-items: center; width: 165px; height: 52px; margin: 5px !important; padding: 5px;" :to="{name: 'adminChangePicture'}">Change Profile Picture</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card my-4">
            <div class="card-body px-0 pb-2" style="padding-top: 8px;">
              <div class="table-responsive p-0" style="padding: 5px !important;">
                <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3" style="width: fit-content; padding-left: 10px; padding-right: 10px; padding-bottom: 10px !important; padding-top: 10px !important; margin-right: auto; margin-left: auto; margin-bottom: 25px; margin-top: 12px;">
                  <h4 style="color: white; margin-bottom: 0;">Connect Social Accounts</h4>
                </div>
                <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3" style="margin-bottom: 10px !important; margin-right: auto !important;">
                  <div class="nav-wrapper position-relative end-0">
                    <ul class="nav nav-pills nav-fill p-1" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link mb-0 px-0 py-1 active " data-bs-toggle="tab" href="/admin-profile/facebook-tab" role="tab" aria-selected="true" data-bs-target="#facebook">
                          <i class="fa fa-facebook-f"></i>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="/admin-profile/github-tab" role="tab" aria-selected="false" data-bs-target="#github">
                          <i class="fa fa-github"></i>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="/admin-profile/google-tab" role="tab" aria-selected="false" data-bs-target="#google">
                          <i class="fa fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tab-content">
                  <div id="facebook" class="tab-pane active">
                    <div style="text-align: center; margin-top: 5px; margin-bottom: 10px;">
                      <strong>Status: </strong>
                      <strong v-if="$store.getters.getUser.facebook_id">Connected</strong>
                      <strong v-else>Not connected</strong>
                    </div>
                    <div style="text-align: center;">
                      <a class="btn btn-outline-primary btn-sm mb-0 me-3" style="width: 200px; height: 52px; padding-top: 14px; margin: 5px !important;" href="/admin-profile/connect-with-facebook" @click.prevent="facebookConnectUser">
                        Connect with Facebook
                      </a>
                      <a class="btn btn-outline-primary btn-sm mb-0 me-3" style="width: 200px; height: 52px; padding-top: 14px; margin: 5px !important;" href="/admin-profile/remove-from-facebook" @click.prevent="facebookRemoveUser">
                        Remove from Facebook
                      </a>
                    </div>
                  </div>
                  <div id="github" class="tab-pane">
                    <div style="text-align: center; margin-top: 5px; margin-bottom: 10px;">
                      <strong>Status: </strong>
                      <strong v-if="$store.getters.getUser.github_id">Connected</strong>
                      <strong v-else>Not connected</strong>
                    </div>
                    <div style="text-align: center;">
                      <a class="btn btn-outline-primary btn-sm mb-0 me-3" style="width: 200px; height: 52px; padding-top: 14px; margin: 5px !important;" href="/admin-profile/connect-with-github" @click.prevent="githubConnectUser">
                        Connect with GitHub
                      </a>
                      <a class="btn btn-outline-primary btn-sm mb-0 me-3" style="width: 200px; height: 52px; padding-top: 14px; margin: 5px !important;" href="/admin-profile/remove-from-github" @click.prevent="githubRemoveUser">
                        Remove from GitHub
                      </a>
                    </div>
                  </div>
                  <div id="google" class="tab-pane">
                    <div style="text-align: center; margin-top: 5px; margin-bottom: 10px;">
                      <strong>Status: </strong>
                      <strong v-if="$store.getters.getUser.google_id">Connected</strong>
                      <strong v-else>Not connected</strong>
                    </div>
                    <div style="text-align: center;">
                      <a class="btn btn-outline-primary btn-sm mb-0 me-3" style="width: 200px; height: 52px; padding-top: 14px; margin: 5px !important;" href="/admin-profile/connect-with-google" @click.prevent="googleConnectUser">
                        Connect with Google
                      </a>
                      <a class="btn btn-outline-primary btn-sm mb-0 me-3" style="width: 200px; height: 52px; padding-top: 14px; margin: 5px !important;" href="/admin-profile/remove-from-google" @click.prevent="googleRemoveUser">
                        Remove from Google
                      </a>
                    </div>
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
  import materialDashboard from "../../../../../js/materialDashboard";
  import profile from "../../../../../js/composables/profile";
  import sidebar from '../../../../components/pages/admin/partials/sidebar.vue';
  import navbar from '../../../../components/pages/admin/partials/navbar.vue';
  export default{
    components: {
      sidebar,
      navbar
    },
    setup(){
      const store = useStore()
      const { facebookConnect, facebookRemove, githubConnect, githubRemove, googleConnect, googleRemove } = profile()
      onBeforeMount(
        async() => {
          const { checkAuthentication, authUser } = profile()
          await checkAuthentication()
          await authUser()
        }
      )
      onMounted(
        async() => {
          document.getElementById('body').className = 'g-sidenav-show  bg-gray-200'
          const { usePerfectScrollbar, useToggleSidebar, useTabsNavigation } = materialDashboard()
          usePerfectScrollbar()
          useToggleSidebar()
          useTabsNavigation()
        }
      )
      const facebookConnectUser = async() => {
        const type_profile = store.getters.getUser.type.toLowerCase() + '-profile'
        await facebookConnect(type_profile)
      }
      const facebookRemoveUser = async() => {
        const type_profile = store.getters.getUser.type.toLowerCase() + '-profile'
        await facebookRemove(type_profile)
      }
      const githubConnectUser = async() => {
        const type_profile = store.getters.getUser.type.toLowerCase() + '-profile'
        await githubConnect(type_profile)
      }
      const githubRemoveUser = async() => {
        const type_profile = store.getters.getUser.type.toLowerCase() + '-profile'
        await githubRemove(type_profile)
      }
      const googleConnectUser = async() => {
        const type_profile = store.getters.getUser.type.toLowerCase() + '-profile'
        await googleConnect(type_profile)
      }
      const googleRemoveUser = async() => {
        const type_profile = store.getters.getUser.type.toLowerCase() + '-profile'
        await googleRemove(type_profile)
      }
      onBeforeUnmount(
        async() => {
          store.dispatch('removeUser')
          store.dispatch('setUserLoading')
        }
      )
      onUnmounted(
        async() => {
          document.getElementById('body').removeAttribute('class')
        }
      )
      return{
        facebookConnectUser,
        facebookRemoveUser,
        githubConnectUser,
        githubRemoveUser,
        googleConnectUser,
        googleRemoveUser
      }
    }
  }
</script>