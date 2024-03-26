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
  <main>
    <div
      class="container d-flex justify-content-center flex-wrap my-4"
      v-if="store.errorString === ''"
    >
      <Card
        v-for="card in store.cardList"
        :key="card.id"
        :name="card.name"
        :status="card.status"
        :species="card.species"
        :imageUrl="card.image"
      />
    </div>
    <h5 class="text-center fw-bold my-5" v-else>{{ store.errorString }}</h5>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";

h5 {
  color: darken($color-primary, 40%);
}
</style>
