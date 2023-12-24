<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
import {onMounted} from "vue";
import { useAuthStore} from "../stores/auth.ts";

const authStore = useAuthStore();
onMounted(async () => {
  await authStore.getUser();
});

</script>

<template>
<HelloWorld/>
  <div v-if="authStore.user">
    <h1>{{ authStore.user.name }}</h1>
    <h1>{{ authStore.user.email }}</h1>
  </div>
  <div v-else>
    <h1> Go to Login</h1>
  </div>
</template>

<style scoped>

</style>