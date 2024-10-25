<template>
  <main class="main-content position-relative max-height-vh-100  mt-0">
    <div class="page-header align-items-start min-vh-100" style="background-image: url('/assets/img/illustrations/signin.webp');">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <router-link class="link" style="display: flex; align-items: center; justify-content: center; margin-top: 16px; margin-bottom: 16px;" :to="{name: 'Home'}">
              <img :src="'/assets/img/logo-ct.webp'" style="display: inline; width: 32px; height: 32px; margin-right: 2.5px;">
              <span id="unauthenticated_app_name" style="display: inline; text-transform: uppercase; font-weight: 600; font-size: 1rem; margin-left: 2.5px;">{{$store.getters.getAppName}}</span>
            </router-link>
            <div class="card z-index-0 fadeIn3 fadeInBottom" style="margin-top: 41px; margin-bottom: 16px;">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">SIGN IN</h4>
                  <div class="row mt-3">
                    <div class="col-2 text-center ms-auto">
                      <a class="btn btn-link px-3" href="/login-with-facebook" @click.prevent="facebookLoginUser">
                        <i class="fa fa-facebook text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center px-1">
                      <a class="btn btn-link px-3" href="/login-with-github" @click.prevent="githubLoginUser">
                        <i class="fa fa-github text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center me-auto">
                      <a class="btn btn-link px-3" href="/login-with-google" @click.prevent="googleLoginUser">
                        <i class="fa fa-google text-white text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <Form role="form" :validation-schema="schema" @submit="loginUser" @invalid-submit="removeErrors">
                  <div class="input-group input-group-outline my-3">
                    <label class="form-label" for="email">Email</label>
                    <Field id="email" name="email" type="text" class="form-control" @blur="removeEmailError" />
                    <ErrorMessage id="email_error" class="error" name="email" />
                    <span id="email_error_2" class="error" role="alert">{{$store.getters.getEmailError}}</span>
                  </div>
                  <div class="input-group input-group-outline mb-3">
                    <label class="form-label" for="password">Password</label>
                    <Field id="password" name="password" type="password" class="form-control" @blur="showPasswordError" />
                    <ErrorMessage id="password_error" class="error" name="password" />
                  </div>
                  <div class="form-check form-switch d-flex align-items-center mb-3">
                    <input class="form-check-input" type="checkbox" id="showpass" @click="showPassword">
                    <label class="form-check-label mb-0 ms-3" style="padding-top: 5px;" for="showpass">Show Password</label>
                  </div>
                  <div class="form-check form-switch d-flex align-items-center mb-3">
                    <Field class="form-check-input" type="checkbox" name="remember" id="remember" value="true" />
                    <label class="form-check-label mb-0 ms-3" style="padding-top: 5px;" for="remember">Remember Me</label>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                  </div>
                  <p class="mt-4 text-sm text-center">
                    Forgot your password?
                    <router-link class="text-primary text-gradient font-weight-bold" :to="{name: 'emailPassword'}">RESET PASSWORD</router-link>
                  </p>
                  <p class="mt-4 text-sm text-center">
                    Don't have an account?
                    <router-link class="text-primary text-gradient font-weight-bold" :to="{name: 'Register'}">SIGN UP</router-link>
                  </p>
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
  import materialDashboard from '../../../../js/materialDashboard';
  import auth from '../../../../js/composables/auth';
  export default{
    components: {
      Form,
      Field,
      ErrorMessage
    },
    setup(){
      const store = useStore()
      const { login, facebookLogin, githubLogin, googleLogin } = auth()
      onBeforeMount(
        async() => {
          const { checkAuthentication } = auth()
          await checkAuthentication()
        }
      )
      onMounted(
        async() => {
          const { usePerfectScrollbar, useRipple, useInput } = materialDashboard()
          usePerfectScrollbar()
          useRipple()
          useInput()
        }
      )
      const schema = yup.object({
        email: yup.string().required('The email field is required.').typeError('The email must be a string.').email('The email must be a valid email address.').max(255, 'The email must not be greater than 255 characters.'),
        password: yup.string().required('The password field is required.').typeError('The password must be a string.').min(8, 'The password must be at least 8 characters.')
      })
      const showPassword = async() => {
        var x = document.getElementById("password")
        if (x.type === "password") {
          x.type = "text"
        } else {
          x.type = "password"
        }
      }
      const loginUser = async(values, { resetForm }) => {
        if (values.remember === undefined) {
          values.remember = false
        }
        else if (values.remember === 'true') {
          values.remember = true
        }
        await login(values, { resetForm })
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
        }, 20)
      }
      const facebookLoginUser = async() => {
        await facebookLogin()
      }
      const githubLoginUser = async() => {
        await githubLogin()
      }
      const googleLoginUser = async() => {
        await googleLogin()
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
      const showPasswordError = async() => {
        setTimeout(async() => {
          let password_error = document.getElementById('password_error')
          if(password_error){
            password_error.style.display = 'block'
          }
        }, 15)
      }
      const removeErrors = async() => {
        store.dispatch('removeEmailError')
        await removeEmailError()
        await showPasswordError()
      }
      onUnmounted(
        async() => {
          store.dispatch('removeEmailError')
        }
      )
      return{
        schema,
        showPassword,
        loginUser,
        facebookLoginUser,
        githubLoginUser,
        googleLoginUser,
        removeEmailError,
        showPasswordError,
        removeErrors
      }
    }
  }
</script>