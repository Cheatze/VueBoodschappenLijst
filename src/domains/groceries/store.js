//state
import {reactive, computed} from 'vue';

const state = reactive({
    products: [
        {id: 1, name: 'Rice', price: 1.0, quantity: 1},
        {id: 2, name: 'Broccoli', price: 0.99, quantity: 0},
        {id: 3, name: 'Cookies', price: 1.2, quantity: 0},
        {id: 4, name: 'Nuts', price: 2.99, quantity: 0},
    ],
});
//getters
export const getAllProducts = computed(() => state.products);

//actions
export const addProduct = product => {
    const newId = state.products.length + 1;
    const newProduct = {id: newId, ...product};
    console.log('Quantity:', newProduct.quantity);
    state.products.push(newProduct);
};

export const updateProductQuantity = (productId, newQuantity) => {
    const product = state.products.find(p => p.id === productId);
    if (product) {
        product.quantity = newQuantity;
    }
};

// export const getProductById = function (productId) {
//     console.log('getProductById called with productId: ' + productId);
//     return state.products.find(p => p.id === productId);
// };

export const getProductById = productId => {
    //alert('getProductById called with productId: ' + productId);
    return state.products.find(p => p.id === productId);
};

export const editProduct = (productId, updatedProduct) => {
    const productIndex = state.products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        state.products[productIndex] = {...state.products[productIndex], ...updatedProduct};
    }
};
