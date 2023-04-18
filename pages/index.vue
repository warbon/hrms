<template>
  <q-page padding>
    <div class="text-h5">Dashboard</div>
    <div class="row q-mt-xl">
      <div class="col q-px-sm">
        <CardSummary title="23" subtitle="New Members" icon="people_outline" icon-backgound="bg-primary" />
      </div>
      <div class="col q-px-sm">
        <CardSummary title="456" subtitle="Active Members" icon="o_person" icon-backgound="bg-positive" />
      </div>
      <div class="col q-px-sm">
        <CardSummary title="13" subtitle="Resignees" icon="people_outline" icon-backgound="bg-negative" />
      </div>
      <!--
     we have 3 children, so equivalent
     to above would be to use `col-4`
     on each of the children
  -->
    </div>
  </q-page>
</template>

<script setup lang="ts">
</script>

<style></style>