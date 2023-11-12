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
                <h6 class="text-white text-capitalize ps-3" style="text-align: center; padding-left: 0 !important;">Change Email</h6>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
              <div class="table-responsive p-0" style="padding: 5px !important;">
                <Form role="form" :validation-schema="schema" @submit="changeUserEmail" @invalid-submit="removeErrors">
                  <div style="padding-left: 10px; padding-right: 10px; padding-bottom: 10px;">
                    <div class="input-group input-group-outline my-3" style="margin-top: 0 !important;">
                      <label class="form-label" for="current_password">Current Password</label>
                      <Field id="current_password" name="current_password" type="password" class="form-control" @blur="showCurrentPasswordError" />
                      <ErrorMessage id="current_password_error" class="error" name="current_password" />
                    </div>
                    <div class="input-group input-group-outline my-3" style="margin-top: 0 !important; margin-bottom: 0 !important;">
                      <label class="form-label" for="email">Email</label>
                      <Field id="email" name="email" type="text" class="form-control" @blur="removeEmailError" />
                      <ErrorMessage id="email_error" class="error" name="email" />
                      <span id="email_error_2" class="error" role="alert">{{$store.getters.getEmailError}}</span>
                    </div>
                    <div class="form-check form-switch d-flex align-items-center mb-3" style="margin-bottom: 0 !important; margin-top: 5px;">
                      <input class="form-check-input" type="checkbox" id="showpass" @click="showPassword">
                      <label class="form-check-label mb-0 ms-3" style="padding-top: 5px;" for="showpass">Show Password</label>
                    </div>
                    <div class="text-center">
                      <button type="submit" class="btn bg-gradient-primary w-100 my-4 mb-2" style="width: 192px !important;">Change</button>
                    </div>
                    <div class="text-center">
                      <router-link class="btn bg-gradient-primary w-100 my-4 mb-2" style="width: 192px !important; margin-top: 15px !important;" :to="{name: 'userProfile'}">Cancel</router-link>
                    </div>
                  </div>
                </Form>
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
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import * as yup from 'yup';
  import { useStore } from 'vuex';
  import materialDashboard from "../../../../../js/materialDashboard";
  import profile from "../../../../../js/composables/profile";
  import sidebar from '../../../../components/pages/user/partials/sidebar.vue';
  import navbar from '../../../../components/pages/user/partials/navbar.vue';
  export default{
    components: {
      sidebar,
      navbar,
      Form,
      Field,
      ErrorMessage
    },
    setup(){
      const store = useStore()
      const { changeEmail } = profile()
      onBeforeMount(
        async() => {
          const { checkAuthentication } = profile()
          await checkAuthentication()
        }
      )
      onMounted(
        async() => {
          document.getElementById('body').className = 'g-sidenav-show  bg-gray-200'
          const { usePerfectScrollbar, useToggleSidebar, useInput } = materialDashboard()
          usePerfectScrollbar()
          useToggleSidebar()
          useInput()
        }
      )
      const schema = yup.object({
        current_password: yup.string().required('The current password field is required.').typeError('The current password must be a string.').min(8, 'The current password must be at least 8 characters.'),
        email: yup.string().required('The email field is required.').typeError('The email must be a string.').email('The email must be a valid email address.').max(255, 'The email must not be greater than 255 characters.')
      })
      const showPassword = async() => {
        var x = document.getElementById("current_password")
        if (x.type === "password") {
          x.type = "text"
        } else {
          x.type = "password"
        }
      }
      const changeUserEmail = async(values, { resetForm }) => {
        const type_profile = store.getters.getUser.type.toLowerCase() + '-profile'
        await changeEmail(values, type_profile)
        resetForm({
          values: {
            current_password: undefined,
            email: undefined
          }
        })
        let input_divs = await document.getElementsByClassName('input-group')
        for (let i = 0; i < input_divs.length; i++) {
          if(input_divs[i].classList.contains('is-filled')){
            input_divs[i].classList.remove('is-filled')
          }
        }
        let inputs = await document.getElementsByClassName('form-control')
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].blur()
        }
        setTimeout(async() => {
          let email_error = document.getElementById('email_error')
          if(email_error){
            email_error.style.display = 'none'
          }
          let current_password_error = document.getElementById('current_password_error')
          if(current_password_error){
            current_password_error.style.display = 'none'
          }
        }, 15)
        setTimeout(async() => {
          let email_error_2 = document.getElementById('email_error_2')
          if(email_error_2){
            email_error_2.style.display = 'block'
          }
        }, 20)
      }
      const showCurrentPasswordError = async() => {
        setTimeout(async() => {
          let current_password_error = document.getElementById('current_password_error')
          if(current_password_error){
            current_password_error.style.display = 'block'
          }
        }, 15)
      }
      const removeEmailError = async() => {
        setTimeout(async() => {
          let email_error_2 = document.getElementById('email_error_2')
          if(email_error_2){
            email_error_2.style.display = 'none'
          }
        }, 10)
        setTimeout(async() => {
          let email_error = document.getElementById('email_error')
          if(email_error){
            email_error.style.display = 'block'
          }
        }, 15)
      }
      const removeErrors = async() => {
        store.dispatch('removeEmailError')
        await showCurrentPasswordError()
        await removeEmailError()
      }
      onUnmounted(
        async() => {
          document.getElementById('body').removeAttribute('class')
          store.dispatch('removeEmailError')
        }
      )
      return{
        schema,
        showPassword,
        changeUserEmail,
        showCurrentPasswordError,
        removeEmailError,
        removeErrors
      }
    }
  }
</script>