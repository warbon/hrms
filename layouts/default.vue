
<script setup lang="ts">
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

const menuList = [
  {
    icon: 'o_dashboard',
    label: 'Dashboard',
    to: '/',
    separator: false,
    subMenu: [],
    expanded: false
  },
  {
    icon: 'o_insights',
    label: 'Analytics',
    to: 'Analytics',
    separator: false,
    subMenu: [],
    expanded: false
  },
  {
    icon: 'o_badge',
    label: 'Employee Management',
    to: 'Users',
    separator: false,
    subMenu: [],
    expanded: false
  },
  {
    icon: 'o_punch_clock',
    label: 'Time and Attendance',
    to: 'Users',
    separator: false,
    subMenu: [],
    expanded: false
  },
  {
    icon: 'o_account_balance_wallet',
    label: 'Payroll Management',
    to: 'Users',
    separator: false,
    subMenu: [
      {
        icon: 'o_account_balance_wallet',
        label: 'Generate Payroll',
        to: 'Users',
        separator: false,
      },
      {
        icon: 'o_account_balance_wallet',
        label: 'Loans',
        to: 'Users',
        separator: false,
      },
      {
        icon: 'o_account_balance_wallet',
        label: 'Government Contributions',
        to: 'Users',
        separator: false,
      }
    ],
    expanded: true
  },
  {
    icon: 'o_calendar_month',
    label: 'Calendar',
    to: 'Users',
    separator: true,
    subMenu: [],
    expanded: false
  },
  {
    icon: 'people_outline',
    label: 'User Management',
    to: 'Users',
    separator: false,
    subMenu: [],
    expanded: false
  },
  {
    icon: 'portrait',
    label: 'User Profile',
    to: 'Profile',
    separator: false,
    subMenu: [],
    expanded: false
  },
  {
    icon: 'settings',
    label: 'Settings',
    to: 'Settings',
    separator: false,
    subMenu: [],
    expanded: false
  },
  {
    icon: 'login',
    label: 'Sign Out',
    to: 'SignIn',
    separator: false,
    subMenu: [],
    expanded: false
  }
]

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script> 


<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-header>
      <q-toolbar class="bg-positive">
        <q-btn flat dense round @click="toggleLeftDrawer" icon="menu" />

        <q-toolbar-title>
          HR Management Solution
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>

      <q-scroll-area style="height: calc(100% - 175px); margin-top: 175px;">
        <q-list padding>
          <!-- <q-item-label header>Essential Links</q-item-label> -->

          <template v-for="(menuItem, index) in menuList" :key="index">
            <template v-if="menuItem.subMenu.length == 0">
              <NuxtLink :to="menuItem.to" style="text-decoration: none;">
                <q-item clickable class="text-positive" active-class="text-bold text-blue-10">
                  <q-item-section avatar>
                    <q-icon :name="menuItem.icon" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ menuItem.label }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator :key="'sep' + index" v-if="menuItem.separator" />
              </NuxtLink>
            </template>
            <template v-else>
              <q-expansion-item expand-separator :icon="menuItem.icon" :label="menuItem.label" class="text-positive">
                <template v-for="(subItem, index) in menuItem.subMenu" :key="index">
                  <NuxtLink :to="subItem.to" style="text-decoration: none;">
                    <q-item dense clickable class="text-positive q-pl-xl q-ml-lg" active-class="text-bold text-blue-10">
                      <!-- <q-item-section avatar>
                        <q-icon :name="subItem.icon" />
                      </q-item-section> -->
                      <q-item-section>
                        <q-item-label>{{ subItem.label }}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-separator :key="'sep' + index" v-if="menuItem.separator" />
                  </NuxtLink>
                </template>
              </q-expansion-item>
            </template>

          </template>

        </q-list>
      </q-scroll-area>

      <div class="absolute-top bg-green-2">
        <q-img>
          <div class="absolute-center bg-transparent text-black">
            <q-avatar size="76px" class="q-mb-sm">
              <img src="~/assets/images/avatar_bgwhite.png">
            </q-avatar>
            <div class="text-weight-bold">Elon Musk</div>
            <div>@elonmusk</div>
          </div>
        </q-img>
        <!-- <q-separator /> -->
      </div>



    </q-drawer>

    <q-page-container class="bg-grey-2">
      <slot />
    </q-page-container>
  </q-layout>
</template>


 
  <!-- <script>
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
  </script>  -->


