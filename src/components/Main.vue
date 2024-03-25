<script>
import Card from "./Card.vue";
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
    <Card />
  </main>
</template>

<style lang="scss" scoped></style>
