<template>
  <div class="Home">
    <div class="section-container">
      <h2>Coming Soon...</h2>
      <div class="contents">
        <ul class="my-slider">
          <li v-for="(movie,index) in ComingSoon" :key="index">
            <router-link v-bind:to="{name:'Movie', params:{movie_id:movie.id}}">
              <img v-bind:src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt>
              <div>
                <h6>{{movie.title}}</h6>
              </div>
              <p class="rating">
                <i class="fas fa-star"></i>
                {{movie.vote_average}}
              </p>
            </router-link>
          </li>
        </ul>
      </div>
      <span>
        <i class="fas fa-chevron-left fa-3x" id="prevBtn"></i>
      </span>
      <span>
        <i class="fas fa-chevron-right fa-3x" id="nxtBtn"></i>
      </span>
    </div>
    <hr>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      ComingSoon: []
    };
  },

  updated() {
    new tns({
      container: ".my-slider",
      prevButton: "#prevBtn",
      nextButton: "#nxtBtn",
      nav: false,
      items: 6,
      loop: false,
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      responsive: {
        360: {
          edgePadding: 10,
          gutter: 5,
          items: 2
        },
        700: {
          items: 6
        }
      }
    });
    console.log("dom updated");
  },
  created() {
    this.fetchMovies();
  },

  methods: {
    fetchMovies() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
            process.env.API_KEY +
            "&language=en-US&page=1"
        )
        .then(response => {
          console.log(response.data.results);
          response.data.results.forEach(movie => {
            this.ComingSoon.push(movie);
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

h6 {
  font-size: 14px;
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
  opacity: 1;
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
  color: #eeeaea;
}

li img {
  border: #444 1px solid;
  border-radius: 5px;
}

li:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease-in-out;
}

a {
  text-decoration: none;
}

@media screen and (max-width: 650px) {
  .home {
    z-index: 10;
  }
}
</style>
