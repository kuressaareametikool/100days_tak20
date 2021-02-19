<template>
  <nav class="nav" id="nav">
    <router-link to="/">Sissejuhatus</router-link>
    <router-link to="/UI001">UI001</router-link>
    <router-link to="/UI002">UI002</router-link>
    <router-link to="/UI003">UI003</router-link>
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
}
.nav a {
  margin: 0.5rem;
  /* selleks, et nav oleks näha, kui on komponendile lisatud erinev taust */
  z-index: 10;
  position: relative;
  color: white;
}
body {
  background-color: rgb(107, 107, 107);
}
</style>