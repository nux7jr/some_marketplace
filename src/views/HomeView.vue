<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <CatalogList />
  </div>
</template>

<script>
// @ is an alias to /src
import CatalogList from "@/components/CatalogList.vue";

export default {
  name: "HomeView",
  components: {
    CatalogList,
  },
};
</script>
