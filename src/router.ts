import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "", component: () => import("./pages/Actors.vue") },
    { path: "/favorites", component: () => import("./pages/Favorites.vue") },
  ],
});
