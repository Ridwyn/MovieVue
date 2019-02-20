<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: { NavBar,Footer }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0 !important;
}

body {
  background: #222;
  color: #fff;
  height: 100%;
  margin: 0 !important;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
}
</style>
