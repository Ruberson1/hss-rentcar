<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';
import { useRoute} from "vue-router";
import {ref} from "vue";

const auth = useAuthStore();
const route = useRoute();
const form = ref({
  email: route.query.email,
  password: '',
  password_confirmation: '',
  token: route.params.token
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

            <form @submit.prevent="auth.handleResetPass({form : form})" style="width: 23rem;" >

              <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Escolha sua nova senha!</h3>

              <div class="alert alert-success" role="alert" v-if="auth.status">
                {{ auth.status }}
              </div>

              <div class="form-floating mb-3">
                <input v-model="form.email"  class="form-control" id="form2Example18" placeholder="name@example.com">
                <div v-if="auth.errors.email" class="d-flex">
                  <span><small class="text-danger">{{ auth.errors.email[0] }}</small></span>
                </div>
                <label for="form2Example18">Email</label>
              </div>

              <div class="form-floating mb-3">
                <input v-model="form.password" type="password"
                       class="form-control form-control-lg" id="form2Example28" placeholder="Password">
                <div v-if="auth.errors.password" class="d-flex">
                  <span><small class="text-danger">{{ auth.errors.password[0] }}</small></span>
                </div>
                <label for="form2Example28">Senha</label>

              </div>

              <div class="form-floating mb-3">
                <input v-model="form.password_confirmation" type="password" class="form-control form-control-lg"
                       id="form2Example28" placeholder="Password">
                <div v-if="auth.errors.password_confirmation" class="d-flex">
                  <span><small class="text-danger">{{ auth.errors.password_confirmation[0] }}</small></span>
                </div>
                <label for="form2Example28">Confirme a Senha</label>
              </div>

              <div class=" pt-1 mb-4">
                <button  type="submit" class="btn btn-primary btn-lg btn-block">
                  Finalizar
                </button>
              </div>

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