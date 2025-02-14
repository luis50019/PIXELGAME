<script setup>
  import CardSerie from "../UI/CardSerie.vue";
  defineProps({
    series:{
      typeof:Array,
      default:[]
    }
  })

</script>
  
<template>
  <div class="m-auto mt-5 min-h-[100vh] w-11/12 max-w-[100vw] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
    
    <CardSerie v-for="serie in series" :id="serie.id" :key="serie.id"
      :serie="serie"
    ></CardSerie>
    
    
  </div>
</template>

<style>

</style>