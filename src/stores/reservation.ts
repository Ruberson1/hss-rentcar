import { defineStore } from 'pinia';
import axios from "axios";
import { dateFormat } from '../dateFormat.ts'
export const useReservationStore = defineStore({

    id: 'reservation',
    state: () => ({
        reservation: null
    }),

    getters: {
        getReservation: (state) => state.reservation
    },

    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie');
        },

        async handleCreateReservation(form: any) {
            try {
                await this.getToken();
                await axios.post('/api/reservation/register', {
                    start_reservation_date: dateFormat(form.startDate),
                    end_reservation_date: dateFormat(form.endDate),
                    user_id: form.userId
                });
            } catch (e: any) {
                console.error(e);
            }
        },

        


    }
});