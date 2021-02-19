<template>



  <div class="home-content">
    <div class="card">
      <h1>Sign up</h1>
      <p>Create your user here by providing your e-mail and a password</p>
      <hr>
      <form action="https://ametikool.ee">
        <div class="form-group">
          <label for="email">E-mail</label>
          <input id="email" type="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" />
        </div>
        <div class="form-group">
          <label for="password-repeat">Repeat password</label>
          <input type="password" />
        </div>
        <button class="button" type="submit">Register<br></button>
      </form>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap');
* {
  box-sizing: border-box;
}
html, body {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.nav a {
  color: gray;
  text-decoration: none;
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
}
p {
  line-height: 1.4;
  margin-bottom: 1em;
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
  background-color: #e9e4f0;
}
.form-group {
  margin-bottom: 1em;
}
.form-group input {
  width: 100%;
  display: block;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid rgb(185, 185, 185);
}
.form-group label {
  display: block;
  margin-bottom: 0.5em;
  font-size: 0.8em;
}
.button {
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  font-size: 30px;
    background: blue;
  font-family: 'Raleway', sans-serif;
}
.button:hover {
    box-shadow: 10px 10px 5px rgba(3,30,82);
    background: linear-gradient(90deg, rgba(3,30,82,1) 0%, rgba(47,7,168,1) 49%, rgba(3,30,82,1) 100%);
}
body {
  background: linear-gradient(90deg, rgba(125,149,195,1) 0%, rgba(9,9,121,1) 54%, rgba(125,149,195,1) 100%);
}
</style>