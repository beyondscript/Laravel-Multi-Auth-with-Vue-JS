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
                <h6 class="text-white text-capitalize ps-3" style="text-align: center; padding-left: 0 !important;">Change Password</h6>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
              <div class="table-responsive p-0" style="padding: 5px !important;">
                <Form role="form" :validation-schema="schema" @submit="changeUserPassword" @invalid-submit="removeErrors">
                  <div style="padding-left: 10px; padding-right: 10px; padding-bottom: 10px;">
                    <div class="input-group input-group-outline my-3" style="margin-top: 0 !important;">
                      <label class="form-label" for="current_password">Current Password</label>
                      <Field id="current_password" name="current_password" type="password" class="form-control" @blur="showCurrentPasswordError" />
                      <ErrorMessage id="current_password_error" class="error" name="current_password" />
                    </div>
                    <div class="input-group input-group-outline my-3" style="margin-top: 0 !important;">
                      <label class="form-label" for="password">Password</label>
                      <Field id="password" name="password" type="password" class="form-control" @blur="removePasswordError" />
                      <ErrorMessage id="password_error" class="error" name="password" />
                      <span id="password_error_2" class="error" role="alert">{{$store.getters.getPasswordError}}</span>
                    </div>
                    <div class="input-group input-group-outline my-3" style="margin-top: 0 !important; margin-bottom: 0 !important;">
                      <label class="form-label" for="password-confirm">Confirm Password</label>
                      <Field id="password-confirm" name="password_confirmation" type="password" class="form-control" />
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
  import { onBeforeMount, onMounted, onUnmounted } from 'vue';
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
      const { changePassword } = profile()
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
        password: yup.string().required('The password field is required.').typeError('The password must be a string.').min(8, 'The password must be at least 8 characters.')
      })
      const showPassword = async() => {
        var x = document.getElementById("current_password")
        if (x.type === "password") {
          x.type = "text"
        } else {
          x.type = "password"
        }
        var y = document.getElementById("password")
        if (y.type === "password") {
          y.type = "text"
        } else {
          y.type = "password"
        }
        var z = document.getElementById("password-confirm")
        if (z.type === "password") {
          z.type = "text"
        } else {
          z.type = "password"
        }
      }
      const changeUserPassword = async(values, { resetForm }) => {
      	const type_profile = 'user-profile'
      	await changePassword(values, type_profile)
      	resetForm({
          values: {
            current_password: undefined,
            password: undefined,
            password_confirmation: undefined
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
          let current_password_error = document.getElementById('current_password_error')
          if(current_password_error){
            current_password_error.style.display = 'none'
          }
          let password_error = document.getElementById('password_error')
          if(password_error){
            password_error.style.display = 'none'
          }
        }, 15)
        setTimeout(async() => {
          let password_error_2 = document.getElementById('password_error_2')
          if(password_error_2){
            password_error_2.style.display = 'block'
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
      const removePasswordError = async() => {
        setTimeout(async() => {
          let password_error_2 = document.getElementById('password_error_2')
          if(password_error_2){
            password_error_2.style.display = 'none'
          }
        }, 10)
        setTimeout(async() => {
          let password_error = document.getElementById('password_error')
          if(password_error){
            password_error.style.display = 'block'
          }
        }, 15)
      }
      const removeErrors = async() => {
        store.dispatch('removePasswordError')
        await showCurrentPasswordError()
        await removePasswordError()
      }
      onUnmounted(
        async() => {
          document.getElementById('body').removeAttribute('class')
    			store.dispatch('removePasswordError')
        }
      )
      return{
      	schema,
        showPassword,
        changeUserPassword,
        showCurrentPasswordError,
        removePasswordError,
        removeErrors
      }
    }
  }
</script>