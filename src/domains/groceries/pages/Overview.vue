<script setup>
import {ref, reactive} from 'vue';
import GroceriesTable from './../components/GroceriesTable.vue';

const products = reactive([
    {id: 1, name: 'Rice', price: 1.0, quantity: 1},
    {id: 2, name: 'Broccoli', price: 0.99, quantity: 0},
    {id: 3, name: 'Cookies', price: 1.2, quantity: 0},
    {id: 4, name: 'Nuts', price: 2.99, quantity: 0},
]);

function updateQuantity(productId, newQuantity) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.quantity = newQuantity;
    }
}
</script>

<template>
    <h1>Boodschappenlijst</h1>
    <GroceriesTable :products="products" @updateQuantity="updateQuantity" />
</template>
