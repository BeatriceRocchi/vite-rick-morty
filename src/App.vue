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
    // getAllStatusAndSpecies recupera tutti gli status e le species e va fatta una sola volta al mounted. Deve terminare tutte le chiamate prima del caricamento dei primi 20 risultati con getApi.
    // 1. API per recuperare il numero totale di pagine da salvare in totalPages. La chiamata deve terminare prima di poter procedere con il ciclo for (altrimenti non avrei il totalPages)
    // 2. Ciclo for di chiamate API in cui cambia il parametro page. Ad ogni ciclo la chiamata viene fatta alla pagina successiva sino ad arrivare all'ultima pagina. Nota: occorre fare più chiamate perchè di default la chiamata API per come è stata costruita restituisce al massimo 20 risultati
    // 3. Ad ogni ciclo, popolamento degli array statusList e speciesList con elementi univoci
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
    },
    // getApi effettua la chiamata per popolare la pagina al mounted e/o ad ogni search o reset
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
