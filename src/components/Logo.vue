<template>
  <div class="image-container">
    <img :src="imageUrl" alt="Logo" class="generic-image" />
  </div>
</template>

<script setup lang="ts">
const imageUrl = 'https://vuejs.org/images/logo.png'
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.generic-image {
  max-width: 80%;
  height: auto;
}
</style>
