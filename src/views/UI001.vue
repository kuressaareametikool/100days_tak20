<template>
  <div class="flex-center">
    <div class="home-content">
      <h1>UI001 - Sign-up form</h1>
      <form action="https://www.ametikool.ee">

        <!-- label variant 1 -->
        <label>
          <span>E-mail</span>
          <input type="email" />
        </label>

        <!-- label variant 2 -->
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" />
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  </div>
</template>

<style>
.flex-center {
}
</style>
