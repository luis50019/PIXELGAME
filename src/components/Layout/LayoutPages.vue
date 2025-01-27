<script setup>
    import { RouterView } from 'vue-router';
    import Nav from './Nav.vue';
</script>

<template>
    <Nav></Nav>
    <div class="min-h-[100vh] max-h-[200vh] min-w-[95vw] max-w-[100vw]">
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
    
</style>