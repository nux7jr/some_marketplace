<template>
  <div>
    <h1>Jackets</h1>
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section v-else>
      <div v-if="loading">Loading...</div>
      <div v-else v-for="item in info" v-bind:key="item.id">
        <div>{{ item.category }}</div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "@/axios/axios.js";
export default {
  name: "CatalogList",
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  created() {
    axios
      .get("Product?category_contains=jacket")
      .then((res) => {
        this.info = res.data;
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
