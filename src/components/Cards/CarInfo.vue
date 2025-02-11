<script>
import { info } from 'autoprefixer';

  defineProps({
    title:{
      typeof:String,
      default:()=>{}
    },
    info:{
      typeof:String,
      default:()=>{}
    }
  })
</script>
<template>
  <div class="">
    <h1>{{ title }}</h1>
    <span>{{ info }}</span>
  </div>

</template>
<style></style>
