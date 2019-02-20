<template>
  <div>
    <div class="NavBar">
      <div class="top-nav">
        <div id="logo" class="logo">
          <img src="../assets/logo.jpg" alt>
        </div>
        <div>
          <form id="formSearch" class="search-form" action="#">
            <input type="search" name="search" placeholder="Search Movie...">
            <a href="#">
              <i class="fas fa-search"></i>
            </a>
          </form>
        </div>
      </div>

      <div class="nav-links bottom-nav">
        <div>
          <a href="#">
            <i class="fas fa-theater-masks"></i>
          </a>
        </div>
        <div>
          <a href="#">
            <i class="far fa-user"></i>
          </a>
        </div>
        <div>
          <a href="#">
            <i class="fas fa-compass"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="navBtn">
      <i class="fas fa-bars fa-2x"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.NavBar {
  display: grid;
  grid-template-columns: 1fr 400px;
  width: 100%;
  background-color: #2871b1;
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
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  justify-items: center;
  position: static;
  width: 100%;
}

.bottom-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  -ms-flex-pack: end;
  align-items: center;
  justify-items: center;
  position: static;
  width: 100%;
}

.bottom-nav a {
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

/* At smaller screen */
@media screen and (max-width: 650px) {
  .navBtn {
    position: absolute;
    top: 5;
    right: 0;
    display: block;
    padding: 0.5rem;
  }

  .NavBar {
    /* position: fixed; */
    display: block;
    background-color: #fff;
  }

  .search-form {
    opacity: 0;
  }

  .logo {
    opacity: 0;
  }

  .top-nav {
    background-color: #2871b1;
    display: grid;
    grid-template-columns: 90px 1fr 90px;
    grid-template-rows: 80px;
    justify-items: center;
    align-items: center;
    top: 0;
    position: fixed;
    height: 0px;
    width: 100%;
  }

  .bottom-nav {
    background-color: #2871b1;
    bottom: 0;
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 0px;
    justify-items: center;
    align-items: center;
    width: 100%;
  }
}
</style>
