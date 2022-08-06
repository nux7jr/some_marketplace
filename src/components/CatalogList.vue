<template>
  <div>
    Каталог товаров
    <div v-for="item in dataThings" :key="item.id">
      {{ dataThings }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogList",
  data() {
    return {
      dataThings: {},
    };
  },
  props: {},
  created() {
    fetch("https://mockend.com/nux7jr/The-greatest-tree/posts").then((res) => {
      this.dataThings = res.json();
      console.log(this.dataThings);
    });
  },
  methods: {
    // getData() {
    //   fetch("https://mockend.com/nux7jr/The-greatest-tree/posts")
    //     .then(function (response) {
    //       if (response.status !== 200) {
    //         this.dataThings = response;
    //         console.log(this.dataThings);
    //         return;
    //       }
    //       // Examine the text in the response
    //       response.json().then(function (data) {
    //         console.log(data);
    //       });
    //     })
    //     .catch(function (err) {
    //       console.log("Fetch Error :-S", err);
    //     });
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
