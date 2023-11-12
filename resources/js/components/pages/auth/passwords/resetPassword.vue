<template>
	<main class="main-content position-relative max-height-vh-100  mt-0">
    <section>
      <div id="page_header" class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style="background-image: url('/assets/img/illustrations/signup.webp'); background-size: cover;">
              </div>
            </div>
            <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
              <router-link class="link-2" style="display: flex; align-items: center; justify-content: center; margin-top: 16px; margin-bottom: 16px;" :to="{name: 'Home'}">
                <img :src="'/assets/img/logo-ct.webp'" style="display: inline; width: 32px; height: 32px; margin-right: 2.5px;">
                <span id="unauthenticated_app_name" style="display: inline; text-transform: uppercase; font-weight: 600; font-size: 1rem; margin-left: 2.5px;">{{$store.getters.getAppName}}</span>
              </router-link>
              <div class="card card-plain" style="background-color: white; box-shadow: 0 0 20px 2px rgb(0 0 0 / 10%); margin-top: 25px; margin-bottom: 16px;">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <h4 class="text-white font-weight-bolder text-center mt-2 mb-0" style="margin-top: 0 !important;">RESET PASSWORD</h4>
                  </div>
                </div>
                <div class="card-body">
                  <Form role="form" :validation-schema="schema" @submit="resetPassword" @invalid-submit="removeErrors">
                    <Field type="hidden" name="token" v-model="$store.getters.getResetToken" />
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label" for="email">Email</label>
                      <Field id="email" name="email" type="text" class="form-control" @blur="removeEmailError" />
                      <ErrorMessage id="email_error" class="error" name="email" />
                      <span id="email_error_2" class="error" role="alert">{{$store.getters.getEmailError}}</span>
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label" for="password">Password</label>
                      <Field id="password" name="password" type="password" class="form-control" @blur="removePasswordError" />
                      <ErrorMessage id="password_error" class="error" name="password" />
                      <span id="password_error_2" class="error" role="alert">{{$store.getters.getPasswordError}}</span>
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label" for="password-confirm">Confirm Password</label>
                      <Field id="password-confirm" name="password_confirmation" type="password" class="form-control" />
                    </div>
                    <div class="form-check form-switch d-flex align-items-center mb-3">
                      <input class="form-check-input" type="checkbox" @click="showPassword">
                      <label class="form-check-label mb-0 ms-3">Show Password</label>
                    </div>
                    <div class="text-center">
                      <button type="submit" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Reset</button>
                    </div>
                  </Form>
                </div>
                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                  <p class="mb-2 text-sm mx-auto">
                    Already have an account?
                    <router-link class="text-primary text-gradient font-weight-bold" :to="{name: 'Login'}">SIGN IN</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
  import { onBeforeMount, onMounted, ref, onUnmounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import * as yup from 'yup';
  import auth from '../../../../../js/composables/auth';
  import materialDashboard from "../../../../../js/materialDashboard";
  export default{
  	components: {
      Form,
      Field,
      ErrorMessage
    },
    setup(){
      const { reset } = auth()
      const store = useStore()
    	onBeforeMount(
    		async() => {
          const route = useRoute()
          const { checkAuthenticationOnResetPassword, setValue } = auth()
          await checkAuthenticationOnResetPassword()
          const url = ref({
            token: route.params.token,
            email: route.query.email
          })
    			await setValue(url)
    		}
    	)
      onMounted(
        async() => {
          const { backgroundImage, usePerfectScrollbar, useInput } = materialDashboard()
          backgroundImage()
          usePerfectScrollbar()
          useInput()
        }
      )
      const schema = yup.object({
        email: yup.string().required('The email field is required.').typeError('The email must be a string.').email('The email must be a valid email address.'),
        password: yup.string().required('The password field is required.').typeError('The password must be a string.').min(8, 'The password must be at least 8 characters.')
      })
      const showPassword = async() => {
        var x = document.getElementById("password")
        if (x.type === "password") {
          x.type = "text"
        } else {
          x.type = "password"
        }
        var y = document.getElementById("password-confirm")
        if (y.type === "password") {
          y.type = "text"
        } else {
          y.type = "password"
        }
      }
      const resetPassword = async(values, { resetForm }) => {
        await reset(values)
        resetForm({
          values: {
            token: values.token,
            email: undefined,
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
          let email_error = document.getElementById('email_error')
          if(email_error){
            email_error.style.display = 'none'
          }
          let password_error = document.getElementById('password_error')
          if(password_error){
            password_error.style.display = 'none'
          }
        }, 15)
        setTimeout(async() => {
          let email_error_2 = document.getElementById('email_error_2')
          if(email_error_2){
            email_error_2.style.display = 'block'
          }
          let password_error_2 = document.getElementById('password_error_2')
          if(password_error_2){
            password_error_2.style.display = 'block'
          }
        }, 20)
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
        store.dispatch('removeEmailError')
        store.dispatch('removePasswordError')
        await removeEmailError()
        await removePasswordError()
      }
      onUnmounted(
        async() => {
          store.dispatch('removeResetToken')
          store.dispatch('removeEmailError')
          store.dispatch('removePasswordError')
        }
      )
      return{
      	schema,
        showPassword,
      	resetPassword,
        removeEmailError,
        removePasswordError,
        removeErrors
      }
    }
  }
</script>