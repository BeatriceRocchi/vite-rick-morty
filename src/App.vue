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
          this.store.errorString = "";
          this.store.statusList = [];
          this.store.speciesList = [];
          this.store.cardList = result.data.results;
          this.store.count = result.data.info.count;
          this.store.pages = result.data.info.pages;

          // Mappatura possibili status
          result.data.results.forEach((item) => {
            if (!this.store.statusList.includes(item.status)) {
              this.store.statusList.push(item.status);
            }
          });

          // Mappatura possibili species
          result.data.results.forEach((item) => {
            if (!this.store.speciesList.includes(item.species)) {
              this.store.speciesList.push(item.species);
            }
          });
        })
        .catch((error) => {
          console.log(error);
          this.store.errorString = "Non sono presenti risultati";
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
  <Footer @changePage="getApi" />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
