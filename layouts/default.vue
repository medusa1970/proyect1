<template>
  <div>
    <q-layout>
      <q-header class="bg-orange-10">
        <q-toolbar>
          <q-btn flat round dense to="/">
            <q-icon name="home" />
          </q-btn>
          <q-tabs>
            <q-tab label="Menu" to="/" />
            <q-tab label="Catalogo" to="/catalogo" />
            <q-tab label="Mision" to="/mision" />
            <q-tab label="Soporte" to="/soporte" />
          </q-tabs>
          <q-space />
          <q-btn flat no-caps label="Registrarme" to="/registrarme" />
          <q-btn flat round to="/login">
            <q-avatar size="30px">
              <img src="/public/siipi-avatar.svg" />
            </q-avatar>
            <q-tooltip class="bg-orange text-body2" :offset="[10, 10]">
              Login
            </q-tooltip>
          </q-btn>
        </q-toolbar>
      </q-header>
      <q-drawer></q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
      <q-footer></q-footer>
    </q-layout>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
