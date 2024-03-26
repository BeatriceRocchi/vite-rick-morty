<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { store } from "./data/store";

export default {
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getApi() {
      axios
        .get(this.store.apiUrl, {
          params: store.queryParams,
        })
        .then((result) => {
          this.store.cardList = result.data.results;
          this.store.count = result.data.info.count;
        })
        .catch((error) => {
          console.log(error);
          this.store.errorString = "Non sono presenti risultati";
          console.log(this.store.errorString);
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <Header @startSearch="getApi" @resetSearch="getApi" />
  <Main />
  <Footer />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
