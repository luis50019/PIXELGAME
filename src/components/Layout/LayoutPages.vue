<script setup>
import { RouterView } from "vue-router";
import Nav from "./Nav.vue";
</script>

<template>
  <Nav></Nav>
  <div class="h-auto min-w-[95vw]">
    <RouterView></RouterView>
    
  </div>
</template>

<style scoped></style>
