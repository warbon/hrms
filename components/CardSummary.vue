<template>
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section :class="iconBackgound" class="text-white">
            <q-icon size="xl" :name="icon"/>
          </q-card-section>
  
          <q-separator vertical />
  
          <q-card-section>
            <div class="text-h5">{{ title }}</div>
            <div class="text-subtitle2 text-grey">{{ subtitle }}</div>
          </q-card-section>
        
        </q-card-section>
      </q-card>
  </template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
   // required: true,
  },
  icon: {
    type: String,
    //required: true,
  },
  iconBackgound: {
    type: String,
    //required: true,
  },
})


</script>