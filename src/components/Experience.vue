<script setup lang="ts">
import {ref} from "vue"
const Experience = ref([
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Microsoft',
    duration : 'Mar 2019 - Mar 2020'
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Amazon.com',
    duration : 'May 2020 - May 2022'
  },{
    id: 3,
    title: 'Backend Developer',
    company: 'NVIDIA Corporation',
    duration : 'Aug 2022 - Aug 2024'
  },
  {
    id: 4,
    title: 'AI Engineer',
    company: 'Apple Inc.',
    duration : 'Des 2024 - Now'
  }
])
</script>

<template>
  <h2 class="text-4xl font-bold mb-4 text-center" data-aos="fade-right">Experience</h2>
  <div class="space-y-16 py-14">
    <div class="space-y-16 py-14">
      <div v-for="element in Experience" :key="element.id" data-aos="fade-right" class="flex items-center rounded-xl bg-white/75">
        <div class="w-1/4">
          <img src="https://img.icons8.com/ios-filled/100/lawyer.png" alt="lawyer">
        </div>
        <div class="w-3/4 pl-4">
          <h3 class="uppercase font-semibold text-primary text-base">{{element.title}}</h3>
          <p class="text-gray-500">{{element.company}}</p>
          <p class="text-gray-500">{{element.duration}}</p>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>