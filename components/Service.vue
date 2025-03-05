<script setup lang="ts">
  import {ref} from "vue";

  const services = ref([
    {
      id:1,
      icon:'https://img.icons8.com/ios-filled/100/google-code.png',
      name: 'Web Development',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage",
    },
    {
      id:2,
      icon:'https://img.icons8.com/external-vectorslab-glyph-vectorslab/100/external-Technical-Writing-mobile-app-development-vectorslab-glyph-vectorslab.png',
      name: 'Technical Writing',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage",
    },
    {
      id:3,
      icon:'https://img.icons8.com/?size=80&id=Zg4OwWHTmRpJ&format=png',
      name: 'Mobile Development',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage",
    },
    {
      id:4,
      icon:'https://img.icons8.com/ios-filled/100/email-open.png',
      name: 'Web Development',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage",
    },
    {
      id:5,
      icon:'https://img.icons8.com/ios-filled/100/windows10-personalization.png',
      name: 'Graphic Design',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage",
    },
    {
      id:6,
      icon:'https://img.icons8.com/ios-filled/100/web-design.png',
      name: 'Graphic Design',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage",
    },
  ])
</script>

<template>
<section id="services" class="text-white mt-20">
  <h2 class="text-4xl font-bold mb-4 text-black text-center" data-aos="fade-up">My Services</h2>
  <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
    <div class="px-[12px] mb-[24px]" data-aos="fade-up" v-for="element in services" :key="element.id">
      <div class="mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] bg-white">
        <div class="mt-[30px] flex justify-center relative">
        <div class="mt-[-7px] p-[20px] relative bg-[#fff] rounded-[50%]">
          <span class="h-[60px] w-[60px] m-auto border-[1px] border-solid border-[#111a24] absolute top-[8px] left-[8px] rounded-[50%] inline-block z-[5]"></span>
          <img :src="element.icon" alt="services" class="h-[35px] w-[35px] relative z-[1]"/>
        </div>
        </div>
        <div class="p-[30px]">
          <h3 class="uppercase font-semibold text-primary text-base">{{element.name}}</h3>
          <p class="text-[14px] leading-[20px] text-gray-500 tracking-[0.03rem]">{{element.description}}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>