<template>
  <div
    :class="{
      bg_desktop: $q.platform.is.desktop,
      bg_mobile: $q.platform.is.mobile,
    }"
  >
    <q-layout view="hHh Lpr lFf">
      <q-header class="bg-orange" elevated>
        <q-toolbar>
          <div v-if="$q.platform.is.mobile" class="row">
            <q-btn
              flat
              round
              color="grey-8"
              icon="menu"
              @click="drawer = !drawer"
            />

            <NuxtLink to="/" class="row items-center">
              <img src="/logo-siipi-ngr.svg" alt="logo" height="35" />
            </NuxtLink>
          </div>
          <q-tabs
            v-model="tab"
            dense
            class="text-white"
            v-if="$q.platform.is.desktop"
          >
            <q-tab
              v-for="item in menuList"
              v-model="tab"
              :name="item.name"
              :label="item.name"
              @click="navigateTo(item.to)"
            />
          </q-tabs>
          <q-space />
          <q-btn flat round color="white" icon="home">
            <q-tooltip class="bg-orange text-body2" :offset="[10, 10]">
              Home SiiPi
            </q-tooltip>
          </q-btn>
          <q-btn flat round color="white" icon="restaurant">
            <q-tooltip class="bg-orange text-body2" :offset="[10, 10]">
              Menu saludable SiiPi
            </q-tooltip>
          </q-btn>
          <q-btn flat round color="white" icon="shopping_cart">
            <q-badge color="red" text-color="white" floating label="3" />
            <q-tooltip class="bg-green text-body2" :offset="[10, 10]">
              Mi pedido
            </q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="30px">
              <img src="/public/siipi-avatar.svg" />
            </q-avatar>
            <q-menu>
              <q-list style="min-width: 180px">
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-icon name="login" />
                  </q-item-section>
                  <q-item-section>Login</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-icon name="person_add" />
                  </q-item-section>
                  <q-item-section>Registrarme</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-icon name="info" />
                  </q-item-section>
                  <q-item-section>Información</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </q-header>
      <q-drawer v-model="drawer" bordered class="bg-grey-2">
        <q-img src="/siipi-mandala-gris.svg" style="height: 150px" />

        <q-scroll-area class="fit">
          <q-list padding>
            <div v-for="item in menuList">
              <q-item :key="item.name" v-ripple clickable :to="item.to">
                <q-item-section avatar>
                  <q-icon color="grey" :name="item.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-grey-9">{{
                    item.name
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator v-if="item.separator" class="q-my-md" />
            </div>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container
        class="row"
        style="width: 100%; height: calc(100vh - 300px)"
      >
        <div
          v-if="$q.platform.is.desktop"
          class="column col-4 justify-center items-center"
          style="height: calc(100vh - 300px)"
        />

        <div
          class="col-xs-12 col-sm-8 q-pa-md"
          style="height: calc(100vh - 300px)"
        >
          <div class="bordered" style="width: 100%; height: 100%">
            <NuxtPage />
          </div>
        </div>
      </q-page-container>
      <q-footer
        elevated
        class="row q-col-gutter-x-sm bg-black"
        :style="footerStyle"
      >
        <NuxtLink
          v-if="$q.platform.is.desktop"
          v-for="i in footerImagesH"
          :to="i.to"
          class="col-4"
        >
          <q-img :src="i.img" class="col-4" />
        </NuxtLink>
        <NuxtLink
          v-if="$q.platform.is.mobile"
          v-for="i in footerImagesV"
          :to="i.to"
          class="col-4"
        >
          <q-img :src="i.img" class="col-4" />
        </NuxtLink>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const router = useRouter();
const footerStyle = computed(() => {
  if ($q.platform.is.mobile) {
    return { height: '200px' };
  }
  if ($q.platform.is.desktop) {
    return { height: '250px' };
  }
});
const navigateTo = (path: string) => {
  router.push(path);
};
const drawer = ref(false);
const tab = ref('Home');
const menuList = ref([
  { name: 'Home', to: '/', icon: 'home' },
  { name: 'SiiPi ?', to: '/main/siipi', icon: 'home' },
  { name: 'Menú', to: '/main/menu', icon: 'menu' },
  { name: 'Catálogo', to: '/logout', icon: 'menu_book', separator: true },
  { name: 'Novedades', to: '/settings', icon: 'new_releases' },
  { name: 'Pedidos', to: '/soporte', icon: 'shopping_cart', separator: true },
  { name: 'Soporte', to: '/vision', icon: 'support' },
]);
const footerImagesH = ref([
  { img: '/banners/promociones-h.jpg', to: '/promotions' },
  { img: '/banners/menu-h.jpg', to: '/menu' },
  { img: '/banners/catalogo-h.jpg', to: '/catalog' },
]);
const footerImagesV = ref([
  { img: '/banners/promociones-v.jpg', to: '/promotions' },
  { img: '/banners/menu-v.jpg', to: '/menu' },
  { img: '/banners/catalogo-v.jpg', to: '/catalog' },
]);
</script>

<style scoped>
.bg_mobile {
  background-image: url('/public/siipi-mandala-trans.svg'); /* Ruta a tu imagen */
  background-size: 100%; /* Ajusta el tamaño de la imagen a 200px por 200px */
  background-position: center -50px; /* Posiciona la imagen a 50px desde la izquierda y 100px desde la parte superior */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  width: 100%; /* Ancho del div */
  height: 100vh; /* Altura del div, en este caso, 100% de la altura de la ventana */
}
.bg_desktop {
  background-image: url('/public/siipi-mandala-gris.svg'); /* Ruta a tu imagen */
  background-size: 30%; /* Ajusta el tamaño de la imagen a 200px por 200px */
  background-position: 10px 40px; /* Posiciona la imagen a 50px desde la izquierda y 100px desde la parte superior */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  width: 100%; /* Ancho del div */
  height: 100vh; /* Altura del div, en este caso, 100% de la altura de la ventana */
}
</style>

<!-- npx nuxt dev --hostname 0.0.0.0 -->
