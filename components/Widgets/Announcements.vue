<template>
   <QCard flat bordered class="q-mt-lg" style="border-radius:15px; height: 210px;">
      <!-- <q-card-actions align="between" class="q-pa-lg">
        <div class="text-h5 text-positive text-bold">
            Announcements
        </div>
      <QBtn rounded outline dense color="positive" padding="xs xl"> 
        View All
      </QBtn>
       
      </q-card-actions> -->

      <q-item >
        <q-item-section avatar>
           <q-icon name="o_campaign" color="positive" size="md"></q-icon>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold text-positive text-h6" >Announcements</q-item-label>
        </q-item-section>

        <q-btn rounded outline dense no-caps color="positive" padding="none lg">View All</q-btn>
        
      </q-item>

      <q-separator></q-separator>

      <q-card-section class="q-pt-none q-pb-lg">
        <q-item-label header class="text-bold text-center">No Announcement</q-item-label>
        <q-icon color="grey" name="o_announcement" size="80px" class="absolute-center q-mt-xl"></q-icon>
      </q-card-section>
    </QCard>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>