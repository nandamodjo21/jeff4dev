<script setup lang="ts">
import LoadingSpinner from "./components/LoadingSpinner.vue";
import {defineAsyncComponent} from "vue";
import * as AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({duration: 1500, delay: 200});
const HeroSection = defineAsyncComponent(() => import('./components/HeroSections.vue'))
const Skill = defineAsyncComponent(() => import('./components/Skill.vue'))
const Services = defineAsyncComponent(() => import('./components/Service.vue'))
const Projects = defineAsyncComponent(() => import('./components/Projects.vue'))
const Contacts = defineAsyncComponent(() => import('./components/Contacts.vue'))
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))
const backtoTop = defineAsyncComponent(() => import('./components/BackToTop.vue'))
</script>

<template>
<div class="min-h-screen">

  <Suspense>
    <template #default>
      <div class="bg-primary2">
        <HeroSection />
        <Skill/>
        <Services />
        <Projects />
        <Contacts />
        <Footer />
        <backtoTop />
      </div>
    </template>
    <template #fallback>
      <div class="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    </template>
  </Suspense>

</div>
</template>

<style scoped>
</style>
