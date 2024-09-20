import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default function social(){
  const store = useStore()
  const router = useRouter()
  const facebook = async(code, error) => {
    if(code){
      try{
        let response = await axios.post('/api/auth/facebook-callback?code=' + code)
        if(response.data.connected === true){
          if(response.data.authenticated === true){
            if(response.data.type === 'Admin'){
              router.push({name: 'adminProfile'})
            }
            else if(response.data.type === 'User'){
              router.push({name: 'userProfile'})
            }
            else if(response.data.type === 'Pro'){
              router.push({name: 'proProfile'})
            }
            toastr.error('Already connected with Facebook')
          }
          else if(response.data.authenticated === false){
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
        }
        else if(response.data.connected === false){
          if(response.data.authenticated === true){
            if(response.data.reconnect === false){
              if(response.data.type === 'Admin'){
                router.push({name: 'adminProfile'})
              }
              else if(response.data.type === 'User'){
                router.push({name: 'userProfile'})
              }
              else if(response.data.type === 'Pro'){
                router.push({name: 'proProfile'})
              }
              toastr.error('Already connected with Facebook')
            }
            else if(response.data.reconnect === true){
              if(response.data.type === 'Admin'){
                router.push({name: 'adminProfile'})
              }
              else if(response.data.type === 'User'){
                router.push({name: 'userProfile'})
              }
              else if(response.data.type === 'Pro'){
                router.push({name: 'proProfile'})
              }
              toastr.success('Successfully connected with Facebook')
            }
          }
          else if(response.data.authenticated === false){
            router.push({name: 'Login'})
            toastr.error('Please connect your account with Facebook')
          }
        }
      }
      catch(error){}
    }
    else if(error){
      try{
        let response = await axios.post('/api/auth/facebook-callback?error=' + error)
      }
      catch(error){
        if(error.response.status === 401){
          if(error.response.data.authenticated === false){
            router.push({name: 'Login'})
          }
          else if(error.response.data.authenticated === true){
            if(error.response.data.type === 'Admin'){
              router.push({name: 'adminProfile'})
            }
            else if(error.response.data.type === 'User'){
              router.push({name: 'userProfile'})
            }
            else if(error.response.data.type === 'Pro'){
              router.push({name: 'proProfile'})
            }
          }
        }
      }
    }
  }
  const github = async(code, error) => {
    if(code){
      try{
        let response = await axios.post('/api/auth/github-callback?code=' + code)
        if(response.data.connected === true){
          if(response.data.authenticated === true){
            if(response.data.type === 'Admin'){
              router.push({name: 'adminProfile'})
            }
            else if(response.data.type === 'User'){
              router.push({name: 'userProfile'})
            }
            else if(response.data.type === 'Pro'){
              router.push({name: 'proProfile'})
            }
            toastr.error('Already connected with GitHub')
          }
          else if(response.data.authenticated === false){
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
        }
        else if(response.data.connected === false){
          if(response.data.authenticated === true){
            if(response.data.reconnect === false){
              if(response.data.type === 'Admin'){
                router.push({name: 'adminProfile'})
              }
              else if(response.data.type === 'User'){
                router.push({name: 'userProfile'})
              }
              else if(response.data.type === 'Pro'){
                router.push({name: 'proProfile'})
              }
              toastr.error('Already connected with GitHub')
            }
            else if(response.data.reconnect === true){
              if(response.data.type === 'Admin'){
                router.push({name: 'adminProfile'})
              }
              else if(response.data.type === 'User'){
                router.push({name: 'userProfile'})
              }
              else if(response.data.type === 'Pro'){
                router.push({name: 'proProfile'})
              }
              toastr.success('Successfully connected with GitHub')
            }
          }
          else if(response.data.authenticated === false){
            router.push({name: 'Login'})
            toastr.error('Please connect your account with GitHub')
          }
        }
      }
      catch(error){}
    }
    else if(error){
      try{
        let response = await axios.post('/api/auth/github-callback?error=' + error)
      }
      catch(error){
        if(error.response.status === 401){
          if(error.response.data.authenticated === false){
            router.push({name: 'Login'})
          }
          else if(error.response.data.authenticated === true){
            if(error.response.data.type === 'Admin'){
              router.push({name: 'adminProfile'})
            }
            else if(error.response.data.type === 'User'){
              router.push({name: 'userProfile'})
            }
            else if(error.response.data.type === 'Pro'){
              router.push({name: 'proProfile'})
            }
          }
        }
      }
    }
  }
  const google = async(code, scope, authuser, prompt) => {
    try{
      let response = await axios.post('/api/auth/google-callback?code=' + code + '&scope=' + scope + '&authuser=' + authuser + '&prompt=' + prompt)
      if(response.data.connected === true){
        if(response.data.authenticated === true){
          if(response.data.type === 'Admin'){
            router.push({name: 'adminProfile'})
          }
          else if(response.data.type === 'User'){
            router.push({name: 'userProfile'})
          }
          else if(response.data.type === 'Pro'){
            router.push({name: 'proProfile'})
          }
          toastr.error('Already connected with Google')
        }
        else if(response.data.authenticated === false){
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
      }
      else if(response.data.connected === false){
        if(response.data.authenticated === true){
          if(response.data.reconnect === false){
            if(response.data.type === 'Admin'){
              router.push({name: 'adminProfile'})
            }
            else if(response.data.type === 'User'){
              router.push({name: 'userProfile'})
            }
            else if(response.data.type === 'Pro'){
              router.push({name: 'proProfile'})
            }
            toastr.error('Already connected with Google')
          }
          else if(response.data.reconnect === true){
            if(response.data.type === 'Admin'){
              router.push({name: 'adminProfile'})
            }
            else if(response.data.type === 'User'){
              router.push({name: 'userProfile'})
            }
            else if(response.data.type === 'Pro'){
              router.push({name: 'proProfile'})
            }
            toastr.success('Successfully connected with Google')
          }
        }
        else if(response.data.authenticated === false){
          router.push({name: 'Login'})
          toastr.error('Please connect your account with Google')
        }
      }
    }
    catch(error){}
  }
  return{
    facebook,
    github,
    google
  }
}