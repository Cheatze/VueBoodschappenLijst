<script setup>
import {ref, reactive} from 'vue';
import {getAllProducts, updateProductQuantity, addProduct} from '../store.js';
import GroceriesForm from './../components/GroceriesForm.vue';

/*const products = reactive(getAllProducts());*/

const product = reactive({
    name: '',
    amount: 0,
    price: 0,
});

function addAProduct(productName, productAmount, productPrice) {
    addProduct(productName, productAmount, productPrice);
    console.log(`Product added: ${productName}, Amount: ${productAmount}, Price: ${productPrice}`);
}
</script>

<template>
    <h1>Create</h1>
    <GroceriesForm :product="product" @addAProduct="addAProduct" />
</template>
