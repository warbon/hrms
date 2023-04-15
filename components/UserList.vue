<template>
  <div class="q-py-md">
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

        <q-btn 
          icon="o_person_add"
          color="positive" 
          outline no-caps label="Add New" />
        
        <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
        <q-space />
        <q-input 
          outlined
          dense 
          debounce="300" 
          color="primary" 
          v-model="filter"
          label="Search"
        >
          <template v-slot:append>
            <q-icon name="o_person_search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>
</template>
  
<script>
const columns = [
  { name: 'id', label: 'ID', align: 'center', field: 'id', sortable: true },
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'email', align: 'center', label: 'Email', field: 'email', sortable: true },
  { name: 'status', label: 'Status', field: 'status', sortable: true },
  { name: 'created_at', label: 'Created At', field: 'created_at', sortable: true },
  { name: 'updated_at', label: 'Updated At', field: 'updated_at', sortable: true },
  { name: 'action', label: 'Action', field: 'action' }
]

const rows = [
  {
    id: 159,
    name: 'Wilfredo Arbon',
    email: 'wilfredo_arbon@acware.tech',
    status: 'Active',
    created_at: '12/12/2022',
    updated_at: '12/12/2022',
    action: 'edit'
  },
  {
    id: 159,
    name: 'Wilfredo Arbon',
    email: 'wilfredo_arbon@acware.tech',
    status: 'Active',
    created_at: '12/12/2022',
    updated_at: '12/12/2022',
    action: 'edit'
  },
  {
    id: 159,
    name: 'Wilfredo Arbon',
    email: 'wilfredo_arbon@acware.tech',
    status: 'Active',
    created_at: '12/12/2022',
    updated_at: '12/12/2022',
    action: 'edit'
  },
  {
    id: 159,
    name: 'Wilfredo Arbon',
    email: 'wilfredo_arbon@acware.tech',
    status: 'Active',
    created_at: '12/12/2022',
    updated_at: '12/12/2022',
    action: 'edit'
  },
  {
    id: 159,
    name: 'Wilfredo Arbon',
    email: 'wilfredo_arbon@acware.tech',
    status: 'Active',
    created_at: '12/12/2022',
    updated_at: '12/12/2022',
    action: 'edit'
  },
  {
    id: 159,
    name: 'Wilfredo Arbon',
    email: 'wilfredo_arbon@acware.tech',
    status: 'Active',
    created_at: '12/12/2022',
    updated_at: '12/12/2022',
    action: 'edit'
  },
  {
    id: 159,
    name: 'Wilfredo Arbon',
    email: 'wilfredo_arbon@acware.tech',
    status: 'Active',
    created_at: '12/12/2022',
    updated_at: '12/12/2022',
    action: 'edit'
  },
  {
    id: 159,
    name: 'Wilfredo Arbon',
    email: 'wilfredo_arbon@acware.tech',
    status: 'Active',
    created_at: '12/12/2022',
    updated_at: '12/12/2022',
    action: 'edit'
  },
  {
    id: 159,
    name: 'Wilfredo Arbon',
    email: 'wilfredo_arbon@acware.tech',
    status: 'Active',
    created_at: '12/12/2022',
    updated_at: '12/12/2022',
    action: 'edit'
  },
  {
    id: 159,
    name: 'Wilfredo Arbon',
    email: 'wilfredo_arbon@acware.tech',
    status: 'Active',
    created_at: '12/12/2022',
    updated_at: '12/12/2022',
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
  