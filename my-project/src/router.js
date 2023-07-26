import usersPage from "./views/usersPage.vue";
import photosPage from "./views/photosPage.vue";
import albumsPage from "./views/albumsPage.vue";
import postsPage from "./views/postsPage.vue";
import todosPage from "./views/todosPage.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: usersPage, name: "users" },
  { path: "/photos/:id", component: photosPage, name: "photos" },
  { path: "/albums/:id", component: albumsPage, name: "albums" },
  { path: "/posts/:id", component: postsPage, name: "posts" },
  { path: "/todos/:id", component: todosPage, name: "todos" },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
