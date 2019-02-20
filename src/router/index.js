import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Movie from "@/components/Movie";

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
    }
  ]
});
