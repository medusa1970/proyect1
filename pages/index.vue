<template>
  <div class="q-pa-md row items-start" style="height: 97%; overflow: hidden">
    <div class="col-xs-12 col-sm-12 col-md-8 col-8" style="height: 100%">
      <div>
        <div class="text-h6 monda-Bold">¡Bienvenido a SiiPi!</div>
      </div>
      <div :class="{ 'q-pr-lg': $q.platform.is.desktop }" style="height: 100%">
        <q-scroll-area style="height: 100%">
          <div
            class="q-py-md text-subtitle1 monda-Regular text-grey-8 text-justify"
          >
            Descubre un mundo de productos naturales y saludables que
            transformarán tu alimentación. Te invitamos a explorar nuestro menú,
            donde encontrarás opciones deliciosas y nutritivas, diseñadas para
            cuidar de tu bienestar. Aprende sobre la importancia de una buena
            alimentación y cómo nuestros productos pueden ayudarte a llevar un
            estilo de vida más saludable. ¡Tu camino hacia el bienestar comienza
            aquí!.
          </div>
        </q-scroll-area>
      </div>
    </div>
    <q-img
      v-if="$q.platform.is.desktop"
      class="col-4"
      src="/images/home-siipi.jpg"
      fit="contain"
    />
  </div>
</template>

<script setup></script>
