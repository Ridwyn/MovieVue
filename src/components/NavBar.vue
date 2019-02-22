<template>
  <div>
    <div class="NavBar" id="normalNav">
      <div class="top-nav">
        <router-link v-bind:to="{name:'Home'}">
          <img v-bind:src="logo" alt>
        </router-link>

        <div>
          <form id="formSearch" class="search-form" action="#">
            <input v-model="searchText" type="search" name="search" placeholder="Search Movie...">
            <a v-on:click="loadSearch">
              <i class="fas fa-search"></i>
            </a>
          </form>
        </div>
      </div>

      <div class="nav-links bottom-nav">
        <div>
          <router-link v-bind:to="{name:'OnAir'}">
            <i class="fas fa-wifi"></i>
          </router-link>
        </div>
        <div>
          <router-link v-bind:to="{name:'Account'}">
            <i class="far fa-user"></i>
          </router-link>
        </div>
        <div>
          <router-link v-bind:to="{name:'Explore'}">
            <i class="fas fa-compass"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div v-show="show" class="NavBar" id="mobileNav">
      <div class="top-nav">
        <div id="logo" class="logo">
          <img :src="logo" alt>
        </div>
        <div>
          <form id="formSearch" class="search-form" action="#">
            <input v-model="searchText" type="search" name="search" placeholder="Search Movie...">
            <a v-on:click="loadSearch">
              <i class="fas fa-search"></i>
            </a>
          </form>
        </div>
      </div>

      <div class="nav-links bottom-nav">
        <div>
          <router-link v-bind:to="{name:'OnAir'}">
            <i class="fas fa-wifi"></i>
          </router-link>
        </div>
        <div>
          <router-link v-bind:to="{name:'Account'}">
            <i class="far fa-user"></i>
          </router-link>
        </div>
        <div>
          <router-link v-bind:to="{name:'Explore'}">
            <i class="fas fa-compass"></i>
          </router-link>
        </div>
      </div>
    </div>

    <div v-on:click="navBarToggle()" class="navBtn" id="nav-Btn">
      <i v-if="show==false" class="fas fa-bars fa-2x"></i>
      <i v-else-if="show==true" class="fas fa-times fa-2x"></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { EventBus } from "../eventbus.js";
export default {
  name: "NavBar",
  data() {
    return {
      logo: require('../assets/logo.png'),
      msg: "",
      show: false,
      searchText: null,
      searcResults: []
    };
  },
  methods: {
    navBarToggle: function() {
      if (this.show == false) {
        this.show = true;
      } else if (this.show == true) {
        this.show = false;
      }
    },
    loadSearch() {
      // check if text is empty
      if (this.searchText == null) {
        alert("Please enter a name to search");
      } else {
        // first make the axios request
        axios
          .get(
            "https://api.themoviedb.org/3/search/movie?api_key=" +
              process.env.API_KEY +
              "&query=" +
              this.searchText +
              ""
          )
          .then(response => {
            console.log(response.data.results);
            let movies = response.data.results;
            // Emit the searchresults
            EventBus.$emit("results", movies, this.searchText);
            //then move the router view to search
            this.$router.push("Search");
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mobileNav {
  display: none;
}

.NavBar {
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 100%;
  align-items: center;
  justify-items: center;
  height: 73px;
}

img {
  width: 100%;
  height: 70px;
}
.navBtn {
  display: none;
}

.top-nav {
  background-color: #2871b1;
  display: grid;
  grid-template-columns: 250px 1fr;
  align-items: center;
  justify-items: center;
  position: static;
  width: 100%;
   height: 100%;
}

.bottom-nav {
  background-color: #2871b1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  -ms-flex-pack: end;
  align-items: center;
  justify-items: center;
  position: static;
  width: 100%;
}

a {
  text-decoration: none;
}

.search-form {
  display: inline-block;
}

.search-form input {
  border: none;
  border-radius: 10px;
  width: 400px;
  height: 30px;
  padding: 0.2rem 0.7rem;
  color: #444;
}

.search-form a {
  color: #fff;
  padding: 0.3rem 0.1rem;
  font-size: 22px;
}

.nav-links a {
  color: #fff;
  font-size: 35px;
}

@media screen and (max-width: 650px) {
}

/* At smaller screen */
@media screen and (max-width: 650px) {
  #mobileNav {
    display: block;
  }

  #normalNav {
    display: none;
  }

  .navBtn {
    display: block;
    padding: 0.5rem;
  }

  .NavBar {
    background-color: none;
    display: block;
  }

  .search-form input {
    width: 15rem;
  }

  .top-nav {
    background-color: #2871b1;
    display: grid;
    grid-template-columns: 90px 1fr;
    justify-items: center;
    align-items: center;
    top: 0;
    position: fixed;
    height: 73px;
    width: 100%;
    z-index: 10;
  }

  .bottom-nav {
    background-color: #2871b1;
    bottom: 0;
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 73px;
    justify-items: center;
    align-items: center;
    width: 100%;
    z-index: 10;
  }
}
</style>
