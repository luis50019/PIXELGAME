# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


<script setup>
  import {RouterLink,useRouter} from 'vue-router'
  import {useUserStore} from "../../store/index.js"
  import {storeToRefs} from "pinia"

  const router = useRouter();
  const store = useUserStore();
  const {user} = storeToRefs(store);
  const {logout} = store;

  const handlerLogout = async()=>{
    try {
      const res = await logout();
      console.log("desdede: "+res.user);
      if(res.user == null){
        return router.push('/login');
      }
    } catch (error) {
      console.log("Error:",error);
    }
  }

</script>


<template lang="">
  <nav
    class="h-16 absolute min-w-[98vw] max-w-[100vw] bg-transparent
    text-[#fff] flex items-end justify-between px-7 py-15 z-20" >
    <span class="inline-block text-3xl md:text-5xl font-oswald">
      <RouterLink to="/" class="text-[#222] flex items-end gap-1">
        <img src="../../assets/logoTres.png" class="h-12 rounded-sm px-2 py-1"/>
      </RouterLink>
    </span>
    <ul v-if="user==null" class="flex gap-2 lg:gap-10  text-[#fff] text-sm font-bold">
      <li><RouterLink to="/login" class="nav-link-login text-[#0c381e] rounded-lg lg:px-4 px-4 py-0 lg:py-[2px] text-xl">Login</RouterLink></li>
      <li><RouterLink to="/register" class="nav-link-register rounded-lg text-[#B18423] lg:px-4 px-4 py-0 lg:py-[2px] text-xl ">Register</RouterLink></li>
    </ul>
    <div v-else class="flex justify-between lg:min-w-[80%] lg:max-w-[80%]">
      <ul class="flex gap-20 lg:pl-10">
        <li class="nav-link-login lg:px-4 px-4 py-0 lg:py-[2px] lg:text-lg">Movies</li>
        <li class="nav-link-login lg:px-4 px-4 py-0 lg:py-[2px] lg:text-lg">Series</li>
        <li class="nav-link-login lg:px-4 px-4 py-0 lg:py-[2px] lg:text-lg">Posts</li>
        <li class="nav-link-login lg:px-4 px-4 py-0 lg:py-[2px] lg:text-lg">games</li>
      </ul>
      <ul class="flex gap-10 lg:text-lg font-bold">
        <li class="nav-link font-light">
        {{user}}
      </li>
      <li><button @:click="handlerLogout" class="nav-link-logout ">Logout</button></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>


</style>


