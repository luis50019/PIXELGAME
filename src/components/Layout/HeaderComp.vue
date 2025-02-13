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
  <div class="min-h-[41rem] lg:min-h-[42rem]  imgBack flex flex-col justify-center pl-8"
	:style="{
		background:`
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 99%, #eee),
    url(${infoGame.background_image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		border:'none',
		position:'relative',
		boxSizing:'border-box'
	}">

	<div class="flex flex-col">
		<p class="text-5xl lg:text-9xl font-extrabold text-[#ffffff]">
			Online soon
		</p>
		<p class="text-[#56f156] text-4xl lg:text-8xl font-bold text-animation">Build your team</p>
	</div>

	<div class="flex gap-5 bottom-5 right-15 absolute p-0">
		<img src="../../assets/facebook.png" width="25px"  alt="icono de facebook">
		<img src="../../assets/instagram.png" width="25px"  alt="icono de instagram">
		<img src="../../assets/youtube (1).png" width="25px"  alt="icono de youtube">
	</div>

	</div>
</template>

<style scope>
	.text-animation{
		width: 20ch;
		overflow: hidden;
		text-wrap: nowrap;
		animation: typing 2s steps(20) infinite alternate-reverse;
	}

	@keyframes typing {
		from{
			width: 0ch;
		}
	}
</style>