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
    async getAllStatusAndSpecies() {
      const totalPages = await axios
        .get(this.store.apiUrl)
        .then((result) => result.data.info.pages);

      for (let i = 0; i < totalPages; i++) {
        await axios
          .get(this.store.apiUrl, {
            params: {
              page: i + 1,
            },
          })
          .then((result) => {
            result.data.results.forEach((item) => {
              if (!this.store.statusList.includes(item.status)) {
                this.store.statusList.push(item.status);
              }
              if (!this.store.speciesList.includes(item.species)) {
                this.store.speciesList.push(item.species);
              }
            });
          });
      }
      console.log(this.store.statusList);
      console.log(this.store.speciesList);
    },
    getApi() {
      axios
        .get(this.store.apiUrl, {
          params: this.store.queryParams,
        })
        .then((result) => {
          this.store.errorString = "";
          this.store.cardList = result.data.results;
          this.store.count = result.data.info.count;
          this.store.pages = result.data.info.pages;
        })
        .catch((error) => {
          console.log(error);
          this.store.errorString = "Non sono presenti risultati";
        });
    },
  },
  mounted() {
    this.getAllStatusAndSpecies();
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
