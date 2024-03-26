<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    nextPage(isNext) {
      isNext ? this.store.queryParams.page++ : this.store.queryParams.page--;
      this.$emit("changePage");
    },
  },
};
</script>

<template>
  <footer class="text-center" v-if="store.errorString === ''">
    <h6>Risultati trovati: {{ store.count }}</h6>
    <h6>Pagina {{ store.queryParams.page }} di {{ store.pages }}</h6>
    <div>
      <button
        class="custom_btn btn fs-2"
        @click="nextPage(false)"
        v-if="store.queryParams.page > 1"
      >
        &#11164;
      </button>
      <button
        class="custom_btn btn fs-2"
        @click="nextPage(true)"
        v-if="store.queryParams.page < store.pages"
      >
        &#11166;
      </button>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";

.custom_btn {
  color: $color-dark;
  &:hover {
    text-shadow: 0 0 20px rgba($color-dark, 0.5);
  }
}
</style>
