<template>
  <div class="Movie"></div>
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
        vote: null
      },
      genres: [],
      production_companies: []
    };
  },

  created() {
    this.fetchSingleMovie();
  },

  methods: {
    fetchSingleMovie() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            this.$route.params.movie_id +
            "?api_key="+process.env.API_KEY+"&language=en-US"
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

p {
  margin: 0;
}

h6 {
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
}

#prevBtn {
  position: absolute;
  left: 0;
  top: 50%;
}

#nxtBtn {
  position: absolute;
  right: 0;
  top: 50%;
}

img {
  width: 100%;
  height: 100%;
}

.my-slider {
  opacity: 0;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

li {
  padding-left: 25px;
  list-style-type: none;
  position: relative;
}
.rating {
  background-color: #000000cc;
  padding: 4px;
  position: absolute;
  top: 5%;
  font-size: 12px;
}

li img {
  border: #444 1px solid;
  border-radius: 5px;
}

li:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease-in-out;
}

@media screen and (max-width: 650px) {
  .home {
    z-index: 10;
  }
}
</style>
