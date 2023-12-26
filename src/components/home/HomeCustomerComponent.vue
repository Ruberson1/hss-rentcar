<script setup lang="ts">

</script>

<template>
  <div class="home overflow-x bg-dark text-white d-flex align-items-center justify-content-center vh-100">
    <div class="text-center bg-dark-transparent p-3 rounded-3">
      <h1 class="display-2 text-success fw-bold">HSS RentCar</h1>
      <router-link to="/categories" class="btn btn-success btn-lg">Veja as categorias disponíveis</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: url('../../../public/images/bg-home.jpg') no-repeat center center fixed;
  background-size: cover;
  overflow-x: hidden; /* Evita rolagem horizontal */
}
.bg-dark-transparent {
  background-color: rgba(0, 0, 0, 0.7) !important; /* Adiciona transparência a bg-dark */
}
</style>