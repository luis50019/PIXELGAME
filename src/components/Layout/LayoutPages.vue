<script setup>
    import { RouterView } from 'vue-router';
    import Nav from './Nav.vue';
</script>

<template>
    <Nav></Nav>
    <div class="min-h-[90vh] max-h-[95h] min-w-[95vw%] max-w-[95vw%] mt-15 pt-5 pl-8 pr-8">
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
    
</style>