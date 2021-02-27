<template>
  <div class="flex-center">
    <div class="home-content"></div>
    <div class="all">
      <span class="error">ERROR 404</span>
      <span class="PNF">PAGE NOT FOUND</span>
    </div>
  </div>
</template>
<style>
.error {
  color: white;
  font-size: 150px;
  animation: RGBGOOD 4s infinite linear;
}
.all {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.PNF {
  color: white;
  font-size: 50px;
}

@keyframes RGBGOOD {
  0% {
    transform: rotateY(0deg);

    color: red;
  }
  25% {
    color: yellow;
    transform: rotateY(120deg);
  }
  50% {
    color: blue;
    transform: rotateY(240deg);
  }
  100% {
    color: green;
    transform: rotateY(360deg);
  }
}
</style>
