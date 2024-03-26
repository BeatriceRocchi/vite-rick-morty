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
  <footer class="text-center" v-if="store.errorString === ''">
    <p>Risultati trovati: {{ store.count }}</p>
  </footer>
</template>

<style lang="scss" scoped></style>
