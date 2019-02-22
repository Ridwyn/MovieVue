<template>
  <div class="OnAir">
    <h2>Airing Today</h2>
    <div class="air-content">
      <div v-for="(movie,index) in movies" :key="index" class="movie-item">
        <router-link v-bind:to="{name:'Movie', params:{movie_id:movie.id}}">
          <img v-bind:src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt>
          <h3>{{movie.name}}</h3>
          <h5>{{movie.first_air_date.substring(0,4)}}</h5>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OnAir",
  data() {
    return {
      movies: []
    };
  },
  created() {
    this.fetchToday();
  },

  methods: {
    fetchToday() {
      axios
        .get(
          "https://api.themoviedb.org/3/tv/airing_today?api_key=" +
            process.env.API_KEY +
            "&language=en-US&page=1"
        )
        .then(response => {
          console.log(response.data.results);
          this.movies = response.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.air-content {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 5rem;
  justify-content: center;
  justify-items: center;
}

hr {
  background-image: -webkit-radial-gradient(
    circle,
    rgba(210, 208, 208, 0.190914) 0%,
    rgba(210, 208, 208, 0) 90%
  );
  background-image: -o-radial-gradient(
    circle,
    rgba(210, 208, 208, 0.190914) 0%,
    rgba(210, 208, 208, 0) 90%
  );
  background-image: radial-gradient(
    circle,
    rgba(210, 208, 208, 0.190914) 0%,
    rgba(210, 208, 208, 0) 90%
  );
  border: none;
  height: 2px;
}

p {
  margin: 0;
}
a {
  text-decoration: none;
}

img {
  width: 100%;
  border-radius: 10px;
  height: auto;
  width: 100%;
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

/* At smaller screen */
@media screen and (max-width: 800px) {
  .air-content {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-gap: 2rem;
    justify-content: center;
    justify-items: center;
  }
}

/* At smaller screen */
@media screen and (max-width: 650px) {
  .air-content {
    display: grid;
    grid-template-columns: repeat(2, 150px);
    grid-gap: 2rem;
    justify-content: center;
    justify-items: center;
  }
}
</style>
