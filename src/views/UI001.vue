<template>
  <div class="home-content">
    <div class="card">
      <h1>Logige sisse</h1>
      <p>Palun logige sisse Swedbanki</p>
      <hr />
      <form action="https://swedbank.ee/private">
        <div class="form-group">
          <label for="username">Username</label>
          <input id="username" type="username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" />
        </div>
        <div class="form-group">
          <label for="password-repeat">Repeat password</label>
          <input type="password" />
        </div>
        <button class="button" type="submit">Logi sisse</button>
      </form>
    </div>
  </div>
</template>

<style>
* {
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
  color: #fff;
}
p {
  line-height: 1.4;
  margin-bottom: 1em;
  color: #fff;
}
hr {
  border: 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;
}
.card {
  width: 600px;
  padding: 3em 2em;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #02bf20;
}
.form-group {
  margin-bottom: 1em;
}
.form-group input {
  width: 100%;
  display: block;
  padding: 1em;
  border-radius: 3px;
  border: 1px solid rgb(207, 207, 207);
  background: #eee;
  color: #fff;
}
.form-group label {
  display: block;
  margin-bottom: 0.5em;
  font-size: 1em;
  color: #fff;
}
.button {
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  background: #00f2ae;
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 3px;
}
body {
  background: #000f21;
}
</style>