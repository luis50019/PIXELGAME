<script setup>

  import { defineProps } from 'vue';

  defineProps({
    gameInfo:{
      typeof: Object,
      default: () => {}
    }
  })

  

</script>

<template> 

  <div class="text-[#ddd] h-14 min-w-15">
    <div>
      <span>{{ gameInfo.name }}</span>
    </div>
  </div>
 </template>

<style></style>

