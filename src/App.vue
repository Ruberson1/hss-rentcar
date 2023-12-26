<script setup lang="ts">
import SidebarComponent from "./components/app/SidebarComponent.vue";
import {useSidebarStore} from "./stores/sidebar.ts";

const visible = useSidebarStore();
</script>

<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <SidebarComponent v-if="visible.isVisible" />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
