<script setup>

  import { defineProps } from 'vue';
  import { linkIcon } from '../icons/linkIconos.js';
  defineProps({
    gameInfo:{
      typeof: Object,
      default: () => {}
    }
  })

  const iconoPrueba ="PC";

</script>

<template> 

  <div class="text-[#ddd] h-[450px] pb-5 w-[300px] bg-[#181a24] rounded-lg shadow-lg flex flex-col justify-center">
    <img :src="gameInfo.background_image" class="imgGame" alt="">
    <div class="h-52 pl-2">
      <span class="text-xl font-bold">{{ gameInfo.name }}</span>
    </div>
    <div class="w-full flex">
  <img 
    v-for="(icono, index) in gameInfo.platforms" 
    :key="index" 
    :src="linkIcon[iconoPrueba]" 
    width="20px" 
    height="20px"
  >
</div>

  </div>
 </template>

<style>
  .imgGame{
    min-width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
</style>

