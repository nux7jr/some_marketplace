<template>
  <div class="container">
    <h1>Каталог товаров</h1>
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section v-else>
      <CatalogNavigation />
      <!-- <button v-on:click="priceAsc">Asc</button> -->
      <button v-on:click="priceDesc">Desc</button>
      <div class="search-option">
        <input
          class="search__input"
          type="search"
          v-model="search"
          placeholder="Поиск"
        />
      </div>
      <div v-if="loading">Loading...</div>
      <div v-else class="product">
        <div v-for="item in allProducts" v-bind:key="item.id">
          <article class="product__item">
            <img class="product__img" :src="`${item.pic}`" alt="" />
            <h1 class="product__heading">{{ item.title }}</h1>
            <p class="product__price">{{ item.price }} рублей.</p>
            <p>{{ item.pic }}</p>
          </article>
        </div>
        <!-- <div v-show="availability">Товара, с подходящем именем нет</div> -->
      </div>
    </section>
  </div>
</template>

<script>
import axios from "@/axios/axios.js";
import CatalogNavigation from "@/components/CatalogNavigation.vue";
export default {
  name: "CatalogList",
  components: {
    CatalogNavigation,
  },
  data() {
    return {
      products: [],
      loading: true,
      errored: false,
      search: "",
      currSort: null,
      availability: true,
    };
  },
  computed: {
    allProducts() {
      return this.products.filter((elem) => {
        return elem.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  watch: {
    "$route.query.category": function () {
      this.getData();
    },
    "$route.query.price": function () {
      this.getData();
    },
    // allProducts: function () {
    //   if ((this.allProducts.length = 0)) {
    //     this.availability = false;
    //   }
    // },
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("Product", {
          params: {
            category_contains: this.$route.query.category,
            price_order: this.$route.query.price,
          },
        })
        .then((res) => {
          this.products = res.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    // priceAsc() {
    //   this.$router.push({
    //     query: { price: "?price_order=asc" },
    //   });
    // },
    priceDesc() {
      this.$router.push({
        query: { price: "?price_order=desc" },
      });
    },
  },
};
</script>
<style scoped lang="scss">
a {
  color: #42b983;
}
.container {
  padding: 0 15px;
}
@media (min-width: 575.98px) {
  .container {
    padding: 0 calc(50vw - 270px);
  }
}
@media (min-width: 767.98px) {
  .container {
    padding: 0 calc(50vw - 360px);
  }
}
@media (min-width: 991.98px) {
  .container {
    padding: 0 calc(50vw - 480px);
  }
}
@media (min-width: 1199.98px) {
  .container {
    padding: 0 calc(50vw - 590px);
  }
}
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
}
// .product__item {
//   flex: 0 0 50%;
// }
.product__img {
  border-radius: 10px;
}
.product__heading {
  text-align: center;
  font-size: 1.1rem;
}
.product__price {
  padding-top: 0.5rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.3rem;
}
</style>
