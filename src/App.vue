<template>
  <nav class="nav" id="nav">
    <router-link to="/">Introduction</router-link>
    <router-link to="/UI001">Sign up</router-link>
    <router-link to="/UI002">404 Error</router-link>
    <router-link to="/UI003">Music Player UwU</router-link>
  </nav>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: 'Montserrat', sans-serif;
}
.nav a {
  margin: 0.5rem;
}
</style>