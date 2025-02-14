<script setup>
  import Card from '../UI/Card.vue'
  import { ref } from 'vue';
  const increment = 10;

  const props = defineProps({
    posts:{
      typeof:Array,
      default:()=>[]
    }
  })

  let start = ref(0);
  let end = ref(10);

  const next=()=>{
    start.value = start.value + increment;
    end.value = end.value +increment;
  }
  const back=()=>{
    end.value = end.value - increment;
    start.value = start.value - increment;
  }

</script>

<template>
  <div class="translate-y-25 ml-6 max-w-[92%] max-h-10 flex gap-10">
    <button :disabled="start <= 0?true:false" @click="back" class="capitalize text-white border-2 w-24 hover:bg-white hover:text-[#000] pl-3 pr-3 rounded-md font-bold text-md">atras</button>
    <button :disabled="end >=100?true:false" @click="next" class="capitalize text-white border-2 w-24 hover:bg-white hover:text-[#000] pl-3 pr-3 rounded-md font-bold text-md">siguiente</button>
  </div>
  <div class="translate-y-24 pt-6 max-w-full min-h-[122rem] lg:max-w-full grid justify-items-center lg:px-10 grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-6">
    <Card v-for="post in props.posts.slice(start,end)" :key="post.id" :post="post"></Card>
  </div>
</template>

<style>

</style>