<script setup lang="ts">

import {ref} from 'vue'
const isMenuOpen = ref(false)
const Menu = ref([
  {name: 'Service', href:"#services"},
  {name: 'Project', href:"#projects"},
  {name: 'Contact', href:"#contacts"},
])


const scrollToSection = (href:string) => {
  isMenuOpen.value = false; // close menu on mobile after clicking a link
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({behavior: 'smooth'});
  }
}
</script>

<template>
  <header class="max-w-full z-20">
    <nav class="flex border-b-2 border-b-primary3 items-center relative p-3 justify-between md:h-16 h-28 mx-auto md:px-4 container flex-wrap md:flex-nowrap">
      <div class="text-3xl font-bold flex text-primary">
        LOGO
      </div>

<!--      mobile button -->
      <div class="md:hidden z-30">
        <button class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
          <span v-if="isMenuOpen" class="text-5xl">
            <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="delete-sign" width="50" height="50"/>
          </span>
          <span v-else class="text-5xl">
            <img src="https://img.icons8.com/ios-filled/100/menu--v6.png" alt="delete-sign" width="50" height="50"/>
          </span>
        </button>
      </div>

<!--      responsive menu -->
      <div :class="[
          'fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative md:bg-transparent md:flex md:justify-between md:flex-row md:space-x-5',
          isMenuOpen ? 'block' : 'hidden'
      ]">

        <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 font-medium">
          <li v-for="item in Menu" :key="item.name">
            <a :href="item.href" class="block transition hover:text-primary ease-linear text-2xl md:text-sm lg:text-lg text-white md:text-black" @click="scrollToSection(item.href)">
              {{item.name}}
            </a>
          </li>
        </ul>

      </div>
    </nav>
  </header>
</template>