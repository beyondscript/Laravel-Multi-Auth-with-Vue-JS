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
                    <div style="display: flex; justify-content: center; align-items: center;">
                      <div class="social_tabs">
                        <a id="facebook_tab" href="/admin-profile/show-facebook-tab" class="social_tabs_links" style="background-color: #ffffff; box-shadow: 0 1px 5px 1px #ddd;" @click.prevent="switchFacebookTab">
                          <i class="fa fa-facebook-f"></i>
                        </a>
                      </div>
                      <div class="social_tabs">
                        <a id="github_tab" href="/admin-profile/show-github-tab" class="social_tabs_links" style="background-color: #F8F9FA; box-shadow: none" @click.prevent="switchGithubTab">
                          <i class="fa fa-github"></i>
                        </a>
                      </div>
                      <div class="social_tabs">
                        <a id="google_tab" href="/admin-profile/show-google-tab" class="social_tabs_links" style="background-color: #F8F9FA; box-shadow: none;" @click.prevent="switchGoogleTab">
                          <i class="fa fa-google"></i>
                        </a>
                      </div>
                    </div>
                    <div id="facebook_tab_contents" style="display: block;">
                      <div style="text-align: center; margin-top: 5px; margin-bottom: 10px;">
                        <strong>Status: </strong>
                        <strong v-if="$store.getters.getUser.facebook_id">Connected</strong>
                        <strong v-else>Not connected</strong>
                      </div>
                      <div style="text-align: center;">
                        <a class="btn btn-outline-primary btn-sm mb-0 me-3" style="width: 200px; height: 52px; padding-top: 14px; margin: 5px !important;" href="/admin-profile/connect-facebook-account" @click.prevent="facebookConnectUser">
                          Connect with Facebook
                        </a>
                        <a class="btn btn-outline-primary btn-sm mb-0 me-3" style="width: 200px; height: 52px; padding-top: 14px; margin: 5px !important;" href="/admin-profile/remove-facebook-account" @click.prevent="facebookRemoveUser">
                          Remove from Facebook
                        </a>
                      </div>
                    </div>
                    <div id="github_tab_contents" style="display: none;">
                      <div style="text-align: center; margin-top: 5px; margin-bottom: 10px;">
                        <strong>Status: </strong>
                        <strong v-if="$store.getters.getUser.github_id">Connected</strong>
                        <strong v-else>Not connected</strong>
                      </div>
                      <div style="text-align: center;">
                        <a class="btn btn-outline-primary btn-sm mb-0 me-3" style="width: 200px; height: 52px; padding-top: 14px; margin: 5px !important;" href="/admin-profile/connect-github-account" @click.prevent="githubConnectUser">
                          Connect with GitHub
                        </a>
                        <a class="btn btn-outline-primary btn-sm mb-0 me-3" style="width: 200px; height: 52px; padding-top: 14px; margin: 5px !important;" href="/admin-profile/remove-github-account" @click.prevent="githubRemoveUser">
                          Remove from GitHub
                        </a>
                      </div>
                    </div>
                    <div id="google_tab_contents" style="display: none;">
                      <div style="text-align: center; margin-top: 5px; margin-bottom: 10px;">
                        <strong>Status: </strong>
                        <strong v-if="$store.getters.getUser.google_id">Connected</strong>
                        <strong v-else>Not connected</strong>
                      </div>
                      <div style="text-align: center;">
                        <a class="btn btn-outline-primary btn-sm mb-0 me-3" style="width: 200px; height: 52px; padding-top: 14px; margin: 5px !important;" href="/admin-profile/connect-google-account" @click.prevent="googleConnectUser">
                          Connect with Google
                        </a>
                        <a class="btn btn-outline-primary btn-sm mb-0 me-3" style="width: 200px; height: 52px; padding-top: 14px; margin: 5px !important;" href="/admin-profile/remove-google-account" @click.prevent="googleRemoveUser">
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
          const { usePerfectScrollbar, useToggleSidebar } = materialDashboard()
          usePerfectScrollbar()
          useToggleSidebar()
        }
      )
      const switchFacebookTab = async() => {
        document.getElementById('github_tab').style.backgroundColor = '#F8F9FA'
        document.getElementById('github_tab').style.boxShadow = 'none'
        document.getElementById('github_tab_contents').style.display = 'none'

        document.getElementById('google_tab').style.backgroundColor = '#F8F9FA'
        document.getElementById('google_tab').style.boxShadow = 'none'
        document.getElementById('google_tab_contents').style.display = 'none'

        document.getElementById('facebook_tab').style.backgroundColor = '#ffffff'
        document.getElementById('facebook_tab').style.boxShadow = '0 1px 5px 1px #ddd'
        document.getElementById('facebook_tab_contents').style.display = 'block'
      }
      const switchGithubTab = async() => {
        document.getElementById('facebook_tab').style.backgroundColor = '#F8F9FA'
        document.getElementById('facebook_tab').style.boxShadow = 'none'
        document.getElementById('facebook_tab_contents').style.display = 'none'

        document.getElementById('google_tab').style.backgroundColor = '#F8F9FA'
        document.getElementById('google_tab').style.boxShadow = 'none'
        document.getElementById('google_tab_contents').style.display = 'none'

        document.getElementById('github_tab').style.backgroundColor = '#ffffff'
        document.getElementById('github_tab').style.boxShadow = '0 1px 5px 1px #ddd'
        document.getElementById('github_tab_contents').style.display = 'block'
      }
      const switchGoogleTab = async() => {
        document.getElementById('facebook_tab').style.backgroundColor = '#F8F9FA'
        document.getElementById('facebook_tab').style.boxShadow = 'none'
        document.getElementById('facebook_tab_contents').style.display = 'none'

        document.getElementById('github_tab').style.backgroundColor = '#F8F9FA'
        document.getElementById('github_tab').style.boxShadow = 'none'
        document.getElementById('github_tab_contents').style.display = 'none'

        document.getElementById('google_tab').style.backgroundColor = '#ffffff'
        document.getElementById('google_tab').style.boxShadow = '0 1px 5px 1px #ddd'
        document.getElementById('google_tab_contents').style.display = 'block'
      }
      const facebookConnectUser = async() => {
        const type_profile = 'admin-profile'
        await facebookConnect(type_profile)
      }
      const facebookRemoveUser = async() => {
        const type_profile = 'admin-profile'
        await facebookRemove(type_profile)
      }
      const githubConnectUser = async() => {
        const type_profile = 'admin-profile'
        await githubConnect(type_profile)
      }
      const githubRemoveUser = async() => {
        const type_profile = 'admin-profile'
        await githubRemove(type_profile)
      }
      const googleConnectUser = async() => {
        const type_profile = 'admin-profile'
        await googleConnect(type_profile)
      }
      const googleRemoveUser = async() => {
        const type_profile = 'admin-profile'
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
        switchFacebookTab,
        switchGithubTab,
        switchGoogleTab,
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