<script setup lang="ts">
import {ref} from "vue"
const Education = ref([
  {
    id: 1,
    degree: 'Elementary School',
    school: 'SDN 3 MOOTILANGO',
    duration : ' 2008 - 2013'
  },
  {
    id: 2,
    degree: 'Junio High School',
    school: 'MTS AL-MUHAJIRIN PARUNGI',
    duration : '2013 - 2016'
  },{
    id: 3,
    degree: 'Senior High School',
    school: 'MA MUHAMMADIYAH BOLIYOHUTO',
    duration : '2016 - 2019'
  },
  {
    id: 4,
    degree: 'Higher Education',
    school: 'POLITEKNIK GORONTALO',
    duration : '2020 - 2023'
  }
])
</script>

<template>
  <div class="w-full">


  <h2 class="text-4xl font-bold mb-4 text-center" data-aos="fade-left">Education</h2>
  <div class="space-y-16 py-14">
    <div class="space-y-16 py-14">
      <div v-for="element in Education" :key="element.id" data-aos="fade-left" class="flex items-center rounded-xl bg-white/75">
        <div class="w-1/4">
          <img src="https://img.icons8.com/ios-glyphs/60/graduation-cap--v1.png" alt="graduation">
        </div>
        <div class="w-3/4 pl-4">
          <h3 class="uppercase font-semibold text-primary text-base">{{element.degree}}</h3>
          <p class="text-gray-500">{{element.school}}</p>
          <p class="text-gray-500">{{element.duration}}</p>

        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>

</style>