<template>
  <div class="welcome">
    <h1>Bem-vindo(a)!</h1>
    <p>Seu cadastro foi realizado com sucesso.</p>
    <div>
      <router-link class="login" to="/">Entrar</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.welcome {
  text-align: center;
  padding: 40px;
}

h1 {
  color: #4caf50;
  margin: 20px;
}

p {
  font-size: 18px;
  color: antiquewhite;
  padding: 40px;
}

.login {
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #2f9668;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.login:hover {
  background-color: #358a6e;
}
</style>
