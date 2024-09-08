<template>
  <div class="default-layout">
    <header>
      <nav>
        <div class="nav-links">
          <router-link to="/">{{ $t('message.home') }}</router-link> |
          <router-link to="/signup">{{ $t('message.signup') }}</router-link>
        </div>
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
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 10px;
}

header {
  background-color: #f8f9fa;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #42b983;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
