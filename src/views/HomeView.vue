<script setup>
import Logo from '../components/Logo.vue'
import SignIn from '../components/SignIn.vue'
</script>

<template>
  <div class="content-wrapper">
    <SignIn class="sign-in" />
    <Logo class="logo" />
  </div>
</template>

<style scoped>
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px); /* Ajuste este valor de acordo com a altura do seu cabeçalho */
  padding: 20px;
}

.sign-in {
  flex: 1;
  max-width: 400px; /* Ajuste conforme necessário */
  margin-right: 5%;
}

.logo {
  flex: 1;
  max-width: 50%;
}

@media (max-width: 1024px) {
  .content-wrapper {
    flex-direction: column;
  }

  .logo {
    display: none;
  }

  .sign-in {
    width: 100%;
    max-width: 100%;
    margin-right: 0;
  }
}
</style>
