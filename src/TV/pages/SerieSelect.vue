<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { BASE_URL_IMG } from '../../api/utils.js';
import { ref } from 'vue';
import Genre from '../components/UI/Genre.vue';
import { getInfoSerie } from '../../api/apiTv.js';
import Loader from '../../components/UI/Loader.vue';

const route = useRoute();
let serieSelect = ref({});
let isLoading = ref(true);

const getMovie = async () => {
  try {
    const { id } = route.params;
    serieSelect.value = await getInfoSerie(id);
    console.log(serieSelect)
  } catch (error) {
    console.error("Error fetching movie or trailer:", error);
  }finally{
    isLoading.value = false;
  }
};

getMovie();

</script>

<template>
  <div :style="{
  backgroundImage: `url(${BASE_URL_IMG}${serieSelect.backdrop_path})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  minHeight: '100vh',
  maxHeight: '100vh',
  backgroundColor: 'rgba(0, 0, 0, .2)',
  backgroundBlendMode: 'overlay'
}"
 class="max-w-full flex pl-2 items-center gap-2">
    <div class="flex flex-col max-h-[500px] gap-5 pl-5">
        <RouterLink to="/tv" class="border-2 border-red-900 hover:bg-red-900 font-bold w-20 rounded-md text-center text-white">Regresar</RouterLink>
      <h2 class="text-white text-5xl font-bold">{{ serieSelect.name }}</h2>
      <div class="pl-2 flex gap-5">
        <button class="capitalize bg-red-500 text-white font-bold pl-2 pr-2 rounded-md">play now</button>
      </div>
      <div class="pl-2">
        <span class="font-bold text-white text-xl">{{ serieSelect.first_air_date ? serieSelect.first_air_date.slice(0,4) : "" }}</span>
      </div>
      <div class="flex gap-3 pl-2">
        <Genre v-for="genre in serieSelect.genres" :key="genre.id" :name="genre.name"></Genre>
      </div>
      <div class="contenedor max-w-[600px] pl-2 max-h-[200px] h-auto overflow-auto">
        <p class="cw-full h-full text-white font-light">{{ serieSelect.overview ? serieSelect.overview : "Sin descripcion" }}</p>
      </div>
      <div class="flex flex-col gap-2 pl-2 text-white font-semibold">
        
        <span>Puplaridad: {{ serieSelect.popularity }}</span>
        <div v-if="serieSelect.created_by">
          <span>Creadores: </span>
          <span  v-for="serie in serieSelect.created_by" :key="serie.id">{{ serie.name}}</span>
          
        </div>
        <span v-else>sin creadores</span>
        <div class="flex max-w-[700px] contenedor overflow-x-auto gap-5 mt-2">
          <img class="w-24" v-for="logo in serieSelect.networks" :key="logo.id" :src="BASE_URL_IMG+logo.logo_path" alt="logo">
        </div>
      </div>
    </div>
    <Loader v-if="isLoading"></Loader>
  </div>
</template>

<style >


</style>
