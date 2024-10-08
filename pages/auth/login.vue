<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="username"
        label="Usuario *"
        hint="Usuario de SiiPi"
      />

      <q-input filled v-model="password" label="Password *" type="password" />

      <div>
        <q-btn label="Ingresar" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
    <h5>{{ respuesta }}</h5>
  </div>
</template>

<script setup lang="ts">
const username = ref('');
const password = ref('');
const respuesta = ref('no sabemos si es un usuario valido');

const onSubmit = () => {
  if (username.value === 'admin' && password.value === '123456') {
    respuesta.value = 'usuario valido';
  } else {
    respuesta.value = 'eres una pirata fuera de aqui';
  }
};
const onReset = () => {
  username.value = '';
  password.value = '';
  respuesta.value = 'no sabemos si es un usuario valido';
};
</script>

<style scoped></style>
