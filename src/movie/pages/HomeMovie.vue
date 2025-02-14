<script setup>
  import { ref } from 'vue';
  import {getGenres, getMovies,getInfoMovie} from '../../api/apiMovie.js';
  import Footer from '../../components/Layout/Footer.vue';
  import MovieTop from '../components/layout/MovieTop.vue'
  import Movies from '../components/layout/Movies.vue'
  import Genres from '../../TV/components/layout/Genres.vue'
  import Loader from '../../components/UI/Loader.vue'

  let movies = ref([]);
  let genres = ref([]);
  let movieTop = ref({});
  let indexPage = ref(1);
  let isLoading = ref(true);

  const getData = async (page=1)=>{
    try{
      movies.value = await getMovies(page);
      genres.value = await getGenres();
      movieTop.value = await getInfoMovie(157336);
    }catch(error){
      console.log(error)
    }finally{
      isLoading.value = false;
    }
  }
  getData();
  const changePage =async (newPage)=> {
    try{
      isLoading.value = true;
      movies.value =await getMovies(newPage);
      indexPage.value = newPage;
    }catch(error){
      console.log(error);
    }finally{
      isLoading.value = false;
    }
  };
  

</script>
<template>
  <div class="max-w-full mb-5">
    <Loader v-if="isLoading" ></Loader>
   <div v-else class="max-w-full">
    <MovieTop  :movie="movieTop"></MovieTop>
    <Genres   :genres="genres"></Genres>
    <div   class="w-11/12 m-auto flex gap-5 pt-5">
      <button :disabled="indexPage <= 1? true:false" @click="changePage(indexPage - 1)" class="text-[#020424] border-2 font-bold rounded-md pl-3 pr-3 capitalize hover:bg-sky-700">{{ '<' }}</button>
      <button @click="changePage(indexPage + 1)" class="text-[#020424] border-2 font-bold rounded-md pl-3 pr-3 capitalize hover:bg-sky-700">{{ '>' }}</button>
      <p class="ml-3 text-[#020424] font-bold">pagina {{ indexPage }}</p>
    </div>
    <Movies   :movies="movies" ></Movies>
   </div>
  </div>
  <Footer v-if="!isLoading" ></Footer>
  
</template>


<style>

</style>