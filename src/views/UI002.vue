<template>
  <div class="FULLSNEK">
    <div class="snek"></div>
    <div class="snek"></div>
    <div class="snek"></div>
    <div class="snek"></div>
    <div class="snek"></div>
  </div>
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
  animation-name: RGBGOOD;
  animation-duration: 4s;
  animation-iteration-count: infinite;
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
.snek {
  background: white;
  height: 50px;
  width: 50px;
}

@keyframes RGBGOOD {
  0% {
    color: red;
  }
  25% {
    color: yellow;
  }
  50% {
    color: blue;
  }
  100% {
    color: green;
  }
}
.FULLSNEK {
  position: absolute;
  animation-name: SNEKAN;
  animation: SNEKAN 4s linear infinite;
}
@keyframes SNEKAN {
  0% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: yellow;
    right: 0px;
    top: 0px;
  }
  50% {
    background-color: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background-color: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
}
</style>
