<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <footer class="text-center">
    <p>Risultati trovati: {{ store.cardList.length }}</p>
  </footer>
</template>

<style lang="scss" scoped></style>
