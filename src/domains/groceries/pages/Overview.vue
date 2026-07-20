<script setup>
import {ref, reactive} from 'vue';
import GroceriesTable from './../components/GroceriesTable.vue';

import {getAllProducts, updateProductQuantity, deleteProduct} from '../store.js';

function updateQuantity(productId, newQuantity) {
    updateProductQuantity(productId, newQuantity);
}

function deleteAProduct(productId) {
    deleteProduct(productId);
}
</script>

<template>
    <h1>Boodschappenlijst</h1>
    <GroceriesTable :products="getAllProducts" @updateQuantity="updateQuantity" @deleteAProduct="deleteAProduct" />
</template>
