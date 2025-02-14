<script setup>
  import { RouterLink } from 'vue-router';
  import { BASE_URL_IMG } from '../../../api/utils.js';
  import Flecha from '../../components/UI/Flecha.vue';
  
  defineProps({
    serie:{
      typeof: Object,
      default:()=>{}
    }
  })
</script>
Thought for 2 secondsEntendido. Vamos a hacer que el fondo y el diseño general sean responsivos. Aquí tienes una versión mejorada y responsiva del componente:

```vue
<template>
  <div 
    class="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
    :style="{
      backgroundImage: `url(${BASE_URL_IMG}${serie.backdrop_path})`,
      backgroundColor: 'rgba(0, 0, 0, .5)',
      backgroundBlendMode: 'overlay'
    }"
  >
    <div class="container mx-auto px-4 py-8 md:py-16">
      <div class="flex flex-col gap-5 max-w-2xl">
        <h2 class="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          {{ serie.name }}
        </h2>
        <div class="flex gap-4 flex-wrap">
          <button class="capitalize bg-red-600 text-sm lg:text-md hover:bg-red-700 text-white font-bold px-1 lg:py-1 lg:px-4 rounded-md transition duration-300">
            Play now
          </button>
          <RouterLink 
            :to="{ name:'serie', params:{id: serie.id || 157336}}" 
            class="bg-green-600 hover:bg-green-700 text-white text-md lg:text-md font-bold lg:py-1 lg:px-4 rounded-md transition duration-300"
          >
            Más información
          </RouterLink>
        </div>
        <div class="mt-4">
          <p class="text-white text-sm md:text-base lg:text-md font-normal line-clamp-4 md:line-clamp-none">
            {{ serie.overview || "Sin descripción" }}
          </p>
        </div>
      </div>
    </div>

    <Flecha class="absolute bottom-8 left-1/2 transform -translate-x-1/2" />
  </div>
</template>

<style>

</style>