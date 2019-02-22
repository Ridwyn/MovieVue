<template>
  <div class="Home">
    <!-- Upcoming -->
    <div class="section-container">
      <h2>Coming Soon...</h2>
      <div class="contents">
        <ul id="upcoming" class="my-slider">
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
        <i class="fas fa-chevron-left fa-3x prevBtn" id="prev-upcoming"></i>
      </span>
      <span>
        <i class="fas fa-chevron-right fa-3x nxtBtn" id="nxt-upcoming"></i>
      </span>
    </div>
    <hr>
    <!-- Top Rated -->
    <div class="section-container">
      <h2>Top Rated</h2>
      <div class="contents">
        <ul id="top-rated" class="my-slider">
          <li v-for="(movie,index) in TopRated" :key="index">
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
        <i class="fas fa-chevron-left fa-3x prevBtn" id="prev-rated"></i>
      </span>
      <span>
        <i class="fas fa-chevron-right fa-3x nxtBtn" id="nxt-rated"></i>
      </span>
    </div>
    <hr>
    <!-- Popular section -->
    <div class="section-container">
      <h2>Popular</h2>
      <div class="contents">
        <ul id="popular" class="my-slider">
          <li v-for="(movie,index) in Popular" :key="index">
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
        <i class="fas fa-chevron-left fa-3x prevBtn" id="prev-popular"></i>
      </span>
      <span>
        <i class="fas fa-chevron-right fa-3x nxtBtn" id="nxt-popular"></i>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      ComingSoon: [],
      TopRated: [],
      Popular: [],
      Latest: []
    };
  },

  updated() {
    new tns({
      container: "#upcoming",
      prevButton: "#prev-upcoming",
      nextButton: "#nxt-upcoming",
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

    // slider fro top rated
    new tns({
      container: "#top-rated",
      prevButton: "#prev-rated",
      nextButton: "#nxt-rated",
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

    // slider for popular
    new tns({
      container: "#popular",
      prevButton: "#prev-popular",
      nextButton: "#nxt-popular",
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
  },
  created() {
    this.fetchComingSoon();
    this.fetchTopRated();
    this.fetchPopular();
  },

  methods: {
    fetchComingSoon() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
            process.env.API_KEY +
            "&language=en-US&page=1"
        )
        .then(response => {
          this.ComingSoon = response.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // Fetching top rated
    fetchTopRated() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
            process.env.API_KEY +
            "&language=en-US&page=1"
        )
        .then(response => {
          this.TopRated = response.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    },

    // Fetching Popular
    fetchPopular() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=" +
            process.env.API_KEY +
            "&language=en-US&page=1"
        )
        .then(response => {
          this.Popular = response.data.results;
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

.prevBtn {
  position: absolute;
  left: 2%;
  top: 50%;
}

.nxtBtn {
  position: absolute;
  right: 2%;
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
