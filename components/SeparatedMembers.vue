<template>
    <div class="q-mt-md" >
      <q-table 
        flat 
        bordered 
        title="Users" 
        :rows="rows" 
        :columns="columns" 
        row-key="name" 
        style="border-radius:15px;"
      >
  
        <template v-slot:top>
          <div class="text-h5 text-negative">
            <q-icon name="o_group_remove"></q-icon>
            Separated Members
          </div>
          <q-space />
          <q-chip outline color="negative">
            2023
          </q-chip>
        </template>

        <template v-slot:body-cell-photo="props">
        <q-td :props="props">
          <div>
            <q-avatar > 
                <img :src="props.value">
            </q-avatar>
          </div>
        </q-td>
        
        </template>
  
      </q-table>
    </div>
  </template>
    
  <script>
  const columns = [
    { name: 'id', label: 'ID', align: 'center', field: 'id', sortable: true },
    { name: 'photo', align: 'center', label: 'Photo', field: 'photo'},
    {
      name: 'name',
      required: true,
      label: 'Full Name',
      align: 'left',
      field: row => row.name,
      format: val => `${val}`,
      sortable: true
    },
    // { name: 'email', align: 'center', label: 'Email', field: 'email', sortable: true },
    // { name: 'status', label: 'Status', field: 'status', sortable: true },
    // { name: 'created_at', label: 'Created At', field: 'created_at', sortable: true },
    { name: 'date_separated', label: 'Date Separated', field: 'date_separated', sortable: true },
    { name: 'action', label: 'Action', field: 'action' }
  ]
  
  const rows = [
    {
      id: 159,
      photo: "https://cdn.quasar.dev/img/avatar6.jpg",
     // photo: "~/assets/images/avatar_bgwhite.png",
      name: 'Sheryll Chan',
      date_separated: '12/12/2022',
      action: 'edit'
    },
    {
      id: 160,
      photo: "https://cdn.quasar.dev/img/avatar3.jpg",
      name: 'Mary Francine Nicole Arbon',
      date_separated: '12/12/2022',
      action: 'edit'
    },
    {
      id: 161,
      photo: "https://cdn.quasar.dev/img/avatar4.jpg",
      name: 'Christian Manloloyo',
      date_separated: '12/12/2022',
      action: 'edit'
    },
    {
      id: 162,
      photo: "https://cdn.quasar.dev/img/avatar5.jpg",
      name: 'Emilia Clarke',
      date_separated: '12/12/2022',
      action: 'edit'
    },
    {
      id: 163,
      photo: "https://cdn.quasar.dev/img/avatar1.jpg",
      name: 'Ariel Manayon',
      date_separated: '12/12/2022',
      action: 'edit'
    },
    {
      id: 164,
      photo: "https://cdn.quasar.dev/img/avatar4.jpg",
      name: 'Wilfredo Arbon',
      date_separated: '12/12/2022',
      action: 'edit'
    }
  ]
  
  export default {
    setup() {
      return {
        columns,
        rows
      }
    }
  }
  </script>
    