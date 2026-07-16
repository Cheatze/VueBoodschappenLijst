<script setup>
import {ref, reactive} from 'vue';
import {getProductById} from '../store';

//console.log(`Editing product with ID: ${$route.params.id}`);
//const product = getProductById(parseInt($route.params.id));
</script>

<template>
    <h1>Edit {{ $route.params.id }}</h1>
    <h2></h2>
</template>
