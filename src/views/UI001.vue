<template>
  <div class="flex-center">
    <div class="home-content">
      <h1>SIGN UP</h1>
      <div class="card">
        <form action="/">
          <div class="form-group">
            <label for="email">E-mail</label>
            <input id="email" type="email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" />
          </div>
          <div class="form-group">
            <label for="repeat password">Repeat Password</label>
            <input id=" repeat password" type=" repeat password" />
          </div>
          <button type="submit">Create OnlyFans</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
.card {
  width: 400px;
}
.home-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
}
.form-group input {
    width: 100%;
    display: block;
}
.form-group label {
    display: block;
}
button {
    width: 100%;
}
</style>
