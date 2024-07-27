<script setup>
import Logo from '../components/Logo.vue'
import SignIn from '../components/SignIn.vue'
</script>

<template>
  <SignIn class="sign-in" />
  <Logo class="logo" />
</template>

<style scoped>
.sign-in {
  margin-right: 10vh;
}
@media (max-width: 1024px) {
  .logo {
    display: none;
  }

  .sign-in {
    width: 100%;
  }
}
</style>
