<template>
      <q-card flat bordered :class="`${backgroundColor} ${textColor}`" >
        <q-card-section horizontal>
          <q-card-section class="text-white">
            <q-icon size="xl" :name="icon"/>
          </q-card-section>
  
          <!-- <q-separator vertical /> -->
  
          <q-card-section>
            <div class="text-h5 text-bold">{{ title }}</div>
            <div class="text-caption" >{{ subtitle }}</div>
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
  backgroundColor: {
    type: String,
    //required: true,
  },
  textColor: {
    type: String,
    //required: true,
  },
})


</script>