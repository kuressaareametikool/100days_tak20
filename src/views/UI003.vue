<template>
  <div class="flex-center">
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
  align-items: center;
  justify-content: center;
}

.loading_container {
  height: 20px;
  width: 1000px;
  background-color: darkgrey;
  border-radius: 10px;
  overflow: hidden;
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
</style>
