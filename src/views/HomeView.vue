<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useAuthStore } from "../stores/auth.ts";
import HomeComponent from "../components/home/HomeComponent.vue";
import HomeCustomerComponent from "../components/home/HomeCustomerComponent.vue";

const authStore = useAuthStore();
const perm = ref();

onBeforeMount(async () => {
  await authStore.getUser();
  // @ts-ignore
  perm.value = authStore.user.permissions[0].id;
});



</script>

<template>
  <HomeCustomerComponent v-if="perm === 3" />

  <HomeComponent v-else />
</template>

<style scoped></style>