<template>
  <div class="flex-center">
    <div class="home-content">
     <img src="https://i.pinimg.com/originals/84/1d/f6/841df65e1fae80904356e1c16bb886b6.jpg" alt="lol">
     <h1>WE COULD NOT FIND THE SITE YOU WERE LOOKING FOR</h1>
    </div>
  </div>
</template>
<style>
html, body {
  margin: 0px;
}

.flex-center {
  background-color: white;
}

h1 {
  animation-name: example;
  animation: example 4s infinite;
}

@keyframes example {
  0%   {color:red; left:0px; top:0px;}
  25%  {color:yellow; left:200px; top:0px;}
  50%  {color:blue; left:200px; top:200px;}
  75%  {color:green; left:0px; top:200px;}
  100% {color:red; left:0px; top:0px;}
}
</style>