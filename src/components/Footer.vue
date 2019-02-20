<template>
  <div class="footer">
    <div class="top-footer">
      <div class="portfolio">
        <h3>Portfolio:</h3>
        <p>
          <a href="https://ridwynidriss.com"></a>www.ridwynidriss.com
        </p>
      </div>
      <h3>Copyright &copy; 2019</h3>
      <h3>Mockup and Code by Ridwyn Idrissou</h3>
    </div>

    <div class="bottom-footer">
      <div>
        <img src alt>
        images goes herer
      </div>
      <div class="links">
        <a href>
          <i class="fab fa-github"></i>
        </a>
        <a href>
          <i class="fas fa-code"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  background-color: #f3f3f3;
  color: #444;
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 5rem;
  padding: 3rem;
}

.top-footer {
}
.portfolio {
  display: grid;
  grid-template-columns: (2, 1fr);
}

.bottom-footer {
  display: grid;
  grid-template-rows: (2, 1fr);
}

.links a {
  text-decoration: none;
  font-size: 50px;
  color: #444;
}
</style>
