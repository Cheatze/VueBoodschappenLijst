<script setup>
//import HelloWorld from './components/HelloWorld.vue'
import {ref, reactive} from 'vue';

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
    <table>
        <tr>
            <th>Product</th>
            <th>Prijs</th>
            <th>Hoeveelheid</th>
            <th>Subtotaal</th>
        </tr>
        <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>€{{ product.price.toFixed(2) }}</td>
            <td>
                <input
                    type="number"
                    v-model.number="product.quantity"
                    @input="updateQuantity(product.id, product.quantity)"
                    min="0"
                />
            </td>
            <td>€{{ (product.price * product.quantity).toFixed(2) }}</td>
        </tr>
        <tr>
            <td colspan="3"><strong>Totaal</strong></td>
            <td>
                <strong>
                    €{{ products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2) }}
                </strong>
            </td>
        </tr>
    </table>
</template>
