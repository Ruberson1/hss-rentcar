<script setup lang="ts">
import { useCategoryStore} from "../../stores/category.ts";
import {onMounted, ref} from "vue";
import CategoryCard from "./CategoryCard.vue";


const categoryStore = useCategoryStore();
const categories = ref();
onMounted(async() => {
  await categoryStore.getCategories();
  categories.value = categoryStore.category;
})
</script>

<template>
  <CategoryCard :categories="categories"/>
</template>

<style scoped>

</style>