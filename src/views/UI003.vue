<template>
  <div class="all">
    <div class="gear_container">
      <img class="gear1" src="../assets/gear.png" alt="" />
      <img class="gear2" src="../assets/gear.png" alt="" />
    </div>
    <span class="loading"> LOADING... </span>
    <div class="loading_container">
      <div class="loadingBar"></div>
    </div>
  </div>
</template>

<style>
body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
}
.all {
  display: flex;
}
.loading_container {
  height: 20px;
  width: 1000px;
  background-color: darkgrey;
  border-radius: 10px;
  /* position: absolute; */
  bottom: 5%;
  overflow: hidden;
  /* box-shadow: 2px 2px 2px black, 2px 2px 2px white; */
}
.loadingBar {
  height: 20px;
  background-color: aqua;
  animation: loading 7s infinite;
}
@keyframes loading {
  0% {
    width: 0px;
  }
  100% {
    width: 1000px;
  }
}
.gear1 {
  height: 256px;
  width: 256px;
  position: absolute;
  left: 0;
  animation: spin 2s infinite linear;
}
.gear2 {
  height: 256px;
  width: 256px;
  position: absolute;
  right: 0;

  animation: spin 2s infinite linear reverse;
}
.gear_container {
  width: 512px;
  height: 256px;
  position: relative;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  font-size: 125px;
  color: white;
  /* position: absolute; */
  bottom: 10%;
}
</style>
