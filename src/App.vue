<script setup>
import router from './router/index.js';
</script>

<template>
    <div>
        <h1>Boodschappen</h1>
        <RouterLink to="/overview">Overview</RouterLink>
        <br />
        <RouterLink to="/create">Create</RouterLink>
        <br />
        <RouterView />
    </div>
</template>
