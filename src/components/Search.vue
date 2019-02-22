<template>
  <div>
    <div class="Search">
      <h2>
        Search Results for
        <span class="input-text">{{text}}</span>
      </h2>
      <div class="search-content">
        <div v-for="(result,index) in results" :key="index" class="movie-item">
          <router-link v-bind:to="{name:'Movie', params:{movie_id:result.id}}">
            <img v-bind:src="'https://image.tmdb.org/t/p/original'+ result.poster_path" alt>
            <h3>{{result.title}}</h3>
            <h5>{{result.vote_average}}</h5>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { EventBus } from "../eventbus.js";

export default {
  name: "Search",
  data() {
    return {
      text: "",
      results: []
    };
  },

  created() {
    EventBus.$on("results", (movies, searchText) => {
      console.log(movies, "in search");
      this.results = movies;
      this.text = searchText;
    });
    console.log();
  },

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-content {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 5rem;
  justify-content: center;
  justify-items: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #fff;
  font-weight: 600;
  margin: 0;
  text-align: center;
}
a {
  text-decoration: none !important;
}

h3 {
  font-size: 20px;
}

h5 {
  font-size: 18px;
}

h2 {
  font-size: 35px;
  margin-bottom: 2rem;
}

.input-text {
  color: #2871b1;
}

.movie-item img {
  border-radius: 10px;
  height: auto;
  width: 100%;
}

/* At smaller screen */
@media screen and (max-width: 800px) {
  .search-content {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-gap: 2rem;
    justify-content: center;
    justify-items: center;
  }
}

/* At smaller screen */
@media screen and (max-width: 650px) {
  .search-content {
    display: grid;
    grid-template-columns: repeat(2, 150px);
    grid-gap: 2rem;
    justify-content: center;
    justify-items: center;
  }
}
</style>
