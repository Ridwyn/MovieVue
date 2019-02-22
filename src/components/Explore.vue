<template>
  <div class="Account">
    <h2>Explore More...</h2>
    <div class="filter-list">
      <select v-model="selectedOptions">
        <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
      </select>
      <input v-model="genreText" type="text" name="text" placeholder="Genres">
      <input v-model="keywordText" type="text" name="text" placeholder="Keywords">
      <select v-model="date">
        <option v-for="y in year" v-bind:value="y.year">{{y.year}}</option>
      </select>
    </div>
    <div class="exploreBtn">
      <a v-on:click="fetchExplore">Search</a>
    </div>
    <div v-if="genreText!=''">
      <h4>
        Searches for {{msg}}
        <span v-show="date!=''">from {{date}}</span>
      </h4>
    </div>
    <h2 v-show="explore.length==0">Not Found try a general selection</h2>
    <div v-if="explore.length>=1" class="explore-content">
      <div v-for="(movie,index) in explore" :key="index" class="movie-item">
        <router-link v-bind:to="{name:'Movie', params:{movie_id:movie.id}}">
          <img v-bind:src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt>
          <h3>{{movie.title}}</h3>
          <h5>{{movie.vote_average}}</h5>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Explore",
  data() {
    return {
      genres: [
        {
          id: 28,
          name: "Action"
        },
        {
          id: 12,
          name: "Adventure"
        },
        {
          id: 16,
          name: "Animation"
        },
        {
          id: 35,
          name: "Comedy"
        },
        {
          id: 80,
          name: "Crime"
        },
        {
          id: 99,
          name: "Documentary"
        },
        {
          id: 18,
          name: "Drama"
        },
        {
          id: 10751,
          name: "Family"
        },
        {
          id: 14,
          name: "Fantasy"
        },
        {
          id: 36,
          name: "History"
        },
        {
          id: 27,
          name: "Horror"
        },
        {
          id: 10402,
          name: "Music"
        },
        {
          id: 9648,
          name: "Mystery"
        },
        {
          id: 10749,
          name: "Romance"
        },
        {
          id: 878,
          name: "Science Fiction"
        },
        {
          id: 10770,
          name: "TV Movie"
        },
        {
          id: 53,
          name: "Thriller"
        },
        {
          id: 10752,
          name: "War"
        },
        {
          id: 37,
          name: "Western"
        }
      ],

      options: [
        { text: "Popular Descending", value: "popularity.desc" },
        { text: "Popular Ascending", value: "popularity.asc" },
        { text: "Vote Descending", value: "vote_average.desc" },
        { text: "Vote Ascending", value: "vote_average.acs" },
        { text: "Vote Count Descending", value: "vote_count.desc" },
        { text: "Vote Count Ascending", value: "vote_count.asc" }
      ],
      selectedOptions: "",
      explore: [],
      keywordText: "",
      genreText: "",
      msg: "",
      date: "",
      year: []
    };
  },

  created() {
    this.fetchDiscover();
    let i = 1960;
    for (i = 1960; i <= 2019; i++) {
      this.year.push({ year: i });
    }
    console.log(this.year);
  },

  methods: {
    fetchDiscover() {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            process.env.API_KEY
          }&sort_by=popularity.desc`
        )
        .then(response => {
          this.explore = response.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    },

    fetchExplore() {
      let genreSearch = [];
      this.genres.forEach(genre => {
        let name = genre.name;
        if (
          name.toUpperCase().includes(
            this.genreText
              .toUpperCase()
              .split(" ")
              .join("")
          )
        ) {
          genreSearch.push(genre);
        }
      });

      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            process.env.API_KEY
          }&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${
            genreSearch[0].id
          }&with_keywords${this.keywordText}&primary_release_year=${
            this.date
          }&sort_by=${this.selectedOptions}`
        )
        .then(response => {
          this.explore = response.data.results;
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
.exploreBtn {
  width: 15%;
  margin: 1rem auto;
  text-align: center;
  height: 50px;
  background-color: #2871b1;
  color: #fff;
  margin-top: 1rem;
  padding: 0.7rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
}

.filter-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  justify-items: center;
  margin: auto;
  width: 80%;
}

.filter-list select,
input {
  height: 40px;
  border-radius: 10px;
  padding: 0.5rem;
}

.explore-content {
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
  .exploreBtn {
    width: 25%;
  }
  .explore-content {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-gap: 2rem;
    justify-content: center;
    justify-items: center;
  }
  .filter-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    justify-items: stretch;
    margin: 0rem auto;
    width: 50%;
  }
}

/* At smaller screen */
@media screen and (max-width: 650px) {
  .exploreBtn {
    width: 40%;
  }
  .explore-content {
    display: grid;
    grid-template-columns: repeat(2, 150px);
    grid-gap: 2rem;
    justify-content: center;
    justify-items: center;
  }

  .filter-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5em;
    justify-items: stretch;
    margin: 0rem auto;
  }
}
</style>
