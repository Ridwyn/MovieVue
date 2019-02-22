<template>
  <div class="Movie">
    <div class="header">
      <img
        class="backdrop"
        v-bind:src="'https://image.tmdb.org/t/p/original'+ movie.backdropimg"
        alt
      >
      <div class="black"></div>
      <div class="controls">
        <router-link v-bind:to="{name:'Home'}">
          <i class="fas fa-chevron-left fa-2x"></i>
        </router-link>
        <i v-on:click="showLinks" class="fas fa-share fa-2x" id="shareBtn"></i>
      </div>
      <div v-bind:style="styleHide" class="share-links" id="shareLinks">
        <i class="fas fa-envelope fa-2x"></i>
        <i class="fab fa-facebook fa-2x"></i>
        <i class="fab fa-instagram fa-2x"></i>
        <i class="fab fa-twitter fa-2x"></i>
      </div>
      <div class="movie-content">
        <div class="details">
          <img v-bind:src="'https://image.tmdb.org/t/p/original'+ movie.posterimg" alt>
          <div class="details-info">
            <h2>{{movie.title}}</h2>
            <h5>
              <i v-for="(n,index) in parseInt(movie.vote)" v-bind:key="index" class="fas fa-star"></i>
              {{movie.vote}}
            </h5>
            <h5>{{movie.status}} | {{movie.release_date}} | {{movie.language}}</h5>
            <div class="genre">
              <h6 v-for="(genre,index) in genres" :key="index">{{genre.name}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="movie-info">
      <div class="summary">
        <h3 v-if="movie.tagline!=''">{{movie.tagline}}</h3>
        <h3 v-else>Summary</h3>
        <p>{{movie.overview}}</p>
      </div>

      <div class="section">
        <h3 v-if="production_companies.length>=1">Production Companies</h3>
        <div class="companies">
          <div v-for="(company,index) in production_companies" :key="index" class="company">
            <img
              v-if="company.logo_path!=null"
              v-bind:src="'https://image.tmdb.org/t/p/original'+company.logo_path"
              alt
            >
            <h6>{{company.name}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Movie",
  data() {
    return {
      movie: {
        backdropimg: null,
        posterimg: null,
        title: null,
        overview: null,
        runtime: null,
        language: null,
        vote: null,
        status: null,
        release_date: null,
        tagline: null
      },
      genres: [],
      production_companies: [],

      show: false,
      styleHide: {
        opacity: "0",
        transition: "all 0.7s ease-in-out",
        visibility: "visible"
      }
    };
  },

  mounted() {},

  created() {
    this.fetchSingleMovie();
  },

  methods: {
    fetchSingleMovie() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            this.$route.params.movie_id +
            "?api_key=" +
            process.env.API_KEY +
            "&language=en-US"
        )
        .then(response => {
          console.log(response.data);
          let movie = response.data;
          this.movie.backdropimg = movie.backdrop_path;
          this.movie.posterimg = movie.poster_path;
          this.movie.title = movie.title;
          this.movie.overview = movie.overview;
          this.movie.runtime = movie.runtime;
          this.movie.language = movie.original_language;
          this.movie.vote = movie.vote_average;
          this.movie.status = movie.status;
          this.movie.release_date = movie.release_date;
          this.movie.tagline = movie.tagline;
          // loop over genreto store
          movie.genres.forEach(genre => {
            this.genres.push(genre);
          });
          // Loop over companies and stro in array
          movie.production_companies.forEach(company => {
            this.production_companies.push(company);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },

    showLinks() {
      if (this.show == false) {
        this.styleHide.opacity = 1;
        this.styleHide.visibility = "visible";
        this.show = true;
      } else if (this.show == true) {
        this.styleHide.opacity = 0;
        this.styleHide.visibility = "hidden";
        this.show = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-container {
  position: relative;
  padding: 1rem 3rem;
}

.show {
  opacity: 1 !important;
}

.header {
  position: relative;
  height: 100vh;
}

.share-links {
  display: grid;
  position: absolute;
  padding: 2rem 4rem;
  top: 20%;
  right: 0;
  opacity: 0;
  transition: all 0.7 ease-in-out;
}

.fa-star {
  color: #db9614;
}

.share-links i {
  padding: 2rem 0rem;
  cursor: pointer;
}

.controls i {
  cursor: pointer;
}

.movie-content {
  padding-left: 5rem;
  position: absolute;
  bottom: 5%;
  width: 100%;
}

.movie-content img {
  width: 100%;
}

.black {
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.45);
  height: 100%;
  width: 100%;
}

.backdrop {
  width: 100%;
  height: 100%;
}

p {
  margin: 0;
  font-size: 20px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  margin: 0;
}

h2 {
  font-size: 35px;
}

h3 {
  font-size: 25px;
}
h5 {
  font-size: 20px;
}
h6 {
  font-size: 18px;
}

i {
  color: #fff;
}
.genre {
  display: inline-flex;
  margin-bottom: 0.6rem;
}

.genre h6 {
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  margin-bottom: 0.4rem;
  color: #eeececc7;
  font-size: 14px;
}

.genre h6:not(:last-child) {
  border-right: #eeececc7 2px solid;
}

img {
  width: 100%;
}

.my-slider {
  opacity: 0;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

.controls {
  display: grid;
  grid-template-columns: 40px 40px;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: absolute;
  top: 5%;
  width: 100%;
  padding: 2rem 4rem;
}

.details {
  align-items: center;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 120px 1fr;
  position: relative;
}

/* CSS for movie information summary and cast */
.movie-info {
  margin: 1rem auto;
  width: 80%;
}

.summary {
  margin: 0;
}

.section {
  margin: 1rem 0rem;
  text-align: center;
}

.companies {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.5rem 4rem;
}
.company {
  width: 200px;
  margin: 5px;
  border: #444444 2px solid;
  background-color: #ffff;
  border-radius: 5px;
  padding: 0.5rem;
}

.company h6 {
  margin-top: 1rem;
  color: #444 !important;
}

.company img {
  height: 100px;
}

.rating {
  background-color: #000000cc;
  padding: 4px;
  position: absolute;
  top: 5%;
  font-size: 12px;
}

@media screen and (max-width: 750px) {
  .header {
    height: 60vh;
  }

  .share-links {
    display: inline-block;
  }

  .share-links i {
    padding: 0rem 1rem;
  }
}
</style>
