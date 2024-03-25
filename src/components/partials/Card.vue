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
  <div class="card" style="width: 18rem">
    <img :src="imageUrl" class="card-img-top" :alt="name" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <hr />
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ status }}</h6>
      <p class="card-text">
        {{ species }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
