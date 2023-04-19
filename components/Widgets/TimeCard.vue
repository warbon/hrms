<template>
    <q-card flat bordered class="q-mt-lg" style="border-radius:15px; height: 210px;">
      <q-item >
        <q-item-section avatar>
           <q-icon name="o_schedule" color="positive" size="md"></q-icon>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold text-positive text-h6" >Time Card</q-item-label>
        </q-item-section>

        <q-btn rounded outline dense no-caps color="positive" padding="none lg" >View Logs</q-btn>
        
      </q-item>

      <q-separator></q-separator>

      <q-card-section horizontal>
        <q-card-section class="text-center">
           <div class="text-h5">07:13:06 AM</div>
          <q-item-label caption class="text-bold">
            TUESDAY, SEPTEMBER 18 2023
          </q-item-label>
        </q-card-section>

        <q-separator vertical></q-separator>

        <q-card-section class="text-bold" >
            <q-item-label>Time In</q-item-label>
          <q-item-label caption>
            07:30 AM
          </q-item-label>
           <q-item-label>Time Out</q-item-label>
          <q-item-label caption>
            ---
          </q-item-label>
        </q-card-section>
      </q-card-section>
        <q-separator></q-separator>

      <q-card-actions align="between" class="q-px-md text-white" :class="InOut == 'one' ? 'bg-green-5' : 'bg-red-5'">
        <q-item-label >Current Status</q-item-label>
        <q-btn-toggle
        v-model="InOut"
        no-caps
        glossy
        rounded
        :toggle-color="InOut == 'one' ? 'positive' : 'negative'"
        color="white"
        :text-color="InOut == 'one' ? 'negative' : 'positive'"
        :options="[
          {label: 'Time In', value: 'one'},
          {label: 'Time Out', value: 'two'}
        ]"
      />
        <!-- <q-toggle
        
         v-model="InOut"
         icon="alarm"
      /> -->
      </q-card-actions>
    </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const InOut = ref('one')

</script>

<style scoped>

</style>