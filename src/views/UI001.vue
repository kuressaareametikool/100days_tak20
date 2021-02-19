<template>
  <div class="home-content">
    <h1>Sign Up</h1>
    <div class="card">
      <form action="https://ametikool.ee">
        <div class="form-group">
          <label for="#email">E-mail </label>
          <input id="email" type="email" />
        </div>
        <div class="form-group">
          <label for="password">password </label>
          <input id="password" type="password" />
        </div>
        <div class="form-group">
          <label for="password-repeat">Repeat password</label>
          <input type="password" />
        </div>
        <button type="submit">Create user</button>
      </form>
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #5a5096;
  border-radius: 10px;
  color: white;
}
.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.card {
  width: 400px;
  padding: 2em;
  border: solid 5px #5a5096;
  border-block-color: #3a3559;
  background-color: #1d1b29;
  color: white;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
}
.form-group {
  margin-bottom: 1em;
  padding: 3px;
  font-size: 20px;
}
.form-group input {
  width: 100%;
  display: block;
  padding: 0.5em;
}
.form-group label {
  display: block;
  font-size: 0.8em;
  padding: 2px;
}
button {
  width: 200px;
  padding: 0.5em;
  background-color: #1d1b29;
  border: solid 2px #5a5096;
  border-block-color: #3a3559;
  color: #5a5096;
}
.nav a {
  color: white;
}
</style>
