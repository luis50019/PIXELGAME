<script setup>
import { ref } from "vue";
import { getAllSeries, getInfoSerie, getListGenres } from "../../api/apiTv.js";
import Footer from '../../components/Layout/Footer.vue'
import SeriesTv from "../components/layout/SeriesTv.vue";
import SerieTop from "../components/layout/SerieTop.vue";
import Genres from "../components/layout/Genres.vue";
import Loader from "../../components/UI/Loader.vue";

let allSeries = ref([]);
let serieTop = ref({});
let genresTv = ref([]);
let page = ref(1);
let isLoading = ref(true);

const getData = async (indexPage = 1) => {
  try {
    allSeries.value = await getAllSeries(indexPage);
    serieTop.value = await getInfoSerie();
    genresTv.value = await getListGenres();
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
getData();
const changePage = async (newPage) => {
  try {
    isLoading.value = true;
    allSeries.value = await getAllSeries(newPage);
    page.value = newPage;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="max-w-full mb-5">
    <Loader v-if="isLoading"></Loader>
    <div v-else class="max-w-full">
      <SerieTop :serie="serieTop"></SerieTop>
      <Genres :genres="genresTv"></Genres>
      <div class="w-11/12 m-auto flex gap-5 pt-5">
        <button
          :disabled="page <= 1 ? true : false"
          @click="changePage(page - 1)"
          class="text-[#020424] border-2 font-bold rounded-md pl-3 pr-3 capitalize hover:bg-sky-700"
        >
          {{ "<" }}
        </button>
        <button
          @click="changePage(page + 1)"
          class="text-[#020424] border-2 font-bold rounded-md pl-3 pr-3 capitalize hover:bg-sky-700"
        >
          {{ ">" }}
        </button>
        <p class="ml-3 text-[#020424] font-bold">pagina {{ page }}</p>
      </div>
      <SeriesTv :series="allSeries"></SeriesTv>
    </div>
    
  </div>
  <Footer v-if="!isLoading"></Footer>
</template>

<style></style>
