<template>
    <QCard flat bordered  style="border-radius:15px; height: 250px;">
       <q-icon color="grey-4" name="o_format_quote" size="90px" class="absolute-bottom-right q-pa-sm"></q-icon>
       <q-item >
         <q-item-section avatar>
            <q-icon name="o_format_quote" color="positive" size="md"></q-icon>
         </q-item-section>
 
         <q-item-section>
           <q-item-label class="text-bold text-positive text-h6" >Qoute of the Day</q-item-label>
         </q-item-section>
         
       </q-item>
 
       <q-separator></q-separator>
 
       <q-card-section class="q-pt-none q-pb-lg">
         <q-item-label header class="text-center text-h5">
            The future belongs to those who believe in the
            beauty of their dreams.
         </q-item-label>
         <q-item-label header class="text-center text-h5 text-bold text-left">
           - Eleanor Roosevelt
         </q-item-label>
       </q-card-section>
      
     </QCard>
 </template>
 
 <script setup lang="ts">
 
 </script>
 
 <style scoped>
 
 </style>