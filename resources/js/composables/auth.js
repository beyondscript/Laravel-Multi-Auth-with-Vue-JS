import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
export default function auth(){
	const store = useStore()
  const route = useRoute()
  const router = useRouter()
  const checkAuthentication = async() => {
    try{
      let response = await axios.get('/api/check-authentication')
      store.dispatch('setToken', response.data.token)
      if(!localStorage.getItem('type')){
        store.dispatch('setType', response.data.type)
      }
      else{
        if(localStorage.getItem('type') !== response.data.type){
          store.dispatch('setType', response.data.type)
        }
      }
      if(response.data.verified === true){
        if(!localStorage.getItem('verified')){
          store.dispatch('setVerified', 1)
        }
        if(response.data.type === 'Admin'){
          router.push({name: 'adminDashboard'})
        }
        else if(response.data.type === 'User'){
          router.push({name: 'userDashboard'})
        }
        else if(response.data.type === 'Pro'){
          router.push({name: 'proDashboard'})
        }
      }
      else{
        router.push({name: 'verifyEmail'})
      }
    }
    catch(error){
      if(error.response.status === 401 && error.response.data.message === 'Unauthenticated.'){
        store.dispatch('removeToken')
        store.dispatch('removeVerified')
        store.dispatch('removeType')
        if(route.name === 'verifyEmail'){
          router.push({name: 'Home'})
        }
      }
    }
  }
  const checkAuthenticationOnResetPassword = async() => {
    try{
      let response = await axios.get('/api/check-authentication')
      store.dispatch('setToken', response.data.token)
      if(!localStorage.getItem('type')){
        store.dispatch('setType', response.data.type)
      }
      else{
        if(localStorage.getItem('type') !== response.data.type){
          store.dispatch('setType', response.data.type)
        }
      }
      if(response.data.verified === true){
        if(!localStorage.getItem('verified')){
          store.dispatch('setVerified', 1)
        }
      }
    }
    catch(error){
      if(error.response.status === 401 && error.response.data.message === 'Unauthenticated.'){
        store.dispatch('removeToken')
        store.dispatch('removeVerified')
        store.dispatch('removeType')
      }
    }
  }
	const register = async(values) => {
    var windowWidth = window.innerWidth
    var width = parseInt(windowWidth - 120) / 2

    var windowHeight = window.innerHeight
    var height = parseInt(windowHeight - 120) / 2

    document.querySelector('.loader').style.left = width + 'px'
    document.querySelector('.loader').style.top = height + 'px'
    document.querySelector('.loader').style.display = 'block'

    store.dispatch('removeEmailError')
    store.dispatch('removePhoneError')
    store.dispatch('removeImageError')
    store.dispatch('removePasswordError')
    try{
      let response = await axios.post('/api/register', values, {headers: {'Content-Type':'multipart/form-data'}})
      store.dispatch('setToken', response.data.token)
      store.dispatch('setType', response.data.type)
      router.push({name: 'verifyEmail'})
    }
    catch(error){
      if(error.response.status === 422){
        if(error.response.data.errors.email !== undefined){
          store.dispatch('setEmailError', error.response.data.errors.email[0])
        }
        if(error.response.data.errors.phone !== undefined){
          store.dispatch('setPhoneError', error.response.data.errors.phone[0])
        }
        if(error.response.data.errors.image !== undefined){
          store.dispatch('setImageError', error.response.data.errors.image[0])
        }
        if(error.response.data.errors.password !== undefined){
          store.dispatch('setPasswordError', error.response.data.errors.password[0])
        }
      }
    }

    document.querySelector('.loader').style.display = 'none'
	}
  const verify = async(url) => {
    try{
      let response = await axios.post('/api/verify-email/' + url.value.id + '/' + url.value.hash + '?expires=' + url.value.expires + '&signature=' + url.value.signature)
      store.dispatch('setVerified', 1)
      if(response.data.type === 'Admin'){
        router.push({name: 'adminDashboard'})
      }
      else if(response.data.type === 'User'){
        router.push({name: 'userDashboard'})
      }
      else if(response.data.type === 'Pro'){
        router.push({name: 'proDashboard'})
      }
    }
    catch(error){
      if(error.response.status === 403 && error.response.data.message === 'Invalid signature.'){
        router.push({name: 'verifyEmail'})
        toastr.error('Your request is not valid')
      }
    }
  }
  const resend = async() => {
    var windowWidth = window.innerWidth
    var width = parseInt(windowWidth - 120) / 2

    var windowHeight = window.innerHeight
    var height = parseInt(windowHeight - 120) / 2

    document.querySelector('.loader').style.left = width + 'px'
    document.querySelector('.loader').style.top = height + 'px'
    document.querySelector('.loader').style.display = 'block'

    try{
      let response = await axios.post('/api/resend-verify-email')
      if(response.data.verified === true){
        store.dispatch('setVerified', 1)
        if(response.data.type === 'Admin'){
          router.push({name: 'adminDashboard'})
        }
        else if(response.data.type === 'User'){
          router.push({name: 'userDashboard'})
        }
        else if(response.data.type === 'Pro'){
          router.push({name: 'userDashboard'})
        }
      }
      else if(response.data.verified === false){
        store.dispatch('setMessage', response.data.message)
      }
    }
    catch(error){
      if(error.response.status === 401 && error.response.data.message === 'Unauthenticated.'){
        store.dispatch('removeToken')
        store.dispatch('removeVerified')
        store.dispatch('removeType')
        router.push({name: 'Home'})
      }
    }

    document.querySelector('.loader').style.display = 'none'
  }
	const login = async(values, { resetForm }) => {
    store.dispatch('removeEmailError')
    try{
      let response = await axios.post('/api/login', values)
      store.dispatch('setToken', response.data.token)
      store.dispatch('setType', response.data.type)
      if(response.data.verified === true){
        store.dispatch('setVerified', 1)
        if(localStorage.getItem('redirectAfterLogin')){
          router.push(localStorage.getItem('redirectAfterLogin'))
        }
        else{
          if(response.data.type === 'Admin'){
            router.push({name: 'adminDashboard'})
          }
          else if(response.data.type === 'User'){
            router.push({name: 'userDashboard'})
          }
          else if(response.data.type === 'Pro'){
            router.push({name: 'proDashboard'})
          }
        }
      }
      else if(response.data.verified === false){
        router.push({name: 'verifyEmail'})
      }
      resetForm({
        values: {
          email: undefined,
          password: undefined,
          remember: undefined
        }
      })
    }
    catch(error){
      if(error.response.status === 422 || error.response.status === 429){
        store.dispatch('setEmailError', error.response.data.errors.email[0])
        if (values.remember === false) {
          resetForm({
            values: {
              email: undefined,
              password: undefined,
              remember: undefined
            }
          })
        }
        else if (values.remember === true) {
          resetForm({
            values: {
              email: undefined,
              password: undefined,
              remember: 'true'
            }
          })
        }
      }
    }
	}
  const facebookLogin = async() => {
    const formData = new FormData()
    formData.append('_method', 'patch')
    try{
      let response = await axios.post('/api/auth/facebook-redirect', formData)
      window.location.href = response.data.redirectUrl;
    }
    catch(error){}
  }
  const githubLogin = async() => {
    const formData = new FormData()
    formData.append('_method', 'patch')
    try{
      let response = await axios.post('/api/auth/github-redirect', formData)
      window.location.href = response.data.redirectUrl;
    }
    catch(error){}
  }
  const googleLogin = async() => {
    const formData = new FormData()
    formData.append('_method', 'patch')
    try{
      let response = await axios.post('/api/auth/google-redirect', formData)
      window.location.href = response.data.redirectUrl;
    }
    catch(error){}
  }
  const resetLink = async(values) => {
    var windowWidth = window.innerWidth
    var width = parseInt(windowWidth - 120) / 2

    var windowHeight = window.innerHeight
    var height = parseInt(windowHeight - 120) / 2

    document.querySelector('.loader').style.left = width + 'px'
    document.querySelector('.loader').style.top = height + 'px'
    document.querySelector('.loader').style.display = 'block'

    store.dispatch('removeMessage')
    store.dispatch('removeEmailError')
    try{
      let response = await axios.post('/api/reset-password', values)
      store.dispatch('setMessage', response.data.message)
    }
    catch(error){
      if(error.response.status === 422){
        if(error.response.data.errors.email !== undefined){
          store.dispatch('setEmailError', error.response.data.errors.email[0])
        }
      }
    }

    document.querySelector('.loader').style.display = 'none'
  }
  const setValue = async(url) => {
    try{
      let response = await axios.post('/api/reset-password/' + url.value.token + '?email=' + url.value.email)
      store.dispatch('setResetToken', response.data.token)
    }
    catch(error){}
  }
  const reset = async(values) => {
    store.dispatch('removeEmailError')
    store.dispatch('removePasswordError')
    try{
      let response = await axios.post('/api/reset-password-with-token', values)
      store.dispatch('setToken', response.data.token)
      store.dispatch('setType', response.data.type)
      if(response.data.verified === true){
        store.dispatch('setVerified', 1)
        if(response.data.type === 'Admin'){
          router.push({name: 'adminDashboard'})
        }
        else if(response.data.type === 'User'){
          router.push({name: 'userDashboard'})
        }
        else if(response.data.type === 'Pro'){
          router.push({name: 'proDashboard'})
        }
      }
      else if(response.data.verified === false){
        router.push({name: 'verifyEmail'})
      }
    }
    catch(error){
      if(error.response.status === 422){
        if(error.response.data.errors.email !== undefined){
          store.dispatch('setEmailError', error.response.data.errors.email[0])
        }
        if(error.response.data.errors.password !== undefined){
          store.dispatch('setPasswordError', error.response.data.errors.password[0])
        }
      }
    }
  }
	const logout = async() => {
		try{
      let response = await axios.post('/api/logout')
      store.dispatch('removeToken')
      store.dispatch('removeVerified')
      store.dispatch('removeType')
      router.push({name: 'Home'})
    }
    catch(error){
      if(error.response.status === 401 && error.response.data.message === 'Unauthenticated.'){
        store.dispatch('removeToken')
        store.dispatch('removeVerified')
        store.dispatch('removeType')
        router.push({name: 'Home'})
      }
    }
	}
	return{
    checkAuthentication,
    checkAuthenticationOnResetPassword,
		register,
    verify,
    resend,
		login,
    facebookLogin,
    githubLogin,
    googleLogin,
    resetLink,
    setValue,
    reset,
		logout
	}
}