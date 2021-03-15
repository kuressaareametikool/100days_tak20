<template>
  <div class="home-content">
    <p>A button-hover experiment with pseudo elements.</p>
    <button type="button">Button</button>
  </div>
</template>

<style scoped>
.home-content {
  background: linear-gradient(60deg, rgb(48, 46, 46), rgb(37, 37, 36));
  z-index: -2;
}
p {
  color: #FFF;
  margin-bottom: 2rem;
  opacity: 0.05;
}
button {
  padding: 1.5em 5em;
  border: 3px solid rgb(255, 70, 70);
  border-radius: 3px;
  color: rgb(41, 41, 41);
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.07em;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background-color: transparent;
  z-index: 10000;
  box-sizing: border-box;
  transition: all .2s ease;
}
button:after,
button:before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  transition: transform 0.5s ease-in-out;
}
button:after {
  background-color: rgb(41, 41, 41);
  transform: scale(0);
  transform-origin: center center;
}
button:hover {
  color: rgb(255, 70, 70);
  border: 3px solid rgb(255, 70, 70);
  transform: scale(1.1);
}
button:hover:after {
    transform: scale(2);
}
button:hover:before {
    transform: scale(0);
}
button:before {
  background-color: rgb(255, 70, 70);
  transform: scale(2);
}
button:focus {
  transform: scale(1);
}
button:focus:after {
    transform: rotateX(0) rotateZ(0);
}
</style>
