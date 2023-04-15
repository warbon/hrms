<template>
  <q-page padding>
    <div class="text-h5">Dashboad</div>
    <div class="row q-mt-xl">
      <div class="col q-px-sm">
        <CardSummary />
      </div>
      <div class="col q-px-sm">
        <CardSummary />
      </div>
      <div class="col q-px-sm">
        <CardSummary />
      </div>
      <!--
     we have 3 children, so equivalent
     to above would be to use `col-4`
     on each of the children
  -->
    </div>
  </q-page>
</template>

<script>
export default {

}
</script>

<style></style>