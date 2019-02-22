import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Movie from "@/components/Movie";
import Search from "@/components/Search";
import OnAir from "@/components/OnAir";
import Account from "@/components/Account";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },

    {
      path: "/movie/:movie_id",
      name: "Movie",
      component: Movie
    },

    {
      path: "/airing/today",
      name: "OnAir",
      component: OnAir
    },
    {
      path: "/account",
      name: "Account",
      component: Account
    },
    {
      path: "/search/",
      name: "Search",
      component: Search
    }
  ]
});
