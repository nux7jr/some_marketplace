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
      | <router-link to="?price_order=asc">Price ascending</router-link> |
      <router-link to="?price_order=desc">Price decreasing</router-link>
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
