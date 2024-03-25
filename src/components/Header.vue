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
  <header class="text-center">
    <h1 class="my-4">- Rick & Morty -</h1>
    <div class="container d-flex justify-content-center px-5 my-4">
      <input
        type="text"
        class="form-control me-3 w-25"
        id="searchCharacter"
        placeholder="Search Character"
      />
      <select class="form-select me-3 w-25" aria-label="Default select example">
        <option selected>Select Status</option>
        <option value="1">Alive</option>
        <option value="2">Death</option>
        <option value="3">Unknown</option>
      </select>
      <button class="btn btn-info me-3">Search</button>
      <button class="btn btn-warning">Reset</button>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
