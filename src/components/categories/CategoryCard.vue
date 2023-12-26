<script setup lang="ts">
import { useAuthStore } from "../../stores/auth.ts";
import {onMounted} from "vue";

const authStore = useAuthStore();
const { categories } = defineProps(["categories"]);

onMounted(async() => {
  await authStore.getUser();
  console.log(authStore.user);
})
</script>

<template>
  <div v-if="authStore.user" v-for="category in categories" :key="category.id" class="card m-4" style="width: 18rem;">
    <img :src="`../../../public/images/${category.name}.png`" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ category.name }}</h5>
      <p class="card-text">
        {{ category.description }}
      </p>
      <router-link :to="`/reservation/user/${authStore.user.id}`" class="btn btn-primary">selecionar</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>