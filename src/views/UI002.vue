<template>
  <div class="flex-center">
    <div class="home-content">
      <h1>Error 404</h1>
      <h2>Page not found</h2>
      <p>Linus Torvalds really didn't think this one through...</p>
    </div>
    <div class="cat">
      <img src="/src/assets/cat404.png" alt="cat-sad">
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
html, body {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.nav a {
  color: #fff;
  text-decoration: none;
}
img {
  height: 350px;
  width: 300px;
}
.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 5em;
  height: 100%;
}
h1 {
  margin: 0 0 0.5em 0;
  color: white;
  direction: left;
  font-family: 'Montserrat', sans-serif;
}
h2 {
  margin: 0 0 0.5em 0;
  color: white;
  font-family: 'Montserrat', sans-serif;
}
p {
  line-height: 1.4;
  margin-bottom: 1em;
  color: white;
  font-family: 'Montserrat', sans-serif;
}
hr {
  border: 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;
}
.card {
  width: 400px;
  padding: 3em 2em;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: rgb(34, 34, 34);
}
.form-group {
  margin-bottom: 1em;
}
.form-group input {
  width: 100%;
  display: block;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid rgb(207, 207, 207);
}
.form-group label {
  display: block;
  margin-bottom: 0.5em;
  font-size: 0.8em;
  color: white;
  font-family: 'Montserrat', sans-serif;
}
.button {
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  background: linear-gradient(60deg, rgb(255, 0, 179), rgb(47, 0, 255));
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
}
body {
  background: linear-gradient(60deg, rgb(97, 0, 89), rgb(34, 0, 158));
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>