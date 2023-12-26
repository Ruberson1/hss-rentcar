<script setup lang="ts">
import Calendar from 'primevue/calendar';
import {ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

const minDate = new Date();
const form = ref({
  start_reservation_date: '',
  end_reservation_date: '',
  user_id: route.params.userId
});
const endDate = ref();
</script>

<template>
  <form @submit.prevent="" class="mt-5" >
    <div class=" mb-3">
      <div class="col" style="width: 80rem;">
        <span>Data de retirada:</span>
        <Calendar :minDate="minDate" v-model="startDate" showIcon iconDisplay="input" />
      </div>
      <div class="mt-3">
        <span>Data de devolução:</span>
        <Calendar :minDate="minDate" v-model="endDate" showIcon iconDisplay="input" />
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Confirmar</button>
  </form>
</template>

<style scoped>

</style>