import { defineStore } from 'pinia';
import axios from "axios";

export const useCategoryStore = defineStore({

    id: 'category',
    state: () => ({
        category: null
    }),

    getters: {
        getCategory: (state) => state.category
    },

    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie');
        },

        async getCategories() {
            await this.getToken();
            try {
                await this.getToken();
                const data = await axios.get('/api/categories/list');
                this.category = data.data;
            } catch (e: any) {
                console.error(e);
            }
        },


    }
});