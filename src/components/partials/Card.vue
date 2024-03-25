<script>
export default {
  props: {
    name: String,
    status: String,
    species: String,
    imageUrl: String,
  },
};
</script>

<template>
  <div class="card custom_card m-3 text-center" style="width: 18rem">
    <img :src="imageUrl" class="card-img-top" :alt="name" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <hr class="w-25 mx-auto" />
      <h6 class="card-subtitle mb-2 text-body-secondary">
        {{ status }}
      </h6>
      <p class="card-text">
        {{ species }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/variables";
.custom_card {
  border: none;
  box-shadow: 0 0 5px rgba($color-dark, 0.5);

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 25px rgba($color-dark, 0.5);
    transform: scale(1.1);
    transition: all 0.5s;
  }
}
</style>
