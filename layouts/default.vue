<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">
      <q-header>
        <q-toolbar class="bg-positive">
          <q-btn
            flat
            dense
            round
            @click="toggleLeftDrawer"
            aria-label="Menu"
            icon="menu"
          />
  
          <q-toolbar-title>
            HR Management Solution
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
  
      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        class="bg-grey-2"
      >

      <q-img class="absolute-top"  style="height: 150px; background: linear-gradient(to bottom, #21BA45, #1976d2);">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="~/assets/images/wbameta.png">
            </q-avatar>
            <div class="text-weight-bold">Elon Musk</div>
            <div>@elonmusk</div>
          </div>
      </q-img>

      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list >
          <!-- <q-item-label header>Essential Links</q-item-label> -->
          <NuxtLink to="/" style="text-decoration: none; color:green">
            <q-item active-class="bg-teal-1 text-orange">
            <q-item-section avatar>
              <q-icon name="grid_view" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboad</q-item-label>
              <!-- <q-item-label caption class="text-orange">Dashboard</q-item-label> -->
            </q-item-section>
          </q-item>
          </NuxtLink>

          <NuxtLink to="users" style="text-decoration: none; color:green">
            <q-item >
            <q-item-section avatar>
              <q-icon name="people_outline" />
            </q-item-section>
            <q-item-section>
              <q-item-label>User Management</q-item-label>
              <!-- <q-item-label caption>User</q-item-label> -->
            </q-item-section>
          </q-item>
          </NuxtLink>

          <NuxtLink to="profile" style="text-decoration: none; color:green">
            <q-item >
            <q-item-section avatar>
              <q-icon name="portrait" />
            </q-item-section>
            <q-item-section>
              <q-item-label>User Profile</q-item-label>
              <!-- <q-item-label caption>User</q-item-label> -->
            </q-item-section>
          </q-item>
          </NuxtLink>

          <NuxtLink to="SignIn" style="text-decoration: none; color:green">
            <q-item >
            <q-item-section avatar>
              <q-icon name="login" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Sign In</q-item-label>
              <!-- <q-item-label caption>Sign Page</q-item-label> -->
            </q-item-section>
          </q-item>
          </NuxtLink>
          
          <!-- <q-item clickable rel="noopener" href="/profile">
            <q-item-section avatar>
              <q-icon name="code" />
            </q-item-section>
            <q-item-section>
              <q-item-label>User Profile</q-item-label>
              <q-item-label caption>github.com/quasarframework</q-item-label>
            </q-item-section>
          </q-item> -->
         
        </q-list>
      </q-scroll-area>
      </q-drawer>
  
      <q-page-container>
            <slot/>
      </q-page-container>
    </q-layout>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'DefaultLayout',
  
    setup () {
      const leftDrawerOpen = ref(false)
  
      function toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
  
      return {
        leftDrawerOpen,
        toggleLeftDrawer
      }
    }
  }
  </script>