<template>
  <div v-if="$q.platform.is.desktop" style="height: 100%">
    <q-card style="width: 100%; height: 100%" class="bg-transparent">
      <q-tab-panels
        v-model="tab"
        animated
        style="height: calc(94% - 12px)"
        class="bg-transparent"
      >
        <q-tab-panel v-for="i in tabText" :name="i.name" animated>
          <div class="row" style="height: 100%; width: 100%">
            <div class="col-10">
              <div class="text-h6 text-green">{{ i.title }}</div>
              <q-separator class="q-mb-md" />
              <div class="row">
                <div class="text-subtitle1 monda-Bold">Jugo Sii-Pi</div>
                <div class="text-subtitle1 q-pl-sm text-grey">
                  (1 Semilla + 1 Fruta)
                </div>
              </div>
            </div>
            <div class="col-2"></div>
          </div>
        </q-tab-panel>
      </q-tab-panels>

      <q-separator />

      <q-tabs
        v-model="tab"
        dense
        class="text-grey-6 bg-grey-10"
        active-color="white"
        indicator-color="orange"
        align="justify"
        narrow-indicator
      >
        <q-tab v-for="i in tabText" :name="i.name" :label="i.name" no-caps="" />
      </q-tabs>
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
      >aaa
      <q-tab
        v-for="i in tabText"
        :name="i.name"
        label="Convinacion de fruta y Grano"
      />
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
const tab = ref('Jugos');
const tabText = ref([
  {
    name: 'Jugos',
    title: 'Jugos de fruta y Granos',
  },
  {
    name: 'Cafetería',
    title: 'Misión',
  },
  {
    name: 'Infusiones',
    title: 'Visión',
  },
  {
    name: 'Frapu-Sii',
    title: 'Visión',
  },
  {
    name: 'Masitas',
    title: 'Visión',
  },
  {
    name: 'Almuerzos',
    title: 'Visión',
  },
]);
</script>
