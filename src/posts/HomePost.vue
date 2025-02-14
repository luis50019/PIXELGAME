<script setup>
  import { getPost } from '../api/apiPost';
  import Posts from './components/layout/Posts.vue';
  import Footer from '../components/Layout/Footer.vue'
  import { ref } from 'vue';
  import Loader from '../components/UI/Loader.vue';

  let allPost = ref([]);
  let isLoading = ref(true);

  const getData =async ()=>{
    try{
      allPost.value = await getPost();
    }catch(e){
      console.log(e)
    }finally{
      isLoading.value = false;
    }
  }
  getData();

</script>
<template class="bg-[#000]">
  <Loader v-if="isLoading" ></Loader>
  <div v-else class="w-[full] min-h-[258rem] lg:min-h-[108rem] bg-[#010924]">
    <Posts :posts="allPost"></Posts>
  </div>
  <Footer v-if="!isLoading"></Footer>
</template>

<style>

</style>