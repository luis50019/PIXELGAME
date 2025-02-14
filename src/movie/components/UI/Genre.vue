<script setup>

    defineProps({
      name:{
        typeof:String,
        default:"Username 85"
      }
    })
</script>

<template >
  <p 
    class="
      hover:scale-110
      btn-genero border-2 text-nowrap cursor-pointer capitalize text-sm rounded-lg w-auto pl-2 pr-2 border-[#fff] text-white">
    
      {{ name }}
  </p>
  

</template>

<style scoped >

</style>