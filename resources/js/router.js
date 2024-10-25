import {createWebHistory, createRouter} from 'vue-router';
import store from './store.js';
import redirectToHome from './components/pages/redirectToHome.vue';
import login from './components/pages/auth/login.vue';
import register from './components/pages/auth/register.vue';
import proRegister from './components/pages/auth/proRegister.vue';
import verifyEmail from './components/pages/auth/verifyEmail.vue';
import verifyingEmail from './components/pages/auth/verifyingEmail.vue';
import emailPassword from './components/pages/auth/passwords/emailPassword.vue';
import resetPassword from './components/pages/auth/passwords/resetPassword.vue';
import facebook from './components/pages/auth/facebook.vue';
import github from './components/pages/auth/github.vue';
import google from './components/pages/auth/google.vue';
import adminHome from './components/pages/admin/adminHome.vue';
import adminMainProfile from './components/pages/admin/mainProfile.vue';
import adminProfile from './components/pages/admin/profile/adminProfile.vue';
import adminChangeEmail from './components/pages/admin/profile/changeEmail.vue';
import adminChangePassword from './components/pages/admin/profile/changePassword.vue';
import adminChangePicture from './components/pages/admin/profile/changePicture.vue';
import userHome from './components/pages/user/userHome.vue';
import userMainProfile from './components/pages/user/mainProfile.vue';
import userProfile from './components/pages/user/profile/userProfile.vue';
import userChangeEmail from './components/pages/user/profile/changeEmail.vue';
import userChangePassword from './components/pages/user/profile/changePassword.vue';
import userChangePicture from './components/pages/user/profile/changePicture.vue';
import proHome from './components/pages/pro/proHome.vue';
import proMainProfile from './components/pages/pro/mainProfile.vue';
import proProfile from './components/pages/pro/profile/proProfile.vue';
import proChangeEmail from './components/pages/pro/profile/changeEmail.vue';
import proChangePassword from './components/pages/pro/profile/changePassword.vue';
import proChangePicture from './components/pages/pro/profile/changePicture.vue';
import pageNotFound from './components/pages/errors/404.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		redirect: {
			name: 'Login'
		},
		meta: {
			requiresAuth: undefined,
			isVerified: undefined,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	},
	{
		path: '/redirect-to-welcome',
		name: 'redirectToHome',
		component: redirectToHome,
		meta: {
			requiresAuth: undefined,
			isVerified: undefined,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: login,
		meta: {
			requiresAuth: false,
			isVerified: undefined,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	},
	{
		path: '/register',
		name: 'Register',
		component: register,
		meta: {
			requiresAuth: false,
			isVerified: undefined,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	},
	{
		path: '/pro-register',
		name: 'proRegister',
		component: proRegister,
		meta: {
			requiresAuth: false,
			isVerified: undefined,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	},
	{
		path: '/verify-email',
		name: 'verifyEmail',
		component: verifyEmail,
		meta: {
			requiresAuth: true,
			isVerified: false,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	},
	{
		path: '/api/verify-email/:id/:hash',
		name: 'verifyingEmail',
		component: verifyingEmail,
		meta: {
			requiresAuth: true,
			isVerified: false,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	},
	{
		path: '/reset-password',
		name: 'emailPassword',
		component: emailPassword,
		meta: {
			requiresAuth: undefined,
			isVerified: undefined,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	},
	{
		path: '/api/reset-password/:token',
		name: 'resetPassword',
		component: resetPassword,
		meta: {
			requiresAuth: undefined,
			isVerified: undefined,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	},
	{
		path: '/api/auth/facebook-callback',
		name: 'facebook',
		component: facebook,
		meta: {
			requiresAuth: undefined,
			isVerified: undefined,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	},
	{
		path: '/api/auth/github-callback',
		name: 'github',
		component: github,
		meta: {
			requiresAuth: undefined,
			isVerified: undefined,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	},
	{
		path: '/api/auth/google-callback',
		name: 'google',
		component: google,
		meta: {
			requiresAuth: undefined,
			isVerified: undefined,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	},
	{
		path: '/admin-home',
		name: 'adminDashboard',
		component: adminHome,
		meta: {
			requiresAuth: true,
			isVerified: true,
			isAdmin: true,
			isUser: false,
			isPro: false
		}
	},
	{
		path: '/admin-profile',
		name: 'adminMainProfile',
		component: adminMainProfile,
		meta: {
			requiresAuth: true,
			isVerified: true,
			isAdmin: true,
			isUser: false,
			isPro: false
		},
		children: [
			{
				path: '',
				name: 'adminProfile',
				component: adminProfile,
				meta: {
					requiresAuth: true,
					isVerified: true,
					isAdmin: true,
					isUser: false,
					isPro: false
				}
			},
			{
				path: 'edit-email',
				name: 'adminChangeEmail',
				component: adminChangeEmail,
				meta: {
					requiresAuth: true,
					isVerified: true,
					isAdmin: true,
					isUser: false,
					isPro: false
				}
			},
			{
				path: 'edit-password',
				name: 'adminChangePassword',
				component: adminChangePassword,
				meta: {
					requiresAuth: true,
					isVerified: true,
					isAdmin: true,
					isUser: false,
					isPro: false
				}
			},
			{
				path: 'edit-profile-picture',
				name: 'adminChangePicture',
				component: adminChangePicture,
				meta: {
					requiresAuth: true,
					isVerified: true,
					isAdmin: true,
					isUser: false,
					isPro: false
				}
			}
		]
	},
	{
		path: '/user-home',
		name: 'userDashboard',
		component: userHome,
		meta: {
			requiresAuth: true,
			isVerified: true,
			isUser: true,
			isAdmin: false,
			isPro: false
		}
	},
	{
		path: '/user-profile',
		name: 'userMainProfile',
		component: userMainProfile,
		meta: {
			requiresAuth: true,
			isVerified: true,
			isUser: true,
			isAdmin: false,
			isPro: false
		},
		children: [
			{
				path: '',
				name: 'userProfile',
				component: userProfile,
				meta: {
					requiresAuth: true,
					isVerified: true,
					isUser: true,
					isAdmin: false,
					isPro: false
				}
			},
			{
				path: 'edit-email',
				name: 'userChangeEmail',
				component: userChangeEmail,
				meta: {
					requiresAuth: true,
					isVerified: true,
					isUser: true,
					isAdmin: false,
					isPro: false
				}
			},
			{
				path: 'edit-password',
				name: 'userChangePassword',
				component: userChangePassword,
				meta: {
					requiresAuth: true,
					isVerified: true,
					isUser: true,
					isAdmin: false,
					isPro: false
				}
			},
			{
				path: 'edit-profile-picture',
				name: 'userChangePicture',
				component: userChangePicture,
				meta: {
					requiresAuth: true,
					isVerified: true,
					isUser: true,
					isAdmin: false,
					isPro: false
				}
			}
		]
	},
	{
		path: '/pro-home',
		name: 'proDashboard',
		component: proHome,
		meta: {
			requiresAuth: true,
			isVerified: true,
			isPro: true,
			isAdmin: false,
			isUser: false
		}
	},
	{
		path: '/pro-profile',
		name: 'proMainProfile',
		component: proMainProfile,
		meta: {
			requiresAuth: true,
			isVerified: true,
			isPro: true,
			isAdmin: false,
			isUser: false
		},
		children: [
			{
				path: '',
				name: 'proProfile',
				component: proProfile,
				meta: {
					requiresAuth: true,
					isVerified: true,
					isPro: true,
					isAdmin: false,
					isUser: false
				}
			},
			{
				path: 'edit-email',
				name: 'proChangeEmail',
				component: proChangeEmail,
				meta: {
					requiresAuth: true,
					isVerified: true,
					isPro: true,
					isAdmin: false,
					isUser: false
				}
			},
			{
				path: 'edit-password',
				name: 'proChangePassword',
				component: proChangePassword,
				meta: {
					requiresAuth: true,
					isVerified: true,
					isPro: true,
					isAdmin: false,
					isUser: false
				}
			},
			{
				path: 'edit-profile-picture',
				name: 'proChangePicture',
				component: proChangePicture,
				meta: {
					requiresAuth: true,
					isVerified: true,
					isPro: true,
					isAdmin: false,
					isUser: false
				}
			}
		]
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: pageNotFound,
		meta: {
			requiresAuth: undefined,
			isVerified: undefined,
			isAdmin: undefined,
			isUser: undefined,
			isPro: undefined
		}
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	if(to.meta.requiresAuth === true && store.getters.getToken === 0){
		localStorage.setItem('redirectAfterLogin', to.fullPath)
		next({name: 'Login'})
	}
	else{
		next()
	}
})

router.beforeEach((to, from, next) => {
	if(to.meta.requiresAuth === false && store.getters.getToken !== 0){
		if(store.getters.getType === 'Admin'){
			next({name: 'adminDashboard'})
		}
		else if(store.getters.getType === 'User'){
			next({name: 'userDashboard'})
		}
		else if(store.getters.getType === 'Pro'){
			next({name: 'proDashboard'})
		}
	}
	else{
		next()
	}
})

router.beforeEach((to, from, next) => {
	if(to.meta.isVerified === true && store.getters.getVerified === 0){
		next({name: 'verifyEmail'})
	}
	else{
		next()
	}
})

router.beforeEach((to, from, next) => {
	if(to.meta.isVerified === false && store.getters.getVerified !== 0){
		if(store.getters.getType === 'Admin'){
			next({name: 'adminDashboard'})
		}
		else if(store.getters.getType === 'User'){
			next({name: 'userDashboard'})
		}
		else if(store.getters.getType === 'Pro'){
			next({name: 'proDashboard'})
		}
	}
	else{
		next()
	}
})

router.beforeEach((to, from, next) => {
	if(to.meta.isAdmin === false && store.getters.getType === 'Admin'){
		toastr.error('You are not allowed to perform this action')
		next({name: 'adminDashboard'})
	}
	else if(to.meta.isUser === false && store.getters.getType === 'User'){
		toastr.error('You are not allowed to perform this action')
		next({name: 'userDashboard'})
	}
	else if(to.meta.isPro === false && store.getters.getType === 'Pro'){
		toastr.error('You are not allowed to perform this action')
		next({name: 'proDashboard'})
	}
	else{
		next()
	}
})

export default router