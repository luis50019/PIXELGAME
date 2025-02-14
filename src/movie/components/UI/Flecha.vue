<script setup>
  const props = defineProps({
    id:{
      typeof:Number
    }
  })
  const handler =()=>{
    window.scrollTo({
      top:650,
      behavior:'smooth'
    })
  }

</script>

 <template>
  <button @click="handler" class="cursor-pointer right-1/2 top-[85vh] z-20 w-16 absolute ">
    <img src="../../assets/scroll-down.png" alt="">
  </button>
</template>


<style scoped>
  button {
  animation: select 2s infinite alternate;
}

@keyframes select {
  0% {
    transform: translateY(15px); 
  }
  100% {
    transform: translateY(-5px); 
  }
}

</style>
