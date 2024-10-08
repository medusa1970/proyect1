<template>
  <div v-if="$q.platform.is.desktop" class="q-pa-md">
    <q-card style="width: 100%; height: 100%" class="bg-transparent">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey-4 bg-green"
        active-color="white"
        indicator-color="orange"
        align="justify"
      >
        <q-tab name="qsomos" label="Quienes Somos" />
        <q-tab name="mision" label="Misión" />
        <q-tab name="vision" label="Visión" />
      </q-tabs>

      <q-separator />

      <q-tab-panels
        v-model="tab"
        animated
        style="height: calc(94% - 16px)"
        class="bg-transparent"
      >
        <q-tab-panel v-for="i in tabText" :name="i.name" class="row">
          <div class="col-8">
            <div class="text-h6">{{ i.title }}</div>
            <div
              class="text-subtitle1 q-mt-md q-pr-xl text-grey-8 text-justify"
            >
              {{ i.text }}
            </div>
          </div>
          <div class="col-4">
            <q-img class="col-4" :src="i.img" />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>

  <div v-if="$q.platform.is.mobile">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey-4 bg-green"
      active-color="white"
      indicator-color="orange"
      align="justify"
    >
      <q-tab name="qsomos" label="Quienes Somos" />
      <q-tab name="mision" label="Misión" />
      <q-tab name="vision" label="Visión" />
    </q-tabs>

    <q-separator />

    <q-tab-panels
      v-model="tab"
      animated
      style="height: calc(94% - 16px)"
      class="bg-transparent"
    >
      <q-tab-panel v-for="i in tabText" :name="i.name">
        <div class="text-subtitle2 text-grey-8 text-justify">
          {{ i.text }}
        </div>
        <div class="items-start row justify-center q-mt-md">
          <div class="col-8"><q-img :src="i.img" /></div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup>
const tab = ref('qsomos');
const tabText = ref([
  {
    name: 'qsomos',
    title: 'Quienes Somos',
    text: 'Somos un equipo de personas que, con esfuerzo y dedicación, hemos logrado superar desafíos económicos y construir algo extraordinario. A través del trabajo en equipo, aprendimos a fabricar nuestros propios muebles, diseñar nuestras máquinas y levantar cada uno de nuestros proyectos. Creemos en el poder de la perseverancia, el aprendizaje continuo y el trabajo en comunidad para seguir creciendo y alcanzando nuevas metas.',
    img: '/images/quienes.jpg',
  },
  {
    name: 'mision',
    title: 'Misión',
    text: 'Nuestra misión es influir de manera positiva en los hábitos de las personas, promoviendo la conciencia física, mental y espiritual. Queremos que quienes nos eligen sean más conscientes de lo que consumen, escuchan, piensan y hacen. Por eso, además de ofrecer un menú saludable y exquisito, cuidamos cada detalle en nuestros espacios, desde la música hasta los libros, todos alineados con nuestro propósito de contribuir a un mundo más consciente.',
    img: '/images/mision.jpg',
  },
  {
    name: 'vision',
    title: 'Visión',
    text: 'Nuestra visión es convertirnos en referentes de productos naturales y saludables, impactando inicialmente a nivel nacional y luego expandiendo nuestra presencia globalmente. Llevamos siempre nuestra misión como guía, promoviendo hábitos de vida más conscientes y saludables en cada comunidad a la que llegamos.',
    img: '/images/vision.jpg',
  },
]);
</script>
