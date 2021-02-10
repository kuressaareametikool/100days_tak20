<template>
  <div class="home-content">
    <div class="card">
      <h1>Sign up!</h1>
      <p>Create your user here by providing your e-mail and a password</p>
      <hr />
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
        <button class="button" type="submit">Create user</button>
      </form>
    </div>
  </div>
</template>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.nav a {
  color: #fff;
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
  margin-bottom: 2rem;
}
.card {
  width: 400px;
  padding: 3em 2em;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #fff;
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
}
.button {
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  background: linear-gradient(60deg, rgb(0, 102, 255), rgb(0, 153, 255));
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
}
body {
  background: linear-gradient(60deg, rgb(0, 102, 255), rgb(0, 153, 255));
}
</style>
