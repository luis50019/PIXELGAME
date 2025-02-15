# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

<script setup>
  import Genero from '../UI/Genre.vue';
  import {computed, ref} from 'vue';
  const props = defineProps({
    genres:{
      typeof:Array,
      default:()=>[]
    }
  })

</script>

<template >
  <div class="w-[95%] max-w-full m-auto mt-3 flex flex-col gap-2">
    <span class="text-[#fff] text-1xl font-bold">Generos</span>
    <div class="h-24 max-w-full flex gap-3 p-3 pb-5">
      <div class="genres flex max-w-full pl-2 pr-3 h-full overflow-x-auto gap-3 pb-5 pt-3">
        <Genero v-for="item in props.genres" :key="item.id" :name="item.name"></Genero>
      </div>
    </div>
    <hr class="border-[#323346]">

  </div>
  

</template>

<style scoped>
  
.genres::-webkit-scrollbar{
  -webkit-appearance: none;
}

.genres::-webkit-scrollbar:vertical{
  width:1px;
}

.genres::-webkit-scrollbar-thumb{
  border-radius: 20px;
  border: 1px solid #02105e;
  background-color: #02105e;

}

.genres::-webkit-scrollbar-track{
  border-radius: 10px;  
}

.genres::-webkit-scrollbar:horizontal {
  height: 15px;
}
</style>


