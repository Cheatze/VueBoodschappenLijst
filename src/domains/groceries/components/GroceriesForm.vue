<script setup>
import {ref, reactive} from 'vue';

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(['addAProduct']);

const productName = ref(props.product.name);
const productAmount = ref(props.product.amount);
const productPrice = ref(props.product.price);

function handleSubmit() {
    emit('addAProduct', productName.value, productAmount.value, productPrice.value);
    alert(`Product added: ${productName.value}, Amount: ${productAmount.value}, Price: ${productPrice.value}`);
}
</script>
<template>
    <form @submit.prevent="handleSubmit">
        <label for="productName">Product Name:</label>
        <input v-model="productName" id="productName" type="text" placeholder="Add a product" />
        <label for="productAmount">How many:</label>
        <input v-model="productAmount" id="productAmount" type="number" placeholder="How many" />
        <label for="productPrice">Price:</label>
        <input v-model="productPrice" id="productPrice" type="number" placeholder="Price" />
        <button type="submit">Add Product</button>
    </form>
</template>
