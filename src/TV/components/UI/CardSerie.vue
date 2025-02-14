<script setup>
  import { RouterLink } from 'vue-router';
  import { defineProps} from 'vue';
  import { BASE_URL_IMG } from '../../../api/utils';
  
  const props = defineProps({
    serie:{
      typeof:Object
    }
  });

</script>

<template>
  <div class="card-pelicula flex flex-col gap-3 shadow-lg">
    <div class="cont-image ">
      <img  :src="BASE_URL_IMG + serie.poster_path" alt="imagen de una pelicula">
    </div>
    <div class="cont-info flex flex-col justify-between gap-2 p-2">
      <h3 class="text-wrap text-center text-4xl max-h-24 min-h-24 font-bold text-white">{{ serie.name }}</h3>
      <p class="max-h-64 overflow-y-auto contenedor mb-10">{{ serie.overview?serie.overview:"Sin descripcion" }}</p>
      <RouterLink 
        :to="{ name: 'serie', params: { id: serie.id || null }}" 
        class="bg-[#333] h-[30px] ml-2 mb-2 cursor-pointer text-center capitalize hover:bg-[#192764] rounded-md text-white p-[4px]"
      >
        Más información
      </RouterLink>
    </div>
    
  </div>
</template>

<style scoped>
  
  .card-pelicula{
  box-sizing: content-box;
  height: 32rem;
  width: auto;
  border-radius:15px;
  background: #1F2937;
  position: relative;
  transform: scale(1);
  transition:all 1s ease-in,transform 1s ease;
}
@media (width <= 1024px) {
    .card-pelicula{
      box-sizing: content-box;
      height: 42rem;
    }
  }
.cont-image{
  min-height: 25rem;
  box-sizing: border-box;
  overflow: hidden;
}

img{
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 15px;
  position: absolute;
  z-index: 200;
  transition: all 1s ease-in;
}
.descripcion{
  padding-top: 15px;
  padding: 0px 8px;
  min-height: 16rem;
  max-height: 50%;
  overflow: auto;
}
.cont-info{
  position: absolute;
  height: 100%;
  color: transparent;
  transition: all .5s ease-in
}
.card-pelicula:hover{
  border: 1px solid #304764;
  transform: scale(1.02);
  box-shadow: .5px .2px 15px 1px #24364b;
  transition:all .5s ease-in, transform .5s ease;
}

.card-pelicula:hover > .cont-info{
  z-index: 200;
  backdrop-filter: blur(4px) brightness(50%);
  width: 100%;
  color: #fff;
  border-radius: 15px;
  transition: z-index .5s ease-in, backdrop-filter .2s ease-in, color .5s ease-in;
}
.card-pelicula:hover > .cont-image >img{
  z-index: 100;
  transition: object-fit 1s ease-in;
}


</style>
