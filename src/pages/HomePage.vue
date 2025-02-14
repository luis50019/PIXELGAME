<script setup>
import HeaderComp from "../components/Layout/HeaderComp.vue";
import CardGame from "../components/Cards/CardGame.vue";
import Footer from "../components/Layout/Footer.vue";
import Loader from "../components/UI/Loader.vue";
import { getAllGames, getGametop } from "../api/api";
import { ref } from "vue";

const data = ref({});
const allGames = ref([]);
const isLoading = ref(true)

const getData = async () => {
  try {
    const id = 2;
    const res = await getGametop();
    const resAllGame = await getAllGames();

    console.log(resAllGame);
    isLoading.value=false;
    allGames.value = resAllGame;
    data.value = res[id] || null;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

getData();
</script>

<template>
  <Loader v-if="isLoading" ></Loader>
  <div v-else class="w-full min-h-[80vh]">
    <HeaderComp :infoGame="data" />
    <div className="bg-gradient-to-b from-[#034b03] to-15%-[#ccdfca] rounded-xl overflow-hidden shadow-2xl mx-auto mt-8 md:mt-12 lg:mt-20 w-[90%] md:w-[85%] lg:w-3/4">
  <div className="flex flex-col lg:flex-row">
    <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">Featured Game</h2>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#eea405] mb-2 md:mb-4">
        PUBG: BATTLEGROUNDS
      </h3>
      <p className="text-white text-sm md:text-base mb-4 md:mb-6">
        Land on strategic locations, loot weapons and supplies, and survive
        to become the last team standing across various, diverse
        Battlegrounds. Squad up and join the Battlegrounds for the original
        Battle Royale experience that only PUBG: BATTLEGROUNDS can offer.
      </p>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300 transform hover:scale-105 self-start text-sm md:text-base">
        ¡Play now!
      </button>
    </div>
    <div className="w-full lg:w-1/2 h-64 lg:h-auto">
      <img
        src="https://www.techspot.com/images2/news/bigimage/2021/03/2021-03-31-image-17.jpg"
        alt="Juego Destacado"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
    <div class="w-[98vw] m-auto mt-24 flex flex-col items-center gap-15 mb-5">
      <span class="text-5xl lg:text-7xl font-bold mt-5 text-[#05c005]">Games top</span>
      <div
        v-if="allGames.length > 0"
        class="w-[90vw] mt-2 grid items-center place-items-center grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-5"
      >
        <CardGame v-for="game in allGames" :gameInfo="game" :key="game.id" />
      </div>
      <div v-else>
        <p>No games available.</p>
      </div>
    </div>
  </div>
  <Footer v-if="!isLoading"></Footer>
</template>

<style lang=""></style>
