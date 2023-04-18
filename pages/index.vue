<template>
  <q-page padding>
    <div class="text-h5">Dashboard</div>
    <div class="row q-mt-xl">
      <template v-for="(item, index) in widgetList" :key="index">
        <div class="col q-px-sm">
        <CardWidget 
          :title="item.title" 
          :subtitle="item.subTitle" 
          :icon="item.icon" 
          :background-color="item.backgroundColor" 
          :text-color="item.textColor" />
      </div>
      </template>
    </div>
  </q-page>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const widgetList = [
  {
    icon: 'o_group_add',
    title: '23',
    subTitle: 'Total number of new members',
    backgroundColor: 'bg-primary',
    textColor : 'text-white'
  },
  {
    icon: 'people_outline',
    title: '243',
    subTitle: 'Total number of active members',
    backgroundColor: 'bg-positive',
    textColor : 'text-white'
  },
  {
    icon: 'o_group_remove',
    title: '14',
    subTitle: 'Total number of separated members',
    backgroundColor: 'bg-negative',
    textColor : 'text-white'
  }
]
</script>

<style></style>