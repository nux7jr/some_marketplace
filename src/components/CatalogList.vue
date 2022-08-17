<template>
  <div class="catalog container">
    <h1 class="catalog__heading">Catalog:</h1>
    <section class="error" v-if="errored">
      <p class="error__message">
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section v-else>
      <CatalogNavigation />
      <div class="option">
        <div class="search">
          <input
            class="search__input"
            type="search"
            v-model="search"
            placeholder="Поиск"
          />
        </div>
      </div>
      <div v-if="loading">Loading...</div>
      <div v-else class="product">
        <TransitionGroup
          tag="div"
          :css="false"
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @leave="onLeave"
        >
          <div v-for="item in allProducts" v-bind:key="item.id">
            <article class="product__item">
              <div class="product__wrapper">
                <img class="product__img" :src="`${item.pic}`" alt="" />
              </div>
              <h1 class="product__heading">{{ item.title }}</h1>
              <p class="product__price">{{ item.price }} рублей.</p>
            </article>
          </div>
        </TransitionGroup>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "@/axios/axios.js";
import CatalogNavigation from "@/components/CatalogNavigation.vue";
import gsap from "gsap";
export default {
  name: "CatalogList",
  components: {
    CatalogNavigation,
  },
  data() {
    return {
      products: [],
      productsDefaultPicture:
        "https://via.placeholder.com/350/00FFFF/00000Text=SMPcom",
      loading: true,
      errored: false,
      search: "",
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
    onBeforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "660px",
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done,
      });
    },
  },
};
</script>
<style scoped lang="scss">
a {
  color: #42b983;
}
.catalog__heading {
  margin: 0;
  padding-top: 37px;
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
.product__wrapper {
  min-height: 550px;
}
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
