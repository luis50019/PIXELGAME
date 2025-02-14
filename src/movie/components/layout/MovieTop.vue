<script setup>
  import { RouterLink } from 'vue-router';
  import { BASE_URL_IMG } from '../../../api/utils.js';
  import Flecha from '../UI/Flecha.vue';
  
  defineProps({
    movie:{
      typeof: Object,
      default:()=>{}
    }
  })
</script>
//poster_path
<template>
 <div 
    class="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
    :style="{
      backgroundImage: `url(${BASE_URL_IMG}${movie.backdrop_path})`,
      backgroundColor: 'rgba(0, 0, 0, .5)',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay'
    }"
  >
    <div class="flex flex-col gap-5 pl-5">
      <h2 class="text-white text-5xl lg:text-8xl font-bold">{{ movie.title }}</h2>
      <div class="pl-2 flex gap-5">
        <button class="capitalize bg-red-500 text-white font-bold pl-2 pr-2 rounded-md">play now</button>
        <RouterLink class="bg-[#04640c] pl-2 pr-2 rounded-md font-bold" :to="{ name:'movie',params:{id:movie.id?movie.id:157336}}">
        mas información
        </RouterLink>
      </div>
      <div class="pl-2">
        <span class="font-bold text-white text-md lg:text-xl">{{movie.release_date ? movie.release_date.slice(0,4):"" }}</span>
      </div>
      <div class="max-w-[400px] lg:max-w-[500px] pl-2">
        <p class="lg:w-full text-white font-light text-md">{{ movie.overview?movie.overview:"Sin descripcion" }}</p>
      </div>
    </div>

    <Flecha></Flecha>
  </div>
</template>

<style>

</style>