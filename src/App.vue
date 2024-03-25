<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import { store } from "./data/store";

export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getApi() {
      axios
        .get(this.store.apiUrl)
        .then((result) => {
          this.store.cardList = result.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
