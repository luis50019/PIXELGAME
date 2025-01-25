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
      console.log("desdede: "+res.email);
      if(res.email == null){
        return router.push('/login');
      }
    } catch (error) {
      console.log("Error:",error);
    }
  }

</script>


<template lang="">
  <nav
    class="h-16 absolute min-w-[100vw] max-w-[100vw] bg-transparent 
    text-[#fff] flex items-center justify-between pl-8 pt-5 pr-12" >
    <span class="inline-block text-3xl md:text-5xl font-oswald">
      <RouterLink to="/" class="text-[#a902f7]">PIXELGAME</RouterLink>
    </span>
    <ul v-if="user==null" class="flex gap-10 text-sm md:text-lg font-bold">
      <li><RouterLink to="/login" class="nav-link ">Login</RouterLink></li>
      <li><RouterLink to="/register" class="nav-link">Register</RouterLink></li>
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

.nav-link {
  position: relative;
  text-decoration: none;
  padding: 4px;
}
.nav-link-logout {
  position: relative;
  text-decoration: none;
  padding: 4px;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -2px; /* Ubica el borde debajo del texto */
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a20adf;
  transition: width 0.3s ease;
}
.nav-link-logout::after {
  content: "";
  position: absolute;
  bottom: -2px; /* Ubica el borde debajo del texto */
  left: 0;
  width: 0;
  height: 2px;
  background-color: #c70085;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%; 
}
.nav-link-logout:hover::after {
  width: 100%; 
}
</style>
