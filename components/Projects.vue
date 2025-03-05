<script setup lang="ts">
import {ref} from "vue";

const projects = ref([
  {
    id: 1,
    image: '/project1.jpg',
    title: 'Project 1',
    category: 'Web App',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard',
    gitURL: '',
    webURL:''
  },
  {
    id: 2,
    image: '/project2.jpg',
    title: 'Project 2',
    category: 'Web App',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard',
    gitURL: '',
    webURL:''
  },{
    id: 3,
    image: '/project3.jpg',
    title: 'Project 3',
    category: 'Mobile App',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard',
    gitURL: '',
    webURL:''
  },{
    id: 1,
    image: '/project4.jpg',
    title: 'Project 4',
    category: 'Mobile App',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard',
    gitURL: '',
    webURL:''
  }
])
</script>

<template>
<section id="projects">
  <h2 class="text-4xl font-bold mb-4 text-black text-center" data-aos="fade-up">My Projects</h2>
  <div class="py-8 xl:px-16 px-4 sm:py-16 space-y-12 grid grid-cols-1 pt-10">
    <div data-aos="fade-up" v-for="element in projects" class="flex flex-col md:flex-row md:justify-between rounded-3xl bg-white mb-6" :key="element.id">
      <img :src="element.image" alt="project img"
           class="w-full max-w-[400px] aspect-[16/9] rounded-lg object-cover"/>

      <div class="flex flex-col justify-start p-6 space-y-4">
        <span class="bg-primary2 w-28 text-center p-2 rounded-3xl text-black">{{element.category}}</span>
        <h3 class="uppercase font-semibold text-primary text-base">{{element.title}}</h3>
        <p class="text-[14px] leading-[20px] text-gray-500 tracking-[0.03rem]">{{element.description}}</p>

        <div class="flex items-center gap-2 pt-4 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
          <button class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
      <span class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent">
      </span>
            <span class="relative flex items-center justify-center"><a :href="element.webURL">Live Preview</a></span>
          </button>
          <button class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
            <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
              <a :href="element.gitURL" class="pl-2 text-primary">Code Source</a>
            </div>
          </button>
        </div>
      </div>

    </div>
  </div>

</section>
</template>