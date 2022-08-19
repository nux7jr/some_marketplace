<template>
  <div class="about-product">
    <h1 class="about-product__heading">Это product view</h1>
    <ProductTemplate />
  </div>
</template>
<script>
import ProductTemplate from "@/components/ProductTemplate.vue";
export default {
  name: "ProductView",
  components: {
    ProductTemplate,
  },
};
</script>
<style scoped>
.about-product {
  min-height: 100vh;
}
.about-product__heading {
  margin: 0;
  padding-top: 37px;
}
</style>
