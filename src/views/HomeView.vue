<template>
  <div class="home">
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
