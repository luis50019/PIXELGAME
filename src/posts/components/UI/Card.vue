<script setup>
import { BASE_URL_AVATAR } from '../../../api/utils';

  defineProps({
    post:{
      typeof:Object,
      default:()=>[]
    }
  })
</script>

<template>
  <div class="bg-[#191927] flex flex-col justify-between gap-5 max-w-[18em] lg:max-w-full p-3 border-[1px] rounded-md">

    <div class="flex gap-2 justify-start">
      <img :src="BASE_URL_AVATAR+post.user.name.slice(0,2)" class="w-14 h-14 rounded-full bg-white" />

      <div class="flex flex-col justify-end text-white">
        <span class="font-light pb-1">{{ post.user.name }}</span>
        <span class="font-light text-[#7c7b7b]">{{ post.user.userName }}</span>
      </div>
    </div>

    <div class="text-white">
      <p class="w-full text-lg font-extrabold">{{ post.title }}</p>
    </div>

    <div class="max-h-40 h-40 text-white bg-[#171727] rounded-md">
      <p class="font-extralight p-3">{{ post.body }}</p>
    </div>
    <div class="w-full text-white text-right">
      <span class="text-xs">{{ post.id }}</span>
    </div>
  </div>
</template>

<style>

</style>