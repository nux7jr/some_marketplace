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
            placeholder="search"
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
            <router-link to="/products">
              <article class="product__item">
                <div class="product__wrapper">
                  <img class="product__img" :src="`${item.pic}`" alt="" />
                </div>
                <h1 class="product__heading">{{ item.title }}</h1>
                <p class="product__price">{{ item.price }} рублей.</p>
              </article>
            </router-link>
          </div>
        </TransitionGroup>
        <div v-show="!available" class="search-error">No such product.</div>
      </div>
    </section>
    <button class="catalog__btn btnScroll" v-on:click="scrolltoTop"></button>
  </div>
</template>

<script>
import axios from "@/axios/axios.js";
import CatalogNavigation from "@/components/CatalogNavigation.vue";
import gsap from "gsap";
import scroll from "@/directive/scroll.js";
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
      available: true,
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
    allProducts: function () {
      if (this.allProducts.length <= 0) {
        this.available = false;
      } else {
        this.available = true;
      }
    },
  },
  created() {
    this.getData();
    window.addEventListener("scroll", this.scrollAppearance);
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
    scrollAppearance() {
      const scrollBtn = document.querySelector(".catalog__btn");
      if (window.scrollY > 220) {
        scrollBtn.classList.add("catalog__btn--active");
      } else {
        scrollBtn.classList.remove("catalog__btn--active");
      }
    },
    scrolltoTop() {
      scroll();
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollAppearance);
  },
};
</script>
<style scoped lang="scss">
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
  color: #000;
}
.product__price {
  padding-top: 0.5rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.3rem;
  color: #000;
}
.search {
  display: flex;
  justify-content: center;
}
.search__input {
  margin-bottom: 20px;
  width: 350px;
  padding: 0.5rem;
  background-color: rgba(240, 248, 255, 0.418);
  border: 2px solid rgba(0, 0, 0);
  border-radius: 10px;
  font-size: 1.1rem;
  color: rgb(0, 0, 0);
}
::placeholder {
  color: rgb(0, 0, 0);
  font-size: 1.1em;
}
.catalog__btn {
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
  border: none;
  padding: 0;
  border-radius: 10px;
  z-index: 99;
  background: url(../assets/page-up-button-50.png);
  background-size: 95%;
  background-origin: border-box;
  background-repeat: no-repeat;

  display: none;
  outline: none;
  pointer-events: none;
}
.catalog__btn--active {
  display: block;
  pointer-events: auto;
}
</style>
