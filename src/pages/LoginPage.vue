<script setup>
	import {RouterLink,useRouter} from 'vue-router'
	import {computed,ref} from "vue";
	import {useUserStore} from "../store/index.js"
	import {storeToRefs} from "pinia"

	const router = useRouter();
	const store = useUserStore();

	const {error} = storeToRefs(store);
	const {login} = store;

	const email = ref('');
	const password = ref('');

	const isActive = computed(()=>{
		if(email.value.length >4 && password.value.length) return false;
		return true;
	})

	const handlerSubmit =async ()=>{
		try {
			const resp = await login(email.value,password.value);
			if(resp.user && resp.uid){
				return router.push('/home');
			}
		} catch (error) {
			console.log("Error:",error);
		}
	}
</script>

<template lang="">
  <div class="w-full min-h-[80vh] flex flex-col justify-center items-center">
		<RouterLink to="/" class="mt-20 w-3/4 lg:w-1/4">
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyYYQoEgxkkb--x4sumfAFiCVx7aFiHFt0w&s" class="w-10"/>
		</RouterLink>
    <form @:submit.prevent="handlerSubmit" class="w-3/4 lg:w-1/4 bg-[#f3f2f1] flex flex-col gap-8 p-8 rounded-lg">
			<h2 class="text-4xl md:text-5xl font-bold text-[#006838]">Login</h2>
			<div class="flex flex-col gap-2">
				<label for="email" class="text-[#B18423]">Email</label>
				<input type="email" name="email" placeholder="Email" autocomplete="off"  v-model="email"
				class="w-full border-b bg-transparent outline-none border-[#006838] text-[#000] mt-2">
			</div>
			<div class="flex flex-col gap-2">
				<label for="password" class="text-[#B18423]">Password</label>
				<input type="password" name="passsword" placeholder="*****" v-model="password"	
				class="w-full active:bg-transparent border-b bg-transparent outline-none border-[#000] text-[#000] mt-2" autocomplete="off">
				<span class="text-[#df2f2f] h-2 text-sm p-0">{{error?.message}}</span>
			</div>
			<button type="submit" :disabled="isActive" class="bg-[#006838] p-1 disabled:bg-[#2f463b] rounded-xl text-xl" >Login</button>
			<span class="text-[#B18423]">have not you register? <RouterLink to ="/register" class="text-[#006838] nav-link-login">Register</RouterLink></span>
		</form>

  </div>
</template>

<style lang="">

</style>
