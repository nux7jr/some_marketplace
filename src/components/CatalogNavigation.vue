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
      <p>search and price</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CatalogNavigation",
};
</script>
<style scoped>
a {
  font-weight: bold;
  color: #2c3e50;
}
.router-link-exact-active {
  color: #42b983;
}
</style>
