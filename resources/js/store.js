import {createStore} from 'vuex';

const store = createStore({
	state:{
		appName: import.meta.env.VITE_APP_NAME,
		appDebug: import.meta.env.VITE_APP_DEBUG,
		emailError: null,
		phoneError: null,
		imageError: null,
		passwordError: null,
		loading: false,
		token: localStorage.getItem('token') || 0,
		verified: localStorage.getItem('verified') || 0,
		message: null,
		type: localStorage.getItem('type') || 'Unset',
		user: {},
		userLoading: true,
		resetToken: null,
		progress: null,
		serverError: false
	},
	mutations:{
		updateEmailError(state, payload){
			state.emailError = payload
		},
		updatePhoneError(state, payload){
			state.phoneError = payload
		},
		updateImageError(state, payload){
			state.imageError = payload
		},
		updatePasswordError(state, payload){
			state.passwordError = payload
		},
		updateLoading(state, payload){
			state.loading = payload
		},
		updateToken(state, payload){
			state.token = payload
		},
		updateVerified(state, payload){
			state.verified = payload
		},
		updateMessage(state, payload){
			state.message = payload
		},
		updateType(state, payload){
			state.type = payload
		},
		updateUser(state, payload){
			state.user = payload
		},
		updateUserLoading(state, payload){
			state.userLoading = payload
		},
		updateResetToken(state, payload){
			state.resetToken = payload
		},
		updateProgress(state, payload){
			state.progress = payload
		},
		updateServerError(state, payload){
			state.serverError = payload
		}
	},
	actions:{
		setEmailError(context, payload){
			context.commit('updateEmailError', payload)
		},
		removeEmailError(context){
			context.commit('updateEmailError', null)
		},
		setPhoneError(context, payload){
			context.commit('updatePhoneError', payload)
		},
		removePhoneError(context){
			context.commit('updatePhoneError', null)
		},
		setImageError(context, payload){
			context.commit('updateImageError', payload)
		},
		removeImageError(context){
			context.commit('updateImageError', null)
		},
		setPasswordError(context, payload){
			context.commit('updatePasswordError', payload)
		},
		setLoading(context){
			context.commit('updateLoading', true)
		},
		removeLoading(context){
			context.commit('updateLoading', false)
		},
		removePasswordError(context){
			context.commit('updatePasswordError', null)
		},
		setToken(context, payload){
			localStorage.setItem('token', payload)
			context.commit('updateToken', payload)
		},
		removeToken(context){
			localStorage.removeItem('token')
			context.commit('updateToken', 0)
		},
		setVerified(context, payload){
			localStorage.setItem('verified', payload)
			context.commit('updateVerified', payload)
		},
		removeVerified(context){
			localStorage.removeItem('verified')
			context.commit('updateVerified', 0)
		},
		setMessage(context, payload){
			context.commit('updateMessage', payload)
		},
		removeMessage(context){
			context.commit('updateMessage', null)
		},
		setType(context, payload){
			localStorage.setItem('type', payload)
			context.commit('updateType', payload)
		},
		removeType(context){
			localStorage.removeItem('type')
			context.commit('updateType', 'Unset')
		},
		setUser(context, payload){
			context.commit('updateUser', payload)
		},
		removeUser(context){
			context.commit('updateUser', {})
		},
		setUserLoading(context){
			context.commit('updateUserLoading', true)
		},
		removeUserLoading(context){
			context.commit('updateUserLoading', false)
		},
		setResetToken(context, payload){
			context.commit('updateResetToken', payload)
		},
		removeResetToken(context){
			context.commit('updateResetToken', null)
		},
		setProgress(context, payload){
			context.commit('updateProgress', payload)
		},
		removeProgress(context){
			context.commit('updateProgress', null)
		},
		setServerError(context){
			context.commit('updateServerError', true)
		},
		removeServerError(context){
			context.commit('updateServerError', false)
		}
	},
	getters:{
		getAppName: function(state){
			return state.appName
		},
		getAppDebug: function(state){
			return state.appDebug
		},
		getEmailError: function(state){
			return state.emailError
		},
		getPhoneError: function(state){
			return state.phoneError
		},
		getImageError: function(state){
			return state.imageError
		},
		getPasswordError: function(state){
			return state.passwordError
		},
		getLoading: function(state){
			return state.loading
		},
		getToken: function(state){
			return state.token
		},
		getVerified: function(state){
			return state.verified
		},
		getMessage: function(state){
			return state.message
		},
		getType: function(state){
			return state.type
		},
		getUser: function(state){
			return state.user
		},
		getUserLoading: function(state){
			return state.userLoading
		},
		getResetToken: function(state){
			return state.resetToken
		},
		getProgress: function(state){
			return state.progress
		},
		getServerError: function(state){
			return state.serverError
		}
	}
})

export default store