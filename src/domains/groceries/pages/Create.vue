<script setup>
import {ref, reactive} from 'vue';
import {getAllProducts, updateProductQuantity, addProduct} from '../store.js';
import GroceriesForm from './../components/GroceriesForm.vue';

const product = reactive({
    name: '',
    amount: 0,
    price: 0,
});

function addAProduct(productName, productAmount, productPrice) {
    addProduct({name: productName, price: productPrice, quantity: productAmount});
    console.log(`Product added: ${productName}, quantity: ${productAmount}, Price: ${productPrice}`);
}
</script>

<template>
    <h1>Create</h1>
    <GroceriesForm :product="product" @addAProduct="addAProduct" />
</template>
