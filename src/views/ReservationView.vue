<script setup lang="ts">
import axios from 'axios';
// import { useReservationStore } from '../stores/reservation';
import { onMounted, ref } from 'vue';

const reservations = ref();

const handleListReservation = async () => {
    try {
        // await this.getToken();
        const resp = await axios.get('/api/reservation/list');
        reservations.value = resp.data;
    } catch (e: any) {
        console.error(e.message);
    }
}

onMounted(async () => {
    handleListReservation();
});


</script>

<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Cliente</th>
                <th scope="col">Categoria</th>
                <th scope="col">Data de retirada</th>
                <th scope="col">Data de devolução</th>
            </tr>
        </thead>
        <tbody v-for="reservation in reservations" :key="reservation.id">
            <tr>
                <th scope="row">{{ reservation.id }}</th>
                <td>{{ reservation.user_id }}</td>
                <td>{{ reservation.category_id }}</td>
                <td>{{ reservation.start_reservation_date }}</td>
                <td>{{ reservation.end_reservation_date }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>