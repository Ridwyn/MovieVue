<template>
  <div class="Account">
    <h2>Account</h2>
    <div class="form-style">
      <form id class="account-form" action="#">
        <input type="email" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Password">
        <a class="btn" href="#">
          <h3>Login</h3>
        </a>
      </form>
      <div class="guest">
        <a v-on:click="loadHome" class="btn" href="#">
          <h3>Browse as Guest</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Account",
  data() {
    return {};
  },
  created() {},

  methods: {
    loadHome() {
      this.$router.push("Home");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-style {
  display: grid;
  grid-template-rows: 2fr 100px;
  justify-content: center;
  width: 50%;
  margin: 4rem auto;
  border-radius: 10px;
  height: 400px;
  background-color: #ffff;
}

.account-form {
  display: grid;
  width: 400px;
}

.account-form input {
  margin: 1rem auto;
  width: 100%;
  border-radius: 10px;
  border: #222 1px solid;
  text-align: center;
  font-size: 20px;
}

.btn {
  text-align: center;
  width: 50%;
  height: 65%;
  margin: auto;
  background-color: #2871b1;
  color: #fff;
  border-radius: 30px;
  padding: 1.2rem;
}

.guest {
  display: grid;
}

p {
  margin: 0;
}
a {
  text-decoration: none;
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
@media screen and (max-width: 769px) {
  .form-style {
    width: 85%;
    margin: 2rem auto;
  }

  .account-form input {
    margin: 1rem auto;
    width: 70%;
  }
}
</style>
