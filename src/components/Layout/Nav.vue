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
        <img src="../../assets/logoTres.png" class="h-12 bg-[#fff] rounded-sm px-2 py-1"/>
      </RouterLink>
    </span>
    <ul v-if="user==null" class="flex gap-2 lg:gap-10  text-[#fff] text-sm font-bold">
      <li><RouterLink to="/login" class="nav-link-login text-[#0c381e] rounded-lg lg:px-4 px-4 py-0 lg:py-[2px] text-xl">Login</RouterLink></li>
      <li><RouterLink to="/register" class="nav-link-register rounded-lg text-[#B18423] lg:px-4 px-4 py-0 lg:py-[2px] text-xl ">Register</RouterLink></li>
    </ul>
    <ul v-else class="flex gap-10 text-sm md:text-lg font-bold">
      <li class="nav-link font-light">
        {{user}}
      </li>
      <li><button @:click="handlerLogout" class="nav-link-logout ">Logout</button></li>
    </ul>
  </nav>
</template>

<style scoped>


</style>
