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
  components: { NavBar, Footer },
  data() {
    return {
     
    };
  },
  created() {
   
  },
  methods: {
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: #222;
  color: #fff;
  height: 100%;

  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
}
</style>
