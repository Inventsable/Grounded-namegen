<script setup lang="ts">
import { ref } from 'vue';

import { generateName } from '../generator'

const alert = ref(false),
  showing = ref(false),
  name = ref<string>("");

function runName() {
  alert.value = true;
  console.log("Hello")
  name.value = generateName(false);
  console.log(name.value);
}

function copyContent() {
  navigator.clipboard.writeText(name.value);
  showing.value = true;
  setTimeout(() => {
    showing.value = false;
  }, 2000);
}

</script>

<template>
  <q-page class="column items-center justify-evenly">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" flat bordered>
        <q-card-section>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ name || "Roll a new name" }}</div>
        </q-card-section>

        <q-card-actions>
          <q-space />
          <q-btn flat icon="content_copy" color="primary" @click="copyContent" @mouseenter="showing = false">
            <q-tooltip v-model="showing" no-parent-event>Copied</q-tooltip>
          </q-btn>
          <q-btn flat color="dark" label="Generate name" @click="runName" />
        </q-card-actions>

      </q-card>
    </div>
  </q-page>
</template>


<style>
.my-card {
  min-width: 450px;
}
</style>