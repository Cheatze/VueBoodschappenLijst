<script setup>
import {ref, reactive} from 'vue';
import {useRoute} from 'vue-router';
import {getProductById, editProduct} from '../store';
import GroceriesForm from './../components/GroceriesForm.vue';

const $route = useRoute();
const productId = parseInt($route.params.id);
const product = reactive(getProductById(productId));
console.log(`Editing product with ID:` + $route.params.id);
//console.log(`Editing product with ID: ${$route.params.id}`);
//const product = getProductById(parseInt($route.params.id));
function updateAProduct(productId, product) {
    editProduct(productId, {name: product.name, quantity: product.amount, price: product.price});
}
</script>

<template>
    <h1>Edit {{ $route.params.id }} and name: {{ product.name }}</h1>
    <GroceriesForm :product="product" @updateAProduct="updateAProduct" />
</template>
