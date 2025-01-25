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
			console.log("dede: ",resp);
			if(resp.email && resp.uid){
				console.log("Login success");
				return router.push('/home');
			}
		} catch (error) {
			console.log("Error:",error);
		}
	}
</script>

<template lang="">
  <div class="w-full min-h-[80vh] flex justify-center items-center">

    <form @:submit.prevent="handlerSubmit" class="w-4/4 sm:1/3 md:w-1/4 bg-[#2c2a2a] flex flex-col gap-8 p-8 mt-20 rounded-lg">
			<h2 class="text-4xl md:text-5xl font-bold text-[##522e93]">Login</h2>
			<div class="flex flex-col gap-2">
				<label for="email">Email</label>
				<input type="email" name="email" placeholder="Email"  v-model="email"
				class="w-full border-b bg-transparent outline-none border-[#646161] mt-2">
			</div>
			<div class="flex flex-col gap-2">
				<label for="password">Password</label>
				<input type="password" name="passsword" placeholder="*****" v-model="password"	
				class="w-full border-b bg-transparent outline-none border-[#646161] mt-2" autocomplete="on">
				<span class="text-[#df2f2f] h-2 text-sm p-0">{{error?.message}}</span>
			</div>
			<button type="submit" :disabled="isActive" class="bg-[#9b15da] p-1 rounded-xl text-xl" >Login</button>
			<span>No tienes cuenta? <RouterLink to ="/register" class="text-[#b951e9]">Crear cuenta</RouterLink></span>
		</form>

  </div>
</template>

<style lang="">

</style>
