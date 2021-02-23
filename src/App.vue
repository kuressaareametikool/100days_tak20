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
  height: 100%;
  margin: 0;
  flex: 1;
}
html,
body {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
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
  transition: opacity 0.2s ease;
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
