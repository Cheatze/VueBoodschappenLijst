<script setup>
import {ref, reactive} from 'vue';
import {useRoute} from 'vue-router';

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(['addAProduct', 'updateAProduct']);

const productName = ref(props.product.name);
const productAmount = ref(props.product.quantity);
const productPrice = ref(props.product.price);

function handleSubmit() {
    if (props.product.id) {
        emit('updateAProduct', props.product.id, {
            name: productName.value,
            quantity: productAmount.value,
            price: productPrice.value,
        });
    } else {
        emit('addAProduct', productName.value, productAmount.value, productPrice.value);
    }
    alert(
        `Product ${props.product.id ? 'updated' : 'added'}: ${productName.value}, Quantity: ${productAmount.value}, Price: ${productPrice.value}`,
    );
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
        <button type="submit">Submit</button>
    </form>
</template>
