<script setup>
	import { defineProps } from 'vue';
	defineProps({
		infoGame:{
			typeof:Object,
			default:()=>{}
		}
	});

</script>

<template>
  <div class="h-[40rem] imgBack flex flex-col justify-center pl-8"
	:style="{
		background:`
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 90%, #0f1016),
    url(${infoGame.background_image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		border:'none',
		position:'relative',
		boxSizing:'border-box'
	}">

	<div class="flex flex-col">
		<p class="text-7xl font-extrabold text-[#ffffff]">
			Online soon
		</p>
		<p class="text-[#635f5f] text-6xl font-bold">Build your <span class="text-[#a902f7]">team</span></p>
	</div>

	<div class="flex gap-5 bottom-0 right-15	 absolute p-0">
		<img src="../../assets/facebook.png" width="25px"  alt="icono de facebook">
		<img src="../../assets/instagram.png" width="25px"  alt="icono de instagram">
		<img src="../../assets/youtube (1).png" width="25px"  alt="icono de youtube">
	</div>

	</div>
</template>

<style scope>

</style>
