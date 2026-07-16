<script setup>
import {ref, reactive} from 'vue';

const props = defineProps({
    products: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(['updateQuantity']);
</script>

<template>
    <table>
        <tr>
            <th>Product</th>
            <th>Prijs</th>
            <th>Hoeveelheid</th>
            <th>Subtotaal</th>
        </tr>
        <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>€{{ product.price }}</td>
            <td>
                <input
                    type="number"
                    v-model.number="product.quantity"
                    @input="emit('updateQuantity', product.id, product.quantity)"
                    min="0"
                />
            </td>
            <td>€{{ product.price * product.quantity }}</td>
            <td><RouterLink :to="`/edit/${product.id}`">Edit</RouterLink></td>
        </tr>
        <tr>
            <td colspan="3"><strong>Totaal</strong></td>
            <td>
                <strong>€{{ products.reduce((total, product) => total + product.price * product.quantity, 0) }}</strong>
            </td>
        </tr>
    </table>
</template>
