<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    startSearch() {
      this.$emit("startSearch");
    },

    resetSearch() {
      this.store.queryParams = {
        page: 1,
        name: "",
        status: "",
        species: "",
      };
      this.store.errorString = "";
      this.$emit("resetSearch");
    },
  },
};
</script>

<template>
  <header class="text-center">
    <h1 class="my-4">- Rick & Morty -</h1>
    <div class="container d-flex justify-content-center px-5 my-4">
      <!-- Search by name (input) -->
      <input
        type="text"
        class="form-control me-3 w-25"
        id="searchCharacter"
        placeholder="Search Character"
        v-model.trim="store.queryParams.name"
        @keyup.enter="startSearch"
      />
      <!-- Search by status (select) -->
      <select
        class="form-select me-3 w-25"
        aria-label="Default select example"
        v-model="store.queryParams.status"
      >
        <option disabled value="">Select Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <!-- Search by species (select) -->
      <select
        class="form-select me-3 w-25"
        aria-label="Default select example"
        v-model="store.queryParams.species"
      >
        <option disabled value="">Select Species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        <option value="humanoid">Humanoid</option>
        <option value="unknown">Unknown</option>
      </select>
      <button class="btn btn-info me-3" @click="startSearch">Search</button>
      <button class="btn btn-warning" @click="resetSearch">Reset</button>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
