<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
const scrollPosition = ref(0);
const isVisible = ref(false)
const scrollToTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'})
}
const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  isVisible.value = scrollPosition.value > 300;
}

const scrollPercent = () =>{
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentValue = Math.min((scrollPosition.value / maxScroll) * 100,100);
  return `${scrollPercentValue}%`;
}

onMounted(()=>{
  window.addEventListener('scroll', handleScroll);
})

onUnmounted(()=>{
  window.removeEventListener('scroll', handleScroll);
})
</script>

<template>
<div>
  <div v-if="isVisible" class="fixed bottom-4 z-20 right-4 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-primary" @click="scrollToTop">
^
  </div>
  <div class="fixed top-0 left-0 h-1 bg-primary transition-all duration-300 z-30" :style="{width : scrollPercent}">

  </div>
</div>
</template>
