<template>
  <div class="home-content">
    <div class="card">
      <h1>Sign up!</h1>
      <p>Create your user here by providing your e-mail and a password</p>
      <hr />
      <form action="#">
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

<style scoped>
/* scoped - määrab ära, et stiilid käivad ainult selle lehe/komponendi kohta */
.home-content {
  background: linear-gradient(60deg, rgb(0, 102, 255), rgb(0, 153, 255));
}
.nav a {
  color: #fff;
  text-decoration: none;
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
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  border: 3px solid rgb(0, 153, 255);
}
.button:hover {
  border: 3px solid rgb(0, 102, 255);
}
.button:active {
  border: 3px solid #000;
}
</style>
