import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Recommendations from '../views/Recommendations.vue';

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/recommendations',
		component: Recommendations,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
