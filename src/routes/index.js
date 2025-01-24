import { createRouter, createWebHistory } from "vue-router";
import {
	Home,
	LandigPage,
	LoginPage,
	Register
} from "../pages/index.js"


const routes = [
	{
		path: "/",
		name: "landigPage",
		component: LandigPage

	},
	{
		path: "/home",
		name: "home",
		component: Home
	},
	{
		path: "/login",
		name:"Login",
		component: LoginPage
	},
	{
		path:"/register",
		name:"Register",
		component:Register
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
});

export {
	router
}

