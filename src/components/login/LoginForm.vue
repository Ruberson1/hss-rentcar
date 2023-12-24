<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';
import {ref} from "vue";

const auth = useAuthStore();
const form = ref({
  name:'',
  email: '',
  cpf: '',
  password: '',
  password_confirmation: ''
})

</script>

<template>
  <section class="vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 text-black">

          <div class="px-5 ms-xl-4">
            <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i>
            <span class="h1 fw-bold mb-0">HSS RentCar</span>
          </div>

          <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-2 pt-5 pt-xl-0 mt-xl-n5">

            <form @submit.prevent="auth.handleLoginOrRegister({form : form})" style="width: 23rem;" >

              <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Bem vindo!</h3>

              <div class="form-floating mb-3" v-if="auth.showNameInput">
                <input v-model="form.name" type="text" class="form-control form-control-lg" id="form2Example18" placeholder="">
                <div v-if="auth.errors.name" class="d-flex">
                  <span><small class="text-danger">{{ auth.errors.name[0] }}</small></span>
                </div>
                <label for="form2Example18">Nome</label>
              </div>

              <div class="form-floating mb-3">
                <input v-model="form.email"  class="form-control" id="form2Example18" placeholder="name@example.com">
                <div v-if="auth.errors.email" class="d-flex">
                  <span><small class="text-danger">{{ auth.errors.email[0] }}</small></span>
                </div>
                <label for="form2Example18">Email</label>
              </div>

              <div class="form-floating mb-3" v-if="auth.showNameInput">
                <input v-model="form.cpf" type="text" class="form-control form-control-lg" id="form2Example18"
                       placeholder="">
                <div v-if="auth.errors.cpf" class="d-flex">
                  <span><small class="text-danger">{{ auth.errors.cpf[0] }}</small></span>
                </div>
                <label for="form2Example18">CPF</label>
              </div>

              <div class="form-floating mb-3">
                <input v-model="form.password" type="password"
                       class="form-control form-control-lg" id="form2Example28" placeholder="Password">
                <div v-if="auth.errors.password" class="d-flex">
                  <span><small class="text-danger">{{ auth.errors.password[0] }}</small></span>
                </div>
                <label for="form2Example28">Senha</label>

              </div>

              <div class="form-floating mb-3" v-if="auth.showNameInput">
                <input v-model="form.password_confirmation" type="password" class="form-control form-control-lg"
                       id="form2Example28" placeholder="Password">
                <div v-if="auth.errors.password_confirmation" class="d-flex">
                  <span><small class="text-danger">{{ auth.errors.password_confirmation[0] }}</small></span>
                </div>
                <label for="form2Example28">Confirme a Senha</label>
              </div>

              <div class=" pt-1 mb-4">
                <button  type="submit" class="btn btn-primary btn-lg btn-block">
                  {{ auth.buttonLabel }}
                </button>
              </div>

              <p class="small mb-3 pb-lg-2"><router-link class="text-muted"  to="/forgot-pass">Esqueceu a senha?</router-link></p>
              <p>{{ auth.questionLabel }} <a href="#!" @click="auth.toggleRegistration" class="text-primary">{{ auth.buttonRegisterLabel }}</a></p>

            </form>

          </div>

        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src="../../../public/images/bg.jpg"
               alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>