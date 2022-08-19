<template>
  <div id="app">
    <nav>
      <div class="nav__item" v-on:click="scrolltoTop">
        <router-link to="/">
          <img class="nav__logo" src="@/assets/logo.61fb3cf.svg" alt="logo"
        /></router-link>
      </div>
      <router-link to="/about">About</router-link>
      <router-link class="nav__card" to="/card"
        ><img class="nav__card-img" src="@/assets/iconCard.svg" alt="icon card"
      /></router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
import scroll from "@/directive/scroll.js";
export default {
  name: "MainPage",
  data() {
    return {};
  },
  methods: {
    scrolltoTop() {
      scroll();
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
#app {
  font-family: "Roboto", sans-serif, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background: -webkit-linear-gradient(
    45deg,
    rgb(212, 232, 228),
    rgb(184, 191, 197) 11%
  );
  background: -moz-linear-gradient(
    45deg,
    rgb(212, 232, 228),
    rgb(184, 191, 197) 11%
  );
  background: linear-gradient(
    45deg,
    rgb(212, 232, 228),
    rgb(184, 191, 197) 11%
  );
}
nav {
  padding: 30px 30px 0px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 10px;

  position: fixed;
  a {
    font-weight: bold;
    color: #2c3e50;
    align-self: center;
    font-weight: 500;
    font-size: 1.3rem;

    &.router-link-exact-active {
      color: #000000;
      text-decoration: underline;
    }
  }
}
@media (max-width: 1014px) {
  nav {
    position: static;
  }
}
// basic
body {
  padding: 0;
  margin: 0;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  height: auto;
}
.nav__logo {
  width: 150px;
  margin-top: 6px;
  border-radius: 10px;
}
.nav__card {
  background-color: rgba(240, 248, 255, 0.418);
  border-radius: 10px;
  padding: 7px 10px 7px 10px;
}
.nav__card-img {
  margin-top: 5px;
}
// BG
</style>
