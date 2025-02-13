<script setup>

  import { defineProps } from 'vue';
  import { linkIcon } from '../icons/linkIconos.js';  

  const props = defineProps({
    gameInfo:{
      typeof: Object,
      default: () => {}
    }
  })

</script>

<template> 

  <div class="text-[#03183d] h-[45rem] pb-5 w-[300px] bg-transparent rounded-lg shadow-lg flex flex-col">
    <img :src="gameInfo.background_image" class="imgGame" alt="">
    <div class="h-32 pl-2 mt-2">
      <span class="text-4xl font-bold">{{ gameInfo.name }}</span>
    </div>
    <div class="flex flex-wrap flex-col pl-5 gap-5">
      <span class="text-xl font-light"> 
        platforms</span>
      <div class="flex items-center flex-wrap gap-5 min-w-[95%] max-w-[95%] h-16 overflow-x-auto basis-24">
        <span v-for="plat in gameInfo.parent_platforms" class="text-[#000] text-md">
          <img :src="linkIcon[plat.platform.name]" class="w-7 object-cover"/>
        </span>
      </div>
    </div>
    <button className=" m-auto mt-5 w-[90%] px-4 py-1 capitalize bg-[#008000] text-white rounded-full hover:bg-[#008025] transition-colors duration-300">
      details
    </button>
  </div>
 </template>

<style>
  .imgGame{
    min-width: 100%;
    min-height: 25rem;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
</style>

