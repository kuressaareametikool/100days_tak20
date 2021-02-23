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
}
nav.nav {
  z-index: 10;
  position: absolute;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  left: 3rem;
  bottom: 3rem;
  opacity: 0.3;
  transition: opacity .2s ease;
  font-size: 0.8rem;
}
nav.nav:hover {
  opacity: 1;
}
.card {
  width: 400px;
  padding: 3em 2em;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #fff;
}
</style>