import { createRouter, createWebHistory, useRoute } from "vue-router";
import {
	Home,
	LandigPage,
	LoginPage,
	Register
} from "../pages/index.js"
import { useUserStore } from "../store/index.js";
import { storeToRefs } from "pinia";

const pathsLogin = ["/home", "/register"];
const pathsHome = ["/","/login"];


const authRequired =async (to, from, next) => {
	const store = useUserStore();
	const {user,uid} = storeToRefs(store);
	const {initializeAuthListener} = store;
	try {

		initializeAuthListener();
		const router = useRoute();
		const path = router.path;
		console.log("router: "+router.path);
		if(user.value){
			console.log(path)
			if(
				pathsLogin.includes(to.path) && pathsHome.includes(from.path)

			){
				next();
			}
		}
		if(!user.value){
			if(
				pathsHome.includes(to.path) && !pathsLogin.includes(from.path)   
			){
				next();
			}
		}	
	} catch (error) {
		console.log(error)
	}
	return true;
}


const routes = [
	{
		path: "/",
		name: "landigPage",
		component: LandigPage,
		beforeEnter: authRequired
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
		beforeEnter: authRequired
	},
	{
		path:"/register",
		name:"Register",
		component:Register,
		beforeEnter: authRequired
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
});

export {
	router
}

