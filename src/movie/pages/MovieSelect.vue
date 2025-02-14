<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { BASE_URL_IMG } from '../../api/utils.js';
import { getInfoMovie } from '../../api/apiMovie.js';
import { ref } from 'vue';
import Genre from '../components/UI/Genre.vue';
import Loader from '../../components/UI/Loader.vue'

const route = useRoute();
let movieSelect = ref({});
let isLoading = ref(true);

const getMovie = async () => {
  try {
    const { id } = route.params;
    movieSelect.value = await getInfoMovie(id);

    console.log(movieSelect);
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
  backgroundImage: `url(${BASE_URL_IMG}${movieSelect.backdrop_path})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  minHeight: '100vh',
  maxHeight: '100vh',
  backgroundColor: 'rgba(0, 0, 0, .2)',
  backgroundBlendMode: 'overlay'
}" v-if="!isLoading"
 class="max-w-full flex pl-2 items-center gap-2">
    <div  class="flex flex-col gap-5 pl-5">
        <RouterLink to="/movies" class="border-2 border-red-900 hover:bg-red-900 font-bold w-20 rounded-md text-center text-white">Regresar</RouterLink>
      <h2 class="text-white text-8xl font-bold">{{ movieSelect.title }}</h2>
      <div class="pl-2 flex gap-5">
        <button class="capitalize bg-red-500 text-white font-bold pl-2 pr-2 rounded-md">play now</button>
      </div>
      <div class="pl-2">
        <span class="font-bold text-white text-xl">{{ movieSelect.release_date ? movieSelect.release_date.slice(0,4) : "" }}</span>
      </div>
      <div class="flex gap-3 pl-2">
        <Genre v-for="genre in movieSelect.genres" :key="genre.id" :name="genre.name"></Genre>
      </div>
      <div class="descripcion contenedor max-w-[600px] pl-2 max-h-[130px] overflow-auto">
        <p class="w-full text-white font-light">{{ movieSelect.overview ? movieSelect.overview : "Sin descripcion" }}</p>
      </div>
      <div class="flex flex-col gap-1 pl-2 text-white font-semibold">
        <span class="">Actores</span>
        <div class="flex gap-5 font-light">
          <span v-for="actor in movieSelect.actors" :key="actor.id">{{ actor.name }}</span>
        </div>
        <span>Puplaridad: {{ movieSelect.popularity }}</span>
      </div>
    </div>

  </div>
  <Loader v-else-if="isLoading == true" ></Loader>
</template>

<style >


</style>
