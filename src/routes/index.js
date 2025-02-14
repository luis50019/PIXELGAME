import { createRouter, createWebHistory, useRoute } from "vue-router";
import {
	Home,
	LoginPage,
	Register,
	LandingPage
} from "../pages/index.js"
import { useUserStore } from "../store/index.js";
import { storeToRefs } from "pinia";
import { ref } from "vue";


const authRequired = async (to, from, next) => {
	const store = useUserStore();
	const { isAutentication, user } = storeToRefs(store);
	if (!isAutentication.value) {
		try {
			await store.initializeAuthListener(); // Asegúrate de que la autenticación esté cargada
			
		} catch (error) {
			console.log(error)
		}
	}
	if (user.value) {
		next();
	} else {
		next("/login");
	}
};

const redirectIfAuthenticated = async (to, from, next) => {
	const store = useUserStore();
	const { isAutentication, user } = storeToRefs(store);
	if (!isAutentication.value) {
		await store.initializeAuthListener(); // Asegúrate de que la autenticación esté cargada
	}
	if (user.value) {
		next("/home");
	} else {
		next();
	}
};



const routes = [
	{
		path: "/",
		name: "landingPage",
		component: LandingPage,
		beforeEnter: redirectIfAuthenticated
	},
	{
		path: "/home",
		name: "home",
		component: Home,
		beforeEnter: authRequired
	},
	{
		path: "/login",
		name:"Login",
		component: LoginPage,
		beforeEnter: redirectIfAuthenticated
	},
	{
		path:"/register",
		name:"Register",
		component:Register,
		beforeEnter: redirectIfAuthenticated
	},
	{
		path:"/tv",
		name:"tv",
		component:()=>import('../TV/pages/HomeTv.vue'),
		beforeEnter:authRequired
	},
	{
		path:'/tv/serie/:id?',
		name:'serie',
		component:()=> import('../TV/pages/SerieSelect.vue'),
		beforeEnter:authRequired
	},
	{
		path:'/movies',
		name:'movies',
		component:()=> import('../movie/pages/HomeMovie.vue')
	},
	{
		path:'/movie/:id?',
		name:'movie',
		component:()=> import('../movie/pages/MovieSelect.vue')
	},
	{
		path:'/posts',
		name:'posts',
		component:()=> import('../posts/HomePost.vue')
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: "/"
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
});

export {
	router
}

