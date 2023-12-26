import { defineStore } from 'pinia';
import axios from "axios";
import router from "../router";

export const useAuthStore = defineStore({

    id: 'auth',
    state: () => ({
        showNameInput: false,
        isRegistering: false,
        buttonLabel: 'Entrar',
        questionLabel: 'Não tem uma conta?',
        buttonRegisterLabel: 'Cadastre-se',
        authErrors: [],
        authStatus: null,
        authUser: null
    }),

    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus
    },

    actions: {
        toggleRegistration() {
            this.isRegistering = !this.isRegistering;
            this.showNameInput = this.isRegistering;
            this.buttonLabel = this.isRegistering ? 'Cadastrar' : 'Entrar';
            this.questionLabel = this.isRegistering ? 'Já tem uma conta?' : 'Não tem uma conta?';
            this.buttonRegisterLabel = this.isRegistering ? 'Entrar' : 'Cadastre-se';
        },

        async getToken() {
            await axios.get('/sanctum/csrf-cookie');
        },

        async getUser() {
            try {
                await this.getToken();
                const data = await axios.get('/api/user');
                this.authUser = data.data;
            } catch (e: any) {
                if(e.response.status === 401) {
                    await router.push("/login");
                }
            }
        },

        async handleForgotPass(email: any) {
            await this.getToken();
            this.authErrors = [];
            try {
                const resp = await axios.post('/forgot-password', {email: email});
                this.authStatus = resp.data.status;
            } catch (e: any) {
                if (e.response.status === 422) {
                    this.authErrors = e.response.data.errors;
                }
            }
        },

        async handleLoginOrRegister({form}: { form: any }) {
            await this.getToken();
            this.authErrors = [];
            if (this.isRegistering) {
                try {
                    await axios.post(`/register`, {
                        name: form.name,
                        email: form.email,
                        cpf: form.cpf,
                        password: form.password,
                        password_confirmation: form.password_confirmation
                    });
                    await router.push("/");
                } catch (e: any) {
                    if (e.response.status === 422) {
                        this.authErrors = e.response.data.errors;
                    }
                }
            } else {
                try{
                    await axios.post(`/login`, {
                        email: form.email,
                        password: form.password
                    });
                    await router.push("/");
                } catch (e: any) {
                    if (e.response.status === 422) {
                        this.authErrors = e.response.data.errors;
                    }
                }
                
            }
        },

        async handleLogout() {
            await axios.post("/logout");
            this.authUser = null;
            await router.push("/login");
        },

        async handleResetPass({form}: { form: any }) {
            this.authErrors = [];
            try {
                const resp = await axios.post('/reset-password', form);
                this.authStatus = resp.data.status;
                await router.push("/login");
            } catch (e: any) {
                if (e.response.status === 422) {
                    this.authErrors = e.response.data.errors;
                }
            }
        }
    }
});