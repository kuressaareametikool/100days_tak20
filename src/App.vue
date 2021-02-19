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
/* Need stiilid käivad üldiselt kogu web-appi kohta! */
.home-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 5em;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html,
body {
  height: 100%;
  display: flex;
  flex-direction: column;
}
*, *:before, *:after {
  box-sizing: border-box;
}
.nav a {
  margin: 0.5rem;
  /* selleks, et nav oleks näha, kui on komponendile lisatud erinev taust */
  z-index: 10;
  position: relative;
  color: white;
}
</style>