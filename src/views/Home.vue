<template>
  <div class="home-content">
    <div class="card">
      <h1>Sissejuhatus</h1>
      <p>
        Siin on siuke leht/web-app/asi, kuhu tulevad teie Madise tunni UI
        ülesanded. Esimene ül tuleb faili <code>views/UI001</code>, teine
        <code>views/UI002</code> jne.
      </p>
    </div>
  </div>
</template>
<style scoped>
.home-content {
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
.card {
  padding: 3rem;
  width: 500px;
}
h1 {
  margin-top: 0;
}
p:last-child {
  margin-bottom: 0;
}
</style>
