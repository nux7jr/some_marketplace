import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CardView from "@/views/CardView";
import ErrorView from "@/views/ErrorView";
import ProductView from "@/views/ProductView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/card",
    name: "card",
    component: CardView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductView,
  },
  {
    path: "/:catchAll(.*)*",
    name: "ErrorView",
    component: ErrorView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
