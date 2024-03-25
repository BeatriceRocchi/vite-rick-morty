<script>
import Card from "./partials/Card.vue";
import { store } from "../data/store";
export default {
  components: {
    Card,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main class="container d-flex justify-content-center flex-wrap">
    <Card
      v-for="card in store.cardList"
      :key="card.id"
      :name="card.name"
      :status="card.status"
      :species="card.species"
      :imageUrl="card.image"
    />
  </main>
</template>

<style lang="scss" scoped></style>
