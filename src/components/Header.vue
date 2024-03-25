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
  <header>
    <h1>- Rick & Morty -</h1>
    <div>Box comandi</div>
  </header>
</template>

<style lang="scss" scoped>
header {
  text-align: center;
}
</style>
