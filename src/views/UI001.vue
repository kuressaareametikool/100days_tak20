<template>
  <div class="home-content">
    <div class="card">
      <h1>Sign up</h1>
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
* {
  box-sizing: border-box;
}
.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 5em;
}
h1 {
  margin: 0 0 1em 0;
}
.card {
  width: 400px;
  padding: 3em 2em;
  box-shadow: 0 0 40px rgba(0,0,0,0.3);
  border-radius: 10px;
}
.form-group {
  margin-bottom: 1em;
}
.form-group input {
  width: 100%;
  display: block;
  padding: 0.5em;
}
.form-group label {
  display: block;
  margin-bottom: 0.5em;
  font-size: 0.8em;
}
.button {
  width: 100%;
  padding: 0.5em;
}
</style>
