//import {createWebHistory, createRouter} from 'vue-router';

import create from './pages/Create.vue';
import edit from './pages/Edit.vue';
import overview from './pages/Overview.vue';

const routes = [
    {path: '/overview', component: overview},
    {path: '/create', component: create},
    {path: '/edit/:id', component: edit},
];

export {routes};

//This is somwhere else
// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// });

// export default router;
