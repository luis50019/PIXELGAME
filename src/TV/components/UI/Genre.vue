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
      btn-genero text-nowrap font-bold cursor-pointer capitalize text-sm rounded-lg w-auto px-2  bg-[#02105e] text-[#fff]">
    
      {{ name }}
  </p>
  

</template>

<style scoped >

</style>