<template>
  <div class="catalog-navigation">
    <div class="option">
      <p>Categories:</p>
      <router-link to="">All</router-link> |
      <router-link :to="{ query: { ...$route.query, category: 'jacket' } }"
        >Jackets</router-link
      >
      |
      <router-link :to="{ query: { ...$route.query, category: 't-short' } }"
        >T-shorts</router-link
      >
      |
      <!-- <button class="option__button" v-on:click="priceDesc">
        Sort by price
      </button> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "CatalogNavigation",
  methods: {
    priceDesc() {
      this.$router.push({
        query: { price: "?price_order=desc" },
      });
    },
  },
};
</script>
<style scoped>
a {
  font-weight: bold;
  color: #2c3e50;
}
.router-link-exact-active {
  color: #000000;
}
.option__button {
  font-weight: bold;
  color: #2c3e50;
  background: inherit;
  border: none;
  font-family: "Roboto", sans-serif, Helvetica, Arial;
  font-size: 16px;
  margin: 0;
  padding: 0;
}
/* click на option bnt  */
</style>
