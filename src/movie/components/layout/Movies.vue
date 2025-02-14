<script setup>
  import CardMovie from "../UI/CardMovie.vue";
  defineProps({
    movies:{
      typeof:Array,
      default:[]
    }
  })

</script>
  
<template>
  <div class="m-auto mt-5 min-h-[100vh] w-11/12 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
    
    <CardMovie v-for="movie in movies" :id="movie.id" :key="movie.id"
      :movie="movie"
    ></CardMovie>
    
    
  </div>
</template>

<style>

</style>