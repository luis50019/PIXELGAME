<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useUserStore } from "../../store/index.js"
import { storeToRefs } from "pinia"
import { Menu, X } from 'lucide-vue-next'

const router = useRouter();
const store = useUserStore();
const { user } = storeToRefs(store);
const { logout } = store;

const isMenuOpen = ref(false)

const handlerLogout = async () => {
  try {
    const res = await logout();
    console.log("desdede: " + res.user);
    if (res.user == null) {
      isMenuOpen.value=false;
      return router.push('/');
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav :class="['absolute top-0 left-0 w-full z-50 py-4 px-6', {'bg-[#0a0a0a]': isMenuOpen}]">
    <div class="container mx-auto flex justify-between items-center">
      <RouterLink to="/" class="text-[#222] flex items-center gap-1">
        <img src="../../assets/logoTres.png" class=" h-10 lg:h-14 rounded-sm" alt="Logo" />
      </RouterLink>

      <!-- Mobile menu button -->
      <button @click="toggleMenu" class="lg:hidden text-[#fff] hover:text-[#aaa]">
        <Menu v-if="!isMenuOpen"/>
        <X v-else  />
      </button>

      <!-- Desktop menu -->
      <div class="hidden lg:flex items-center space-x-8">
        <template v-if="user">
          <RouterLink to="/movies" class="nav-link-login text-[#fff]">Movies</RouterLink>
          <RouterLink to="/series" class="nav-link-login text-[#fff]">Series</RouterLink>
          <RouterLink to="/posts" class="nav-link-login text-[#fff]">Posts</RouterLink>
          <RouterLink to="/games" class="nav-link-login text-[#fff]">Games</RouterLink>
          <span class="nav-link text-white">{{ user }}</span>
          <button @click="handlerLogout" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
        </template>
        <template v-else>
          <RouterLink to="/login" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Login</RouterLink>
          <RouterLink to="/register" class=" bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Register</RouterLink>
        </template>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="lg:hidden mt-4 space-y-4">
      <template v-if="user" >
        <RouterLink to="/movies" class="block nav-link-login text-[#fff] hover:text-gray-400" @click="toggleMenu">Movies</RouterLink>
        <RouterLink to="/series" class="block nav-link-login text-[#fff] hover:text-gray-400" @click="toggleMenu">Series</RouterLink>
        <RouterLink to="/posts" class="block nav-link-login text-[#fff] hover:text-gray-400" @click="toggleMenu">Posts</RouterLink>
        <RouterLink to="/games" class="block nav-link-login text-[#fff] hover:text-gray-400" @click="toggleMenu">Games</RouterLink>
        <span class="text-[#fff]">{{ user }}</span>
        <button @click="handlerLogout" class="block w-full text-left bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
      </template>
      <template v-else>
        <RouterLink to="/login" class="block nav-link-login bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" @click="toggleMenu">Login</RouterLink>
        <RouterLink to="/register" class="block nav-link-register bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" @click="toggleMenu">Register</RouterLink>
      </template>
    </div>
  </nav>
</template>

<style scoped>
/* Add any additional styles here */
</style>

