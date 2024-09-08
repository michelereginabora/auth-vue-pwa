<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Sign Up</router-link>
        <LanguageSelector />
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import LanguageSelector from '../components/LanguageSelector.vue'
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  color: #2c3e50;
  text-decoration: none;
  margin-right: 1rem;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
