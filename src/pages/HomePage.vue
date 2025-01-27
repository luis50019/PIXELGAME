<script setup>
import HeaderComp from '../components/Layout/HeaderComp.vue';
import CardGame from '../components/Cards/CardGame.vue';
import { getAllGames, getGametop } from '../api/api';
import { ref } from 'vue';

const data = ref({}); 
const allGames = ref([]);

const getData = async () => {
  try {
    const id = 2;
    const res = await getGametop();
    const resAllGame = await getAllGames();

    console.log(resAllGame);
    allGames.value = resAllGame;
    data.value = res[id] || null;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};

getData();
</script>

<template>
  <HeaderComp :infoGame="data" />
  <div class="pl-8 w-[98vw]">
    <nav class="flex gap-5">
      <span class="nav-link">Basic information</span>
      <span class="nav-link">Game top</span>
      <span class="nav-link">Statistics</span>
      <span class="nav-link">Team</span>
    </nav>
    <div v-if="allGames.length > 0" class="w-[90vw] h-[100vh] grid grid-cols-[repeat(auto-fit,_minmax(320px,1fr))]">
      <CardGame v-for="game in allGames" :gameInfo="game" :key="game.id" />
    </div>
    <div v-else>
      <p>No games available.</p>
    </div>
  </div>
</template>



<style lang=""></style>
