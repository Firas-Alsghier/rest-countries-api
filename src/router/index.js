import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/homePage";
import CardDetail from "../views/cardDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },

  {
    path: "/country-detail",
    name: "card-detail",
    component: CardDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
