<template>
  <q-page padding>
    <div class="q-gutter-sm q-pl-sm">
      <div class="text-h4">Hello, Elon Musk!</div>
      <div class="text-h5 text-grey-14">Dashboard</div>
    </div>

    <div class="row q-mt-xs">
      <div class=" col-4 q-px-sm">
        <WidgetsTimeCard />
      </div>
      <div  class=" col-8">
        <WidgetsAnnouncements />
      </div>
     
    </div>

    <QCard flat bordered class="q-mt-md" style="border-radius:15px;">
      <q-card-actions align="right">
        <q-btn round flat color="positive" icon="chevron_left" />
        <q-chip outline size="md" color="positive" text-color="white" class="q-px-lg">
          2023
        </q-chip>
        <q-btn round flat color="positive" icon="chevron_right" />
      </q-card-actions>

      <q-card-section class="q-pt-none q-pb-lg">
        <div class="row">
          <template v-for="(item, index) in widgetList" :key="index">
            <div class="col q-px-sm">
              <CardWidget :title="item.title" :subtitle="item.subTitle" :icon="item.icon"
                :background-color="item.backgroundColor" :text-color="item.textColor" />
            </div>
          </template>
        </div>
      </q-card-section>
    </QCard>

    <div class="row q-mt-md">
      <div  class=" col-8">
          <MembersWidget />
          <SeparatedMembers />
      </div>
      <div class=" col-4 q-px-sm">
          <WidgetsDailyQoute />
      </div>
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
    textColor: 'text-white'
  },
  {
    icon: 'people_outline',
    title: '243',
    subTitle: 'Total number of active members',
    backgroundColor: 'bg-positive',
    textColor: 'text-white'
  },
  {
    icon: 'o_group_remove',
    title: '14',
    subTitle: 'Total number of separated members',
    backgroundColor: 'bg-negative',
    textColor: 'text-white'
  }
]
</script>

<style></style>