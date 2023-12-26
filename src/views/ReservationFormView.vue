<script setup lang="ts">
import Calendar from 'primevue/calendar';
import {ref} from "vue";
import {useRoute} from "vue-router";
import { useReservationStore } from "../stores/reservation.ts";

const route = useRoute();
const reservationStore = useReservationStore();
const minDate = new Date();
const form = ref({
  startDate: '',
  endDate: '',
  userId: route.params.userId
});
</script>

<template>
  <form @submit.prevent="reservationStore.handleCreateReservation(form)" class="mt-5" >
    <div class=" mb-3">
      <div class="col" style="width: 80rem;">
        <span>Data de retirada:</span>
        <Calendar showTime hourFormat="24" :minDate="minDate" v-model="form.startDate" showIcon iconDisplay="input" />
      </div>
      <div class="mt-3">
        <span>Data de devolução:</span>
        <Calendar showTime hourFormat="24" :minDate="minDate" v-model="form.endDate" showIcon iconDisplay="input" />
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Confirmar</button>
  </form>
</template>

<style scoped>

</style>