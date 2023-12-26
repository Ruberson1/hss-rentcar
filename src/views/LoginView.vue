<script setup lang="ts">
import LoginForm from "../components/login/LoginForm.vue";
import {onBeforeMount} from "vue";
import {useSidebarStore} from "../stores/sidebar.ts";

onBeforeMount(() => {

  const visible = useSidebarStore();
  visible.isVisible = false
})
</script>

<template>
 <LoginForm />

</template>

<style scoped>

</style>