<template>
  <div class="product">
    <div class="product-gallery">gallery</div>
    <div class="product-info">
      <p>Info</p>
      <div class="product-info__title">title</div>
      <div class="product-info__description">description</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductTemplate",
};
</script>
<style scoped>
.product {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
