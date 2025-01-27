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

